import { createFileRoute } from "@tanstack/react-router";

import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { Metrics } from "@/components/portfolio/Metrics";
import { CaseStudy } from "@/components/portfolio/CaseStudy";
import { Philosophy } from "@/components/portfolio/Philosophy";
import { ArchitectureDiagram } from "@/components/portfolio/ArchitectureDiagram";
import { FeaturedWork } from "@/components/portfolio/FeaturedWork";
import { Experiments } from "@/components/portfolio/Experiments";
import { ContactCTA } from "@/components/portfolio/ContactCTA";
import { Footer } from "@/components/portfolio/Footer";

const TITLE = "Ranajoy Das | SDET & Test Automation Engineer";
const DESCRIPTION =
  "SDET and Test Automation Engineer specializing in Java, Selenium, REST Assured, Playwright, CI/CD, AWS and scalable test automation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ink font-sans text-bone">
      <Navigation />
      <main className="mx-auto max-w-[1200px] px-6">
        <Hero />
        <Metrics />
        <CaseStudy />
        <Philosophy />
        <ArchitectureDiagram />
        <FeaturedWork />
        <Experiments />
        <ContactCTA />
        <Footer />
      </main>
    </div>
  );
}
