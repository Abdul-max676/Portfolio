import type { Metadata } from "next";
import { ContactRow } from "@/components/contact-row";
import { contact } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="page-container py-page">
      <h1 className="text-title font-semibold text-fg">Contact</h1>
      <p className="mt-3 max-w-measure text-lead text-muted">{contact.intro}</p>

      <ul className="mt-5">
        {contact.items.map((item) => (
          <ContactRow key={item.kind} {...item} />
        ))}
      </ul>
    </div>
  );
}