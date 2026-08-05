import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";

export const ConsultationOnboarding = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "valid" | "invalid">("loading");

  useEffect(() => {
    document.title = "Project Onboarding | Temmora";
    
    // Simulate token verification against backend
    const verifyToken = async () => {
      if (!token) {
        setStatus("invalid");
        return;
      }
      
      // MOCK: Replace with actual backend API call
      // e.g., const res = await fetch(`/api/verify-token?token=${token}`)
      setTimeout(() => {
        // If valid, show the questionnaire flow
        // The real backend will return the purchase_type (template_plus_setup or custom_discovery)
        setStatus("valid");
      }, 1000);
    };

    verifyToken();
  }, [token]);

  if (status === "loading") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (status === "invalid") {
    return (
      <div className="py-24 text-center">
        <h1 className="font-display text-2xl font-semibold">Invalid or Expired Link</h1>
        <p className="mt-4 text-muted-foreground">
          We couldn't verify your consultation access. Please check your purchase receipt for the correct link or contact support.
        </p>
      </div>
    );
  }

  return (
    <div className="py-24">
      <div className="temmora-container max-w-2xl">
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl font-semibold tracking-tight">Project Onboarding</h1>
          <p className="mt-2 text-muted-foreground">
            Let's get everything ready for your consultation.
          </p>
        </div>

        {/* Placeholder for the multi-step form */}
        <div className="rounded-lg border border-border/40 bg-background/50 p-8">
          <h2 className="mb-6 font-display text-xl font-medium">1. Tell us about your project</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Business / Company Name</label>
              <input type="text" className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">What are your main objectives?</label>
              <textarea rows={4} className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"></textarea>
            </div>
            <div className="border-t border-border/40 pt-6 mt-6">
              <label className="mb-1.5 block text-sm font-medium">Brand Assets (Optional)</label>
              <p className="mb-4 text-xs text-muted-foreground">Upload your logo or brand guidelines (Max 5MB, PNG/JPG/PDF only).</p>
              <div className="flex h-24 w-full flex-col items-center justify-center rounded-md border border-dashed border-input bg-muted/20">
                <span className="text-sm text-muted-foreground">Click or drag files here</span>
              </div>
            </div>
          </div>
          
          <button className="mt-8 w-full bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Submit & Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
