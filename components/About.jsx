export default function About() {
  return (
    <section id="about" className="px-2 lg:px-3 py-20 relative overflow-hidden bg-[#0c0c0c]">
      
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_55%_at_70%_100%,rgba(249,115,22,0.12)_0%,transparent_100%)]" />

      <div className="max-w-5xl mx-auto w-full relative z-10">

        {/* SECTION LABEL */}
        <span className=" text-orange-500 font-bold uppercase tracking-widest">
          About me
        </span>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-8">

          {/* LEFT SIDE - AVATAR & STATS */}
          <div>
            {/* Avatar box */}
            <div className="w-48 h-56 bg-linear-to-br from-orange-900/40 to-orange-700/30 border-2 border-orange-500/40 rounded-3xl flex items-center justify-center mb-6 text-7xl">
              👨‍💻
            </div>

            {/* Badges */}
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 rounded-lg px-4 py-2.5 w-fit">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="text-xs text-orange-300 font-semibold">Open to work</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 rounded-lg px-4 py-2.5 w-fit">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="text-xs text-orange-300 font-semibold">Guntur, India</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 rounded-lg px-4 py-2.5 w-fit">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="text-xs text-orange-300 font-semibold">CSE Batch 2028</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - TEXT */}
          <div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight text-white">
              Turning ideas into{' '}
              <span className="bg-linear-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                working products.
              </span>
            </h2>

            {/* Paragraphs */}
            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-5 font-normal">
              I'm not just learning to code — I'm building things that{' '}
              <span className="text-white/90 font-semibold">actually work</span>. From a campus
              navigation app with Dijkstra pathfinding to an AI-powered resume analyzer,
              every project pushes me further.
            </p>

            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6 font-normal">
              I work across the full stack:{' '}
              <span className="text-white/90 font-semibold">Next.js and Tailwind</span> on the
              frontend, <span className="text-white/90 font-semibold">Node.js and Express</span> on
              the backend, deployed on{' '}
              <span className="text-white/90 font-semibold">Vercel and Render</span>. I care about
              clean code, good UX, and actually shipping.
            </p>

            {/* Quote Box */}
            <div className="bg-orange-500/12 border border-orange-500/30 rounded-2xl p-5 mt-6">
              <p className="text-sm md:text-base text-orange-300 italic leading-relaxed font-normal">
                "I'm not waiting to get experience — I'm earning it one project at a time."
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}