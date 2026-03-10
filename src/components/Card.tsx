import React from 'react'

type CardVariant = 'elevated' | 'outlined' | 'filled'

interface CardProps {
    title?: string
    children: React.ReactNode
    image?: string
    imageAlt?: string
    footer?: React.ReactNode
    variant?: CardVariant
    className?: string
}

export default function Card({
    title,
    children,
    image,
    imageAlt,
    footer,
    variant = 'elevated',
    className = '',
}: CardProps) {
    // 3 stil varyantı
    const variants: Record<CardVariant, string> = {
        // Gölgeli, hover'da gölge büyür
        elevated: [
            'bg-white dark:bg-gray-800',
            'shadow-md hover:shadow-xl',
        ].join(' '),
        // Kenarlıklı, gölge yok
        outlined: [
            'bg-white dark:bg-gray-800',
            'border border-gray-200 dark:border-gray-700',
        ].join(' '),
        // Dolgulu arka plan
        filled: [
            'bg-gray-100 dark:bg-gray-800',
        ].join(' '),
    }

    return (
        <div
            className={`rounded-xl overflow-hidden transition-shadow duration-300 ${variants[variant]} ${className}`}
        >
            {/* Opsiyonel görsel — sabit yükseklik, orantı korunur */}
            {image && (
                <img
                    src={image}
                    alt={imageAlt ?? ''}
                    className="w-full h-48 object-cover"
                />
            )}

            {/* Kart içeriği */}
            <div className="p-5">
                {title && (
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {title}
                    </h3>
                )}
                <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {children}
                </div>
            </div>

            {/* Opsiyonel footer slot'u */}
            {footer && (
                <div className="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700">
                    {footer}
                </div>
            )}
        </div>
    )
}
