import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Copy, Check, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

interface StandaloneScreenProps {
  onComplete: () => void;
}

const STANDALONE_URL = "checklist.therealworld.ag";

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
    <div className="flex flex-col items-center">
      {/* Icon */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mb-8"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
          <Smartphone className="w-7 h-7 text-primary" />
        </div>
      </motion.div>

      {/* Header */}
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-2xl font-bold text-white text-center mb-2"
      >
        Instant Access
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-grey-500 text-sm text-center mb-8"
      >
        Bookmark this URL for zero-login access
      </motion.p>

      {/* URL Box */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full mb-4"
      >
        <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <span className="flex-1 text-sm font-mono text-grey-400 truncate pl-2">
            {STANDALONE_URL}
          </span>
          <button
            onClick={handleCopy}
            className="shrink-0 h-9 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-grey-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-success" />
                <span className="text-sm text-success">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="text-sm">Copy</span>
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* Tip */}
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="text-xs text-grey-600 text-center mb-10"
      >
        Add to Home Screen for an app-like experience
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Button onClick={onComplete} size="lg">
          Enter Checklist
          <ArrowRight className="w-4 h-4" />
        </Button>
      </motion.div>

      {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm"
          >
            Link copied
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
