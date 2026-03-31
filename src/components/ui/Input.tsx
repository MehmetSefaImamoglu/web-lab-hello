import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  helpText?: string;
  error?: string;
}

export default function Input({
  id,
  label,
  helpText,
  error,
  className = "",
  ...rest
}: InputProps) {
  const baseClasses =
    "w-full px-3 py-2 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors";

  const borderClasses = error
    ? "border-red-500 focus:ring-red-400"
    : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-transparent";

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`${baseClasses} ${borderClasses} ${className}`}
        {...rest}
      />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
      {!error && helpText && (
        <p className="text-xs text-gray-500 dark:text-gray-400">{helpText}</p>
      )}
    </div>
  );
}
