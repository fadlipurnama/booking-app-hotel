interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  error?: string | string[] | null;
}

export const TextAreaField = ({
  name,
  error,
  className,
  ...props
}: TextAreaProps) => (
  <div className="w-full">
    <textarea
      name={name}
      {...props}
      className={`bg-gray-100 p-3 border border-gray-400 rounded-sm w-full font-light outline-none focus:border-primary-color transition-all min-h-37.5 resize-y ${className}`}
    />
    {error && (
      <div aria-live="polite" className="text-sm text-red-500 mt-1">
        {error}
      </div>
    )}
  </div>
);
