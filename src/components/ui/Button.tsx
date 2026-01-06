import { cn } from "../../lib/cn";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-semibold rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
          // Size variants
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          // Style variants
          variant === "primary" &&
            "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-neutral",
          variant === "secondary" &&
            "border-2 border-grey-secondary text-white bg-transparent hover:border-grey-500",
          variant === "ghost" &&
            "text-grey-500 hover:text-white bg-transparent border-none",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
