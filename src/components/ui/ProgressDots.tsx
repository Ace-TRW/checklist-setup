import { cn } from "../../lib/cn";
import { motion } from "framer-motion";

interface ProgressDotsProps {
  current: number;
  total: number;
  className?: string;
}

export function ProgressDots({ current, total, className }: ProgressDotsProps) {
  return (
    <div className={cn("flex items-center justify-center gap-1.5", className)}>
      {Array.from({ length: total }, (_, i) => i + 1).map((step) => {
        const isActive = step === current;
        const isCompleted = step < current;

        return (
          <motion.div
            key={step}
            className="relative"
            initial={false}
            animate={{ scale: isActive ? 1 : 0.9 }}
            transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
          >
            <div
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                isActive && "w-6 bg-gradient-to-r from-primary to-primary-dark",
                isCompleted && "w-1.5 bg-primary/50",
                !isActive && !isCompleted && "w-1.5 bg-grey-600/40"
              )}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
