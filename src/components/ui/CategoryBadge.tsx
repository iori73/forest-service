import { CategoryId, getCategoryById } from "@/data/types";
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  categoryId: CategoryId;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function CategoryBadge({
  categoryId,
  size = "md",
  className,
}: CategoryBadgeProps) {
  const category = getCategoryById(categoryId);

  if (!category) return null;

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors",
        sizeClasses[size],
        className
      )}
      style={{
        backgroundColor: category.bgColor,
        color: category.color,
      }}
    >
      {category.nameShort}
    </span>
  );
}




