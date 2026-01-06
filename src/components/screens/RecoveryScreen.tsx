import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { TaskRow } from "../ui/TaskRow";
import { mockLegacyTasks } from "../../data/mockLegacyTasks";

interface RecoveryScreenProps {
  selectedTasks: Set<string>;
  onToggleTask: (id: string) => void;
  onSelectAll: () => void;
  onContinue: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function RecoveryScreen({
  selectedTasks,
  onToggleTask,
  onSelectAll,
  onContinue,
}: RecoveryScreenProps) {
  const selectedCount = selectedTasks.size;
  const totalCount = mockLegacyTasks.length;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="text-center mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">
          SOME OF YOUR HABITS WERE PRESERVED
        </h1>
        <p className="text-grey-400">
          We found a partial snapshot of your recurring tasks. Tap any to
          restore it — streaks included.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-base-100 rounded-xl border border-grey-secondary mb-6 max-h-[300px] overflow-y-auto"
      >
        {mockLegacyTasks.map((task) => (
          <TaskRow
            key={task.id}
            task={task}
            selected={selectedTasks.has(task.id)}
            onToggle={() => onToggleTask(task.id)}
          />
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button variant="secondary" onClick={onSelectAll}>
          Restore All ({totalCount})
        </Button>
        <Button onClick={onContinue} size="lg">
          {selectedCount > 0 ? `Done (${selectedCount} selected)` : "Skip"}
        </Button>
      </motion.div>
    </motion.div>
  );
}
