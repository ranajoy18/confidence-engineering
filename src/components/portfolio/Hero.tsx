import { PipelineDiagram } from "./PipelineDiagram";
import { Reveal } from "./Section";

export function Hero() {
  return (
    <section
      id="top"
      className="relative grid items-center gap-12 pt-14 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20 lg:pb-20"
    >
      <div
        className="grid-texture pointer-events-none absolute inset-x-[-24px] top-[-40px] bottom-0 -z-10 opacity-40 [mask-image:radial-gradient(70%_60%_at_30%_30%,#000,transparent)]"
        aria-hidden="true"
      />
      <Reveal>
        <p className="mb-6 font-mono text-[11px] tracking-[0.3em] text-ember">
          SOFTWARE DEVELOPMENT ENGINEER IN TEST
        </p>
        <h1 className="font-display text-4xl leading-[1.04] font-semibold tracking-tight text-balance md:text-5xl lg:text-[3.4rem]">
          I build test systems that make releases faster, more reliable, and easier to{" "}
          <span className="text-ember">trust.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-mute">
          3+ years building and scaling automation across UI, API, database and service-integration
          layers — with CI/CD, Docker and AWS at the execution layer.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="bg-ember px-5 py-3 font-mono text-xs tracking-[0.15em] text-ink transition-colors hover:bg-ember/90"
          >
            EXPLORE THE WORK
          </a>
          <a
            href="https://github.com/ranajoy18"
            target="_blank"
            rel="noreferrer noopener"
            className="border border-line px-5 py-3 font-mono text-xs tracking-[0.15em] text-bone transition-colors hover:border-ember/40"
          >
            GITHUB
          </a>
          <a
            href="https://drive.google.com/drive/folders/1D-x2WY1iQb7NKe_aAd5N6ZmoHJQQ0vBD?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-xs tracking-[0.15em] text-mute transition-colors hover:text-bone"
          >
            Download CV ↗
          </a>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <PipelineDiagram />
      </Reveal>
    </section>
  );
}
