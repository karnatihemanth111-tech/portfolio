'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="text-xl font-black tracking-tight"
            style={{ background: 'linear-gradient(90deg, #f97316, #facc15)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            hemanth.
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200 relative group">
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <a href="/resume.pdf" download
            className="hidden md:inline-flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)' }}>
            Download CV
          </a>

          {/* Mobile Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-72 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#111] border border-white/8 rounded-xl p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-2.5 px-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium">
                {link.label}
              </a>
            ))}
            <a href="/resume.pdf" download
              onClick={() => setIsOpen(false)}
              className="mt-2 py-2.5 text-center text-white text-sm font-bold rounded-lg"
              style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)' }}>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
