import { cn } from "../../lib/cn";
import { motion } from "framer-motion";
import {
  PenTool,
  Video,
  Share2,
  ShoppingCart,
  TrendingUp,
  Plus,
  type LucideIcon,
  Check,
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
  const isBlank = template.id === "blank";

  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative w-full p-4 rounded-xl cursor-pointer transition-all duration-200",
        "flex flex-col items-center gap-3 text-center",
        "border",
        selected
          ? "border-primary/50 bg-primary/10"
          : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10"
      )}
    >
      {/* Check */}
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
        >
          <Check className="w-3 h-3 text-neutral" strokeWidth={3} />
        </motion.div>
      )}

      {/* Icon */}
      <div
        className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center",
          selected ? "bg-primary/20" : "bg-white/5",
          isBlank && !selected && "border border-dashed border-white/10"
        )}
      >
        <Icon className={cn("w-5 h-5", selected ? "text-primary" : "text-grey-400")} />
      </div>

      {/* Label */}
      <div>
        <p className={cn("text-sm font-medium", selected ? "text-white" : "text-grey-400")}>
          {template.name}
        </p>
        {template.taskCount > 0 && (
          <p className="text-xs text-grey-600 mt-0.5">{template.taskCount} tasks</p>
        )}
      </div>
    </motion.button>
  );
}
