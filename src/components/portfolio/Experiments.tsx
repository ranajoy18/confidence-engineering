import { Reveal } from "./Section";

const EXPLORING = [
  { name: "Playwright", tag: "" },
  { name: "Python", tag: "FUNDAMENTALS" },
  { name: "AI-assisted test authoring", tag: "" },
  { name: "API automation", tag: "" },
  { name: "Quality engineering", tag: "" },
];

export function Experiments() {
  return (
    <section className="border-t border-line py-14 md:py-16">
      <Reveal>
        <h2 className="mb-8 font-display text-2xl font-semibold tracking-tight md:text-3xl">
          Still building.
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <div className="grid gap-px border border-line bg-line lg:grid-cols-3">
          <div className="bg-ink-2 p-7 lg:col-span-2">
            <p className="font-mono text-[10px] tracking-[0.25em] text-mute">FEATURED EXPERIMENT</p>
            <h3 className="mt-4 font-display text-xl font-semibold">naukri-profile-refresh</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Playwright", "TypeScript", "GitHub Actions"].map((t) => (
                <span
                  key={t}
                  className="border border-line px-2.5 py-1 font-mono text-[10px] tracking-wider text-mute"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              An automation project using Playwright + TypeScript with Page Object Model, session
              reuse and scheduled GitHub Actions execution.
            </p>
          </div>
          <div className="bg-ink-2 p-7">
            <p className="mb-4 font-mono text-[10px] tracking-[0.25em] text-ember">
              CURRENTLY EXPLORING
            </p>
            <ul className="space-y-2.5 text-sm text-mute">
              {EXPLORING.map((e) => (
                <li key={e.name} className="flex items-center justify-between gap-3">
                  <span>{e.name}</span>
                  {e.tag && <span className="font-mono text-[10px] text-ember">{e.tag}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
