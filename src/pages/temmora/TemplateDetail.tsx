import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { TemplateVisualGallery } from "../../components/temmora/TemplateVisualGallery";
import { TemplateVisualInstructions } from "../../components/temmora/TemplateVisualInstructions";
import { useBundle } from "../../components/temmora/BundleContext";
import { Plus, Check, ExternalLink, Calendar, Code, User, FileText, CheckCircle2 } from "lucide-react";
import { TEMMORA_TEMPLATES } from "../../data/temmoraTemplates";
import { trackLivePreviewClicked, trackTemplateAddedToBundle } from "../../utils/analytics";

export const TemplateDetail = () => {
  const { slug } = useParams();
  const { addTemplate, isTemplateInBundle, updatePurchaseType, openCheckoutFor } = useBundle();
  
  const template = TEMMORA_TEMPLATES.find(t => t.slug === slug);
  const inBundle = template ? isTemplateInBundle(template.slug) : false;

  useEffect(() => {
    if (template) {
      document.title = `${template.name} | Temmora`;
    }
  }, [template]);

  if (!template) {
    return <Navigate to="/temmora/templates" replace />;
  }

  // Format Date (e.g. July 30, 2026)
  const formattedDate = new Date(template.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="pt-28 pb-24">
      <div className="temmora-container">
        <Link to="/temmora/templates" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          &larr; Back to templates
        </Link>
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
          
          {/* Left Column: Visual Gallery & Instructions */}
          <div className="flex flex-col gap-16 overflow-hidden">
            <TemplateVisualGallery 
              images={[template.thumbnail, template.thumbnail, template.thumbnail]}
              video={template.heroDemoVideo} 
            />
            
            {/* Visual Instructions Section */}
            <TemplateVisualInstructions slug={template.slug} />
          </div>

          {/* Right Column: Product Details & Actions */}
          <div className="flex flex-col">
            <div className="flex flex-col mb-4">
              <h1 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                {template.name}
              </h1>
              
              <div className="flex flex-col items-start gap-1">
                {template.discountLabel && (
                  <span className="text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded">
                    {template.discountLabel}
                  </span>
                )}
                <div className="flex items-center gap-3">
                  {template.originalPrice > template.price && (
                    <span className="text-xl text-muted-foreground line-through decoration-muted-foreground/40 font-medium">
                      ${template.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-medium tracking-tight text-foreground">
                    ${template.price}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Meta tags (Status, Category) */}
            <div className="flex flex-wrap gap-2 mb-6">
               {template.status !== "Published" && (
                 <span className="px-2.5 py-1 bg-muted border border-border/60 text-xs font-semibold uppercase tracking-widest text-foreground rounded-sm">
                   {template.status}
                 </span>
               )}
               {template.categories.slice(0, 3).map(cat => (
                 <span key={cat} className="px-2.5 py-1 bg-background border border-border/40 text-xs uppercase tracking-wider text-muted-foreground rounded-sm">
                   {cat}
                 </span>
               ))}
               {template.categories.length > 3 && (
                 <span className="px-2.5 py-1 bg-background border border-border/40 text-xs uppercase tracking-wider text-muted-foreground rounded-sm">
                   +{template.categories.length - 3} more
                 </span>
               )}
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              {template.description}
            </p>

            <div className="flex flex-col gap-4">
              {/* Live Preview CTA */}
              {template.livePreviewUrl ? (
                <a 
                  href={template.livePreviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLivePreviewClicked(template.slug)}
                  className="w-full flex items-center justify-center gap-2 bg-foreground py-4 text-sm font-medium text-background hover:bg-foreground/90 transition-colors rounded-sm"
                >
                  View Live Preview <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <button disabled className="w-full bg-muted text-muted-foreground py-4 text-sm font-medium rounded-sm border border-border/40 cursor-not-allowed">
                  Preview Coming Soon
                </button>
              )}

              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-foreground">Choose Option:</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button 
                      onClick={() => {
                        addTemplate(template.slug);
                        updatePurchaseType(template.slug, "template_only");
                        openCheckoutFor([template.slug]);
                      }}
                      className="w-full flex flex-col items-center justify-center p-3 border border-border/60 hover:border-foreground bg-background hover:bg-foreground/[0.02] text-foreground rounded-sm transition-colors text-sm"
                    >
                      <span className="font-medium">Template Only</span>
                      <span className="text-muted-foreground">${template.price}</span>
                    </button>

                    <button 
                      onClick={() => {
                        addTemplate(template.slug);
                        updatePurchaseType(template.slug, "template_setup");
                        openCheckoutFor([template.slug]);
                      }}
                      className="relative w-full flex flex-col items-center justify-center p-3 border border-primary/30 hover:border-primary bg-primary/5 hover:bg-primary/10 text-foreground rounded-sm transition-colors text-sm"
                    >
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded-sm font-bold whitespace-nowrap">
                        ⭐ Recommended
                      </div>
                      <span className="font-medium">Template + Setup</span>
                      <span className="text-muted-foreground">${template.price + template.setupPrice}</span>
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    addTemplate(template.slug);
                    trackTemplateAddedToBundle(template.slug, "detail");
                  }}
                  disabled={inBundle}
                  className={`w-full py-3 mt-2 text-sm font-medium flex items-center justify-center gap-2 transition-colors border rounded-sm ${
                    inBundle
                      ? "border-border/40 bg-foreground/[0.02] text-muted-foreground cursor-default"
                      : "border-border/60 hover:bg-muted"
                  }`}
                >
                  {inBundle ? (
                    <><Check className="h-4 w-4" /> In Bundle</>
                  ) : (
                    <><Plus className="h-4 w-4" /> Add to Bundle</>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Metadata */}
            <div className="mt-10 py-6 border-y border-border/40 grid grid-cols-2 gap-4 text-sm">
               <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="h-4 w-4 shrink-0" />
                  <span className="truncate">By {template.creator}</span>
               </div>
               <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 shrink-0" />
                  <span>{formattedDate}</span>
               </div>
               <div className="flex items-center gap-2 text-muted-foreground">
                  <Code className="h-4 w-4 shrink-0" />
                  <span>React / Vite / Tailwind</span>
               </div>
               <div className="flex items-center gap-2 text-muted-foreground">
                  <FileText className="h-4 w-4 shrink-0" />
                  <span>Full Documentation</span>
               </div>
            </div>

            <div className="mt-12">
              <h3 className="font-display text-lg font-medium mb-6">Features & Included</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {template.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5"><CheckCircle2 className="h-4 w-4 text-primary/70" /></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {template.license && (
               <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border/40">
                 <h3 className="font-display text-lg font-medium mb-4">License Details</h3>
                 <ul className="space-y-3 text-sm text-muted-foreground">
                   <li className="flex justify-between border-b border-border/30 pb-2">
                     <span>Commercial Use</span>
                     <span className="font-medium text-foreground">{template.license.commercialUse ? "Yes" : "No"}</span>
                   </li>
                   <li className="flex justify-between border-b border-border/30 pb-2">
                     <span>Client Projects</span>
                     <span className="font-medium text-foreground">{template.license.clientProjects ? "Yes" : "No"}</span>
                   </li>
                   <li className="flex justify-between border-b border-border/30 pb-2">
                     <span>Resale</span>
                     <span className="font-medium text-foreground">{template.license.resale ? "Yes" : "No"}</span>
                   </li>
                   <li className="flex justify-between pt-1">
                     <span>Attribution Required</span>
                     <span className="font-medium text-foreground">{template.license.attributionRequired ? "Yes" : "No"}</span>
                   </li>
                 </ul>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
