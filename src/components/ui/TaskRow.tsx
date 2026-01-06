import { cn } from "../../lib/cn";
import { motion } from "framer-motion";
import { Flame, Plus, Check } from "lucide-react";
import type { LegacyTask } from "../../data/mockLegacyTasks";

interface TaskRowProps {
  task: LegacyTask;
  selected: boolean;
  onToggle: () => void;
}

export function TaskRow({ task, selected, onToggle }: TaskRowProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-3 border-b border-grey-secondary/20 last:border-b-0 transition-all duration-200",
        selected ? "bg-primary/[0.04]" : "hover:bg-grey-800/30"
      )}
    >
      {/* Task info */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <span
          className={cn(
            "text-sm font-medium truncate transition-colors",
            selected ? "text-white" : "text-grey-400"
          )}
        >
          {task.title}
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Streak badge */}
        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-streak-fire/10">
          <Flame className="w-3.5 h-3.5 text-streak-fire" />
          <span className="font-semibold text-xs text-streak-fire">{task.streak}</span>
        </div>

        {/* Toggle button */}
        <motion.button
          onClick={onToggle}
          whileTap={{ scale: 0.9 }}
          className={cn(
            "w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer",
            selected
              ? "bg-primary text-neutral"
              : "border border-grey-600 text-grey-500 hover:border-primary hover:text-primary"
          )}
        >
          {selected ? (
            <Check className="w-3.5 h-3.5" strokeWidth={3} />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
        </motion.button>
      </div>
    </div>
  );
}
