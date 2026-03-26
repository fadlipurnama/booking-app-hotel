import { create } from "zustand";
import { type PutBlobResult } from "@vercel/blob";

interface UploadState {
  isPending: boolean;
  error: string | null;
  uploadImage: (file: File) => Promise<string | null>;
  deleteImage: (url: string) => Promise<boolean>;
  clearError: () => void;
}
export const useUploadStore = create<UploadState>((set) => ({
  isPending: false,
  error: null,

  uploadImage: async (file: File) => {
    set({ isPending: true, error: null });
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "PUT",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Gagal mengunggah gambar");
      }

      set({ isPending: false });
      return (data as PutBlobResult).url;
    } catch (e: unknown) {
      if (e instanceof Error) {
        // Di dalam sini, 'e' otomatis punya tipe asli 'Error'
        set({ isPending: false, error: e.message });
      } else {
        // Jika yang dilempar bukan objek Error (misal string)
        set({ isPending: false, error: String(e) });
      }
      return null;
    }
  },

  deleteImage: async (url: string) => {
    set({ isPending: true, error: null });
    try {
      const response = await fetch(`/api/upload/?imageUrl=${url}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Gagal menghapus gambar");

      set({ isPending: false });
      return true;
    } catch (e: unknown) {
      if (e instanceof Error) {
        // Di dalam sini, 'e' otomatis punya tipe asli 'Error'
        set({ isPending: false, error: e.message });
      } else {
        // Jika yang dilempar bukan objek Error (misal string)
        set({ isPending: false, error: String(e) });
      }
      return false;
    }
  },

  clearError: () => set({ error: null }),
}));
