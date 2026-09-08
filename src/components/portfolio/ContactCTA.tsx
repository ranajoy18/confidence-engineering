import { Reveal } from "./Section";

export function ContactCTA() {
  return (
    <section id="contact" className="border-t border-line py-20 text-center md:py-24">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          Let’s build better <span className="text-ember">release confidence.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-mute">
          Interested in test automation, quality engineering, or building systems that make releases
          safer?
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:rdas19999@gmail.com"
            className="bg-ember px-5 py-3 font-mono text-xs tracking-[0.15em] text-ink transition-colors hover:bg-ember/90"
          >
            EMAIL ME
          </a>
          <a
            href="https://github.com/ranajoy18"
            target="_blank"
            rel="noreferrer noopener"
            className="border border-line px-5 py-3 font-mono text-xs tracking-[0.15em] transition-colors hover:border-ember/40"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/ranajoy-das"
            target="_blank"
            rel="noreferrer noopener"
            className="border border-line px-5 py-3 font-mono text-xs tracking-[0.15em] transition-colors hover:border-ember/40"
          >
            LINKEDIN
          </a>
        </div>
      </Reveal>
    </section>
  );
}
