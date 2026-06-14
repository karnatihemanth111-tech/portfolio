'use client'

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    
    try {
      const response = await fetch('https://formspree.io/f/mqeowern',  {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      
      if (response.ok) {
        alert('Message sent successfully!')
        e.target.reset()
      } else {
        alert('Failed to send. Try again.')
      }
    } catch (error) {
      alert('Error sending message')
    }
  }

  return (
    <section id="contact" className="px-6 lg:px-8 py-20 relative overflow-hidden bg-[#0c0c0c]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(249,115,22,0.1)_0%,transparent_100%)]" />
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <span className="text-[11px] text-orange-500 font-bold uppercase tracking-widest">Get in touch</span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3 mb-3 text-white">Let's work together.</h2>
        <p className="text-sm md:text-base text-white/45 mb-12">Open to internships, collabs, and interesting conversations.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-orange-500/6 border border-orange-500/20 rounded-3xl p-8 md:p-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">I would love to hear from you.</h3>
            <p className="text-sm md:text-base text-white/55 leading-relaxed mb-8">Whether you have an opportunity, a project idea, or just want to chat about tech — my inbox is open.</p>
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 bg-orange-500/15 border border-orange-500/30 rounded-lg flex items-center justify-center text-orange-400">✉</div>
              <div>
                <div className="text-xs text-white/35 uppercase tracking-wide">Email</div>
                <a href="mailto:karnatihemanth111@gmail.com" className="text-sm text-white/70 hover:text-orange-400 no-underline">karnatihemanth111@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 bg-orange-500/15 border border-orange-500/30 rounded-lg flex items-center justify-center text-orange-400">in</div>
              <div>
                <div className="text-xs text-white/35 uppercase tracking-wide">LinkedIn</div>
                <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-orange-400 no-underline">linkedin.com/in/hemanth</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-orange-500/15 border border-orange-500/30 rounded-lg flex items-center justify-center text-orange-400">@</div>
              <div>
                <div className="text-xs text-white/35 uppercase tracking-wide">GitHub</div>
                <a href="https://github.com/karnatihemanth111-tech" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-orange-400 no-underline">github.com/karnatihemanth111-tech</a>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs text-white/40 uppercase tracking-wide block mb-2">Your name</label>
                <input type="text" name="name" placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30" required />
              </div>
              <div>
                <label className="text-xs text-white/40 uppercase tracking-wide block mb-2">Email</label>
                <input type="email" name="email" placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30" required />
              </div>
              <div>
                <label className="text-xs text-white/40 uppercase tracking-wide block mb-2">Message</label>
                <textarea name="message" placeholder="Your message" rows="5" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 resize-none" required></textarea>
              </div>
              <button type="submit" className="bg-linear-to-r from-orange-500 to-red-500 text-white font-bold py-3 rounded-lg text-sm hover:opacity-90 mt-2">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}