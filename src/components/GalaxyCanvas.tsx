'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Galaxy() {
  const pointsRef = useRef<THREE.Points>(null)

  const geometry = useMemo(() => {
    const count = 5000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const insideColor = new THREE.Color('#6366f1')  // indigo-500
    const outsideColor = new THREE.Color('#06b6d4') // cyan-500
    const branches = 3

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = Math.random() * 5
      const spinAngle = radius * 2.2
      const branchAngle = ((i % branches) / branches) * Math.PI * 2

      const randomX =
        Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5 * (1 - radius / 5)
      const randomY =
        Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.2
      const randomZ =
        Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5 * (1 - radius / 5)

      positions[i3]     = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i3 + 1] = randomY
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

      const c = new THREE.Color().lerpColors(insideColor, outsideColor, radius / 5)
      colors[i3]     = c.r
      colors[i3 + 1] = c.g
      colors[i3 + 2] = c.b
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return geo
  }, [])

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.elapsedTime * 0.04
      pointsRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.01) * 0.05
    }
  })

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.02}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  )
}

export default function GalaxyCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 2.5, 7], fov: 55 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent' }}
    >
      <Galaxy />
    </Canvas>
  )
}
