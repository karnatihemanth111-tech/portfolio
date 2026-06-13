'use client'

import { useEffect, useState } from 'react'

const roles = [
  'Full-Stack Developer',
  'Next.js Developer',
  'React Developer',
  'Node.js Developer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
      }, 80)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
      }, 40)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex((r) => (r + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  const stats = [
    { num: '2',   label: 'Live Projects'    },
    { num: '5+',  label: 'Technologies'     },
    { num: '1st', label: 'Year B.Tech CSE'  },
    { num: '1', label: 'certificates'   },
  ]

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-8 pt-24 pb-16 relative overflow-hidden bg-[#0c0c0c]">

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_55%_at_30%_0%,rgba(249,115,22,0.15)_0%,transparent_100%)]" />

      <div className="max-w-5xl mx-auto w-full relative z-10">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 border border-orange-500/25 bg-orange-500/10">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-xs text-orange-400 font-medium">Open to internships</span>
        </div>

        {/* NAME */}
        <h1 className="text-[80px] sm:text-[96px] font-black tracking-tighter leading-none mb-4 bg-linear-to-r from-white via-yellow-200 to-red-500 bg-clip-text text-transparent">
          Hemanth
        </h1>

        {/* TYPING */}
        <div className="flex items-center gap-2 mb-6 h-10">
          <span className="text-2xl text-white/50 font-light">{displayed}</span>
          <span className="inline-block w-0.5 h-7 bg-orange-500 animate-pulse" />
        </div>

        {/* DESCRIPTION */}
        <p className="text-base text-white/50 leading-relaxed mb-10 max-w-xl">
          CSE student at{' '}
          <span className="text-white/90 font-medium">RVR and JC College of Engineering, Guntur</span>
          {' '}who ships real products, not just tutorials. I design the UI, wire the backend,
          and deploy to the cloud. Looking for{' '}
          <span className="text-orange-400 font-medium">internships</span>
          {' '}where I can contribute from day one.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#projects" className="bg-linear-to-r from-orange-500 to-red-500 text-white font-bold px-7 py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity no-underline">
            See My Projects
          </a>
          <a href="#contact" className="text-white/65 font-medium px-7 py-3.5 rounded-xl text-sm border border-white/10 hover:bg-white/5 hover:text-white transition-all no-underline">
            Get In Touch
          </a>
        </div>

        {/* SOCIALS */}
        <div className="flex items-center gap-3 mb-14">
          <span className="text-[11px] text-white/25 uppercase tracking-widest">Find me</span>
          <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center text-white/40 text-[11px] font-bold hover:text-orange-400 hover:border-orange-500/40 transition-all no-underline">
            GH
          </a>
          <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center text-white/40 text-[11px] font-bold hover:text-orange-400 hover:border-orange-500/40 transition-all no-underline">
            LI
          </a>
          <a href="mailto:YOUR_EMAIL" className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center text-white/40 text-sm hover:text-orange-400 hover:border-orange-500/40 transition-all no-underline">
            @
          </a>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden border border-white/10 bg-white/2">
          {stats.map((stat, i) => (
            <div key={i} className={`py-5 text-center ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}>
              <div className="text-2xl font-black tracking-tight bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {stat.num}
              </div>
              <div className="text-[11px] text-white/30 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}3