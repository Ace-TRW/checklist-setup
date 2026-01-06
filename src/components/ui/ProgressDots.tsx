import { cn } from "../../lib/cn";

interface ProgressDotsProps {
  current: number;
  total: number;
}

export function ProgressDots({ current, total }: ProgressDotsProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }, (_, i) => i + 1).map((step) => (
        <div
          key={step}
          className={cn(
            "h-1.5 rounded-full transition-all duration-300",
            step === current
              ? "w-6 bg-primary"
              : step < current
              ? "w-1.5 bg-primary/50"
              : "w-1.5 bg-grey-700"
          )}
        />
      ))}
    </div>
  );
}
