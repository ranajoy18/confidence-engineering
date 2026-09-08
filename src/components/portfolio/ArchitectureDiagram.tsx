import { useState } from "react";
import { Reveal } from "./Section";

const LAYERS = [
  {
    label: "TEST DEFINITION",
    items: ["Java", "Cucumber", "Maven"],
    note: "Scenarios written as readable behaviour, versioned alongside the code they cover.",
  },
  {
    label: "AUTOMATION",
    items: ["Selenium", "REST Assured", "PageFactory"],
    note: "UI and API layers share structure so tests stay maintainable as the product changes.",
  },
  {
    label: "DATA + VALIDATION",
    items: ["MongoDB", "DocumentDB", "Java Faker", "ObjectMapper", "API", "UI", "Async Events"],
    note: "Generated data and typed deserialization keep parallel runs independent and assertions precise.",
  },
  {
    label: "EXECUTION",
    items: ["Docker", "GitLab CI/CD", "Amazon ECR", "Parallel Pods", "Autoscaling"],
    note: "Containerised runs scale out per feature file so regression finishes inside a release window.",
  },
  {
    label: "CLOUD",
    items: ["AWS", "S3", "CloudWatch", "Device Farm"],
    note: "Artifacts, logs and device coverage handled by managed infrastructure rather than local machines.",
  },
  {
    label: "REPORTING + TRIAGE",
    items: ["Serenity", "Failure Capture", "Debug / Rerun"],
    note: "Post-run capture makes a failure explainable and reruns targeted instead of wholesale.",
  },
];

export function ArchitectureDiagram() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="border-t border-line py-16 md:py-20">
      <Reveal>
        <p className="mb-3 font-mono text-[11px] tracking-[0.3em] text-mute">
          ENGINEERING / AUTOMATION SYSTEM
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Inside the automation system.
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-mute">
          From test definition to pipeline execution, I work across the layers that make automation
          reliable at scale.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10 max-w-3xl" onMouseLeave={() => setActive(null)}>
          {LAYERS.map((layer, i) => {
            const isActive = active === i;
            const last = i === LAYERS.length - 1;
            return (
              <div key={layer.label}>
                <div
                  tabIndex={0}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`border p-4 transition-all duration-300 outline-none ${
                    isActive
                      ? "border-ember/50 bg-ink-3"
                      : last
                        ? "border-ember/25 bg-ink-2"
                        : "border-line bg-ink-2"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="w-40 font-mono text-[10px] tracking-[0.2em] text-ember">
                      {layer.label}
                    </span>
                    <span className="text-sm text-bone/90">{layer.items.join(" · ")}</span>
                  </div>
                  <p
                    className={`overflow-hidden text-xs leading-relaxed text-mute transition-all duration-300 ${
                      isActive ? "mt-3 max-h-24 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {layer.note}
                  </p>
                </div>
                {!last && (
                  <div
                    className={`ml-4 h-3 w-px transition-colors duration-300 ${
                      isActive ? "bg-ember" : "bg-line"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
        <a
          href="#work"
          className="mt-8 inline-block font-mono text-xs tracking-[0.15em] text-ember transition-colors hover:text-bone"
        >
          Explore the engineering →
        </a>
      </Reveal>
    </section>
  );
}
