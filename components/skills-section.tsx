"use client"
import { motion } from "framer-motion"

interface Skill {
  name: string
  logo: string
}

interface SkillCategory {
  category: string
  skills: Skill[]
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "C", logo: "C" },
      { name: "C++", logo: "C++" },
      { name: "Python", logo: "🐍" },
      { name: "Java", logo: "☕" },
      { name: "SQL", logo: "🗃️" },
    ],
  },
  {
    category: "AI/ML",
    skills: [
      { name: "Machine Learning", logo: "🤖" },
      { name: "Data Analysis", logo: "📊" },
      { name: "Neural Networks", logo: "🧠" },
    ],
  },
  {
    category: "Web",
    skills: [
      { name: "HTML", logo: "🏷️" },
      { name: "CSS", logo: "🎨" },
      { name: "React", logo: "⚛️" },
      { name: "Next.js", logo: "▲" },
      { name: "Tailwind CSS", logo: "🌊" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "APIs", logo: "🔗" },
      { name: "Git", logo: "🌳" },
      { name: "GitHub", logo: "🐙" },
      { name: "VS Code", logo: "💻" },
      { name: "Supabase", logo: "🗄️" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem-Solving", logo: "💡" },
      { name: "Adaptability", logo: "🔄" },
      { name: "Teamwork", logo: "👥" },
      { name: "Communication", logo: "💬" },
    ],
  },
]

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="relative py-24 px-4 md:px-12 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-neon-magenta text-balance"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative p-6 rounded-lg glass-effect hover:bg-primary/10 transition-all duration-300 group"
            >
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-40 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 transition-opacity duration-300" />
              <div className="relative">
                <h3 className="text-lg font-semibold text-neon-cyan mb-4 group-hover:text-neon-magenta transition-colors">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.15, y: -5 }}
                      className="flex flex-col items-center justify-center p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all cursor-pointer"
                      title={skill.name}
                    >
                      {skill.logo.length > 2 ? (
                        <span className="text-sm font-bold text-neon-cyan mb-1">{skill.logo}</span>
                      ) : (
                        <span className="text-2xl mb-1">{skill.logo}</span>
                      )}
                      <span className="text-xs font-medium text-primary text-center line-clamp-2">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
