import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "WORK", href: "#work" },
  { label: "ENGINEERING", href: "#engineering" },
  { label: "ABOUT", href: "#about" },
  { label: "GITHUB", href: "https://github.com/ranajoy18" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-[1200px] items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <a href="#top" className="font-display text-sm tracking-[0.25em] text-bone">
          RANAJOY DAS
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
              className="font-mono text-[11px] tracking-[0.2em] text-mute transition-colors hover:text-bone"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-ember/30 px-3 py-1.5 font-mono text-[11px] tracking-[0.2em] text-ember transition-colors hover:bg-ember/10"
          >
            DOWNLOAD CV
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="border border-line p-2 text-bone md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 font-mono text-[12px] tracking-[0.2em] text-mute transition-colors hover:text-bone"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block border border-ember/30 px-3 py-2 font-mono text-[11px] tracking-[0.2em] text-ember"
              >
                DOWNLOAD CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
