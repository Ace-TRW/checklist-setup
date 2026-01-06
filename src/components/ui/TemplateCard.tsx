import { cn } from "../../lib/cn";
import {
  PenTool,
  Video,
  Share2,
  ShoppingCart,
  TrendingUp,
  Plus,
  type LucideIcon,
} from "lucide-react";
import type { CampusTemplate } from "../../data/campusTemplates";

const iconMap: Record<string, LucideIcon> = {
  PenTool,
  Video,
  Share2,
  ShoppingCart,
  TrendingUp,
  Plus,
};

interface TemplateCardProps {
  template: CampusTemplate;
  selected: boolean;
  onSelect: () => void;
}

export function TemplateCard({ template, selected, onSelect }: TemplateCardProps) {
  const Icon = iconMap[template.icon] || Plus;

  return (
    <button
      onClick={onSelect}
      className={cn(
        "p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 text-center flex flex-col items-center gap-3 w-full",
        selected
          ? "border-primary bg-base-300"
          : "border-grey-secondary bg-base-100 hover:border-grey-500 hover:bg-base-300/50"
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
          selected ? "bg-primary/20 text-primary" : "bg-grey-secondary text-grey-400"
        )}
      >
        <Icon className="w-6 h-6" />
      </div>

      <div>
        <h3 className="font-semibold text-white text-lg">{template.name}</h3>
        <p className="text-grey-500 text-sm mt-1">
          {template.taskCount > 0
            ? `${template.taskCount} tasks`
            : template.description}
        </p>
        {template.taskCount > 0 && (
          <p className="text-grey-600 text-xs mt-0.5">{template.description}</p>
        )}
      </div>
    </button>
  );
}
