// src/components/Planet.tsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface PlanetProps {
  size: number;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
}

export default function Planet({ size, color, orbitRadius, orbitSpeed }: PlanetProps) {
  const ref = useRef<THREE.Mesh>(null);
  const angleRef = useRef(Math.random() * Math.PI * 2); // random initial angle

  useFrame(() => {
    angleRef.current += orbitSpeed;
    const x = orbitRadius * Math.cos(angleRef.current);
    const z = orbitRadius * Math.sin(angleRef.current);
    if (ref.current) {
      ref.current.position.set(x, 0, z);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
