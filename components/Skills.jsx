export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth', 'Groq API']
    },
    {
      category: 'Tools & Deploy',
      icon: '🚀',
      skills: ['Git & GitHub', 'Vercel', 'Render', 'Postman', 'VS Code', 'Linux']
    }
  ]

  return (
    <section id="skills" className="px-6 lg:px-8 py-20 relative overflow-hidden bg-[#0c0c0c]">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(249,115,22,0.1)_0%,transparent_100%)]" />

      <div className="max-w-5xl mx-auto w-full relative z-10">

        {/* HEADER */}
        <span className="font-bold text-orange-400 uppercase  tracking-widest">
          My toolkit
        </span>

        <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3 mb-3 text-white">
          Skills & Technologies
        </h2>

        <p className="text-sm md:text-base text-white/45 mb-12 max-w-2xl">
          Tools I use to go from idea to deployed product.
        </p>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/2 border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-wide">
                  {category.category}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white/4 border border-white/10 text-white/65 text-xs md:text-sm px-3 py-1.5 rounded-lg hover:border-orange-500/40 hover:text-orange-400 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}