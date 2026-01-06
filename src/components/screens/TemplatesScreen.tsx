import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { TemplateCard } from "../ui/TemplateCard";
import { campusTemplates } from "../../data/campusTemplates";

interface TemplatesScreenProps {
  selectedTemplate: string | null;
  onSelectTemplate: (id: string) => void;
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

export function TemplatesScreen({
  selectedTemplate,
  onSelectTemplate,
  onContinue,
}: TemplatesScreenProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">
          INITIALIZE YOUR ROUTINE
        </h1>
        <p className="text-grey-400">
          Start fresh or choose a high-performance template built by operators.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
      >
        {campusTemplates.map((template) => (
          <motion.div key={template.id} variants={itemVariants}>
            <TemplateCard
              template={template}
              selected={selectedTemplate === template.id}
              onSelect={() => onSelectTemplate(template.id)}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="flex justify-center">
        <Button
          onClick={onContinue}
          size="lg"
          disabled={!selectedTemplate}
        >
          Continue
        </Button>
      </motion.div>
    </motion.div>
  );
}
