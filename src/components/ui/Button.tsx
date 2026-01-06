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
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={cn(
        "relative font-semibold transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        // Size variants
        size === "sm" && "h-9 px-4 text-sm rounded-lg",
        size === "md" && "h-11 px-6 text-sm rounded-xl",
        size === "lg" && "h-12 px-8 text-base rounded-xl",
        // Style variants
        variant === "primary" && [
          "bg-primary text-neutral",
          "hover:bg-primary-light",
          "shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_16px_rgba(201,168,97,0.2)]",
          "hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_8px_24px_rgba(201,168,97,0.3)]",
        ],
        variant === "secondary" && [
          "bg-base-300 text-white border border-white/10",
          "hover:bg-base-300/80 hover:border-white/20",
        ],
        variant === "ghost" && [
          "text-grey-400 hover:text-white hover:bg-white/5",
        ],
        className
      )}
      disabled={disabled}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
