import React from "react";

type AlertVariant = "info" | "success" | "warning" | "error";

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const variantClasses: Record<
  AlertVariant,
  { container: string; title: string; icon: string }
> = {
  info: {
    container: "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800",
    title: "text-blue-800 dark:text-blue-200",
    icon: "ℹ️",
  },
  success: {
    container: "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800",
    title: "text-green-800 dark:text-green-200",
    icon: "✅",
  },
  warning: {
    container: "bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800",
    title: "text-amber-800 dark:text-amber-200",
    icon: "⚠️",
  },
  error: {
    container: "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800",
    title: "text-red-800 dark:text-red-200",
    icon: "❌",
  },
};

export default function Alert({
  variant = "info",
  title,
  children,
  dismissible = false,
  onDismiss,
}: AlertProps) {
  const styles = variantClasses[variant];

  return (
    <div
      role="alert"
      className={`flex gap-3 rounded-lg border p-4 ${styles.container}`}
    >
      <span aria-hidden="true" className="text-xl shrink-0">
        {styles.icon}
      </span>
      <div className="flex-1 min-w-0">
        {title && (
          <p className={`font-semibold text-sm mb-1 ${styles.title}`}>{title}</p>
        )}
        <div className={`text-sm ${styles.title} opacity-90`}>{children}</div>
      </div>
      {dismissible && onDismiss && (
        <button
          onClick={onDismiss}
          className={`shrink-0 text-lg leading-none ${styles.title} opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-1 rounded`}
          aria-label="Bildirimi kapat"
        >
          ×
        </button>
      )}
    </div>
  );
}
