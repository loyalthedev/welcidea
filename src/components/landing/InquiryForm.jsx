import { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { INQUIRY_CATEGORIES } from "@/lib/brand";
import { onBookingRequest } from "@/lib/booking";

const empty = { full_name: "", email: "", category: "", message: "" };
const fieldClass =
  "field-surface border-primary/25 text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary/60";

export default function InquiryForm() {
  const { toast } = useToast();
  const [form, setForm] = useState(empty);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const update = (key) => (event) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  useEffect(
    () =>
      onBookingRequest((event) => {
        setError("");
        setForm((prev) => ({
          ...prev,
          category: INQUIRY_CATEGORIES[0],
          message: `Booking enquiry for ${event.detail.name}.`,
        }));
        // Land the visitor directly on the name + email fields they need to complete.
        requestAnimationFrame(() => {
          const nameField = document.getElementById("full_name");
          if (!nameField) return;
          nameField.scrollIntoView({ behavior: "smooth", block: "center" });
          nameField.focus({ preventScroll: true });
        });
      }),
    [],
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !form.full_name.trim() ||
      !form.email.trim() ||
      !form.category ||
      !form.message.trim()
    ) {
      setError("Please complete every field so we can respond properly.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      await base44.entities.Inquiry.create({
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        category: form.category,
        message: form.message.trim(),
      });
      setForm(empty);
      toast({
        title: "Vision received.",
        description:
          "Thank you — the WELCIDEA team will be in touch with you shortly.",
      });
    } catch (err) {
      setError("Something went wrong sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
      <div className='grid gap-6 sm:grid-cols-2'>
        <div className='flex flex-col gap-2'>
          <Label
            htmlFor='full_name'
            className='text-[11px] uppercase tracking-[0.2em] text-muted-foreground'
          >
            Full Name
          </Label>
          <Input
            id='full_name'
            value={form.full_name}
            onChange={update("full_name")}
            className={fieldClass}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label
            htmlFor='email'
            className='text-[11px] uppercase tracking-[0.2em] text-muted-foreground'
          >
            Email Address
          </Label>
          <Input
            id='email'
            type='email'
            value={form.email}
            onChange={update("email")}
            className={fieldClass}
          />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <Label className='text-[11px] uppercase tracking-[0.2em] text-muted-foreground'>
          Inquiry Category
        </Label>
        <Select
          value={form.category}
          onValueChange={(value) =>
            setForm((prev) => ({ ...prev, category: value }))
          }
        >
          <SelectTrigger className={fieldClass}>
            <SelectValue placeholder='Select a category' />
          </SelectTrigger>
          <SelectContent>
            {INQUIRY_CATEGORIES.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className='flex flex-col gap-2'>
        <Label
          htmlFor='message'
          className='text-[11px] uppercase tracking-[0.2em] text-muted-foreground'
        >
          Message / Vision Brief
        </Label>
        <Textarea
          id='message'
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about the vision you're carrying."
          className={fieldClass}
        />
      </div>

      {error && <p className='text-sm text-destructive'>{error}</p>}

      <button
        type='submit'
        disabled={submitting}
        className='rounded-full border border-primary/35 bg-black/20 p-[3px] transition-all duration-300 hover:opacity-95 disabled:opacity-60'
      >
        <span className='gold-surface flex h-11 w-full items-center justify-center rounded-full text-[11px] font-bold uppercase tracking-[0.18em] text-black sm:h-12 sm:text-[12px]'>
          {submitting ? "Sending…" : "Submit Your Vision"}
        </span>
      </button>
    </form>
  );
}
