import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { HelpCircle, Filter, Plus, Check } from "lucide-react";
import { useBundle } from "../../components/temmora/BundleContext";
import { GlobalInstructionModal } from "../../components/temmora/GlobalInstructionModal";
import { TEMMORA_TEMPLATES } from "../../data/temmoraTemplates";

export const Templates = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePrice, setActivePrice] = useState("All Prices");
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const { addTemplate, isTemplateInBundle } = useBundle();

  useEffect(() => {
    document.title = "Templates | Temmora Marketplace";
  }, []);

  const filteredTemplates = useMemo(() => {
    return TEMMORA_TEMPLATES.filter((tpl) => {
      const matchCategory = activeCategory === "All" || tpl.categories.includes(activeCategory);
      let matchPrice = true;
      if (activePrice === "Under $50") matchPrice = tpl.price < 50;
      else if (activePrice === "$50–$99") matchPrice = tpl.price >= 50 && tpl.price <= 99;
      else if (activePrice === "$100+") matchPrice = tpl.price >= 100;
      return matchCategory && matchPrice;
    });
  }, [activeCategory, activePrice]);

  return (
    <div className="w-full bg-background pt-24 tablet:pt-32 pb-20">
      <div className="temmora-container">
        {/* Marketplace Header */}
        <div className="flex flex-col tablet:flex-row tablet:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="font-display text-4xl tablet:text-5xl font-semibold tracking-tight">Templates</h1>
            <p className="mt-4 text-base tablet:text-lg text-muted-foreground">Explore the complete collection of Temmora website templates.</p>
          </div>
          <button 
            onClick={() => setIsHelpOpen(true)}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border/40 px-4 py-2 bg-foreground/[0.02]"
          >
            <HelpCircle className="h-4 w-4" />
            How Templates Work
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between mb-10 border-y border-border/40 py-4">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide pb-2 lg:pb-0">
            <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
            {["All", "SaaS", "Portfolio", "Hospitality", "E-commerce", "Blog"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-1.5 text-sm font-medium transition-colors rounded-full border ${
                  activeCategory === cat 
                    ? "bg-foreground text-background border-foreground" 
                    : "border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {["All Prices", "Under $50", "$50–$99", "$100+"].map((price) => (
              <button
                key={price}
                onClick={() => setActivePrice(price)}
                className={`whitespace-nowrap text-sm font-medium transition-colors ${
                  activePrice === price 
                    ? "text-foreground underline underline-offset-4" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {price}
              </button>
            ))}
          </div>
        </div>

        {/* Grid - 3 to 4 cards on desktop, smaller footprint */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTemplates.map((tpl) => {
            const inBundle = isTemplateInBundle(tpl.slug);
            return (
              <div key={tpl.slug} className="group flex flex-col border border-border/30 bg-card transition-all duration-300 hover:border-border/80 hover:shadow-sm rounded-lg overflow-hidden">
                <Link to={`/temmora/templates/${tpl.slug}`} className="block relative aspect-video bg-muted overflow-hidden border-b border-border/30">
                  <img 
                    src={tpl.thumbnail} 
                    alt={tpl.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/5 transition-colors duration-500" />
                  
                  {/* Status Badge */}
                  {tpl.status !== "Published" && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-background/90 backdrop-blur-sm text-[10px] uppercase tracking-widest font-semibold border border-border/50 rounded shadow-sm">
                      {tpl.status}
                    </div>
                  )}
                </Link>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-display text-base font-medium tracking-tight"><Link to={`/temmora/templates/${tpl.slug}`}>{tpl.name}</Link></h3>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">{tpl.categories[0]}</div>
                    </div>
                    <div className="flex flex-col items-end">
                      {tpl.discountLabel && (
                        <div className="text-[9px] uppercase tracking-widest text-primary font-bold mb-0.5">{tpl.discountLabel}</div>
                      )}
                      <div className="flex items-center gap-1.5">
                        {tpl.originalPrice > tpl.price && (
                           <span className="text-xs text-muted-foreground line-through decoration-muted-foreground/40 font-medium">${tpl.originalPrice}</span>
                        )}
                        <span className="font-medium text-sm">${tpl.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between gap-3">
                    <Link to={`/temmora/templates/${tpl.slug}`} className="text-xs font-medium text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
                      View details
                    </Link>
                    <button
                      onClick={() => addTemplate(tpl.slug)}
                      disabled={inBundle}
                      className={`text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 transition-colors flex items-center gap-1.5 rounded-sm ${
                        inBundle 
                          ? "bg-muted text-muted-foreground cursor-default border border-transparent" 
                          : "border border-border/60 text-foreground hover:bg-foreground hover:text-background"
                      }`}
                    >
                      {inBundle ? <><Check className="h-3 w-3" /> In Bundle</> : <><Plus className="h-3 w-3" /> Add to Bundle</>}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          
          {filteredTemplates.length === 0 && (
            <div className="col-span-full py-24 text-center text-muted-foreground">
              No templates found for the selected filters.
            </div>
          )}
        </div>
      </div>

      {isHelpOpen && <GlobalInstructionModal onClose={() => setIsHelpOpen(false)} />}
    </div>
  );
};
