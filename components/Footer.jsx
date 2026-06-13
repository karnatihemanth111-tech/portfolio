export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-6 lg:px-8 py-12 border-t border-white/10 bg-[#0c0c0c]">

      <div className="max-w-5xl mx-auto w-full">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* LEFT - CREDIT */}
          <div>
            <p className="text-sm text-white/40">
              Designed and built by{' '}
              <span className="bg-linear-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent font-bold">
                Hemanth
              </span>
              {' '}with Next.js, Tailwind CSS, and lots of coffee.
            </p>
          </div>

          {/* CENTER - QUICK LINKS */}
          <div>
            <div className="flex justify-center gap-8">
              <a href="#about" className="text-sm text-white/50 hover:text-orange-400 transition-colors no-underline">
                About
              </a>
              <a href="#skills" className="text-sm text-white/50 hover:text-orange-400 transition-colors no-underline">
                Skills
              </a>
              <a href="#projects" className="text-sm text-white/50 hover:text-orange-400 transition-colors no-underline">
                Projects
              </a>
              <a href="#contact" className="text-sm text-white/50 hover:text-orange-400 transition-colors no-underline">
                Contact
              </a>
            </div>
          </div>

          {/* RIGHT - SOCIALS */}
          <div>
            <div className="flex justify-end gap-6">
              <a href="https://github.com/karnatihemanth111-tech" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-orange-400 transition-colors no-underline">
                GitHub
              </a>
              <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-orange-400 transition-colors no-underline">
                LinkedIn
              </a>
              <a href="mailto:karnatihemanth111@gmail.com" className="text-sm text-white/50 hover:text-orange-400 transition-colors no-underline">
                Email
              </a>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-8" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* COPYRIGHT */}
          <p className="text-xs text-white/25">
            Copyright © {currentYear} Hemanth. All rights reserved.
          </p>

          {/* BACK TO TOP BUTTON */}
          <a href="#" className="text-xs text-white/40 hover:text-orange-400 transition-colors no-underline font-medium uppercase tracking-wider">
            Back to top ↑
          </a>

        </div>

      </div>

    </footer>
  )
}