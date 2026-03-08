interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const TextAreaField = ({
  error,
  className,
  ...props
}: TextAreaProps) => (
  <div className="w-full">
    <textarea
      {...props}
      className={`bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light outline-none focus:border-primary-color transition-all min-h-[150px] resize-y ${className}`}
    />
    {error && (
      <div aria-live="polite" className="text-sm text-red-500 mt-1">
        {error}
      </div>
    )}
  </div>
);
