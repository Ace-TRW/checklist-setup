import { cn } from "../../lib/cn";
import { type ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.01 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={cn(
        "relative font-semibold rounded-xl transition-all duration-200 cursor-pointer inline-flex items-center justify-center",
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none",
        // Size variants
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-5 py-2.5 text-sm",
        size === "lg" && "px-6 py-3 text-base",
        // Style variants
        variant === "primary" && [
          "bg-gradient-to-r from-primary via-primary to-primary-dark text-neutral font-bold",
          "shadow-lg shadow-primary/20",
          "hover:shadow-xl hover:shadow-primary/25",
          "border border-primary-light/30",
        ],
        variant === "secondary" && [
          "bg-grey-800/50 border border-grey-secondary text-white",
          "hover:bg-grey-800 hover:border-grey-600",
        ],
        variant === "ghost" && [
          "text-grey-400 hover:text-white bg-transparent border-none",
          "hover:bg-grey-800/50",
        ],
        className
      )}
      disabled={disabled}
      {...(props as any)}
    >
      <span className="relative flex items-center">{children}</span>
    </motion.button>
  );
}
