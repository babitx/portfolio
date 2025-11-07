"use client"
import { motion } from "framer-motion"

interface Project {
  title: string
  description: string
  tags: string[]
  github: string
  live?: string
  icon: string
}

const projects: Project[] = [
  {
    title: "Mediconnect",
    description: "Full-stack medicine management & reminder web app with Supabase backend. Features medicine tracking, expiry alerts, and interactive dashboard.",
    tags: ["React", "Next.js", "Supabase", "Tailwind CSS"],
    live: "https://medi-connect-c2tr.vercel.app/",
    icon: "💊",
    github: ""
  },
  {
    title: "Fake News Detector",
    description:
      "AI-powered website to detect fake news articles using machine learning models. Built with HTML/CSS UI and Python backend.",
    tags: ["ML", "Python", "HTML/CSS", "Flask"],
    github: "https://github.com",
    live: "https://fake-news-detector-ai.onrender.com/",
    icon: "📰",
  },
]

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="relative py-24 px-4 md:px-12 bg-background">
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
          className="text-4xl md:text-5xl font-bold mb-12 text-neon-purple text-balance"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-6 rounded-lg glass-effect hover:bg-primary/10 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-50 bg-gradient-to-br from-neon-magenta/10 via-transparent to-neon-purple/10 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div className="text-4xl mb-3 inline-block" whileHover={{ scale: 1.2, rotate: 10 }}>
                  {project.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 text-xs rounded bg-primary/10 text-primary hover:bg-primary/20 transition-all"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 rounded text-sm bg-primary/20 text-primary hover:bg-primary/30 transition-colors text-center font-semibold"
                  >
                    GitHub
                  </motion.a>
                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 rounded text-sm bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors text-center font-semibold"
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
