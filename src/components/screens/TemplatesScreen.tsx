import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { TemplateCard } from "../ui/TemplateCard";
import { campusTemplates } from "../../data/campusTemplates";
import { ArrowRight } from "lucide-react";

interface TemplatesScreenProps {
  selectedTemplate: string | null;
  onSelectTemplate: (id: string) => void;
  onContinue: () => void;
}

export function TemplatesScreen({
  selectedTemplate,
  onSelectTemplate,
  onContinue,
}: TemplatesScreenProps) {
  const selectedTemplateData = campusTemplates.find(
    (t) => t.id === selectedTemplate
  );

  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-2xl font-bold text-white text-center mb-2"
      >
        Choose Your Campus
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.05 }}
        className="text-grey-500 text-sm text-center mb-8"
      >
        Start with a template or build from scratch
      </motion.p>

      {/* Template Grid */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mb-8"
      >
        {campusTemplates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 + index * 0.03 }}
          >
            <TemplateCard
              template={template}
              selected={selectedTemplate === template.id}
              onSelect={() => onSelectTemplate(template.id)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full pt-4 border-t border-white/5"
      >
        <div className="text-sm text-grey-500">
          {selectedTemplate ? (
            <span>
              <span className="text-white font-medium">{selectedTemplateData?.name}</span>
              {selectedTemplateData?.taskCount ? ` · ${selectedTemplateData.taskCount} tasks` : ''}
            </span>
          ) : (
            'Select a template'
          )}
        </div>

        <Button onClick={onContinue} disabled={!selectedTemplate}>
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </motion.div>
    </div>
  );
}
