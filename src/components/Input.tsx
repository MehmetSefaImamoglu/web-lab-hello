import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    helpText?: string
    id: string
}

export default function Input({
    label,
    type = 'text',
    error,
    helpText,
    id,
    className = '',
    ...props
}: InputProps) {
    // Temel input class'ları
    const baseInput = [
        'w-full px-3 py-2 rounded-lg border transition-colors',
        'focus:outline-none focus:ring-2',
        'dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400',
    ].join(' ')

    // Hata varsa kırmızı, yoksa normal mavi kenarlık
    const stateClasses = error
        ? 'border-red-500 focus:ring-red-500 dark:border-red-400'
        : 'border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-400'

    // Disabled ise soluk arka plan
    const disabledClasses = props.disabled
        ? 'bg-gray-100 cursor-not-allowed dark:bg-gray-700 opacity-60'
        : 'bg-white dark:bg-gray-800'

    return (
        <div className="space-y-1">
            {/* Label */}
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    {label}
                </label>
            )}

            {/* Input */}
            <input
                id={id}
                type={type}
                className={`${baseInput} ${stateClasses} ${disabledClasses} ${className}`}
                aria-describedby={
                    error ? `${id}-error` : helpText ? `${id}-help` : undefined
                }
                aria-invalid={error ? true : undefined}
                {...props}
            />

            {/* Hata mesajı — role="alert" ile ekran okuyucuya anında bildirilir */}
            {error && (
                <p id={`${id}-error`} role="alert" className="text-sm text-red-600 dark:text-red-400">
                    {error}
                </p>
            )}

            {/* Yardım metni — hata yokken gösterilir */}
            {helpText && !error && (
                <p id={`${id}-help`} className="text-sm text-gray-500 dark:text-gray-400">
                    {helpText}
                </p>
            )}
        </div>
    )
}
