import { useState, useCallback } from "react";
import { mockLegacyTasks } from "../data/mockLegacyTasks";
import { campusTemplates } from "../data/campusTemplates";

export type Screen = 1 | 2 | 3 | 4;

export interface FlowState {
  screen: Screen;
  expandedTemplate: string | null;
  selectedPresetTasks: Set<string>;
  selectedLegacyTasks: Set<string>;
  hasLegacyData: boolean;
}

const STORAGE_KEY = "checklist_v2_init_complete";

export function useInitFlow() {
  const [state, setState] = useState<FlowState>({
    screen: 1,
    expandedTemplate: null,
    selectedPresetTasks: new Set(),
    selectedLegacyTasks: new Set(),
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

  // Template expansion (for expand-on-select pattern)
  const expandTemplate = useCallback((templateId: string | null) => {
    setState((prev) => ({ ...prev, expandedTemplate: templateId }));
  }, []);

  // Toggle a preset task selection
  const togglePresetTask = useCallback((taskId: string) => {
    setState((prev) => {
      const newSelected = new Set(prev.selectedPresetTasks);
      if (newSelected.has(taskId)) {
        newSelected.delete(taskId);
      } else {
        newSelected.add(taskId);
      }
      return { ...prev, selectedPresetTasks: newSelected };
    });
  }, []);

  // Select all tasks for a specific template
  const selectAllPresetTasks = useCallback((templateId: string) => {
    const template = campusTemplates.find((t) => t.id === templateId);
    if (!template) return;

    setState((prev) => {
      const templateTaskIds = template.tasks.map((t) => t.id);
      const allSelected = templateTaskIds.every((id) => prev.selectedPresetTasks.has(id));

      const newSelected = new Set(prev.selectedPresetTasks);

      if (allSelected) {
        // Deselect all from this template
        templateTaskIds.forEach((id) => newSelected.delete(id));
      } else {
        // Select all from this template
        templateTaskIds.forEach((id) => newSelected.add(id));
      }

      return { ...prev, selectedPresetTasks: newSelected };
    });
  }, []);

  // Toggle a legacy task selection
  const toggleLegacyTask = useCallback((taskId: string) => {
    setState((prev) => {
      const newSelected = new Set(prev.selectedLegacyTasks);
      if (newSelected.has(taskId)) {
        newSelected.delete(taskId);
      } else {
        newSelected.add(taskId);
      }
      return { ...prev, selectedLegacyTasks: newSelected };
    });
  }, []);

  // Select all legacy tasks
  const selectAllLegacyTasks = useCallback(() => {
    setState((prev) => {
      const allSelected = prev.selectedLegacyTasks.size === mockLegacyTasks.length;

      if (allSelected) {
        return { ...prev, selectedLegacyTasks: new Set() };
      } else {
        return {
          ...prev,
          selectedLegacyTasks: new Set(mockLegacyTasks.map((t) => t.id)),
        };
      }
    });
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
      expandedTemplate: null,
      selectedPresetTasks: new Set(),
      selectedLegacyTasks: new Set(),
      hasLegacyData: mockLegacyTasks.length > 0,
    });
  }, []);

  return {
    state,
    isComplete,
    nextScreen,
    prevScreen,
    expandTemplate,
    togglePresetTask,
    selectAllPresetTasks,
    toggleLegacyTask,
    selectAllLegacyTasks,
    completeFlow,
    resetFlow,
  };
}
