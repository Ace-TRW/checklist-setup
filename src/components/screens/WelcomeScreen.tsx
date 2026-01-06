import { motion } from "framer-motion";
import { Rocket, Zap, Smartphone, Shield } from "lucide-react";
import { Button } from "../ui/Button";

interface WelcomeScreenProps {
  onContinue: () => void;
}

const features = [
  { icon: Zap, text: "Instant Sync Architecture" },
  { icon: Smartphone, text: "Standalone Web App" },
  { icon: Shield, text: "Offline-Ready Core" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center"
    >
      <motion.div
        variants={itemVariants}
        className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
      >
        <Rocket className="w-8 h-8 text-primary" />
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-3xl font-bold text-white mb-4"
      >
        CHECKLIST 2.0 IS LIVE
      </motion.h1>

      <motion.p variants={itemVariants} className="text-grey-400 mb-2">
        We deployed the biggest infrastructure upgrade in the history of The
        Real World Checklist.
      </motion.p>

      <motion.p variants={itemVariants} className="text-grey-500 mb-8">
        The old system wasn't built for where we're going. This one is.
      </motion.p>

      <motion.div variants={itemVariants} className="border-t border-grey-secondary my-6" />

      <motion.div variants={itemVariants} className="mb-8">
        <p className="text-grey-400 text-sm mb-4 uppercase tracking-wide">
          What's New
        </p>
        <div className="space-y-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center gap-3 text-white"
            >
              <feature.icon className="w-5 h-5 text-primary" />
              <span>{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="border-t border-grey-secondary my-6" />

      <motion.p variants={itemVariants} className="text-grey-400 mb-6">
        A fresh initialization is required.
      </motion.p>

      <motion.div variants={itemVariants}>
        <Button onClick={onContinue} size="lg">
          Continue
        </Button>
      </motion.div>
    </motion.div>
  );
}
