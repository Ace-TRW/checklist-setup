import { motion } from "framer-motion";
import { TaskRow } from "../ui/TaskRow";
import { mockLegacyTasks } from "../../data/mockLegacyTasks";
import { ArrowRight, History } from "lucide-react";

interface RecoveryScreenProps {
  selectedTasks: Set<string>;
  onToggleTask: (id: string) => void;
  onSelectAll: () => void;
  onContinue: () => void;
}

export function RecoveryScreen({
  selectedTasks,
  onToggleTask,
  onSelectAll,
  onContinue,
}: RecoveryScreenProps) {
  const selectedCount = selectedTasks.size;
  const totalCount = mockLegacyTasks.length;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.04] mb-4">
          <History className="w-6 h-6 text-grey-400" strokeWidth={1.5} />
        </div>
        <h1 className="font-display text-2xl font-bold text-white mb-2 uppercase tracking-wide">
          Restore Your Progress
        </h1>
        <p className="text-grey-500 text-sm">
          We found {totalCount} tasks from your history
        </p>
      </motion.div>

      {/* Task List - per-task streaks shown on each row */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full rounded-xl bg-white/[0.01] border border-white/[0.04] overflow-hidden mb-6"
      >
        <div className="max-h-[280px] overflow-y-auto">
          {mockLegacyTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + index * 0.03 }}
            >
              <TaskRow
                task={task}
                selected={selectedTasks.has(task.id)}
                onToggle={() => onToggleTask(task.id)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer - shows task count only, no aggregated streaks */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-between gap-4 pt-4 border-t border-white/[0.04]"
      >
        <motion.button
          onClick={onSelectAll}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-secondary h-10 px-4 rounded-lg text-sm font-medium cursor-pointer"
        >
          {selectedCount === totalCount ? "Deselect All" : `Select All (${totalCount})`}
        </motion.button>

        <motion.button
          onClick={onContinue}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary h-10 px-5 rounded-lg font-semibold text-sm flex items-center gap-2 cursor-pointer"
        >
          {selectedCount > 0 ? `Restore (${selectedCount})` : "Skip"}
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </div>
  );
}
