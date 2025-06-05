// src/components/StarsBackground.tsx
import { useLoader } from "@react-three/fiber";
import { TextureLoader, BackSide } from "three";
import starsTexture from "../assets/atmosphere.jpg";

export default function StarsBackground() {
  const texture = useLoader(TextureLoader, starsTexture);

  return (
    <mesh>
      <sphereGeometry args={[1000, 0, 0]} />
      <meshBasicMaterial map={texture} side={BackSide} />
    </mesh>
  );
}
