import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Copy, Check } from "lucide-react";
import { Button } from "../ui/Button";

interface StandaloneScreenProps {
  onComplete: () => void;
}

const STANDALONE_URL = "checklist.therealworld.ag";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function StandaloneScreen({ onComplete }: StandaloneScreenProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`https://${STANDALONE_URL}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

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
        <Smartphone className="w-8 h-8 text-primary" />
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-2xl font-bold text-white mb-2"
      >
        PRO TIP
      </motion.h1>

      <motion.p variants={itemVariants} className="text-grey-400 mb-8">
        Access your checklist instantly — no login lag.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="bg-base-100 rounded-xl border border-grey-secondary p-4 mb-4"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="text-white font-mono text-lg">{STANDALONE_URL}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-base-300 text-primary hover:bg-base-300/80 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </motion.div>

      <motion.p variants={itemVariants} className="text-grey-500 mb-8">
        Add it to your home screen for an app-like experience.
      </motion.p>

      <motion.div variants={itemVariants}>
        <Button onClick={onComplete} size="lg">
          Enter Checklist
        </Button>
      </motion.div>
    </motion.div>
  );
}
