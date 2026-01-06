import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Copy, Check, ExternalLink, Sparkles } from "lucide-react";
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
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="text-center">
      {/* Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring" as const, stiffness: 200 }}
        className="relative w-16 h-16 mx-auto mb-6"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-dark/10 animate-pulse-soft" />
        <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-base-300 to-base-100 flex items-center justify-center border border-primary/20">
          <Smartphone className="w-7 h-7 text-primary" />
        </div>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="mb-3"
      >
        <span className="badge badge-gold">
          <Sparkles className="w-3 h-3" />
          Pro Tip
        </span>
      </motion.div>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-display text-2xl sm:text-3xl text-white mb-2"
      >
        Instant Access
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="text-grey-500 text-sm max-w-xs mx-auto mb-6"
      >
        Bookmark this URL for zero-login instant access to your checklist.
      </motion.p>

      {/* URL Card */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative mb-6"
      >
        <div className="inner-card rounded-xl p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-primary" />
              </div>
              <span className="text-white font-mono text-sm sm:text-base truncate">
                {STANDALONE_URL}
              </span>
            </div>

            <motion.button
              onClick={handleCopy}
              whileTap={{ scale: 0.95 }}
              className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary text-sm font-medium transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="hidden sm:inline">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </motion.button>
          </div>
        </div>

        {/* Success toast */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 text-success text-xs font-medium whitespace-nowrap"
            >
              Copied to clipboard
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Tip */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mb-8 py-3 px-4 rounded-xl bg-grey-800/30 border border-grey-secondary/30 text-left"
      >
        <p className="text-grey-400 text-xs sm:text-sm">
          <span className="text-white font-medium">Add to Home Screen</span>
          <span className="text-grey-500"> - Get an app-like experience on mobile.</span>
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Button onClick={onComplete} size="lg" className="w-full sm:w-auto glow-gold">
          <Sparkles className="w-4 h-4 mr-2" />
          <span>Enter Checklist</span>
        </Button>
      </motion.div>
    </div>
  );
}
