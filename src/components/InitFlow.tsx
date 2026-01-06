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
    expandTemplate,
    togglePresetTask,
    selectAllPresetTasks,
    toggleLegacyTask,
    selectAllLegacyTasks,
    completeFlow,
    resetFlow,
  } = useInitFlow();

  const totalScreens = state.hasLegacyData ? 4 : 3;
  const adjustedCurrent =
    state.screen === 4 && !state.hasLegacyData ? 3 : state.screen;

  if (isComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-backdrop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" as const, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center glow-success"
          >
            <CheckCircle2 className="w-10 h-10 text-success" strokeWidth={1.5} />
          </motion.div>
          <h1 className="font-display text-3xl font-bold text-white mb-2">You're All Set</h1>
          <p className="text-grey-500 mb-8">Your checklist is ready to use.</p>
          <button
            onClick={resetFlow}
            className="inline-flex items-center gap-2 text-grey-500 hover:text-white transition-colors cursor-pointer text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            Run Setup Again
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
            expandedTemplate={state.expandedTemplate}
            selectedPresetTasks={state.selectedPresetTasks}
            onExpandTemplate={expandTemplate}
            onTogglePresetTask={togglePresetTask}
            onSelectAllPresetTasks={selectAllPresetTasks}
            onContinue={nextScreen}
          />
        );
      case 3:
        return (
          <RecoveryScreen
            selectedTasks={state.selectedLegacyTasks}
            onToggleTask={toggleLegacyTask}
            onSelectAll={selectAllLegacyTasks}
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
    <div className="fixed inset-0 bg-backdrop flex items-center justify-center p-4 sm:p-6">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-success/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-lg z-10"
      >
        <div className="glass-card rounded-3xl overflow-hidden">
          {/* Content */}
          <div className="p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={state.screen}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                {renderScreen()}
              </motion.div>
            </AnimatePresence>

            {/* Progress */}
            <div className="mt-10 pt-6 border-t border-white/[0.04]">
              <ProgressDots current={adjustedCurrent} total={totalScreens} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
