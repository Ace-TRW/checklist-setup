import { AnimatePresence, motion } from "framer-motion";
import { useInitFlow } from "../hooks/useInitFlow";
import { ProgressDots } from "./ui/ProgressDots";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { TemplatesScreen } from "./screens/TemplatesScreen";
import { RecoveryScreen } from "./screens/RecoveryScreen";
import { StandaloneScreen } from "./screens/StandaloneScreen";
import { RotateCcw } from "lucide-react";

const screenVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

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

  // Calculate total screens (skip recovery if no legacy data)
  const totalScreens = state.hasLegacyData ? 4 : 3;
  const adjustedCurrent =
    state.screen === 4 && !state.hasLegacyData ? 3 : state.screen;

  if (isComplete) {
    return (
      <div className="min-h-screen bg-backdrop flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Checklist Initialized!
          </h1>
          <p className="text-grey-400 mb-6">
            Your checklist is ready to use.
          </p>
          <button
            onClick={resetFlow}
            className="flex items-center gap-2 mx-auto px-4 py-2 text-grey-500 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Reset & Run Flow Again
          </button>
        </div>
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
    <div className="fixed inset-0 bg-backdrop/95 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-neutral rounded-2xl border border-grey-secondary shadow-2xl overflow-hidden"
      >
        <div className="p-8 max-h-[85vh] overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={state.screen}
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>

          <ProgressDots
            current={adjustedCurrent}
            total={totalScreens}
            className="mt-8"
          />
        </div>
      </motion.div>
    </div>
  );
}
