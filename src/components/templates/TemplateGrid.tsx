import { Template } from "@/types/template";
import { TemplateCard } from "./TemplateCard";
import { EmptyState } from "./EmptyState";

interface TemplateGridProps {
  templates: Template[];
  searchTerm: string;
  onReset: () => void;
  onPreview: (template: Template) => void;
}

export function TemplateGrid({
  templates,
  searchTerm,
  onReset,
  onPreview,
}: TemplateGridProps) {
  if (templates.length === 0) {
    return <EmptyState searchTerm={searchTerm} onReset={onReset} />;
  }

  return (
    <div
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      aria-live="polite"
    >
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          template={template}
          onPreview={onPreview}
        />
      ))}
    </div>
  );
}
