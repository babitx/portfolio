"use client"

import type React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import Environment3D from "./3d-environment"

export function EnhancedThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Environment3D />
      {children}
    </NextThemesProvider>
  )
}
