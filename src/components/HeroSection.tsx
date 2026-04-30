'use client'

import dynamic from 'next/dynamic'

const GalaxyCanvas = dynamic(() => import('./GalaxyCanvas'), { ssr: false })

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-indigo-50"
    >
      {/* 3D Galaxy background */}
      <div className="absolute inset-0 pointer-events-none">
        <GalaxyCanvas />
      </div>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <p
          className="text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-5 animate-fadeInUp"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          Hello — I&apos;m
        </p>

        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-slate-900 leading-[1.05] mb-6 animate-fadeInUp"
          style={{ animationDelay: '0.25s', opacity: 0 }}
        >
          Tanimur<br />
          <span className="text-indigo-600">Rahman</span>
          <br />
          Abir
        </h1>

        <div
          className="flex items-center gap-3 mb-5 animate-fadeInUp"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
            Fullstack Developer
          </span>
          <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
            Manager @ Octeters
          </span>
        </div>

        <p
          className="text-lg sm:text-xl text-slate-500 max-w-lg mb-10 leading-relaxed animate-fadeInUp"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          Crafting seamless fullstack experiences —<br className="hidden sm:block" />
          from pixel to production.
        </p>

        <div
          className="flex gap-4 flex-wrap animate-fadeInUp"
          style={{ animationDelay: '0.65s', opacity: 0 }}
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 text-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border-2 border-slate-200 text-slate-700 rounded-full font-semibold hover:border-indigo-400 hover:text-indigo-600 transition-colors text-sm"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-indigo-400 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
