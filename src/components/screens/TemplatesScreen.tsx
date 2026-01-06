import { motion, AnimatePresence } from "framer-motion";
import { TemplateCard } from "../ui/TemplateCard";
import { campusTemplates } from "../../data/campusTemplates";
import { ArrowRight, Layers } from "lucide-react";

interface TemplatesScreenProps {
  expandedTemplates: Set<string>;
  selectedPresetTasks: Set<string>;
  onToggleTemplateExpansion: (id: string) => void;
  onTogglePresetTask: (taskId: string) => void;
  onSelectAllPresetTasks: (templateId: string) => void;
  onContinue: () => void;
}

export function TemplatesScreen({
  expandedTemplates,
  selectedPresetTasks,
  onToggleTemplateExpansion,
  onTogglePresetTask,
  onSelectAllPresetTasks,
  onContinue,
}: TemplatesScreenProps) {
  const totalSelectedTasks = selectedPresetTasks.size;
  const hasBlankExpanded = expandedTemplates.has("blank");

  return (
    <div className="flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.04] mb-4">
          <Layers className="w-6 h-6 text-grey-400" strokeWidth={1.5} />
        </div>
        <h1 className="font-display text-2xl font-bold text-white mb-2 uppercase tracking-wide">
          Initialize Your Routine
        </h1>
        <p className="text-grey-500 text-sm">
          Mix and match tasks from any preset
        </p>
      </motion.div>

      {/* Template List - scrollable area */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="space-y-3 mb-8 max-h-[400px] overflow-y-auto pr-1"
      >
        <AnimatePresence mode="sync">
          {campusTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + index * 0.05 }}
              layout
            >
              <TemplateCard
                template={template}
                expanded={expandedTemplates.has(template.id)}
                selectedTasks={selectedPresetTasks}
                onExpand={() => onToggleTemplateExpansion(template.id)}
                onToggleTask={onTogglePresetTask}
                onSelectAll={() => onSelectAllPresetTasks(template.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-between gap-4 pt-6 border-t border-white/[0.04]"
      >
        <div className="text-sm text-grey-500">
          {totalSelectedTasks > 0 ? (
            <span>
              <span className="text-white font-medium">{totalSelectedTasks}</span>
              <span className="text-grey-500"> task{totalSelectedTasks !== 1 ? "s" : ""} selected</span>
            </span>
          ) : hasBlankExpanded ? (
            <span className="text-grey-400">Starting blank</span>
          ) : (
            <span className="text-grey-500">Expand a preset to select tasks</span>
          )}
        </div>

        <motion.button
          onClick={onContinue}
          disabled={totalSelectedTasks === 0 && !hasBlankExpanded}
          whileHover={totalSelectedTasks > 0 || hasBlankExpanded ? { scale: 1.02 } : undefined}
          whileTap={totalSelectedTasks > 0 || hasBlankExpanded ? { scale: 0.98 } : undefined}
          className="btn-primary h-11 px-6 rounded-xl font-semibold text-sm flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {hasBlankExpanded && totalSelectedTasks === 0 ? "Continue" : totalSelectedTasks > 0 ? `Add Selected (${totalSelectedTasks})` : "Continue"}
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </div>
  );
}
