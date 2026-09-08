# Ranajoy's Engineering Core

Build the FIRST VERSION of my personal SDET portfolio website.

IMPORTANT:
Do NOT build the entire website yet.

For this iteration, focus on creating an exceptional, production-quality HOMEPAGE and the complete visual/design system that future pages and sections can reuse.

The website will eventually be linked directly from my CV and LinkedIn. It needs to feel like a serious engineering portfolio for an SDET / Quality Engineer — NOT like a generic developer portfolio or a resume converted into HTML.

==================================================
CORE OBJECTIVE
==================================================

The visitor should understand within approximately 10 seconds:

1. Who I am
2. What kind of engineer I am
3. What measurable problems I have solved
4. Why my work is technically interesting

The most important message is:

"I don't just write automated tests. I build and improve the systems around testing."

My strongest differentiators are:

- large-scale automation
- test reliability
- root-cause analysis
- CI/CD
- parallel execution
- UI + API + database testing
- microservices
- AWS
- Docker
- engineering productivity
- AI-assisted testing

The portfolio should make me look like an SDET who thinks like an engineer.

==================================================
PERSONAL INFORMATION
==================================================

Name:
Ranajoy Das

Professional title:
Software Development Engineer in Test (SDET)

Location:
Kolkata, India

Experience:
3+ years at Cognizant

Primary technologies:
Java
Selenium WebDriver
REST Assured
Cucumber BDD
TestNG
JUnit
Serenity BDD
GitLab CI/CD
Docker
AWS

Additional technologies:
Playwright
TypeScript
GitHub Actions
Pact
Postman
Swagger
PostgreSQL
MongoDB
DocumentDB
SQL
Java Faker
ObjectMapper

Programming:
Java — primary
TypeScript — working knowledge
Python — basic/fundamentals

Certifications:
AWS Certified Cloud Practitioner
Microsoft Certified: Azure Fundamentals

LinkedIn:
https://linkedin.com/in/ranajoy-das

GitHub:
https://github.com/ranajoy18

Email:
rdas19999@gmail.com

==================================================
BRAND POSITIONING
==================================================

Position me as:

SDET
Automation Engineer
Quality Engineer

The central brand idea:

"Engineering confidence into software releases."

Supporting idea:

"I build test systems that make releases faster, more reliable, and easier to trust."

Avoid calling me:
- QA tester
- manual tester
- AI engineer
- Python developer

Do not exaggerate my Python experience.

==================================================
VISUAL DIRECTION
==================================================

Create a premium dark-mode engineering aesthetic.

Think:

Linear
Vercel
modern developer tooling
technical editorial design
engineering dashboards
high-end SaaS product

NOT:

generic developer portfolio
cyberpunk
hacker terminal
gaming website
neon overload
AI-generated portfolio template
resume website

Use:

- near-black / graphite background
- warm off-white typography
- one restrained accent color
- subtle borders
- subtle grid/noise texture if tasteful
- generous whitespace
- strong typography hierarchy
- monospace font selectively for technical labels and metrics
- clean geometric layout

Avoid:

- giant gradients
- excessive glassmorphism
- glowing cards
- animated blobs
- stock photos
- cartoon robots
- skill percentage bars
- excessive icons
- fake terminal windows everywhere
- excessive particle effects

The website should feel expensive and intentional.

==================================================
TYPOGRAPHY
==================================================

Use a modern display/sans-serif typeface for major headings.

Use a highly readable sans-serif for body text.

Use monospace selectively for:

- metrics
- technical labels
- architecture nodes
- code-like annotations
- small metadata

Do NOT make the entire website monospace.

Major headings should be visually powerful.

==================================================
HOMEPAGE STRUCTURE
==================================================

Build these sections in this exact order:

1. Navigation
2. Hero
3. Impact metrics
4. Signature engineering case study
5. Engineering philosophy
6. Automation architecture preview
7. Featured work preview
8. Current learning / experiments
9. Contact CTA
10. Footer

Do NOT build separate About, Experience or Skills pages yet.

We will add those later.

==================================================
1. NAVIGATION
==================================================

Create a minimal sticky navigation.

Left:

RANAJOY DAS

Right:

WORK
ENGINEERING
ABOUT
GITHUB

Also provide a subtle:

DOWNLOAD CV

button.

Navigation should remain compact while scrolling.

On mobile, collapse into a clean menu.

Use smooth scrolling.

==================================================
2. HERO
==================================================

The hero is the most important visual section.

It should occupy approximately one viewport height.

Small eyebrow:

SOFTWARE DEVELOPMENT ENGINEER IN TEST

Main headline:

"I build test systems that make releases faster, more reliable, and easier to trust."

Use a large editorial headline.

Do NOT put my entire resume summary here.

Supporting text:

"3+ years building and scaling automation across UI, API, database and service-integration layers — with CI/CD, Docker and AWS at the execution layer."

CTA 1:

Explore the work

CTA 2:

GitHub

Small secondary link:

Download CV

==================================================
HERO VISUAL
==================================================

Instead of a portrait photo, create an abstract technical visualization.

It should represent:

REQUIREMENT
↓
SCENARIO
↓
AUTOMATION
↓
CI PIPELINE
↓
PARALLEL EXECUTION
↓
VALIDATION
↓
RELEASE CONFIDENCE

The visualization should look like a real engineering system diagram rather than an illustration.

Use subtle animated connections/nodes.

Animation should be slow and sophisticated.

No flashy animation.

The hero should visually communicate:

"this person builds systems."

==================================================
3. IMPACT METRICS
==================================================

Immediately after the hero create a high-impact section.

Small label:

IMPACT

Heading:

"Numbers I can defend."

Supporting text:

"Not vanity metrics. These are outcomes from problems I investigated, systems I changed, and automation I owned."

Create four large metric blocks:

70% → ~5%
FALSE-FAILURE RATE

7+ HRS → <2 HRS
REGRESSION RUNTIME

1,500+
REGRESSION SCENARIOS

4
MICROSERVICES OWNED

Use tasteful count-up/reveal animation when the section enters the viewport.

Make these numbers visually dominant.

Do not invent any additional metrics.

==================================================
4. SIGNATURE CASE STUDY
==================================================

This should be the visual centerpiece of the homepage.

Label:

ENGINEERING CASE STUDY / 01

Headline:

"When a green pipeline stopped meaning anything."

Subheading:

"How I helped turn an unreliable regression signal into one engineers could trust."

Present this as an interactive engineering investigation rather than a normal project card.

--------------------------------------------------
PROBLEM
--------------------------------------------------

Display:

> Regression was producing more than 70% false failures during release windows.

Explain briefly:

A large regression suite was being run by multiple squads during a 2–3 day release sign-off window.

The result was a huge amount of time spent investigating failures that were not actual product defects.

--------------------------------------------------
INVESTIGATION
--------------------------------------------------

Show a visual causal chain:

Concurrent regression
↓
Hundreds of tests querying MongoDB
↓
Continuous polling
↓
Excessive database query load
↓
Database throttling
↓
False test failures
↓
Long reruns
↓
Reduced trust in the pipeline

Make this visually interesting.

--------------------------------------------------
ROOT CAUSE
--------------------------------------------------

Highlight:

"Continuous polling became a scalability problem."

Explain:

Async events were being verified by querying MongoDB.

The polling approach was reasonable for an individual test, but under concurrent execution across multiple squads it generated enough query volume to bottleneck the database.

--------------------------------------------------
FIX
--------------------------------------------------

Show three engineering changes:

01
Interval-based polling

02
Graceful failure behaviour

03
Migration from MongoDB to DocumentDB for additional headroom

Clearly distinguish between engineering decisions I drove and infrastructure work completed collaboratively with DevOps.

Do not imply that I personally performed all infrastructure implementation.

--------------------------------------------------
RESULT
--------------------------------------------------

End the case study with:

> FALSE FAILURES
> >70% → ~5%

and:

> REGRESSION
> 7+ HOURS → ~2 HOURS

Then add:

"The goal wasn't simply to make the pipeline faster. It was to make a failed test mean something again."

This sentence should have strong visual emphasis.

==================================================
CASE STUDY INTERACTION
==================================================

Create an expandable:

"Technical deep dive →"

When opened, show more detail.

Include:

- why continuous polling was problematic
- why Thread.sleep was not the solution
- how concurrency changed the problem
- how database load affected test reliability
- why interval polling helped
- why graceful failure mattered
- why dynamic test data becomes important under parallel execution

Do not expose proprietary implementation details.

Do not expose:
- internal URLs
- credentials
- proprietary code
- confidential screenshots
- customer information
- internal architecture details that should not be public

Keep the case study technically useful but safely abstracted.

==================================================
5. ENGINEERING PHILOSOPHY
==================================================

Create a section titled:

"Testing is an engineering problem."

Use three principles.

01
TRUST THE SIGNAL

"A test suite is only valuable when engineers believe what a failure means."

02
FIX THE SYSTEM, NOT THE PEOPLE

"Good quality systems reduce dependence on people simply trying harder."

03
SURFACE QUALITY EARLY

"I prefer being involved from requirements and acceptance criteria through dev testing, rather than receiving finished stories and simply writing tests."

Present these as large editorial cards.

Keep the design restrained.

==================================================
6. AUTOMATION ARCHITECTURE PREVIEW
==================================================

Create a visually impressive architecture section.

Label:

ENGINEERING / AUTOMATION SYSTEM

Headline:

"Inside the automation system."

Supporting text:

"From test definition to pipeline execution, I work across the layers that make automation reliable at scale."

Create an interactive architecture diagram.

Flow:

TEST DEFINITION
Java
Cucumber
Maven

↓

AUTOMATION
Selenium
REST Assured
PageFactory

↓

DATA + VALIDATION
MongoDB
DocumentDB
Java Faker
ObjectMapper
API
UI
Async Events

↓

EXECUTION
Docker
GitLab CI/CD
Amazon ECR
Parallel Pods
Autoscaling

↓

CLOUD
AWS
S3
CloudWatch
Device Farm

↓

REPORTING + TRIAGE
Serenity
Failure Capture
Debug / Rerun

When the user hovers over a component, show a short explanation.

Do not overwhelm the user with every technology from my CV.

The diagram should communicate system design, not act as a skills dump.

Add a CTA:

"Explore the engineering →"

This will eventually link to a deeper Engineering page, but for now it can scroll to the featured work section.

==================================================
7. FEATURED WORK
==================================================

Create a section titled:

"Things I've actually built."

Do NOT call this "Projects" yet.

Create four cards:

--------------------------------------------------
FAILURE TRIAGE
--------------------------------------------------

Category:
RELIABILITY / DEVELOPER PRODUCTIVITY

Description:

"Built a post-run failure capture and triage workflow that identifies failures and makes rerun and debugging more targeted."

--------------------------------------------------
PARALLEL REGRESSION
--------------------------------------------------

Category:
SCALABILITY / CI

Description:

"Designed a pod-per-feature-file execution model with autoscaling that helped reduce Booking microservice regression runtime from 7+ hours to under 2."

--------------------------------------------------
DYNAMIC TEST DATA
--------------------------------------------------

Category:
TEST ARCHITECTURE

Description:

"Introduced dynamic test data generation and typed POJO deserialization using Java Faker and ObjectMapper."

--------------------------------------------------
SHIFT-LEFT QUALITY
--------------------------------------------------

Category:
QUALITY ENGINEERING

Description:

"Participate from requirements and acceptance criteria through development testing rather than treating QA as a downstream phase."

Each card should have a "Read case study →" affordance.

For now, cards can link to placeholder internal sections.

Do not invent project URLs.

==================================================
8. CURRENT EXPERIMENTS
==================================================

Create a visually smaller section.

Heading:

"Still building."

Purpose:

Show that I continue learning outside my primary production stack.

Feature:

naukri-profile-refresh

Technologies:

Playwright
TypeScript
GitHub Actions

Description:

"An automation project using Playwright + TypeScript with Page Object Model, session reuse and scheduled GitHub Actions execution."

Then show:

CURRENTLY EXPLORING

Playwright
Python fundamentals
AI-assisted test authoring
API automation
Quality engineering

IMPORTANT:

Do not claim advanced Python expertise.

Display:

Python — Fundamentals

rather than:

Python — Expert

Do not invent additional completed projects.

==================================================
9. CONTACT CTA
==================================================

Create a strong closing section.

Headline:

"Let's build better release confidence."

Supporting line:

"Interested in test automation, quality engineering, or building systems that make releases safer?"

Buttons:

Email me
GitHub
LinkedIn

Keep it minimal.

==================================================
10. FOOTER
==================================================

RANAJOY DAS

SDET · AUTOMATION ENGINEER

LinkedIn
GitHub
Email

© 2026 Ranajoy Das

==================================================
MOTION
==================================================

Use motion sparingly.

Good:

- section reveal
- subtle metric count-up
- architecture node highlighting
- card hover
- smooth scrolling
- subtle line animations in the hero

Avoid:

- parallax everywhere
- spinning objects
- excessive text animations
- animated backgrounds
- distracting cursor effects

Use prefers-reduced-motion.

The site must feel fast.

==================================================
RESPONSIVENESS
==================================================

Design desktop-first but ensure excellent mobile behaviour.

Test at:

1440px
1280px
1024px
768px
390px

On mobile:

- simplify architecture visualization
- stack metrics
- maintain readable typography
- preserve hierarchy
- prevent horizontal scrolling
- reduce animation
- make navigation compact

==================================================
ACCESSIBILITY
==================================================

Use semantic HTML.

Keyboard accessible navigation.

Visible focus states.

Good contrast.

ARIA labels where appropriate.

Respect reduced motion preferences.

==================================================
SEO
==================================================

Page title:

Ranajoy Das | SDET & Test Automation Engineer

Meta description:

"SDET and Test Automation Engineer specializing in Java, Selenium, REST Assured, Playwright, CI/CD, AWS and scalable test automation."

Use appropriate heading hierarchy.

==================================================
TECHNICAL IMPLEMENTATION
==================================================

Use:

React
TypeScript
Tailwind CSS

Prefer lightweight dependencies.

Do not introduce unnecessary libraries.

Keep the code clean and componentized.

Create reusable components for:

Navigation
Hero
MetricCard
CaseStudy
ArchitectureDiagram
PrincipleCard
WorkCard
CTA
Footer

Do not create unnecessary backend functionality.

This portfolio should be deployable as a static frontend.

==================================================
VERY IMPORTANT CONTENT RULES
==================================================

Use ONLY facts provided in this prompt.

Do not invent:

- employers
- clients
- projects
- repositories
- metrics
- testimonials
- technologies
- certifications
- awards
- responsibilities
- screenshots
- production URLs

For my Cognizant experience, keep the presentation at a safe abstraction level.

Do not expose proprietary information.

Do not claim that I personally implemented infrastructure work when it was collaborative.

Do not describe inherited systems as though I built them from scratch.

Use "roughly" where the metric is an estimate.

==================================================
DESIGN QUALITY BAR
==================================================

The result should NOT look like:

"AI generated portfolio website."

It should look like a website created by a strong product designer for an experienced software engineer.

Prioritize:

1. Typography
2. Spacing
3. Visual hierarchy
4. Information architecture
5. Case-study storytelling
6. Subtle interaction
7. Performance
8. Mobile design

The visual hierarchy should be:

ENGINEERING IMPACT
↓
TECHNICAL THINKING
↓
CASE STUDIES
↓
SYSTEM DESIGN
↓
PROJECTS
↓
SKILLS

NOT:

SKILLS
↓
SKILLS
↓
SKILLS
↓
PROJECTS

==================================================
FIRST BUILD INSTRUCTION
==================================================

Before writing the final implementation:

1. Analyze the requirements above.
2. Propose THREE visual directions:
   A. Editorial Engineering
   B. Technical Systems
   C. Minimalist Product Engineer

For each, briefly explain:
- visual language
- typography
- layout
- strengths
- weaknesses

Then recommend the strongest option for an SDET portfolio.

After selecting/recommending the direction, implement the HOMEPAGE only.

Do not build the full portfolio yet.

Make the homepage feel complete enough that I could show it to a hiring manager immediately.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/56e86a2d-27d3-4651-884a-0a65e573eba5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
