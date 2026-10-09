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
  const nameRef = useRef<HTMLSpanElement>(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(logoRef.current, { y: -10, rotation: -1.5, duration: 4.5, ease: 'sine.inOut', repeat: -1, yoyo: true })
      gsap.to(nameRef.current, { backgroundPosition: '200% center', duration: 5, ease: 'none', repeat: -1 })
    })
    return () => ctx.revert()
  }, [])
  return (
    <main className="dark h-[100svh] w-full overflow-hidden bg-background text-foreground">
      <div className="mx-auto flex h-full max-w-7xl flex-col px-6 py-6 sm:px-10 sm:py-8 md:px-14 lg:px-20">
        <header className="flex justify-between border-b border-border/60 pb-5 text-xs uppercase tracking-[0.25em] text-muted-foreground"><span>SRP / 2026</span><span>Portfolio</span></header>
        <section className="grid min-h-0 flex-1 grid-cols-1 items-center gap-8 py-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16 lg:gap-24">
          <div className="space-y-7"><div><p className="mb-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">Hello, I&apos;m</p><h1 className="text-[clamp(2.8rem,7vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.07em]">Pullabhatla<span ref={nameRef} className="block bg-[linear-gradient(110deg,#f5f5f5_10%,#737373_35%,#fff_50%,#737373_65%,#f5f5f5_90%)] bg-[length:220%_100%] bg-clip-text text-transparent">Ram Swaroop</span></h1></div><div className="max-w-lg space-y-3"><p className="text-base font-light leading-relaxed text-muted-foreground sm:text-lg">Student of Computer Science Engineering, passionate about technology and the possibilities it creates.</p><p className="text-sm text-muted-foreground/70">Always learning. Always building.</p></div><div className="h-px w-14 bg-foreground/60" /><p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Open to ideas &amp; collaborations</p></div>
          <div className="flex w-full max-w-xl flex-col gap-3 md:ml-auto">{links.map(({ label, detail, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="group flex items-center gap-4 rounded-xl border border-border bg-card/30 px-5 py-4 transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground sm:px-6 sm:py-5"><Icon className="h-5 w-5 text-foreground group-hover:text-background" /><span className="min-w-0 flex-1"><span className="block text-base font-medium text-foreground group-hover:text-background">{label}</span><span className="block truncate text-xs text-muted-foreground group-hover:text-background/70">{detail}</span></span><ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-background" /></a>)}</div>
        </section>
        <footer className="border-t border-border/60 pt-5"><div className="flex items-end justify-between"><div><p className="mb-3 text-xs text-muted-foreground">© SRP 2026</p><p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70">Built with curiosity</p></div><div ref={logoRef} aria-label="SRP" className="select-none text-[clamp(4.5rem,16vw,12rem)] font-black leading-[0.62] tracking-[-0.13em]">SRP</div></div></footer>
      </div>
    </main>
  )
}
