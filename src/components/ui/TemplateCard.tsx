import { cn } from "../../lib/cn";
import { motion } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import type { CampusTemplate } from "../../data/campusTemplates";

interface TemplateCardProps {
  template: CampusTemplate;
  expanded: boolean;
  selectedTasks: Set<string>;
  onExpand: () => void;
  onToggleTask: (taskId: string) => void;
  onSelectAll: () => void;
}

export function TemplateCard({
  template,
  expanded,
  selectedTasks,
  onExpand,
  onToggleTask,
  onSelectAll,
}: TemplateCardProps) {
  const isBlank = template.id === "blank";
  const selectedCount = template.tasks.filter((t) => selectedTasks.has(t.id)).length;
  const allSelected = selectedCount === template.tasks.length && template.tasks.length > 0;
  const hasSelections = selectedCount > 0;

  return (
    <motion.div
      layout
      className={cn(
        "template-card rounded-2xl overflow-hidden",
        (expanded || hasSelections) && "selected"
      )}
    >
      {/* Header - clickable to expand/collapse */}
      <motion.button
        onClick={onExpand}
        className="w-full p-5 flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-4">
          {/* Emoji */}
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-200",
              expanded || hasSelections ? "bg-primary/20" : "bg-white/[0.04]",
              isBlank && !expanded && !hasSelections && "border border-dashed border-white/10"
            )}
          >
            {template.emoji}
          </div>

          {/* Text */}
          <div className="text-left">
            <p className={cn(
              "text-base font-semibold uppercase tracking-wide transition-colors duration-200",
              expanded || hasSelections ? "text-white" : "text-grey-300"
            )}>
              {template.name}
            </p>
            <p className="text-sm text-grey-500">
              {isBlank ? "Build your own" : `${template.taskCount} tasks`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Selection badge when collapsed */}
          {!expanded && hasSelections && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30"
            >
              <Check className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
              <span className="text-sm font-semibold text-primary">{selectedCount}</span>
            </motion.div>
          )}

          {/* Expand indicator */}
          {!isBlank && (
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className={cn(
                "w-5 h-5",
                expanded || hasSelections ? "text-primary" : "text-grey-500"
              )} />
            </motion.div>
          )}
        </div>
      </motion.button>

      {/* Expanded task list */}
      {expanded && !isBlank && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/[0.04]"
        >
          {/* Task list */}
          <div className="max-h-[200px] overflow-y-auto">
            {template.tasks.map((task) => {
              const isSelected = selectedTasks.has(task.id);
              return (
                <motion.button
                  key={task.id}
                  onClick={() => onToggleTask(task.id)}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                  className="w-full flex items-center justify-between px-5 py-3 border-b border-white/[0.03] last:border-b-0 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-md flex items-center justify-center transition-all duration-200",
                        isSelected
                          ? "bg-primary shadow-sm shadow-primary/30"
                          : "bg-white/[0.04] border border-white/[0.08]"
                      )}
                    >
                      {isSelected && (
                        <Check className="w-3 h-3 text-neutral" strokeWidth={3} />
                      )}
                    </div>
                    <span className={cn(
                      "text-sm font-medium",
                      isSelected ? "text-white" : "text-grey-400"
                    )}>
                      {task.title}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between gap-3 p-4 border-t border-white/[0.04] bg-white/[0.01]">
            <motion.button
              onClick={onSelectAll}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-sm text-grey-400 hover:text-white transition-colors cursor-pointer"
            >
              {allSelected ? "Deselect All" : "Select All"}
            </motion.button>

            {selectedCount > 0 && (
              <span className="text-sm font-medium text-primary">
                {selectedCount} selected
              </span>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
