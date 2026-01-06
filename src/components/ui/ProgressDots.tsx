import { cn } from "../../lib/cn";

interface ProgressDotsProps {
  current: number;
  total: number;
  className?: string;
}

export function ProgressDots({ current, total, className }: ProgressDotsProps) {
  return (
    <div className={cn("flex gap-2 justify-center", className)}>
      {Array.from({ length: total }, (_, i) => i + 1).map((step) => (
        <div
          key={step}
          className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            step === current
              ? "bg-primary w-6"
              : step < current
              ? "bg-primary/50"
              : "bg-grey-600"
          )}
        />
      ))}
    </div>
  );
}
