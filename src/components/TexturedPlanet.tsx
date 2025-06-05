import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { Trail } from "@react-three/drei";

interface Props {
  orbitRadius: number;
  orbitSpeed: number;
  size?: number;
  textureUrl: string;
  ringTextureUrl?: string;
  ringInnerRadius?: number;
  ringOuterRadius?: number;
}

export default function TexturedPlanet({
  orbitRadius,
  orbitSpeed,
  size = 1,
  textureUrl,
  ringTextureUrl,
  ringInnerRadius = 1.2,
  ringOuterRadius = 2,
}: Props) {
  const ref = useRef<THREE.Mesh>(null);
  const angleRef = useRef(Math.random() * Math.PI * 2);

  const texture = useLoader(TextureLoader, textureUrl);
  const ringTexture = ringTextureUrl ? useLoader(TextureLoader, ringTextureUrl) : null;

  useFrame(() => {
    angleRef.current += orbitSpeed;
    const x = orbitRadius * Math.cos(angleRef.current);
    const z = orbitRadius * Math.sin(angleRef.current);
    if (ref.current) {
      ref.current.position.set(-x, 0, z);
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <Trail
        width={0.5}
        length={40}
        decay={1}
        color={"white"}
        attenuation={(t) => t * t}
      >
        <mesh ref={ref}>
          <sphereGeometry args={[size, 64, 64]} />
          <meshStandardMaterial map={texture} />
        </mesh>
      </Trail>

      {ringTexture && (
        <mesh rotation={[Math.PI / 2, 0, 0]} position={ref.current?.position}>
          <ringGeometry args={[ringInnerRadius, ringOuterRadius, 64]} />
          <meshBasicMaterial
            map={ringTexture}
            side={THREE.DoubleSide}
            transparent
            opacity={0.8}
          />
        </mesh>
      )}
    </>
  );
}
