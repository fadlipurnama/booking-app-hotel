import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | string[] | null;
}

export const CheckboxField = ({
  label,
  error,
  className,
  ...props
}: CheckboxProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center">
        <input
          type="checkbox"
          className={clsx(
            "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500",
            { "border-red-500": error && error.length > 0 },
            className,
          )}
          {...props}
        />
        <label className="ms-2 text-sm font-medium text-gray-900 capitalize">
          {label}
        </label>
      </div>

      {/* Area Pesan Error yang Dinamis */}
      <div aria-live="polite" aria-atomic="true" className="min-h-[1.25rem]">
        {error && error.length > 0 && (
          <span className="text-xs text-red-500 font-medium">
            {error} {/* Ambil pesan pertama dari array */}
          </span>
        )}
      </div>
    </div>
  );
};
