"use client";

import { useState, useCallback } from "react";
import Cropper, { Area } from "react-easy-crop";
import { CloudUpload, X, Check } from "lucide-react";
import { getCroppedImg } from "@/lib/utils/getCroppedImg";
import { Button } from "../atoms/Button";
import Image from "next/image";
import { AlertMessage } from "../atoms/AlertMessage";
import { BarLoader } from "react-spinners";

import { useUploadStore } from "@/lib/store/useUploadStore";
import { registerImage } from "@/lib/actions/image-actions";

interface ImageUploadProps {
  name: string;
  message?: string;
  aspect?: number;
}

export const ImageUpload = ({
  name,
  aspect = 16 / 9,
  message,
}: ImageUploadProps) => {
  const [image, setImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string>("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  // Ambil fungsi & state dari Zustand
  const { uploadImage, deleteImage, isPending, error, clearError } =
    useUploadStore();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name); // Simpan nama file asli di sini
      clearError(); // Bersihkan error lama kalau ada

      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => setImage(reader.result as string);
    }
  };

  const onCropComplete = useCallback((_: Area, pixels: Area) => {
    setCroppedAreaPixels(pixels);
  }, []);

  const handleSaveCrop = async () => {
    if (image && croppedAreaPixels) {
      const blob = await getCroppedImg(image, croppedAreaPixels);
      const croppedFile = new File([blob], fileName || "cropped.jpg", {
        type: "image/jpeg",
      });

      // Panggil fungsi upload dari Zustand
      const url = await uploadImage(croppedFile);
      console.log("url :", url);

      if (url) {
        await registerImage(url, "ROOM");
        setCroppedImage(url);
        setImage(null);
      }
    }
  };
  const handleDelete = async () => {
    const success = await deleteImage(croppedImage);
    if (success) setCroppedImage("");
  };

  return (
    <div className="my-3">
      <input type="hidden" name={name} value={croppedImage} />

      {/* 1. Kondisi: Belum ada gambar */}
      {!image && !croppedImage && (
        <EmptyState onChange={onFileChange} error={error} />
      )}

      {/* 2. Kondisi: Sedang Cropping */}
      {image && (
        <CropOverlay
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          setCrop={setCrop}
          setZoom={setZoom}
          onCropComplete={onCropComplete}
          onCancel={() => setImage(null)}
          onSave={handleSaveCrop}
          isPending={isPending}
        />
      )}

      {/* 3. Kondisi: Preview setelah Berhasil */}
      {croppedImage && (
        <ImagePreview
          url={croppedImage}
          fileName={fileName}
          onDelete={handleDelete}
          isPending={isPending}
        />
      )}
      {!croppedImage && message && <AlertMessage type="error" message={message} />}
    </div>
  );
};

// --- SUB-KOMPONEN ---
const EmptyState = ({
  onChange,
  error,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
}) => (
  <label className="flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 p-4 text-center">
    <CloudUpload className="w-10 h-10 text-gray-400" />
    <span className="mt-2 font-bold text-gray-500">Selected Image</span>
    {error ? (
      <AlertMessage message={error} type="error" />
    ) : (
      <span className="mt-2 text-sm text-gray-500">
        SVG, PNG, JPG (Max 4MB)
      </span>
    )}
    <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={onChange}
    />
  </label>
);

interface CropOverlayProps {
  image: string;
  crop: { x: number; y: number };
  zoom: number;
  aspect: number;
  setCrop: (crop: { x: number; y: number }) => void;
  setZoom: (zoom: number) => void;
  onCropComplete: (percentage: Area, pixels: Area) => void;
  onCancel: () => void;
  onSave: () => Promise<void>;
  isPending: boolean;
}

const CropOverlay = ({
  image = "",
  crop,
  zoom,
  aspect,
  setCrop,
  setZoom,
  onCropComplete,
  onCancel,
  onSave,
  isPending,
}: CropOverlayProps) => (
  <div className="fixed inset-0 z-50 bg-black p-4 flex flex-col">
    <div className="relative flex-1">
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={aspect}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
    </div>
    <div className="flex justify-between items-center bg-white p-4 mt-2 rounded-lg w-full">
      {isPending ? (
        <BarLoader className="min-w-full" />
      ) : (
        <>
          <input
            type="range"
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-1/2"
          />
          <div className="flex gap-2">
            <Button variant="ghost" onClick={onCancel}>
              <X size={18} /> Batal
            </Button>
            <Button onClick={onSave}>
              <Check size={18} /> Simpan
            </Button>
          </div>
        </>
      )}
    </div>
  </div>
);

interface ImagePreviewProps {
  url: string;
  fileName: string | null;
  onDelete: () => Promise<void>;
  isPending: boolean;
}

const ImagePreview = ({
  url,
  fileName,
  onDelete,
  isPending,
}: ImagePreviewProps) => (
  <>
    <Image
      src={url}
      alt="Preview"
      width={640}
      height={360}
      unoptimized
      className="object-cover rounded-md my-2"
    />
    <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-sm border border-gray-200">
      {isPending ? (
        <BarLoader className="min-w-full" />
      ) : (
        <>
          <div className="bg-blue-100 p-1.5 rounded">
            <CloudUpload size={14} className="text-blue-600" />
          </div>
          <span className="text-xs font-medium text-gray-600 truncate flex-1">
            {fileName}
          </span>
          <Button
            type="button"
            onClick={onDelete}
            variant="warn"
            size="sm"
            className="text-sm text-red-500"
          >
            Remove
          </Button>
        </>
      )}
    </div>
  </>
);
