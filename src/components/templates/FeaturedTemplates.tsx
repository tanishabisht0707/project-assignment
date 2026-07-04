import { Template } from "@/types/template";
import { TemplateCard } from "./TemplateCard";

interface FeaturedTemplatesProps {
  templates: Template[];
  onPreview: (template: Template) => void;
}

export function FeaturedTemplates({
  templates,
  onPreview,
}: FeaturedTemplatesProps) {
  const featured = templates.filter((t) => t.featured).slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section aria-labelledby="featured-heading" className="mb-10">
      <h2
        id="featured-heading"
        className="mb-4 font-display text-lg font-semibold text-ink"
      >
        Featured templates
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onPreview={onPreview}
          />
        ))}
      </div>
    </section>
  );
}
