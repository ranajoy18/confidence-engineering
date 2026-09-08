import { Reveal } from "./Section";

const WORK = [
  {
    category: "RELIABILITY / DEVELOPER PRODUCTIVITY",
    title: "Failure Triage",
    body: "Built a post-run failure capture and triage workflow that identifies failures and makes rerun and debugging more targeted.",
  },
  {
    category: "SCALABILITY / CI",
    title: "Parallel Regression",
    body: "Designed a pod-per-feature-file execution model with autoscaling that helped reduce Booking microservice regression runtime from 7+ hours to under 2.",
  },
  {
    category: "TEST ARCHITECTURE",
    title: "Dynamic Test Data",
    body: "Introduced dynamic test data generation and typed POJO deserialization using Java Faker and ObjectMapper.",
  },
  {
    category: "QUALITY ENGINEERING",
    title: "Shift-Left Quality",
    body: "Participate from requirements and acceptance criteria through development testing rather than treating QA as a downstream phase.",
  },
];

export function FeaturedWork() {
  return (
    <section id="work" className="border-t border-line py-16 md:py-20">
      <Reveal>
        <h2 className="mb-10 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Things I’ve actually built.
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {WORK.map((w) => (
            <a
              key={w.title}
              href="#engineering"
              className="group bg-ink-2 p-7 transition-colors hover:bg-ink-3"
            >
              <p className="font-mono text-[10px] tracking-[0.2em] text-mute">{w.category}</p>
              <h3 className="mt-4 font-display text-xl font-semibold">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{w.body}</p>
              <span className="mt-5 inline-block font-mono text-xs tracking-[0.15em] text-ember">
                Read case study{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
