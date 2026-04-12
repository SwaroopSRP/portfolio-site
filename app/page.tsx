'use client'

import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-hidden dark">
      {}
      <div className="h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
          {}
          <div className="flex flex-col justify-center space-y-8 md:space-y-12">
            {}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-2">
                Pullabhatla
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Ram Swaroop
              </h1>
            </div>

            {}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                I'm a Computer Science Engineering Student
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-md">
                Passionate about technology, passionate about building. Always learning, always creating.
              </p>
            </div>

            {}
            <div className="h-px bg-border w-12" />

            {}
            <p className="text-sm md:text-base text-muted-foreground font-light tracking-wide">
              © SRP 2026
            </p>
          </div>

          {}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            {}
            <Link
              href="https://www.linkedin.com/in/swaroop-srp"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-8 py-5 md:px-10 md:py-6 border border-border rounded-lg hover:border-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-5"
            >
              <Linkedin className="w-6 h-6 md:w-7 md:h-7 text-foreground group-hover:text-accent transition-colors" />
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  LinkedIn
                </span>
                <span className="text-xs md:text-sm text-muted-foreground">
                  Let&apos;s connect professionally
                </span>
              </div>
              <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
              </span>
            </Link>

            {}
            <Link
              href="https://github.com/SwaroopSRP"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-8 py-5 md:px-10 md:py-6 border border-border rounded-lg hover:border-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-5"
            >
              <Github className="w-6 h-6 md:w-7 md:h-7 text-foreground group-hover:text-accent transition-colors" />
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  GitHub
                </span>
                <span className="text-xs md:text-sm text-muted-foreground">
                  Explore my projects & code
                </span>
              </div>
              <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
              </span>
            </Link>

            {}
            <div className="pt-4 md:pt-8">
              <p className="text-xs md:text-sm text-muted-foreground font-light tracking-wide mb-3">
                Or reach out directly
              </p>
              <a
                href="mailto:your.email@example.com"
                className="text-base md:text-lg font-light text-foreground hover:text-accent transition-colors duration-300 underline underline-offset-4 decoration-border hover:decoration-accent"
              >
                srp31.swaroop@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="hidden md:block fixed left-0 top-1/2 w-px h-1/3 bg-gradient-to-b from-transparent via-border to-transparent transform -translate-y-1/2" />
    </div>
  )
}
