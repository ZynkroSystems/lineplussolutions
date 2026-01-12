import { useState, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const QuickContactCard = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emergencyPhone = "+44 (0) 1234 567 890";
  const emergencyTel = "tel:+441234567890";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    toast({
      title: "Thanks — we received your request",
      description: "We will respond quickly to confirm next steps.",
    });

    const form = event.currentTarget;
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">Quick Contact</h3>
          <p className="text-sm text-muted-foreground">
            For urgent breakdowns, call us directly.
          </p>
        </div>
        <a
          href={emergencyTel}
          className="inline-flex items-center gap-2 rounded-md border border-secondary/40 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-secondary transition-colors hover:bg-secondary/10"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
      </div>

      <div className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:gap-6">
        <a
          href={emergencyTel}
          className="inline-flex items-center gap-2 text-foreground hover:text-secondary"
        >
          <Phone className="h-4 w-4 text-secondary" />
          {emergencyPhone}
        </a>
        <a
          href="mailto:info@lineplus.co.uk"
          className="inline-flex items-center gap-2 text-foreground hover:text-secondary"
        >
          <Mail className="h-4 w-4 text-secondary" />
          info@lineplus.co.uk
        </a>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 space-y-2.5">
        <div className="grid gap-2.5 sm:grid-cols-2">
          <Input name="fullName" placeholder="Full name" required className="h-10" />
          <Input name="phone" placeholder="Phone number" required className="h-10" />
        </div>
        <Textarea name="message" placeholder="How can we help?" rows={2} required />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Request a Call Back"}
        </Button>
      </form>
    </div>
  );
};

export default QuickContactCard;
