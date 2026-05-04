import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_URL = "https://wa.me/2349160735891";

const CONTACT_EMAIL = "brandkingconsult@gmail.com";
const MAX_WORDS = 150;

const countWords = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const wordCount = countWords(message);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
      formData.append("_subject", `New inquiry from ${name}`);
      formData.append("_template", "table");
      formData.append("_captcha", "false");

      const response = await fetch("https://formsubmit.co/ajax/brandkingconsult@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSent(true);
        toast.success("Message sent successfully!", {
          description: "I'll get back to you as soon as possible.",
        });
        // Clear form
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later or email me directly at brandkingconsult@gmail.com",
      });
    } finally {
      setSending(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      toast.success("Email address copied");
    } catch {
      toast.error("Couldn't copy — long-press the email above to copy it.");
    }
  };

  return (
    <section id="contact" className="py-32 md:py-40">
      <div className="container-tight">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            09 — Contact
          </p>
          <h2 className="mt-6 font-display text-5xl font-medium leading-[1.02] md:text-7xl lg:text-8xl">
            Let's talk.
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="link-underline inline-block font-display text-2xl text-primary md:text-3xl"
            >
              {CONTACT_EMAIL}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 border border-border bg-foreground/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground/[0.08]"
            >
              <Copy className="h-3 w-3" />
              Copy
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-[#25D366] px-5 py-3 text-xs uppercase tracking-[0.2em] text-white transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <span className="text-xs text-muted-foreground">
              Quickest replies — usually within a few hours.
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal mt-20 grid gap-10 border-t border-border pt-16 md:grid-cols-2"
        >
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Name
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-0 border-b border-border bg-transparent py-3 text-lg text-foreground outline-none transition-colors focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Email
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-0 border-b border-border bg-transparent py-3 text-lg text-foreground outline-none transition-colors focus:border-primary"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              What are you working on?
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none border-0 border-b border-border bg-transparent py-3 text-lg text-foreground outline-none transition-colors focus:border-primary"
            />
            <div className="flex justify-between">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {wordCount > MAX_WORDS && (
                  <span className="text-destructive animate-pulse">Too long — please shorten your message</span>
                )}
              </p>
              <p 
                className={`text-right text-[10px] uppercase tracking-[0.18em] transition-colors ${
                  wordCount > MAX_WORDS ? "font-bold text-destructive" : "text-muted-foreground"
                }`}
              >
                {wordCount} / {MAX_WORDS} words
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:col-span-2">
            <button
              type="submit"
              disabled={wordCount > MAX_WORDS || sending}
              className="group inline-flex items-center gap-3 border border-foreground bg-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] text-background transition-all hover:bg-transparent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              {sending ? (
                <>
                  Sending...
                  <div className="h-3 w-3 animate-spin rounded-full border-2 border-background border-t-transparent" />
                </>
              ) : sent ? (
                <>
                  Message Sent
                  <Check className="h-4 w-4" />
                </>
              ) : (
                <>
                  {wordCount > MAX_WORDS ? "Too many words" : "Send message"}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </>
              )}
            </button>
            <p className="text-xs text-muted-foreground">
              {sent 
                ? "Got it! I'll be in touch soon." 
                : "This message will be sent directly to brandkingconsult@gmail.com"}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
