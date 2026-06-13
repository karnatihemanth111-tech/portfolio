"use client"
export default function Contact() {
  return (
    <section id="contact" className="px-6 lg:px-8 py-20 relative overflow-hidden bg-[#0c0c0c]">
      
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(249,115,22,0.1)_0%,transparent_100%)]" />

      <div className="max-w-5xl mx-auto w-full relative z-10">

        <span className="text-[11px] text-orange-500 font-bold uppercase tracking-widest">Get in touch</span>

        <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3 mb-3 text-white">Let's work together.</h2>

        <p className="text-sm md:text-base text-white/45 mb-12">Open to internships, collabs, and interesting conversations.</p>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-orange-500/6 border border-orange-500/20 rounded-3xl p-8 md:p-12">

          {/* LEFT SIDE - CONTACT INFO */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">I would love to hear from you.</h3>
            <p className="text-sm md:text-base text-white/55 leading-relaxed mb-8">
              Whether you have an opportunity, a project idea, or just want to chat about tech — my inbox is open. I reply to every message.
            </p>

            {/* EMAIL */}
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 bg-orange-500/15 border border-orange-500/30 rounded-lg flex items-center justify-center shrink-0 text-orange-400">
                ✉
              </div>
              <div>
                <div className="text-xs text-white/35 uppercase tracking-wide">Email</div>
                <a href="mailto:karnatihemanth111@gmail.com" className="text-sm text-white/70 hover:text-orange-400 transition-colors no-underline">
                  karnatihemanth111@gmail.com
                </a>
              </div>
            </div>

            {/* LINKEDIN */}
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 bg-orange-500/15 border border-orange-500/30 rounded-lg flex items-center justify-center shrink-0 text-orange-400">
                in
              </div>
              <div>
                <div className="text-xs text-white/35 uppercase tracking-wide">LinkedIn</div>
                <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-orange-400 transition-colors no-underline">
                  linkedin.com/in/hemanth
                </a>
              </div>
            </div>

            {/* GITHUB */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-orange-500/15 border border-orange-500/30 rounded-lg flex items-center justify-center shrink-0 text-orange-400">
                @
              </div>
              <div>
                <div className="text-xs text-white/35 uppercase tracking-wide">GitHub</div>
                <a href="https://github.com/karnatihemanth111-tech" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-orange-400 transition-colors no-underline">
                  github.com/karnatihemanth111-tech
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div>
            <form className="flex flex-col gap-4">
              
              {/* NAME INPUT */}
              <div>
                <label className="text-xs text-white/40 uppercase tracking-wide block mb-2">Your name</label>
                <input type="text" placeholder="Recruiter at Awesome Co." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:border-orange-500/50 focus:outline-none transition-colors" />
              </div>

              {/* EMAIL INPUT */}
              <div>
                <label className="text-xs text-white/40 uppercase tracking-wide block mb-2">Email</label>
                <input type="email" placeholder="recruiter@company.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:border-orange-500/50 focus:outline-none transition-colors" />
              </div>

              {/* MESSAGE TEXTAREA */}
              <div>
                <label className="text-xs text-white/40 uppercase tracking-wide block mb-2">Message</label>
                <textarea placeholder="Hi Hemanth, we would love to have you join our team..." rows="5" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:border-orange-500/50 focus:outline-none transition-colors resize-none"></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <button type="submit" className="bg-linear-to-r from-orange-500 to-red-500 text-white font-bold py-3 rounded-lg text-sm hover:opacity-90 transition-opacity mt-2">
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>

    </section>
  )
}