export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'AI Resume Analyzer',
      description: 'Upload your resume and get instant AI-powered feedback with ATS score and improvement tips.',
      icon: '📄',
      tags: ['Next.js', 'Express', 'MongoDB', 'Groq API', 'JWT'],
      github: 'https://github.com/karnatihemanth111-tech/Resume_Analyze',
      live: 'https://resume-analyze-eta.vercel.app/',
      featured: true
    },
    {
      id: 2,
      name: 'Campus Nav',
      description: 'Interactive campus navigation with Dijkstra algorithm and voice guidance.',
      icon: '🗺️',
      tags: ['Next.js', 'Express', 'Dijkstra', 'SVG', 'Web Speech API'],
      github: 'https://github.com/karnatihemanth111-tech/project',
      live: 'https://project-eta-two-52.vercel.app',
      featured: false
    }
  ]

  return (
    <section id="projects" className="px-6 lg:px-8 py-20 relative overflow-hidden bg-[#0c0c0c]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_55%_at_50%_100%,rgba(249,115,22,0.12)_0%,transparent_100%)]" />
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <span className="font-bold text-orange-400 uppercase  tracking-widest">My work</span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3 mb-3 text-white">Projects that ship.</h2>
        <p className="text-sm md:text-base text-white/45 mb-12">Real apps, real users, real deployments.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const isFeatured = project.featured
            const cardClass = isFeatured ? 'bg-orange-500/8 border border-orange-500/35' : 'bg-white/[0.02] border border-white/10'
            return (
              <div key={project.id} className={`rounded-2xl p-6 ${cardClass}`}>
                {isFeatured && (
                  <div className="inline-block bg-orange-500/15 border border-orange-500/35 rounded-full px-3 py-1.5 mb-4">
                    <span className="text-xs text-orange-300 font-bold uppercase">Featured</span>
                  </div>
                )}
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{project.name}</h3>
                <p className="text-sm text-white/55 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-white/5 border border-white/10 text-white/50 px-3 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <div className="border-t border-white/10 my-4" />
                <div className="flex gap-6">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-orange-400 font-semibold">Code</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm text-orange-400 font-semibold">Live</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}