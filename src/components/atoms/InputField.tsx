interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const InputField = ({ error, className, ...props }: InputProps) => (
  <div className="w-full">
    <input
      {...props}
      className={`bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light outline-none focus:border-primary-color transition-colors ${className}`}
    />
    {error && (
      <div aria-live="polite" className="text-sm text-red-500 mt-2">
        {error}
      </div>
    )}
  </div>
);

// Lakukan hal yang sama untuk Textarea