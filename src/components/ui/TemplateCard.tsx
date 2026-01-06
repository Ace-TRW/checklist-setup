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
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative w-full p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-200",
        "flex flex-col items-center gap-2.5 text-center",
        "border",
        selected
          ? "border-primary/60 bg-primary/[0.08] shadow-[0_0_20px_rgba(236,200,121,0.1)]"
          : "border-grey-secondary/40 bg-grey-800/20 hover:bg-grey-800/40 hover:border-grey-600/50"
      )}
    >
      {/* Selection check */}
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" as const, stiffness: 400, damping: 15 }}
          className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
        >
          <Check className="w-3 h-3 text-neutral" strokeWidth={3} />
        </motion.div>
      )}

      {/* Icon */}
      <div
        className={cn(
          "w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center transition-all duration-200",
          selected
            ? "bg-primary/20"
            : "bg-grey-secondary/40",
          isBlank && !selected && "border border-dashed border-grey-600"
        )}
      >
        <Icon
          className={cn(
            "w-5 h-5 transition-colors",
            selected ? "text-primary" : "text-grey-400"
          )}
        />
      </div>

      {/* Content */}
      <div className="space-y-0.5">
        <h3
          className={cn(
            "font-semibold text-xs sm:text-sm transition-colors leading-tight",
            selected ? "text-white" : "text-grey-400"
          )}
        >
          {template.name}
        </h3>

        {template.taskCount > 0 && (
          <p className="text-primary/80 text-[10px] sm:text-xs font-medium">
            {template.taskCount} tasks
          </p>
        )}
      </div>
    </motion.button>
  );
}
