import { AnimatePresence, motion } from "framer-motion";
import { useInitFlow } from "../hooks/useInitFlow";
import { ProgressDots } from "./ui/ProgressDots";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { TemplatesScreen } from "./screens/TemplatesScreen";
import { RecoveryScreen } from "./screens/RecoveryScreen";
import { StandaloneScreen } from "./screens/StandaloneScreen";
import { RotateCcw, CheckCircle2 } from "lucide-react";

export function InitFlow() {
  const {
    state,
    isComplete,
    nextScreen,
    selectTemplate,
    toggleTask,
    selectAllTasks,
    completeFlow,
    resetFlow,
  } = useInitFlow();

  const totalScreens = state.hasLegacyData ? 4 : 3;
  const adjustedCurrent =
    state.screen === 4 && !state.hasLegacyData ? 3 : state.screen;

  if (isComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring" as const, delay: 0.2, stiffness: 200 }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-success/20 to-success/5 flex items-center justify-center border border-success/20"
          >
            <CheckCircle2 className="w-10 h-10 text-success" />
          </motion.div>
          <h1 className="font-display text-3xl text-white mb-3">
            You're All Set
          </h1>
          <p className="text-grey-500 mb-8 leading-relaxed">
            Your checklist has been initialized. Start building unstoppable habits.
          </p>
          <button
            onClick={resetFlow}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-grey-500 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-grey-800/50"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm font-medium">Run Setup Again</span>
          </button>
        </motion.div>
      </div>
    );
  }

  const renderScreen = () => {
    switch (state.screen) {
      case 1:
        return <WelcomeScreen onContinue={nextScreen} />;
      case 2:
        return (
          <TemplatesScreen
            selectedTemplate={state.selectedTemplate}
            onSelectTemplate={selectTemplate}
            onContinue={nextScreen}
          />
        );
      case 3:
        return (
          <RecoveryScreen
            selectedTasks={state.selectedTasks}
            onToggleTask={toggleTask}
            onSelectAll={selectAllTasks}
            onContinue={nextScreen}
          />
        );
      case 4:
        return <StandaloneScreen onComplete={completeFlow} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 z-50">
      {/* Background */}
      <div className="absolute inset-0 bg-backdrop" />

      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] bg-primary-dark/[0.04] rounded-full blur-[100px]" />
      </div>

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-xl"
      >
        {/* Card */}
        <div className="glass-card rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/40">
          {/* Top border accent */}
          <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {/* Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={state.screen}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {renderScreen()}
              </motion.div>
            </AnimatePresence>

            {/* Footer with progress */}
            <div className="mt-8 pt-6 border-t border-grey-secondary/30">
              <ProgressDots current={adjustedCurrent} total={totalScreens} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
