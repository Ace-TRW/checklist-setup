import { motion } from "framer-motion";
import { Rocket, Zap, Smartphone, Shield, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

interface WelcomeScreenProps {
  onContinue: () => void;
}

const features = [
  { icon: Zap, label: "Instant Sync" },
  { icon: Smartphone, label: "Standalone App" },
  { icon: Shield, label: "Offline Ready" },
];

export function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Icon */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
          <Rocket className="w-7 h-7 text-primary" />
        </div>
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
          Major Update
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-3xl sm:text-4xl font-bold text-white text-center mb-3"
      >
        Checklist <span className="text-primary">2.0</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-grey-400 text-center max-w-sm mb-10 leading-relaxed"
      >
        The biggest infrastructure upgrade in The Real World Checklist history.
        Faster, smarter, unstoppable.
      </motion.p>

      {/* Features */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="flex items-center justify-center gap-6 mb-10"
      >
        {features.map((feature) => (
          <div key={feature.label} className="flex items-center gap-2 text-grey-500">
            <feature.icon className="w-4 h-4 text-grey-500" />
            <span className="text-sm">{feature.label}</span>
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Button onClick={onContinue} size="lg">
          Get Started
          <ArrowRight className="w-4 h-4" />
        </Button>
      </motion.div>
    </div>
  );
}
