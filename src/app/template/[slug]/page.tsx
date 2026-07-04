import { templates } from "@/data/templates";
import { notFound } from "next/navigation";
import { Github, ExternalLink, Box, LayoutGrid, Zap, Award, Tag } from "lucide-react";
import type { Template } from "@/types/template"; 
interface Props {
  params: { slug: string };
}

export default function TemplateDetails({ params }: Props) {
  const template = templates.find((item) => item.slug === params.slug);

  if (!template) return notFound();

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                  {template.difficulty}
                </span>
                <span className="text-neutral-500 text-sm">{template.category}</span>
              </div>
              <h1 className="text-5xl font-extrabold tracking-tighter mb-4">{template.title}</h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">{template.description}</p>
            </div>
            <div className="flex gap-3">
              <a href={template.demoUrl} className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20">
                <Zap size={18} /> Deploy
              </a>
              <a href={template.demoUrl} className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl font-medium transition-all hover:border-neutral-400">
                <ExternalLink size={18} /> Preview
              </a>
            </div>
          </div>
        </header>

        <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl mb-16">
          <img src={template.heroImage} alt={template.title} className="w-full h-[500px] object-contain rounded-md" />
        </div>

        <div className="grid lg:grid-cols-[1fr,360px] gap-12">
          
          <section className="space-y-16">
            <article>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">{template.longDescription}</p>
            </article>

            <article>
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {template.features.map((feature, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <aside className="space-y-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <h3 className="font-bold text-lg mb-6">Metadata</h3>
              <div className="space-y-6">
                <SidebarItem icon={<Github size={18}/>} title="Repository" value={template.repoUrl.split('/').pop() || 'GitHub'} />
                <SidebarItem icon={<Box size={18}/>} title="Author" value={template.author} />
                <SidebarItem icon={<LayoutGrid size={18}/>} title="Total Deploys" value={template.deploys.toLocaleString()} />
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800">
              <h4 className="text-sm font-bold text-neutral-500 mb-4 flex items-center gap-2"><Tag size={16}/> Tags</h4>
              <div className="flex flex-wrap gap-2">
                {template.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-xs font-medium uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function SidebarItem({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-neutral-400">{icon}</div>
      <div>
        <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider">{title}</p>
        <p className="text-sm font-semibold truncate">{value}</p>
      </div>
    </div>
  );
}