import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li";
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", shown && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function SectionShell({
  id,
  label,
  heading,
  intro,
  children,
  className,
}: {
  id?: string;
  label?: string;
  heading?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("border-t border-line py-16 md:py-20", className)}>
      {(label || heading || intro) && (
        <Reveal>
          {label && (
            <p className="mb-3 font-mono text-[11px] tracking-[0.3em] text-ember">{label}</p>
          )}
          {heading && (
            <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              {heading}
            </h2>
          )}
          {intro && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-mute">{intro}</p>}
        </Reveal>
      )}
      {children}
    </section>
  );
}
