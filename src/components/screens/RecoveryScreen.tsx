import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { TaskRow } from "../ui/TaskRow";
import { mockLegacyTasks } from "../../data/mockLegacyTasks";
import { ArrowRight, History, RotateCcw, Flame } from "lucide-react";

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
    <div>
      {/* Header */}
      <div className="text-center mb-6">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-3"
        >
          <span className="badge badge-success">
            <History className="w-3 h-3" />
            Data Recovery
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="font-display text-2xl sm:text-3xl text-white mb-2"
        >
          Restore Your Habits
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-grey-500 text-sm max-w-sm mx-auto"
        >
          We found tasks from October. Select which to restore with streaks intact.
        </motion.p>
      </div>

      {/* Stats */}
      {selectedCount > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mb-4"
        >
          <div className="flex items-center justify-center gap-8 py-3 px-4 rounded-xl inner-card">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{selectedCount}</p>
              <p className="text-[10px] text-grey-500 uppercase tracking-wider font-medium">Tasks</p>
            </div>
            <div className="w-px h-8 bg-grey-secondary" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5">
                <p className="text-2xl font-bold text-streak-fire">{totalStreakDays}</p>
                <Flame className="w-4 h-4 text-streak-fire" />
              </div>
              <p className="text-[10px] text-grey-500 uppercase tracking-wider font-medium">Streak Days</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Task List */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="rounded-xl border border-grey-secondary/30 overflow-hidden mb-6"
      >
        <div className="max-h-[220px] overflow-y-auto">
          {mockLegacyTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.04 }}
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

      {/* Actions */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        <button
          onClick={onSelectAll}
          className="inline-flex items-center gap-2 px-3 py-2 text-grey-400 hover:text-white transition-colors text-sm font-medium cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Restore All ({totalCount})
        </button>

        <Button onClick={onContinue} size="md" className="w-full sm:w-auto">
          <span>
            {selectedCount > 0
              ? `Continue with ${selectedCount}`
              : "Skip Recovery"}
          </span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}
