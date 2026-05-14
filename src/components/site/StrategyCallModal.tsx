import { useState, type FormEvent } from "react";
import { ArrowUpRight, CalendarIcon, Check, X } from "lucide-react";
import { format } from "date-fns";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// Calendly event link
const CALENDLY_URL = "https://calendly.com/brandkingconsult/brand-discovery-call-30-minutes";

interface StrategyCallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const focuses = ["UI/UX Design", "Product Build", "Website Audit", "Other"];

export const StrategyCallModal = ({ open, onOpenChange }: StrategyCallModalProps) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [focus, setFocus] = useState(focuses[0]);
  const [otherFocus, setOtherFocus] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState<Date | undefined>();

  const reset = () => {
    setStep(1);
    setName(""); setEmail(""); setCompany(""); setNotes(""); setDate(undefined);
    setFocus(focuses[0]);
    setOtherFocus("");
  };

  const handleClose = (v: boolean) => {
    onOpenChange(v);
    if (!v) setTimeout(reset, 300);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast.error("Please pick a preferred date.");
      return;
    }
    // Build Calendly prefilled URL; opens Calendly in new tab so user finalizes the slot
    const params = new URLSearchParams({
      name,
      email,
      a1: company,
      a2: focus === "Other" ? otherFocus || "Other" : focus,
      a3: `Preferred date: ${format(date, "PPP")}\n\n${notes}`,
      month: format(date, "yyyy-MM"),
      date: format(date, "yyyy-MM-dd"),
    });
    const url = `${CALENDLY_URL}?${params.toString()}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening Calendly to confirm your slot…");
    handleClose(false);
  };

  const canNext = name.trim() && /\S+@\S+\.\S+/.test(email);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-2xl gap-0 border border-border bg-background p-0 sm:!rounded-none [&>button]:hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4 tablet:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Strategy Call · 30 minutes
            </p>
            <p className="mt-1 font-display text-base text-foreground tablet:text-lg">
              Get strategic insights for your business
            </p>
          </div>
          <button
            onClick={() => handleClose(false)}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center gap-2 border-b border-border px-6 py-3 tablet:px-8">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <span
                className={cn(
                  "flex h-5 w-5 items-center justify-center text-[10px] font-mono",
                  step >= s
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground",
                )}
              >
                {step > s ? <Check className="h-3 w-3" /> : s}
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {s === 1 ? "Details" : "Schedule"}
              </span>
              {s === 1 && <span className="mx-2 h-px w-8 bg-border" />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="max-h-[70vh] overflow-y-auto px-6 py-8 tablet:px-8 tablet:py-10">
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid gap-6 tablet:grid-cols-2">

                <Field label="Full name">
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="hero-input"
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="hero-input"
                    placeholder="you@company.com"
                  />
                </Field>
              </div>
              <Field label="Company / project">
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="hero-input"
                  placeholder="Optional"
                />
              </Field>
              <Field label="What's the focus?">
                <div className="flex flex-wrap gap-2">
                  {focuses.map((f) => (
                    <button
                      type="button"
                      key={f}
                      onClick={() => setFocus(f)}
                      className={cn(
                        "border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors",
                        focus === f
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
                      )}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                {focus === "Other" && (
                  <div className="mt-3">
                    <input
                      value={otherFocus}
                      onChange={(e) => setOtherFocus(e.target.value)}
                      className="hero-input"
                      placeholder="Please specify..."
                      required
                    />
                  </div>
                )}
              </Field>

              <div className="pt-2">
                <p className="text-xs text-muted-foreground">
                  * Note: I am only available on weekdays from 11AM till 5PM for Strategy calls/meetings.
                </p>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  disabled={!canNext}
                  onClick={() => setStep(2)}
                  className="group inline-flex items-center gap-3 bg-primary px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <Field label="Preferred date">
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "flex w-full items-center justify-between border border-border bg-transparent px-4 py-3 text-left text-sm transition-colors hover:border-foreground",
                        !date && "text-muted-foreground",
                      )}
                    >
                      {date ? format(date, "EEEE, MMMM d, yyyy") : "Pick a date"}
                      <CalendarIcon className="h-4 w-4 opacity-60" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto border border-border bg-background p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </Field>

              <Field label="Anything I should know?">
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => {
                    const next = e.target.value;
                    const words = next.trim() ? next.trim().split(/\s+/) : [];
                    if (words.length <= 120) setNotes(next);
                    else setNotes(words.slice(0, 120).join(" "));
                  }}
                  className="hero-input resize-none"
                  placeholder="Context, links, the strategic challenge you're facing..."
                />
                <p className="mt-1 text-right text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {notes.trim() ? notes.trim().split(/\s+/).length : 0} / 120 words
                </p>
              </Field>

              <p className="border border-border bg-muted/30 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                On submit, you'll be redirected to Calendly with your details
                pre-filled. Confirm the time slot there to lock in the session.
              </p>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-primary px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Confirm & open Calendly
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
      {label}
    </label>
    {children}
  </div>
);
