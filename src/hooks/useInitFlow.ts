import { useState, useCallback } from "react";
import { mockLegacyTasks } from "../data/mockLegacyTasks";

export type Screen = 1 | 2 | 3 | 4;

export interface FlowState {
  screen: Screen;
  selectedTemplate: string | null;
  selectedTasks: Set<string>;
  hasLegacyData: boolean;
}

const STORAGE_KEY = "checklist_v2_init_complete";

export function useInitFlow() {
  const [state, setState] = useState<FlowState>({
    screen: 1,
    selectedTemplate: null,
    selectedTasks: new Set(),
    hasLegacyData: mockLegacyTasks.length > 0,
  });

  const [isComplete, setIsComplete] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) === "true";
  });

  const nextScreen = useCallback(() => {
    setState((prev) => {
      let nextScreen = (prev.screen + 1) as Screen;

      // Skip recovery screen if no legacy data
      if (nextScreen === 3 && !prev.hasLegacyData) {
        nextScreen = 4;
      }

      // Don't go past screen 4
      if (nextScreen > 4) {
        nextScreen = 4;
      }

      return { ...prev, screen: nextScreen };
    });
  }, []);

  const prevScreen = useCallback(() => {
    setState((prev) => {
      let prevScreen = (prev.screen - 1) as Screen;

      // Skip recovery screen if no legacy data
      if (prevScreen === 3 && !prev.hasLegacyData) {
        prevScreen = 2;
      }

      // Don't go before screen 1
      if (prevScreen < 1) {
        prevScreen = 1;
      }

      return { ...prev, screen: prevScreen };
    });
  }, []);

  const selectTemplate = useCallback((templateId: string) => {
    setState((prev) => ({ ...prev, selectedTemplate: templateId }));
  }, []);

  const toggleTask = useCallback((taskId: string) => {
    setState((prev) => {
      const newSelected = new Set(prev.selectedTasks);
      if (newSelected.has(taskId)) {
        newSelected.delete(taskId);
      } else {
        newSelected.add(taskId);
      }
      return { ...prev, selectedTasks: newSelected };
    });
  }, []);

  const selectAllTasks = useCallback(() => {
    setState((prev) => ({
      ...prev,
      selectedTasks: new Set(mockLegacyTasks.map((t) => t.id)),
    }));
  }, []);

  const completeFlow = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsComplete(true);
  }, []);

  const resetFlow = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setIsComplete(false);
    setState({
      screen: 1,
      selectedTemplate: null,
      selectedTasks: new Set(),
      hasLegacyData: mockLegacyTasks.length > 0,
    });
  }, []);

  return {
    state,
    isComplete,
    nextScreen,
    prevScreen,
    selectTemplate,
    toggleTask,
    selectAllTasks,
    completeFlow,
    resetFlow,
  };
}
