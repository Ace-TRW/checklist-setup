import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { TaskRow } from "../ui/TaskRow";
import { mockLegacyTasks } from "../../data/mockLegacyTasks";
import { ArrowRight, Flame } from "lucide-react";

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
  const totalStreakDays = mockLegacyTasks
    .filter((t) => selectedTasks.has(t.id))
    .reduce((acc, t) => acc + t.streak, 0);

  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-2xl font-bold text-white text-center mb-2"
      >
        Restore Your Habits
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.05 }}
        className="text-grey-500 text-sm text-center mb-6"
      >
        We found tasks from your history
      </motion.p>

      {/* Stats */}
      {selectedCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-6 mb-6 py-3 px-5 rounded-xl bg-white/[0.02] border border-white/5"
        >
          <div className="text-center">
            <p className="text-xl font-bold text-white">{selectedCount}</p>
            <p className="text-xs text-grey-500">Selected</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <div className="flex items-center gap-1">
              <p className="text-xl font-bold text-streak-fire">{totalStreakDays}</p>
              <Flame className="w-4 h-4 text-streak-fire" />
            </div>
            <p className="text-xs text-grey-500">Streak Days</p>
          </div>
        </motion.div>
      )}

      {/* Task List */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full rounded-xl border border-white/5 overflow-hidden mb-6"
      >
        <div className="max-h-[200px] overflow-y-auto">
          {mockLegacyTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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

      {/* Footer */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-between gap-4 w-full"
      >
        <button
          onClick={onSelectAll}
          className="text-sm text-grey-500 hover:text-white transition-colors cursor-pointer"
        >
          Select All ({totalCount})
        </button>

        <Button onClick={onContinue}>
          {selectedCount > 0 ? "Continue" : "Skip"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </motion.div>
    </div>
  );
}
