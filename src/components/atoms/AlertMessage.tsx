interface AlertProps {
  message: string;
  type?: "success" | "error" | "warning" | "info"; // Tambahkan tipe alert
}

export function AlertMessage({ message, type = "success" }: AlertProps) {
  // 1. Buat pemetaan warna berdasarkan tipe
  const styles = {
    success: "text-green-800 bg-green-50 border-green-200",
    error: "text-red-800 bg-red-50 border-red-200",
    warning: "text-yellow-800 bg-yellow-50 border-yellow-200",
    info: "text-blue-800 bg-blue-50 border-blue-200",
  };

  if (!message) return null; // Jangan muncul kalau gak ada pesan

  return (
    <div
      className={`p-4 mb-4 text-sm rounded-lg border ${styles[type]}`}
      role="alert"
    >
      <div className="font-medium">{message}</div>
    </div>
  );
}