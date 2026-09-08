export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm tracking-[0.25em]">RANAJOY DAS</p>
          <p className="mt-2 font-mono text-[10px] tracking-[0.2em] text-mute">
            SDET · AUTOMATION ENGINEER
          </p>
        </div>
        <nav aria-label="Footer" className="flex gap-6 font-mono text-[11px] tracking-[0.15em] text-mute">
          <a
            href="https://linkedin.com/in/ranajoy-das"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-bone"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ranajoy18"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-bone"
          >
            GitHub
          </a>
          <a href="mailto:rdas19999@gmail.com" className="transition-colors hover:text-bone">
            Email
          </a>
        </nav>
      </div>
      <p className="mt-8 font-mono text-[10px] tracking-[0.15em] text-mute/50">
        © 2026 Ranajoy Das
      </p>
    </footer>
  );
}
