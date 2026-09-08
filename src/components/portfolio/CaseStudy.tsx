import { useState } from "react";
import { Reveal } from "./Section";

const CHAIN = [
  "Concurrent regression",
  "Hundreds of tests querying MongoDB",
  "Continuous polling",
  "Excessive database query load",
  "Database throttling",
  "False test failures",
  "Long reruns",
  "Reduced trust in the pipeline",
];

const FIXES = [
  {
    n: "01",
    title: "Interval-based polling",
    body: "Replaced continuous querying with controlled intervals, cutting query volume without losing async coverage.",
    tag: "Engineering decision I drove",
  },
  {
    n: "02",
    title: "Graceful failure behaviour",
    body: "Made tests degrade predictably under load so a failure pointed at product behaviour, not infrastructure noise.",
    tag: "Engineering decision I drove",
  },
  {
    n: "03",
    title: "MongoDB → DocumentDB",
    body: "Migration for additional headroom under concurrent execution.",
    tag: "Collaborative work with DevOps",
  },
];

export function CaseStudy() {
  const [active, setActive] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <section id="engineering" className="border-t border-line py-16 md:py-20">
      <Reveal>
        <p className="mb-3 font-mono text-[11px] tracking-[0.3em] text-mute">
          ENGINEERING CASE STUDY / 01
        </p>
        <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          When a green pipeline stopped meaning anything.
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-mute">
          How I helped turn an unreliable regression signal into one engineers could trust.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10 grid gap-9 lg:grid-cols-2">
          <div className="space-y-7">
            <div className="border-l-2 border-line pl-5">
              <p className="mb-2 font-mono text-[10px] tracking-[0.25em] text-ember">PROBLEM</p>
              <p className="font-display text-lg leading-snug">
                Regression was producing more than 70% false failures during release windows.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                A large regression suite was being run by multiple squads during a 2–3 day release
                sign-off window. The result was a huge amount of time spent investigating failures
                that were not actual product defects.
              </p>
            </div>

            <div className="border-l-2 border-ember pl-5">
              <p className="mb-2 font-mono text-[10px] tracking-[0.25em] text-ember">ROOT CAUSE</p>
              <p className="font-display text-lg leading-snug">
                Continuous polling became a scalability problem.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                Async events were being verified by querying MongoDB. The polling approach was
                reasonable for an individual test, but under concurrent execution across multiple
                squads it generated enough query volume to bottleneck the database.
              </p>
            </div>
          </div>

          {/* INVESTIGATION — hover links each step to the next */}
          <div className="border border-line bg-ink-2 p-6">
            <p className="mb-5 font-mono text-[10px] tracking-[0.25em] text-mute">INVESTIGATION</p>
            <ol onMouseLeave={() => setActive(null)}>
              {CHAIN.map((step, i) => {
                const isActive = active === i;
                const isNext = active !== null && i === active + 1;
                const dim = active !== null && !isActive && !isNext;
                return (
                  <li key={step}>
                    <div
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      tabIndex={0}
                      className={`flex items-center gap-3 border-l-2 py-2 pl-3 transition-all duration-300 outline-none ${
                        isActive
                          ? "border-ember bg-ember/5"
                          : isNext
                            ? "border-ember/50"
                            : "border-line"
                      } ${dim ? "opacity-45" : "opacity-100"}`}
                    >
                      <span
                        className={`font-mono text-[10px] ${isActive || isNext ? "text-ember" : "text-mute/60"}`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`text-sm ${isActive || isNext ? "text-bone" : "text-mute"}`}>
                        {step}
                      </span>
                    </div>
                    {i < CHAIN.length - 1 && (
                      <div
                        className={`ml-[7px] h-2.5 w-px transition-colors duration-300 ${
                          isActive ? "bg-ember" : "bg-line"
                        }`}
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Reveal>

      {/* ENGINEERING CHANGES */}
      <Reveal delay={60}>
        <p className="mt-12 mb-4 font-mono text-[10px] tracking-[0.25em] text-mute">
          ENGINEERING CHANGES
        </p>
        <div className="grid gap-px border border-line bg-line sm:grid-cols-3">
          {FIXES.map((f) => (
            <div key={f.n} className="bg-ink-2 p-6 transition-colors hover:bg-ink-3">
              <p className="font-mono text-[10px] tracking-[0.2em] text-ember">{f.n}</p>
              <p className="mt-3 font-display text-base">{f.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-mute">{f.body}</p>
              <p className="mt-4 font-mono text-[10px] tracking-[0.12em] text-mute/70">{f.tag}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* RESULT */}
      <Reveal delay={60}>
        <div className="mt-9 grid gap-6 sm:grid-cols-2">
          <div className="border border-line bg-ink-2 p-6">
            <p className="font-mono text-[10px] tracking-[0.25em] text-mute">FALSE FAILURES</p>
            <p className="mt-2 font-display text-2xl font-semibold text-ember">&gt;70% → ~5%</p>
          </div>
          <div className="border border-line bg-ink-2 p-6">
            <p className="font-mono text-[10px] tracking-[0.25em] text-mute">REGRESSION</p>
            <p className="mt-2 font-display text-2xl font-semibold text-ember">
              7+ HOURS → ~2 HOURS
            </p>
          </div>
        </div>

        <blockquote className="mt-9 max-w-3xl border-l-2 border-ember pl-6 font-display text-xl leading-snug md:text-2xl">
          “The goal wasn’t simply to make the pipeline faster. It was to make a{" "}
          <span className="text-ember">failed test mean something again.</span>”
        </blockquote>

        <div className="mt-8 border-t border-line pt-5">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="font-mono text-xs tracking-[0.15em] text-ember transition-colors hover:text-bone"
          >
            {open ? "Close deep dive ↑" : "Technical deep dive →"}
          </button>

          {open && (
            <div className="mt-6 grid max-w-4xl gap-6 text-sm leading-relaxed text-mute md:grid-cols-2">
              <p>
                <span className="text-bone">Why continuous polling was problematic.</span> Verifying
                an async event by querying in a tight loop is cheap for one test and expensive for
                hundreds. The cost scales with concurrency, not with the number of assertions.
              </p>
              <p>
                <span className="text-bone">Why Thread.sleep wasn’t the answer.</span> Fixed sleeps
                trade one unreliable behaviour for another: too short and the test still fails, too
                long and the suite runtime balloons. Neither makes the signal more truthful.
              </p>
              <p>
                <span className="text-bone">How concurrency changed the problem.</span> Multiple
                squads running regression in the same window turned an acceptable per-test query
                pattern into sustained aggregate load the data store had to absorb.
              </p>
              <p>
                <span className="text-bone">How database load affected reliability.</span> Once the
                store throttled, timing-sensitive verifications failed regardless of product
                correctness — so failures no longer correlated with defects.
              </p>
              <p>
                <span className="text-bone">Why interval polling helped.</span> Controlled intervals
                with sensible upper bounds preserved async coverage while sharply reducing query
                volume, keeping the store inside its comfortable operating range.
              </p>
              <p>
                <span className="text-bone">Why graceful failure mattered.</span> Distinguishing
                “not observed yet” from “observed and wrong” let triage focus on real defects
                instead of re-running everything by default.
              </p>
              <p className="md:col-span-2">
                <span className="text-bone">
                  Why dynamic test data matters under parallel execution.
                </span>{" "}
                Shared or static fixtures collide when many workers run at once. Generating data per
                run removes cross-test interference, which is a prerequisite for trusting parallel
                results.
              </p>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
