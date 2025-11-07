"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import { motion } from "framer-motion"

interface MousePos {
  x: number
  y: number
}

export default function CustomCursor({ mousePosition }: { mousePosition: MousePos }) {
  const [trail, setTrail] = useState<MousePos[]>([])
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)

  useMemo(() => {
    setTrail((prevTrail) => [mousePosition, ...prevTrail.slice(0, 5)])
  }, [mousePosition])

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    const isInteractive =
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.classList.contains("group") ||
      target.classList.contains("card-glow")
    setIsHoveringInteractive(isInteractive)
  }, [])

  const handleMouseOut = useCallback(() => {
    setIsHoveringInteractive(false)
  }, [])

  useEffect(() => {
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [handleMouseOver, handleMouseOut])

  return (
    <>
      {/* Main cursor - changes color when hovering interactive elements */}
      <motion.div
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHoveringInteractive ? 1.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className={`fixed w-4 h-4 rounded-full pointer-events-none z-[9999] transition-all duration-200 ${
          isHoveringInteractive ? "bg-neon-magenta glow" : "bg-neon-cyan glow"
        }`}
      />

      {/* Cursor ring - expands when hovering interactive elements */}
      <motion.div
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHoveringInteractive ? 1.3 : 1,
          borderColor: isHoveringInteractive ? "rgb(255, 0, 255)" : "rgb(101, 179, 255)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed w-8 h-8 border border-neon-magenta rounded-full pointer-events-none z-[9999]"
      />

      {/* Trail effect - gets more vibrant when hovering */}
      {trail.map((pos, idx) => (
        <motion.div
          key={idx}
          animate={{
            x: pos.x - 4,
            y: pos.y - 4,
            scale: isHoveringInteractive ? 1.2 : 1,
          }}
          className={`fixed w-2 h-2 rounded-full pointer-events-none z-[9998] transition-all duration-200 ${
            isHoveringInteractive ? "bg-neon-magenta" : "bg-neon-purple"
          }`}
          style={{
            opacity: (1 - idx / trail.length) * (isHoveringInteractive ? 0.8 : 0.6),
          }}
        />
      ))}

      {/* Outer glow ring - subtle background effect */}
      <motion.div
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHoveringInteractive ? 1.5 : 1,
          opacity: isHoveringInteractive ? 0.3 : 0.15,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="fixed w-12 h-12 border border-neon-cyan/30 rounded-full pointer-events-none z-[9997]"
      />
    </>
  )
}
