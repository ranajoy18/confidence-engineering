import { Reveal } from "./Section";

const PRINCIPLES = [
  {
    n: "01",
    title: "TRUST THE SIGNAL",
    body: "A test suite is only valuable when engineers believe what a failure means.",
  },
  {
    n: "02",
    title: "FIX THE SYSTEM, NOT THE PEOPLE",
    body: "Good quality systems reduce dependence on people simply trying harder.",
  },
  {
    n: "03",
    title: "SURFACE QUALITY EARLY",
    body: "I prefer being involved from requirements and acceptance criteria through dev testing, rather than receiving finished stories and simply writing tests.",
  },
];

export function Philosophy() {
  return (
    <section id="about" className="border-t border-line py-16 md:py-20">
      <Reveal>
        <h2 className="mb-10 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Testing is an engineering problem.
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <article key={p.n} className="bg-ink-2 p-7 transition-colors hover:bg-ink-3">
              <p className="font-mono text-[10px] tracking-[0.2em] text-ember">{p.n}</p>
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{p.body}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
