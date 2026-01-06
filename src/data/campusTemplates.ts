export interface TemplateTask {
  id: string;
  title: string;
  recurring: boolean;
}

export interface CampusTemplate {
  id: string;
  name: string;
  icon: string;
  emoji: string;
  taskCount: number;
  description: string;
  tasks: TemplateTask[];
}

export const campusTemplates: CampusTemplate[] = [
  {
    id: "fitness",
    name: "Fitness",
    icon: "Dumbbell",
    emoji: "💪",
    taskCount: 6,
    description: "Build your body",
    tasks: [
      { id: "fit-1", title: "Morning Workout", recurring: true },
      { id: "fit-2", title: "Track Macros", recurring: true },
      { id: "fit-3", title: "10k Steps", recurring: true },
      { id: "fit-4", title: "Evening Stretch", recurring: true },
      { id: "fit-5", title: "Weigh In", recurring: true },
      { id: "fit-6", title: "Meal Prep", recurring: true },
    ],
  },
  {
    id: "copywriting",
    name: "Copywriting",
    icon: "PenTool",
    emoji: "💰",
    taskCount: 5,
    description: "Master persuasion",
    tasks: [
      { id: "copy-1", title: "Write 3 Headlines", recurring: true },
      { id: "copy-2", title: "Analyze Winning Copy (15 min)", recurring: true },
      { id: "copy-3", title: "Practice Fascinations", recurring: true },
      { id: "copy-4", title: "Client Outreach (3 prospects)", recurring: true },
      { id: "copy-5", title: "Update Swipe File", recurring: true },
    ],
  },
  {
    id: "ecommerce",
    name: "Ecom",
    icon: "ShoppingCart",
    emoji: "📈",
    taskCount: 7,
    description: "Scale your store",
    tasks: [
      { id: "ecom-1", title: "Product Research (30 min)", recurring: true },
      { id: "ecom-2", title: "Supplier Outreach", recurring: true },
      { id: "ecom-3", title: "Store Optimization", recurring: true },
      { id: "ecom-4", title: "Launch/Test New Ad", recurring: true },
      { id: "ecom-5", title: "Review Ad Metrics", recurring: true },
      { id: "ecom-6", title: "Process Orders", recurring: true },
      { id: "ecom-7", title: "Customer Service", recurring: true },
    ],
  },
  {
    id: "self-improvement",
    name: "Self Improvement",
    icon: "Brain",
    emoji: "🧠",
    taskCount: 8,
    description: "Level up daily",
    tasks: [
      { id: "self-1", title: "Morning Routine", recurring: true },
      { id: "self-2", title: "Read 30 Minutes", recurring: true },
      { id: "self-3", title: "Journal Entry", recurring: true },
      { id: "self-4", title: "Meditation (10 min)", recurring: true },
      { id: "self-5", title: "Learn New Skill (1 hr)", recurring: true },
      { id: "self-6", title: "No Social Media (until noon)", recurring: true },
      { id: "self-7", title: "Cold Shower", recurring: true },
      { id: "self-8", title: "Evening Review", recurring: true },
    ],
  },
  {
    id: "blank",
    name: "Start Blank",
    icon: "Plus",
    emoji: "✏️",
    taskCount: 0,
    description: "Build your own",
    tasks: [],
  },
];
