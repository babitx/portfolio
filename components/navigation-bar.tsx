"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download } from "lucide-react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Resume.pdf"
    link.download = "Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 glass-effect"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(101, 179, 255, 0.8)" }}
          className="text-2xl font-bold neon-text cursor-pointer transition-all"
        >
          BK
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              whileHover={{ scale: 1.1 }}
              className="relative text-foreground text-sm font-medium group"
            >
              <span className="relative inline-block transition-colors group-hover:text-neon-cyan">{item.label}</span>
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-magenta"
              />
            </motion.a>
          ))}
          <motion.button
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-neon-cyan to-cyan-400 text-background font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
          >
            <Download size={18} />
            Resume
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-neon-cyan transition-colors text-xl"
        >
          {isOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-effect"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10, color: "rgb(101, 179, 255)" }}
                className="block text-foreground transition-colors py-2 font-medium"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              onClick={() => {
                handleDownloadResume()
                setIsOpen(false)
              }}
              whileHover={{ x: 10 }}
              className="flex items-center gap-2 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-neon-cyan to-cyan-400 text-background font-semibold transition-all"
            >
              <Download size={18} />
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
