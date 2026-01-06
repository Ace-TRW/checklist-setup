import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { TemplateCard } from "../ui/TemplateCard";
import { campusTemplates } from "../../data/campusTemplates";
import { ArrowRight, Sparkles } from "lucide-react";

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
    <div>
      {/* Header */}
      <div className="text-center mb-6">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-3"
        >
          <span className="badge badge-gold">
            <Sparkles className="w-3 h-3" />
            Choose Template
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="font-display text-2xl sm:text-3xl text-white mb-2"
        >
          Select Your Campus
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-grey-500 text-sm max-w-sm mx-auto"
        >
          Start with a template built for your path, or create your own.
        </motion.p>
      </div>

      {/* Template Grid */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6"
      >
        {campusTemplates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.03 }}
          >
            <TemplateCard
              template={template}
              selected={selectedTemplate === template.id}
              onSelect={() => onSelectTemplate(template.id)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Selection info + CTA */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-grey-secondary/20"
      >
        <div className="text-center sm:text-left">
          {selectedTemplate ? (
            <p className="text-sm">
              <span className="text-grey-500">Selected: </span>
              <span className="text-white font-medium">
                {selectedTemplateData?.name}
              </span>
              {selectedTemplateData && selectedTemplateData.taskCount > 0 && (
                <span className="text-grey-600 ml-1">
                  ({selectedTemplateData.taskCount} tasks)
                </span>
              )}
            </p>
          ) : (
            <p className="text-grey-500 text-sm">Choose a template to continue</p>
          )}
        </div>

        <Button
          onClick={onContinue}
          size="md"
          disabled={!selectedTemplate}
          className="w-full sm:w-auto"
        >
          <span>Continue</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}
