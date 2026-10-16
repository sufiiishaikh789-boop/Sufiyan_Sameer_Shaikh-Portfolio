import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { site } from '@/data/site'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'
import { ResumeButton } from '@/components/resume-button'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-foreground px-6 py-16 text-background md:px-16 md:py-24">
          <div className="bg-grid absolute inset-0 -z-10 opacity-20 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" aria-hidden="true" />
          <div className="absolute -top-40 -right-40 -z-10 size-[28rem] rounded-full bg-primary/40 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-40 -left-20 -z-10 size-80 rounded-full bg-violet/30 blur-3xl" aria-hidden="true" />

          <p className="font-mono text-xs tracking-[0.2em] text-background/60 uppercase">07 — Contact</p>
          <h2 id="contact-title" className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            {"Let's build something meaningful."}
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/70">
            {"I'm interested in internship opportunities, software engineering challenges, AI/ML projects, and technical collaborations."}
          </p>

          <div className="mt-10 flex flex-col items-start gap-4">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-3 text-lg font-medium break-all underline-offset-8 hover:underline focus-visible:rounded-md focus-visible:ring-3 focus-visible:ring-background/50 focus-visible:outline-none md:text-2xl"
            >
              <Mail className="size-5 shrink-0" aria-hidden="true" />
              {site.email}
              <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-3 text-base text-background/80 underline-offset-8 hover:text-background hover:underline focus-visible:rounded-md focus-visible:ring-3 focus-visible:ring-background/50 focus-visible:outline-none md:text-lg"
            >
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              <span className="sr-only">Phone: </span>
              {site.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <LinkButton href={`mailto:${site.email}`} className="bg-background text-foreground shadow-none">
              <Mail aria-hidden="true" />
              Email
            </LinkButton>
            <LinkButton href={site.linkedin} external variant="outline" className="border-background/20 bg-background/5 text-background hover:bg-background/10">
              <LinkedInIcon aria-hidden="true" />
              LinkedIn
            </LinkButton>
            <LinkButton href={site.github} external variant="outline" className="border-background/20 bg-background/5 text-background hover:bg-background/10">
              <GitHubIcon aria-hidden="true" />
              GitHub
            </LinkButton>
            <ResumeButton download className="border-background/20 bg-background/5 text-background" />
          </div>

          <p className="mt-12 flex items-center gap-2 text-sm text-background/60">
            <MapPin className="size-4" aria-hidden="true" />
            {site.location}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
