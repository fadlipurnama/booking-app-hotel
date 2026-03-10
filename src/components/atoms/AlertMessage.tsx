export function AlertMessage({ message }: { message: string }) {
  return (
    <div
      className="p-4 mb-4 text-sm text-solid-text rounded-lg bg-green-50"
      role="alert"
    >
      <div className="font-medium">{message}</div>
    </div>
  );
}


