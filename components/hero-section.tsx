"use client"

import React, { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, Icosahedron, Stars } from "@react-three/drei"
import type * as THREE from "three"
import { motion } from "framer-motion"

function RotatingGeometry() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003
      meshRef.current.rotation.y += 0.005
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.3) * 2
    }
  })

  return (
    <group ref={meshRef}>
      <Icosahedron args={[2, 4]}>
        <meshStandardMaterial
          color="#65b3ff"
          emissive="#65b3ff"
          emissiveIntensity={0.5}
          wireframe={false}
          metalness={0.8}
          roughness={0.2}
        />
      </Icosahedron>
      <Sphere args={[2.3, 32, 32]}>
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={0.2}
          wireframe={true}
          transparent={true}
          opacity={0.3}
        />
      </Sphere>
    </group>
  )
}

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  React.useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/80">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <Stars radius={300} depth={50} count={5000} factor={7} saturation={0.7} fade speed={1} />
          <RotatingGeometry />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#65b3ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff00ff" />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="text-center px-4"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-8 relative">
            <div className="relative inline-block">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-1 animate-spin"
                style={{ animationDuration: "3s" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-neon-cyan/50 shadow-lg glow">
                <img src="/developer-profile-picture.png" alt="Babit Kumar" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-neon-cyan">Hi, I'm Babit Kumar</span>
          </motion.h1>

          {/* Subheadline - CHANGE: Updated to bright neon cyan for visibility */}
          <motion.p variants={itemVariants} className="text-lg md:text-2xl text-neon-cyan mb-4">
            Full Stack Developer | AI Enthusiast | Problem Solver
          </motion.p>

          {/* Tagline - CHANGE: Updated to bright cyan for better contrast */}
          <motion.p variants={itemVariants} className="text-base md:text-lg text-cyan-300 max-w-2xl mb-12">
            I build scalable web solutions blending AI and modern UX
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => {
                const projectsSection = document.getElementById("projects")
                projectsSection?.scrollIntoView({ behavior: "smooth" })
              }}
              className="relative px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>

            <button
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/Resume.pdf"
                link.download = "Resume.pdf"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              className="relative px-8 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-cyan-400 text-background font-semibold overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                Download Resume
                <span className="group-hover:translate-x-1 transition-transform">↓</span>
              </span>
            </button>

            <button
              onClick={() => {
                const contactSection = document.getElementById("contact")
                contactSection?.scrollIntoView({ behavior: "smooth" })
              }}
              className="relative px-8 py-3 rounded-lg border border-neon-cyan text-neon-cyan font-semibold hover:bg-neon-cyan/10 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100" />
              <span className="relative">Contact Me</span>
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              className="text-neon-cyan text-2xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
