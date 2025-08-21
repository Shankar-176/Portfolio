import { profile } from '../data/profile'
import { motion } from 'framer-motion'

function Pill({ children, index }){
  return (
    <motion.span 
      className="skill-pill"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.span>
  )
}

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: "languages",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200"
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: "frontend", 
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50",
    borderColor: "border-pink-200"
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: "backend",
    gradient: "from-amber-500 to-orange-500", 
    bgGradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-200"
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: "databases",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50", 
    borderColor: "border-emerald-200"
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: "tools",
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50",
    borderColor: "border-purple-200"
  },
  {
    title: "Soft Skills", 
    icon: "🤝",
    skills: "soft",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
    borderColor: "border-violet-200"
  }
]

export function Skills(){
  const s = profile.skills
  
  return (
    <section id="skills" className="card-hover animate-fade-in-up">
      <div className="section-header">
        <div className="section-icon">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
        <h2 className="section-title">Skills & Expertise</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            key={category.title}
            className={`p-6 bg-gradient-to-br ${category.bgGradient} rounded-2xl border ${category.borderColor} hover:shadow-lg transition-all duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center text-white text-xl mr-3 shadow-lg`}>
                {category.icon}
              </div>
              <h3 className={`font-bold text-lg bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {s[category.skills].map((skill, skillIndex) => (
                <Pill key={skillIndex} index={skillIndex}>
                  {skill}
                </Pill>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills Summary */}
      <motion.div 
        className="mt-12 p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600 font-medium">Programming Languages</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
            <div className="text-gray-600 font-medium">Technologies</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Commitment</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}