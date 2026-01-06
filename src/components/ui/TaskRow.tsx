import { cn } from "../../lib/cn";
import { Flame, Check } from "lucide-react";
import type { LegacyTask } from "../../data/mockLegacyTasks";

interface TaskRowProps {
  task: LegacyTask;
  selected: boolean;
  onToggle: () => void;
}

export function TaskRow({ task, selected, onToggle }: TaskRowProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "w-full flex items-center justify-between px-4 py-3 border-b border-white/5 last:border-b-0 cursor-pointer transition-colors",
        selected ? "bg-primary/5" : "hover:bg-white/[0.02]"
      )}
    >
      <div className="flex items-center gap-3">
        {/* Checkbox */}
        <div
          className={cn(
            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
            selected
              ? "bg-primary border-primary"
              : "border-grey-600"
          )}
        >
          {selected && <Check className="w-3 h-3 text-neutral" strokeWidth={3} />}
        </div>

        {/* Title */}
        <span className={cn("text-sm", selected ? "text-white" : "text-grey-400")}>
          {task.title}
        </span>
      </div>

      {/* Streak */}
      {task.streak > 0 && (
        <div className="flex items-center gap-1 text-streak-fire">
          <span className="text-xs font-medium">{task.streak}</span>
          <Flame className="w-3.5 h-3.5" />
        </div>
      )}
    </button>
  );
}
