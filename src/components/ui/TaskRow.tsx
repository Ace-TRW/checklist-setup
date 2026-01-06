import { cn } from "../../lib/cn";
import { motion } from "framer-motion";
import { Flame, Check, Plus } from "lucide-react";
import type { LegacyTask } from "../../data/mockLegacyTasks";

interface TaskRowProps {
  task: LegacyTask;
  selected: boolean;
  onToggle: () => void;
}

export function TaskRow({ task, selected, onToggle }: TaskRowProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ backgroundColor: selected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.03)" }}
      className={cn(
        "task-row w-full flex items-center justify-between px-4 py-3.5 cursor-pointer",
        "border-b border-white/[0.03] last:border-b-0",
        selected && "!bg-primary/[0.06] !border-primary/20"
      )}
    >
      <div className="flex items-center gap-3">
        {/* Selection indicator */}
        <div
          className={cn(
            "w-5 h-5 rounded-lg flex items-center justify-center transition-all duration-200",
            selected
              ? "bg-primary shadow-sm shadow-primary/30"
              : "bg-white/[0.04] border border-white/[0.08]"
          )}
        >
          {selected ? (
            <Check className="w-3 h-3 text-neutral" strokeWidth={3} />
          ) : (
            <Plus className="w-3 h-3 text-grey-500" strokeWidth={2} />
          )}
        </div>

        {/* Title */}
        <span
          className={cn(
            "text-sm font-medium transition-colors duration-200",
            selected ? "text-white" : "text-grey-400"
          )}
        >
          {task.title}
        </span>
      </div>

      {/* Streak badge */}
      {task.streak > 0 && (
        <div
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all duration-200",
            selected
              ? "bg-streak-fire/15"
              : "bg-white/[0.03]"
          )}
        >
          <span
            className={cn(
              "text-xs font-semibold",
              selected ? "text-streak-fire" : "text-grey-400"
            )}
          >
            {task.streak}
          </span>
          <Flame
            className={cn(
              "w-3.5 h-3.5",
              selected ? "text-streak-fire" : "text-grey-500"
            )}
          />
        </div>
      )}
    </motion.button>
  );
}
