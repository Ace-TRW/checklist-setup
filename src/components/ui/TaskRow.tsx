import { cn } from "../../lib/cn";
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
        "flex items-center justify-between p-4 border-b border-grey-secondary last:border-b-0 transition-colors",
        selected && "bg-base-300/50"
      )}
    >
      <div className="flex items-center gap-3 flex-1">
        <span className="text-white font-medium">{task.title}</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-streak-fire">
          <Flame className="w-4 h-4" />
          <span className="font-semibold text-sm">{task.streak} days</span>
        </div>

        <button
          onClick={onToggle}
          className={cn(
            "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 cursor-pointer",
            selected
              ? "border-primary bg-primary text-neutral"
              : "border-primary text-primary hover:bg-primary/10"
          )}
        >
          {selected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
