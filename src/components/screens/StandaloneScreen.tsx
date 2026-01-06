import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Copy, Check, ArrowRight, Bookmark, Sparkles } from "lucide-react";

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
    <div className="flex flex-col items-center text-center">
      {/* Icon with glow */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 w-20 h-20 bg-primary/30 rounded-2xl blur-2xl animate-pulse-glow" />
        <div className="relative icon-container w-20 h-20 rounded-2xl flex items-center justify-center">
          <Smartphone className="w-9 h-9 text-primary" strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Pro tip badge */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full badge-primary text-sm font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          Pro Tip
        </span>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="mb-4"
      >
        <h1 className="font-display text-2xl font-bold text-white mb-2 uppercase tracking-wide">
          Standalone Access
        </h1>
        <p className="text-grey-400 text-sm max-w-xs mx-auto">
          Bookmark this URL for instant, zero-login access to your checklist
        </p>
      </motion.div>

      {/* URL Box */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full mb-6"
      >
        <div className="url-display flex items-center gap-3 p-4 rounded-xl">
          <div className="flex-1 text-left">
            <p className="text-xs text-grey-500 mb-1 font-medium uppercase tracking-wide">URL</p>
            <p className="text-sm font-mono text-white truncate">
              {STANDALONE_URL}
            </p>
          </div>
          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
              copied
                ? "bg-success/20 border border-success/30"
                : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08]"
            }`}
          >
            {copied ? (
              <Check className="w-5 h-5 text-success" strokeWidth={2} />
            ) : (
              <Copy className="w-5 h-5 text-grey-400" strokeWidth={1.5} />
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Tip */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="flex items-center gap-2 text-grey-500 text-xs mb-10"
      >
        <Bookmark className="w-3.5 h-3.5" />
        <span>Add to Home Screen for app-like experience</span>
      </motion.div>

      {/* CTA */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        onClick={onComplete}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary w-full h-12 px-8 rounded-xl font-semibold text-base flex items-center justify-center gap-2 cursor-pointer"
      >
        Enter Checklist
        <ArrowRight className="w-5 h-5" />
      </motion.button>

      {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 px-5 py-3 rounded-xl bg-success/10 border border-success/20 text-success text-sm font-medium shadow-lg shadow-success/10"
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              URL copied to clipboard
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
