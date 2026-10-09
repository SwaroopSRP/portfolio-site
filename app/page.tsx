'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { label: 'LinkedIn', detail: "Let's connect professionally", href: 'https://www.linkedin.com/in/swaroop-srp', icon: Linkedin },
  { label: 'GitHub', detail: 'Explore my projects & code', href: 'https://github.com/SwaroopSRP', icon: Github },
  { label: 'Email', detail: 'Start a conversation', href: 'mailto:srp31.swaroop@gmail.com', icon: Mail },
]

export default function Portfolio() {
  const pageRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (!pageRef.current) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
      timeline
        .from('.entry-greeting', { y: 18, opacity: 0, duration: 0.42 })
        .from('.entry-name', { y: 42, opacity: 0, filter: 'blur(10px)', duration: 0.68 }, '-=0.24')
        .from('.entry-bio', { y: 18, opacity: 0, duration: 0.48 }, '-=0.28')
        .from('.entry-link', { x: 34, opacity: 0, scale: 0.97, stagger: 0.07, duration: 0.48 }, '-=0.2')
        .from('.entry-footer', { y: 10, opacity: 0, duration: 0.34 }, '-=0.16')
    }, pageRef)

    return () => context.revert()
  }, [])

  const handleLinkPress = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const sheen = event.currentTarget.querySelector<HTMLElement>('.sheen')
    if (!sheen) return
    sheen.classList.remove('sheen-active')
    void sheen.offsetWidth
    sheen.classList.add('sheen-active')
  }

  return (
    <main ref={pageRef} className="dark portfolio-shell relative h-[100svh] w-full overflow-hidden bg-background text-foreground">
      <div aria-hidden="true" className="drizzle" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col px-6 py-7 sm:px-10 sm:py-9 md:px-14 lg:px-20">
        <section className="grid min-h-0 flex-1 grid-cols-1 items-center gap-7 pb-8 md:grid-cols-[1.08fr_0.92fr] md:gap-14 md:pb-0 lg:gap-24">
          <div className="space-y-6 md:space-y-7">
            <div>
              <p className="entry-greeting mb-4 text-sm uppercase tracking-[0.28em] text-muted-foreground">Hello, I&apos;m</p>
              <h1 className="entry-name name-gradient text-[clamp(2.8rem,7vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.075em]">Pullabhatla<br />Ram <span className="name-hover-target">Swaroop</span></h1>
            </div>
            <p className="entry-bio max-w-lg text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">Student of Computer Science Engineering, passionate about technology and the possibilities it creates.</p>
          </div>

          <div className="mobile-contact-row mx-auto flex w-full max-w-xl flex-col gap-3 md:ml-auto md:mr-0">
            {links.map(({ label, detail, href, icon: Icon }) => (
              <a key={label} aria-label={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} onPointerDown={handleLinkPress} className="entry-link portfolio-link group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card/30 px-5 py-4 transition-transform duration-300 hover:scale-[1.025] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground sm:px-6 sm:py-5">
                <span className="sheen" aria-hidden="true" />
                <Icon className="link-icon relative z-10 h-5 w-5 text-foreground/80" strokeWidth={1.7} />
                <span className="link-copy relative z-10 min-w-0 flex-1"><span className="block text-lg font-medium text-foreground">{label}</span><span className="block truncate text-sm text-muted-foreground">{detail}</span></span>
                <ArrowUpRight className="link-arrow relative z-10 h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.7} />
              </a>
            ))}
          </div>
        </section>

        <footer className="entry-footer flex shrink-0 translate-y-2 items-center justify-center pt-4 text-sm text-muted-foreground sm:translate-y-0 sm:pt-6">
          <p>{'© SRP 2026'}</p>
        </footer>
      </div>
    </main>
  )
}
