'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend',
    color: 'indigo',
    icon: '🎨',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    color: 'cyan',
    icon: '⚙️',
    items: ['Node.js', 'REST APIs', 'Express.js'],
  },
  {
    category: 'Database',
    color: 'violet',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'SQL'],
  },
  {
    category: 'DevOps & Cloud',
    color: 'sky',
    icon: '☁️',
    items: ['Docker', 'AWS', 'CI/CD', 'Git'],
  },
]

const colorMap: Record<string, string> = {
  indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100 hover:border-indigo-300 hover:shadow-indigo-50',
  cyan:   'bg-cyan-50   text-cyan-600   border-cyan-100   hover:border-cyan-300   hover:shadow-cyan-50',
  violet: 'bg-violet-50 text-violet-600 border-violet-100 hover:border-violet-300 hover:shadow-violet-50',
  sky:    'bg-sky-50    text-sky-600    border-sky-100    hover:border-sky-300    hover:shadow-sky-50',
}

const dotMap: Record<string, string> = {
  indigo: 'bg-indigo-400',
  cyan:   'bg-cyan-400',
  violet: 'bg-violet-400',
  sky:    'bg-sky-400',
}

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-3">
            What I Use
          </p>
          <h2 className="text-4xl font-bold text-slate-900">Skills & Technologies</h2>
          <p className="text-slate-500 mt-3 max-w-md mx-auto">
            A curated stack I rely on to build fast, scalable, and maintainable products.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map(({ category, color, icon, items }, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`rounded-2xl p-6 border bg-white transition-all duration-300 hover:shadow-xl ${colorMap[color]}`}
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-bold text-slate-800 mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-slate-500 text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotMap[color]}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech badge strip */}
        <motion.div
          className="mt-14 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS', 'MySQL', 'Git'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-indigo-300 hover:text-indigo-600 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
