'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-indigo-50 shadow-xl">
              <img
                src="https://avatars.githubusercontent.com/u/70808850?s=400&u=3a1e19328afccea3c2f3706d8a5ce3c768ae8e49&v=4"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge — experience */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl p-5 border border-slate-100 animate-float">
              <p className="text-3xl font-extrabold text-indigo-600">1+</p>
              <p className="text-xs text-slate-500 mt-0.5">Years Building</p>
            </div>

            {/* Floating badge — stack */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-slate-100 animate-float" style={{ animationDelay: '1s' }}>
              <p className="text-2xl font-extrabold text-cyan-500">FS</p>
              <p className="text-xs text-slate-500 mt-0.5">Fullstack</p>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-3">
              About Me
            </p>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
              Fullstack Developer<br />& Startup Builder
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5">
              I&apos;m <span className="font-semibold text-slate-800">Tanimur Rahman Abir</span>, a
              fullstack developer passionate about building end-to-end digital products. From
              crafting pixel-perfect UIs to designing robust backend systems, I bring ideas to
              life with clean code and thoughtful engineering.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Currently serving as <span className="font-semibold text-indigo-600">Manager & HR at Octeters</span> —
              a product development startup — where I help shape both the team culture and the
              technology we build. I believe great software is built by great people.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { num: '5+', label: 'Projects' },
                { num: '10+', label: 'Tech Skills' },
                { num: '100%', label: 'Commitment' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center py-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-2xl font-bold text-indigo-600">{num}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all"
            >
              Let&apos;s work together →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
