import React from 'react'

type AlertVariant = 'info' | 'success' | 'warning' | 'error'

interface AlertProps {
    children: React.ReactNode
    variant?: AlertVariant
    title?: string
    dismissible?: boolean
    onDismiss?: () => void
}

export default function Alert({
    children,
    variant = 'info',
    title,
    dismissible = false,
    onDismiss,
}: AlertProps) {
    // 4 renk varyantı — sol kenarlık + arka plan + metin rengi
    const variants: Record<AlertVariant, string> = {
        info: [
            'bg-blue-50 border-blue-500 text-blue-800',
            'dark:bg-blue-950 dark:border-blue-400 dark:text-blue-200',
        ].join(' '),
        success: [
            'bg-green-50 border-green-500 text-green-800',
            'dark:bg-green-950 dark:border-green-400 dark:text-green-200',
        ].join(' '),
        warning: [
            'bg-amber-50 border-amber-500 text-amber-800',
            'dark:bg-amber-950 dark:border-amber-400 dark:text-amber-200',
        ].join(' '),
        error: [
            'bg-red-50 border-red-500 text-red-800',
            'dark:bg-red-950 dark:border-red-400 dark:text-red-200',
        ].join(' '),
    }

    return (
        // role="alert" → ekran okuyucu bu bölgeyi anında sesli okur
        <div
            role="alert"
            className={`border-l-4 rounded-r-lg p-4 ${variants[variant]}`}
        >
            <div className="flex justify-between items-start gap-3">
                <div className="flex-1">
                    {/* Opsiyonel başlık */}
                    {title && (
                        <p className="font-semibold mb-1">{title}</p>
                    )}
                    <p className="text-sm">{children}</p>
                </div>

                {/* Kapatma butonu — yalnızca dismissible=true ise görünür */}
                {dismissible && (
                    <button
                        onClick={onDismiss}
                        className="shrink-0 opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-current rounded"
                        aria-label="Uyarıyı kapat"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    )
}
