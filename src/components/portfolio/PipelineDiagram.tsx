const NODES = [
  { id: "01", label: "REQUIREMENT", note: "Acceptance criteria reviewed early" },
  { id: "02", label: "TEST SCENARIOS", note: "Cucumber BDD scenarios" },
  { id: "03", label: "UI / API / DB TESTS", note: "Selenium · REST Assured · data checks" },
  { id: "04", label: "CI / PARALLEL EXECUTION", note: "Docker · GitLab CI · parallel pods" },
  { id: "05", label: "VALIDATION", note: "Async events · assertions · triage" },
  { id: "06", label: "RELEASE CONFIDENCE", note: "A failure means something" },
];

const ROW = 62;
const TOP = 24;

export function PipelineDiagram() {
  const height = TOP + ROW * (NODES.length - 1) + 24;

  return (
    <figure
      className="border border-line bg-ink-2 p-5"
      aria-label="Test engineering flow from requirement to release confidence"
    >
      <figcaption className="mb-5 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.25em] text-mute">RELEASE PIPELINE</span>
        <span className="font-mono text-[10px] tracking-[0.2em] text-ember">
          <span className="node-pulse inline-block">●</span> live
        </span>
      </figcaption>

      <div className="relative" style={{ height }}>
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox={`0 0 320 ${height}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="7"
            y1={TOP}
            x2="7"
            y2={TOP + ROW * (NODES.length - 1)}
            stroke="var(--line)"
            strokeWidth="1"
          />
          <line
            className="signal-line"
            x1="7"
            y1={TOP}
            x2="7"
            y2={TOP + ROW * (NODES.length - 1)}
            stroke="var(--ember)"
            strokeWidth="1.25"
            opacity="0.75"
          />
        </svg>

        <ol className="relative">
          {NODES.map((n, i) => {
            const last = i === NODES.length - 1;
            return (
              <li
                key={n.id}
                className="group flex items-start gap-4"
                style={{ height: i === NODES.length - 1 ? undefined : ROW }}
              >
                <span
                  className={`mt-[6px] h-[13px] w-[13px] shrink-0 rounded-full border transition-all duration-300 ${
                    last
                      ? "border-ember bg-ember/80"
                      : "border-line bg-ink-2 group-hover:border-ember/70"
                  }`}
                >
                  <span
                    className={`mx-auto mt-[3px] block h-[5px] w-[5px] rounded-full transition-colors duration-300 ${
                      last ? "bg-ink" : "bg-line group-hover:bg-ember"
                    }`}
                  />
                </span>
                <span className="min-w-0">
                  <span
                    className={`block font-mono text-[11px] tracking-[0.16em] transition-colors duration-300 ${
                      last ? "text-ember" : "text-bone/85 group-hover:text-bone"
                    }`}
                  >
                    {n.label}
                  </span>
                  <span className="mt-1 block text-[12px] leading-snug text-mute/80">{n.note}</span>
                </span>
                <span className="ml-auto pl-3 font-mono text-[10px] text-line">{n.id}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </figure>
  );
}
