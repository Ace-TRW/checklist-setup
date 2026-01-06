export interface TemplateTask {
  title: string;
  recurring: boolean;
}

export interface CampusTemplate {
  id: string;
  name: string;
  icon: string;
  taskCount: number;
  description: string;
  tasks: TemplateTask[];
}

export const campusTemplates: CampusTemplate[] = [
  {
    id: "copywriting",
    name: "Copywriting",
    icon: "PenTool",
    taskCount: 8,
    description: "Master persuasive writing",
    tasks: [
      { title: "Write 3 headlines", recurring: true },
      { title: "Analyze winning copy (15 min)", recurring: true },
      { title: "Practice fascinations", recurring: true },
      { title: "Study direct response ads", recurring: true },
      { title: "Client outreach (3 prospects)", recurring: true },
      { title: "Rewrite weak copy", recurring: true },
      { title: "Update swipe file", recurring: true },
      { title: "Review & submit work", recurring: true },
    ],
  },
  {
    id: "content-creation",
    name: "Content Creation",
    icon: "Video",
    taskCount: 7,
    description: "Build your audience",
    tasks: [
      { title: "Content ideation (10 ideas)", recurring: true },
      { title: "Script/outline writing", recurring: true },
      { title: "Record content", recurring: true },
      { title: "Edit & polish", recurring: true },
      { title: "Create thumbnail/cover", recurring: true },
      { title: "Publish & optimize", recurring: true },
      { title: "Engage with comments", recurring: true },
    ],
  },
  {
    id: "social-media",
    name: "Social Media",
    icon: "Share2",
    taskCount: 7,
    description: "Grow & monetize",
    tasks: [
      { title: "Post to main platform", recurring: true },
      { title: "Engage 30 min (comments/DMs)", recurring: true },
      { title: "Study viral content", recurring: true },
      { title: "DM outreach (10 prospects)", recurring: true },
      { title: "Reply to all DMs", recurring: true },
      { title: "Content batch planning", recurring: true },
      { title: "Analytics review", recurring: true },
    ],
  },
  {
    id: "ecommerce",
    name: "Ecommerce",
    icon: "ShoppingCart",
    taskCount: 8,
    description: "Scale your store",
    tasks: [
      { title: "Product research (30 min)", recurring: true },
      { title: "Supplier outreach", recurring: true },
      { title: "Store/listing optimization", recurring: true },
      { title: "Launch/test new ad", recurring: true },
      { title: "Review ad metrics", recurring: true },
      { title: "Process orders", recurring: true },
      { title: "Customer service inbox", recurring: true },
      { title: "Competitor analysis", recurring: true },
    ],
  },
  {
    id: "crypto-investing",
    name: "Crypto Investing",
    icon: "TrendingUp",
    taskCount: 6,
    description: "Analyze & invest",
    tasks: [
      { title: "Morning market review", recurring: true },
      { title: "Chart analysis (top holdings)", recurring: true },
      { title: "Research 1 new project", recurring: true },
      { title: "Check news & sentiment", recurring: true },
      { title: "Portfolio rebalance check", recurring: true },
      { title: "Update investment journal", recurring: true },
    ],
  },
  {
    id: "blank",
    name: "Start Blank",
    icon: "Plus",
    taskCount: 0,
    description: "Build your own",
    tasks: [],
  },
];
