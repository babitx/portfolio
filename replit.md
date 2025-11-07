# Interactive 3D Portfolio

## Overview

This is an interactive 3D portfolio website for Babit Kumar, a Full Stack Developer and AI/ML enthusiast. The project showcases skills, projects, education timeline, and contact information through an immersive, dark-themed interface with 3D graphics powered by React Three Fiber. Built with Next.js 14+ and React, the portfolio features custom animations, particle effects, and interactive 3D elements to create an engaging user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Choice: Next.js 14+ with App Router**
- **Problem**: Need for modern React features with server-side rendering capabilities and optimized performance
- **Solution**: Next.js App Router with React Server Components
- **Rationale**: Provides automatic code splitting, optimized image loading, and seamless client/server component integration
- **Trade-offs**: App Router is newer and has a learning curve, but offers better performance and developer experience than Pages Router

**UI Component System: Shadcn/ui + Radix UI**
- **Problem**: Need for accessible, customizable UI components with consistent styling
- **Solution**: Shadcn/ui built on top of Radix UI primitives with Tailwind CSS
- **Rationale**: Copy-paste component architecture allows full customization while maintaining accessibility standards
- **Configuration**: Uses "new-york" style variant with CSS variables for theming

**3D Graphics: React Three Fiber + Drei**
- **Problem**: Creating immersive 3D visualizations and interactive elements
- **Solution**: React Three Fiber (R3F) for declarative Three.js integration with Drei helper components
- **Rationale**: Enables declarative 3D scene composition within React component tree
- **Components**: Geometric shapes (Icosahedron, Sphere, Octahedron), Stars, FloatingElements with OrbitControls

**Animation Framework: Framer Motion**
- **Problem**: Smooth, performant animations for UI elements and transitions
- **Solution**: Framer Motion for declarative animation API
- **Rationale**: Provides gesture recognition, layout animations, and spring physics out of the box
- **Use Cases**: Page transitions, scroll-triggered animations, hover effects, stagger animations

### Styling Architecture

**Tailwind CSS with OKLCH Color Space**
- **Problem**: Maintaining consistent dark theme with vibrant neon accents
- **Solution**: Tailwind CSS with custom OKLCH color definitions and CSS variables
- **Rationale**: OKLCH provides perceptually uniform colors and better control over hue/saturation
- **Theme System**: 
  - Dark-first design with neon cyan (#65b3ff), magenta (#ff00ff), and purple (#5500ff) accents
  - Glass-morphism effects and glow shadows for cyberpunk aesthetic
  - Custom CSS variables for consistent theming across components

**Component Architecture**
- **Pattern**: Compositional components with clear separation of concerns
- **Structure**:
  - Section components (Hero, About, Skills, Projects, Contact)
  - Effect components (CustomCursor, FloatingParticles, 3D environments)
  - Layout components (NavigationBar, ThemeProvider)
- **State Management**: Local useState/useRef for simple state, no external state library needed

### Performance Optimizations

**Code Splitting and Lazy Loading**
- Client-side components marked with "use client" directive
- 3D components loaded only when needed
- Automatic route-based code splitting via Next.js

**Animation Performance**
- useFrame hook for 60fps 3D animations
- useMemo and useCallback for preventing unnecessary re-renders
- Framer Motion's layout animations for GPU-accelerated transforms

**Font Loading Strategy**
- Next.js font optimization with Poppins, Geist, and Geist Mono
- Variable fonts for reduced file size
- Subset loading (latin only)

### Type Safety

**TypeScript Configuration**
- Strict mode enabled for maximum type safety
- Path aliases (@/*) for clean imports
- ES6 target with modern module resolution (bundler)
- Integration with Next.js type generation

## External Dependencies

### Core Framework
- **Next.js**: React framework with App Router, image optimization, and automatic code splitting
- **React 18+**: UI library with concurrent features and server components
- **TypeScript**: Static typing for improved developer experience and code quality

### UI Component Libraries
- **Radix UI**: Unstyled, accessible component primitives (30+ components including Dialog, Dropdown, Toast, etc.)
- **Shadcn/ui**: Pre-styled Radix components with Tailwind CSS
- **Lucide React**: Icon library for UI elements

### 3D Graphics
- **Three.js**: 3D graphics library (via React Three Fiber)
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Helper components (OrbitControls, Stars, Float, Sphere, etc.)

### Animation and Styling
- **Framer Motion**: Production-ready animation library
- **Tailwind CSS**: Utility-first CSS framework
- **tw-animate-css**: Additional animation utilities for Tailwind
- **Autoprefixer**: CSS vendor prefixing

### Forms and Validation
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Validation resolver for Zod/Yup integration

### Utilities
- **clsx**: Conditional className utility
- **class-variance-authority**: Type-safe variant API for components
- **tailwind-merge**: Merge Tailwind classes without conflicts
- **date-fns**: Date utility library

### Analytics and Deployment
- **@vercel/analytics**: Analytics tracking for Vercel deployments
- **Vercel Platform**: Hosting and deployment infrastructure

### Development Tools
- **ESLint**: Code linting
- **next-themes**: Theme switching (though app uses forced dark mode)

### Notable Architecture Decisions

1. **No Backend/Database**: Portfolio is entirely static with no server-side data fetching or database. Contact form submits are handled client-side only.

2. **Dark Theme Only**: Application enforces dark mode without theme switching, optimized for the cyberpunk/neon aesthetic.

3. **Custom Cursor**: Replaces default cursor with animated custom cursor that responds to interactive elements.

4. **3D Performance**: Uses wireframe geometries and optimized mesh counts to maintain 60fps on mid-range devices.

5. **Mobile Responsiveness**: Responsive design with simplified 3D effects on smaller screens to maintain performance.