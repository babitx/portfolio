"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactItems = [
    {
      label: "Email",
      value: "babitkumar244@gmail.com",
      href: "mailto:babitkumar244@gmail.com",
      icon: "✉️",
    },
    {
      label: "Phone",
      value: "+91 7807856224",
      href: "tel:+917807856224",
      icon: "📱",
    },
    {
      label: "Location",
      value: "Kangra, HP, India",
      href: "#",
      icon: "📍",
    },
    {
      label: "GitHub",
      value: "babitx",
      href: "https://github.com/babitx",
      icon: "🐙",
    },
    {
      label: "LinkedIn",
      value: "babitxA",
      href: "https://www.linkedin.com/in/babitxA/",
      icon: "💼",
    },
  ]

  return (
    <section id="contact" className="relative py-24 px-4 md:px-12 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan text-balance"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-muted-foreground mb-12"
        >
          Have a project in mind? Let's talk about it. I'm always open to new opportunities and collaborations.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {contactItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 rounded-lg glass-effect hover:bg-primary/10 transition-all cursor-pointer"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
              <div className="text-sm text-neon-cyan mb-2 font-semibold">{item.label}</div>
              <div className="text-foreground group-hover:text-neon-cyan transition-colors">{item.value}</div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <motion.input
            whileFocus={{ boxShadow: "0 0 20px rgba(101, 179, 255, 0.3)" }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg glass-effect text-foreground placeholder-muted-foreground focus:outline-none focus:bg-primary/10 transition-all"
            required
          />
          <motion.input
            whileFocus={{ boxShadow: "0 0 20px rgba(101, 179, 255, 0.3)" }}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg glass-effect text-foreground placeholder-muted-foreground focus:outline-none focus:bg-primary/10 transition-all"
            required
          />
          <motion.textarea
            whileFocus={{ boxShadow: "0 0 20px rgba(101, 179, 255, 0.3)" }}
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg glass-effect text-foreground placeholder-muted-foreground focus:outline-none focus:bg-primary/10 transition-all resize-none"
            required
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 overflow-hidden relative"
          >
            <motion.span animate={submitted ? { opacity: [1, 0] } : { opacity: 1 }} className="inline-block">
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </motion.span>
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-24 pt-12 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="space-y-2"
        >
          <p className="text-foreground/80">Built with passion using Next.js, Three.js, and Tailwind CSS</p>
          <p className="text-sm text-muted-foreground">© 2025 Babit Kumar. All rights reserved.</p>
          <motion.div
            className="flex justify-center gap-6 mt-4 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              whileHover={{ scale: 1.2, color: "rgb(101, 179, 255)" }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors"
            >
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "rgb(101, 179, 255)" }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors"
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "rgb(101, 179, 255)" }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors"
            >
              Twitter
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.footer>
    </section>
  )
}
