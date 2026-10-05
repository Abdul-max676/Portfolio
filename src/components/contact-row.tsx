import { ArrowUpRight, Mail, Phone, Social } from "@/components/icons";
import type { ContactItem } from "@/lib/content";

const icons = {
  email: Mail,
  phone: Phone,
  social: Social,
} as const;

/** Renders an <li>. Place inside a <ul>. The whole row is one link. */
export function ContactRow({ kind, label, value, href }: ContactItem) {
  const Icon = icons[kind];
  const external = /^https?:\/\//.test(href);

  return (
    <li className="border-t border-rule first:border-t-0">
      <a
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : undefined)}
        className="group flex items-center gap-4 py-6"
      >
        <Icon className="size-4.5 shrink-0 text-muted" />
        <span className="min-w-0 flex-1">
          <span className="block text-muted">{label}</span>
          <span className="block break-words text-tagline font-medium text-fg transition-colors duration-(--dur-ui) ease-out group-hover:text-accent group-focus-visible:text-accent">
            {value}
          </span>
        </span>
        <ArrowUpRight className="size-4 shrink-0 text-muted transition-colors duration-(--dur-ui) ease-out group-hover:text-accent group-focus-visible:text-accent" />
        {external ? (
          <span className="sr-only">(opens in a new tab)</span>
        ) : null}
      </a>
    </li>
  );
}