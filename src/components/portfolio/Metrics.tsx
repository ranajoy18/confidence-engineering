import { useCountUp, useReveal } from "@/hooks/use-reveal";
import { Reveal } from "./Section";

function CountMetric({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.4);
  const value = useCountUp(target, shown);
  return (
    <div ref={ref} className="bg-ink-2 p-7 transition-colors hover:bg-ink-3">
      <p className="font-display text-3xl font-semibold text-ember tabular-nums lg:text-[2.1rem]">
        {value.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-3 font-mono text-[11px] tracking-[0.15em] text-mute">{label}</p>
    </div>
  );
}

function DeltaMetric({ from, to, label }: { from: string; to: string; label: string }) {
  return (
    <div className="bg-ink-2 p-7 transition-colors hover:bg-ink-3">
      <p className="font-display text-3xl font-semibold text-ember lg:text-[2.1rem]">
        <span className="text-bone/45">{from}</span> <span className="text-ember">→</span> {to}
      </p>
      <p className="mt-3 font-mono text-[11px] tracking-[0.15em] text-mute">{label}</p>
    </div>
  );
}

export function Metrics() {
  return (
    <section className="border-t border-line py-16 md:py-20">
      <Reveal>
        <div className="flex flex-wrap items-baseline gap-4">
          <span className="font-mono text-[11px] tracking-[0.3em] text-ember">IMPACT</span>
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Numbers I can defend.
          </h2>
        </div>
        <p className="mt-4 mb-9 max-w-2xl text-sm leading-relaxed text-mute">
          Not vanity metrics. These are outcomes from problems I investigated, systems I changed,
          and automation I owned.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          <DeltaMetric from="70%" to="~5%" label="FALSE-FAILURE RATE" />
          <DeltaMetric from="7+ HRS" to="<2 HRS" label="REGRESSION RUNTIME" />
          <CountMetric target={1500} suffix="+" label="REGRESSION SCENARIOS" />
          <CountMetric target={4} suffix="" label="MICROSERVICES OWNED" />
        </div>
      </Reveal>
    </section>
  );
}
