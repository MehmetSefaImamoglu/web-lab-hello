import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
    size?: ButtonSize
    children: React.ReactNode
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: ButtonProps) {
    // Tüm varyantlarda ortak class'lar
    const base = [
        'inline-flex items-center justify-center font-medium rounded-lg',
        'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
    ].join(' ')

    // 4 renk varyantı — her birinde dark mode da var
    const variants: Record<ButtonVariant, string> = {
        primary: [
            'bg-blue-800 text-white',
            'hover:bg-blue-600 focus:ring-blue-500',
            'dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-400',
        ].join(' '),
        secondary: [
            'bg-gray-200 text-gray-800',
            'hover:bg-gray-300 focus:ring-gray-400',
            'dark:bg-gray-700 dark:text-gray-200',
            'dark:hover:bg-gray-600 dark:focus:ring-gray-500',
        ].join(' '),
        danger: [
            'bg-red-600 text-white',
            'hover:bg-red-700 focus:ring-red-500',
            'dark:bg-red-700 dark:hover:bg-red-600 dark:focus:ring-red-400',
        ].join(' '),
        ghost: [
            'bg-transparent text-gray-700',
            'hover:bg-gray-100 focus:ring-gray-400',
            'dark:text-gray-300 dark:hover:bg-gray-800',
        ].join(' '),
    }

    // 3 boyut varyantı
    const sizes: Record<ButtonSize, string> = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    }

    return (
        <button
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
