import { cn } from "../../lib/cn";
import { motion } from "framer-motion";

interface ProgressDotsProps {
  current: number;
  total: number;
}

export function ProgressDots({ current, total }: ProgressDotsProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }, (_, i) => i + 1).map((step) => (
        <motion.div
          key={step}
          initial={false}
          animate={{
            width: step === current ? 24 : 8,
            backgroundColor: step <= current
              ? "var(--color-primary)"
              : "rgba(255, 255, 255, 0.08)",
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "h-2 rounded-full",
            step === current && "shadow-sm shadow-primary/50"
          )}
        />
      ))}
    </div>
  );
}
