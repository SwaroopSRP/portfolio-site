'use client'

import { useLayoutEffect, useRef } from 'react'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import gsap from 'gsap'

const links = [
  { label: 'LinkedIn', detail: "Let's connect professionally", href: 'https://www.linkedin.com/in/swaroop-srp', icon: Linkedin },
  { label: 'GitHub', detail: 'Explore my projects & code', href: 'https://github.com/SwaroopSRP', icon: Github },
  { label: 'Email', detail: 'Start a conversation', href: 'mailto:srp31.swaroop@gmail.com', icon: Mail },
]

export default function Portfolio() {
  const logoRef = useRef<HTMLDivElement>(null)
  const logoLineRef = useRef<SVGPathElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(logoLineRef.current, { strokeDashoffset: 440 }, { strokeDashoffset: 0, duration: 3.8, ease: 'none', repeat: -1 })
      gsap.to(logoRef.current, { opacity: 0.76, duration: 2.2, ease: 'sine.inOut', repeat: -1, yoyo: true })
    })
    return () => ctx.revert()
  }, [])

  const handleLinkPress = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const sheen = event.currentTarget.querySelector<HTMLElement>('.sheen')
    if (!sheen) return
    sheen.classList.remove('sheen-active')
    void sheen.offsetWidth
    sheen.classList.add('sheen-active')
  }

  return (
    <main className="dark portfolio-shell relative h-[100svh] w-full overflow-hidden bg-background text-foreground">
      <div aria-hidden="true" className="drizzle" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col px-6 py-7 sm:px-10 sm:py-9 md:px-14 lg:px-20">
        <section className="grid min-h-0 flex-1 grid-cols-1 items-center gap-7 md:grid-cols-[1.08fr_0.92fr] md:gap-14 lg:gap-24">
          <div className="space-y-6 md:space-y-7">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">Hello, I&apos;m</p>
              <h1 ref={nameRef} className="name-gradient text-[clamp(2.8rem,7vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.075em]">Pullabhatla<br />Ram Swaroop</h1>
            </div>
            <p className="max-w-lg text-base font-light leading-relaxed text-muted-foreground sm:text-lg">Student of Computer Science Engineering, passionate about technology and the possibilities it creates.</p>
          </div>

          <div className="flex w-full max-w-xl flex-col gap-3 md:ml-auto">
            {links.map(({ label, detail, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} onPointerDown={handleLinkPress} className="portfolio-link group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card/30 px-5 py-4 transition-transform duration-300 hover:scale-[1.025] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground sm:px-6 sm:py-5">
                <span className="sheen" aria-hidden="true" />
                <Icon className="relative z-10 h-5 w-5 text-foreground/80" strokeWidth={1.7} />
                <span className="relative z-10 min-w-0 flex-1"><span className="block text-base font-medium text-foreground">{label}</span><span className="block truncate text-xs text-muted-foreground">{detail}</span></span>
                <ArrowUpRight className="relative z-10 h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.7} />
              </a>
            ))}
          </div>
        </section>

        <footer className="relative shrink-0 pt-5 sm:pt-7">
          <div className="flex flex-col items-center gap-3 border-t border-border/60 pt-4 sm:flex-row sm:items-end sm:justify-between sm:pt-5">
            <div ref={logoRef} className="logo-mark relative select-none" aria-label="SRP">
              <svg className="logo-curve" viewBox="0 0 300 70" aria-hidden="true"><path ref={logoLineRef} d="M8 48 C54 4 93 4 132 40 S214 76 292 18" /></svg>
              <span>SRP</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
