interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  error?: string | string[] | null;
}

export const InputField = ({
  type='text',
  name,
  error,
  className,
  ...props
}: InputProps) => (
  <div className="w-full">
    <input
      name={name}
      type={type}
      {...props}
      className={`bg-gray-100 p-3 border border-gray-400 rounded-sm w-full font-light outline-none focus:border-primary-color transition-colors ${className}`}
    />
    {error && (
      <div aria-live="polite" className="text-sm text-red-500 mt-2">
        {error}
      </div>
    )}
  </div>
);
