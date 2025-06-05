// src/components/OrbitRing.tsx
import { useMemo } from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";

interface OrbitRingProps {
  radius: number;
  segments?: number;
  color?: string;
}

export default function OrbitRing({ radius, segments = 100, color = "white" }: OrbitRingProps) {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
    }
    return pts;
  }, [radius, segments]);

  return <Line points={points} color={color} lineWidth={0.5} />;
}
