import { siteContent } from "@/content/site-content";

export function ProcessSection() {
  return (
    <section className="py-24 bg-muted/20 border-y border-border">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {siteContent.process.sectionTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[15%] right-[15%] h-px bg-border z-0"></div>
          
          {siteContent.process.items.map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-background border-2 border-macework flex items-center justify-center text-sm font-bold text-macework mb-6 group-hover:bg-macework group-hover:text-white transition-colors duration-300">
                {item.step}
              </div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed px-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
