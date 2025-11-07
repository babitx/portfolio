"use client"

import React from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars, Float } from "@react-three/drei"
import type * as THREE from "three"

function BackgroundGeometry() {
  const groupRef = React.useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.0001
      groupRef.current.rotation.y += 0.0003
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={0.5} rotationIntensity={0.3} floatIntensity={0.2}>
        <mesh position={[0, 0, -5]} scale={0.3}>
          <icosahedronGeometry args={[1, 4]} />
          <meshStandardMaterial
            color="#65b3ff"
            emissive="#65b3ff"
            emissiveIntensity={0.2}
            wireframe={true}
            transparent={true}
            opacity={0.15}
          />
        </mesh>
      </Float>

      <Float speed={0.3} rotationIntensity={0.2} floatIntensity={0.15}>
        <mesh position={[5, 3, -8]} scale={0.2}>
          <octahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#ff00ff"
            emissive="#ff00ff"
            emissiveIntensity={0.15}
            wireframe={true}
            transparent={true}
            opacity={0.1}
          />
        </mesh>
      </Float>

      <Float speed={0.4} rotationIntensity={0.25} floatIntensity={0.18}>
        <mesh position={[-5, -2, -10]} scale={0.25}>
          <tetrahedronGeometry args={[1]} />
          <meshStandardMaterial
            color="#5500ff"
            emissive="#5500ff"
            emissiveIntensity={0.1}
            wireframe={true}
            transparent={true}
            opacity={0.12}
          />
        </mesh>
      </Float>
    </group>
  )
}

export default function Environment3D() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-screen pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
      >
        <color attach="background" args={["#0d0d1a"]} />
        <Stars radius={400} depth={100} count={2000} factor={6} saturation={0.6} fade speed={1} />
        <BackgroundGeometry />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.5} />
        <ambientLight intensity={0.3} />
        <pointLight position={[15, 15, 15]} intensity={0.6} color="#65b3ff" />
        <pointLight position={[-15, -15, -15]} intensity={0.4} color="#ff00ff" />
      </Canvas>
    </div>
  )
}
