import { motion } from "framer-motion";
import { Rocket, Zap, Smartphone, Wifi, ArrowRight, Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  onContinue: () => void;
}

const features = [
  { icon: Zap, label: "Instant Sync", description: "Real-time updates" },
  { icon: Smartphone, label: "Standalone", description: "Native app experience" },
  { icon: Wifi, label: "Offline Ready", description: "Works anywhere" },
];

export function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Hero Icon with glow */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-8"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 w-20 h-20 bg-primary/30 rounded-2xl blur-2xl animate-pulse-glow" />

        {/* Icon container */}
        <div className="relative icon-container w-20 h-20 rounded-2xl flex items-center justify-center">
          <Rocket className="w-9 h-9 text-primary" strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full badge-primary text-sm font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          Major Update
        </span>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="mb-4"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Checklist <span className="text-gradient">2.0</span>
        </h1>
        <p className="text-grey-400 text-lg mt-1 font-medium">is live</p>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-grey-400 text-base max-w-xs mx-auto mb-10 leading-relaxed"
      >
        The biggest infrastructure upgrade in The Real World history.
        <span className="text-grey-300 font-medium"> Faster. Smarter. Unstoppable.</span>
      </motion.p>

      {/* Features */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="w-full grid grid-cols-3 gap-3 mb-10"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.label}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]"
          >
            <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center">
              <feature.icon className="w-5 h-5 text-grey-400" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-white">{feature.label}</p>
              <p className="text-xs text-grey-500 hidden sm:block">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        onClick={onContinue}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary w-full sm:w-auto h-12 px-8 rounded-xl font-semibold text-base flex items-center justify-center gap-2 cursor-pointer"
      >
        Get Started
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </div>
  );
}
