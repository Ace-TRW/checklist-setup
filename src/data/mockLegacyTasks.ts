export interface LegacyTask {
  id: string;
  title: string;
  streak: number;
  lastCompleted: string;
  isDaily: boolean;
}

export const mockLegacyTasks: LegacyTask[] = [
  {
    id: "1",
    title: "Morning Review",
    streak: 47,
    lastCompleted: "2025-10-15",
    isDaily: true,
  },
  {
    id: "2",
    title: "Deep Work Block",
    streak: 23,
    lastCompleted: "2025-10-15",
    isDaily: true,
  },
  {
    id: "3",
    title: "Evening Journal",
    streak: 12,
    lastCompleted: "2025-10-14",
    isDaily: true,
  },
  {
    id: "4",
    title: "Workout",
    streak: 31,
    lastCompleted: "2025-10-15",
    isDaily: true,
  },
  {
    id: "5",
    title: "Read 30 min",
    streak: 8,
    lastCompleted: "2025-10-15",
    isDaily: true,
  },
];
