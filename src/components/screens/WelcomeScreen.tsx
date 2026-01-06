import { motion } from "framer-motion";
import { Rocket, Zap, Smartphone, Shield, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

interface WelcomeScreenProps {
  onContinue: () => void;
}

const features = [
  { icon: Zap, label: "Instant Sync", desc: "Real-time across devices" },
  { icon: Smartphone, label: "Standalone", desc: "Direct access, no friction" },
  { icon: Shield, label: "Offline-Ready", desc: "Never miss a task" },
];

export function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
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
          <Rocket className="w-7 h-7 text-primary" />
        </div>
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="mb-2"
      >
        <span className="badge badge-gold mb-4">Major Update</span>
      </motion.div>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-display text-3xl sm:text-4xl text-gradient-gold mb-2"
      >
        Checklist 2.0
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="font-display text-xl sm:text-2xl text-white/90 mb-6"
      >
        Is Live
      </motion.p>

      {/* Description */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-sm mx-auto mb-8"
      >
        <p className="text-grey-400 text-sm sm:text-base leading-relaxed">
          The biggest infrastructure upgrade in The Real World Checklist history.
        </p>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="grid grid-cols-3 gap-3 mb-8"
      >
        {features.map((feature, i) => (
          <motion.div
            key={feature.label}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.05 }}
            className="inner-card rounded-xl p-3 sm:p-4"
          >
            <div className="w-9 h-9 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
              <feature.icon className="w-4 h-4 text-primary" />
            </div>
            <p className="text-white text-xs sm:text-sm font-semibold mb-0.5">
              {feature.label}
            </p>
            <p className="text-grey-500 text-[10px] sm:text-xs hidden sm:block">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="accent-line mb-6"
      />

      {/* CTA */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.55 }}
      >
        <Button onClick={onContinue} size="lg" className="w-full sm:w-auto">
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
}
