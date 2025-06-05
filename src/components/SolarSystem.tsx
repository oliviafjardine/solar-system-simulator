import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TexturedPlanet from "./TexturedPlanet";
import StarsBackground from "./StarsBackground";
import OrbitRing from "./OrbitRing";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";


import sunTexture from "../assets/sun.jpg";
import mercuryTexture from "../assets/mercury.jpg";
import venusTexture from "../assets/venus.jpg";
import earthTexture from "../assets/earth.jpg";
import marsTexture from "../assets/mars.jpg";
import jupiterTexture from "../assets/jupiter.jpg";
import saturnTexture from "../assets/saturn.jpg";
import uranusTexture from "../assets/uranus.jpg";
import neptuneTexture from "../assets/neptune.jpg";

export default function SolarSystem() {
  return (
    <Canvas camera={{ position: [0, 20, 40], fov: 50 }} style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={1.5} />
      <StarsBackground />
      <pointLight position={[0, 0, 0]} intensity={2} />

      <OrbitControls target={[0, 0, 0]} />

      {/* Sun */}
      <mesh>
        <sphereGeometry args={[4, 64, 64]} />
        <meshStandardMaterial emissive="yellow" emissiveIntensity={0.5} map={useLoader(TextureLoader, sunTexture)} />
      </mesh>

      {/* Planets */}
      <TexturedPlanet orbitRadius={6} orbitSpeed={0.02} size={0.3} textureUrl={mercuryTexture} />
      <TexturedPlanet orbitRadius={8} orbitSpeed={0.015} size={0.5} textureUrl={venusTexture} />
      <TexturedPlanet orbitRadius={10} orbitSpeed={0.01} size={0.55} textureUrl={earthTexture} />
      <TexturedPlanet orbitRadius={12} orbitSpeed={0.008} size={0.4} textureUrl={marsTexture} />
      <TexturedPlanet orbitRadius={15} orbitSpeed={0.006} size={1.2} textureUrl={jupiterTexture} />
      <TexturedPlanet orbitRadius={18} orbitSpeed={0.005} size={1} textureUrl={saturnTexture} />
      <TexturedPlanet orbitRadius={21} orbitSpeed={0.004} size={0.8} textureUrl={uranusTexture} />
      <TexturedPlanet orbitRadius={24} orbitSpeed={0.003} size={0.75} textureUrl={neptuneTexture} />

      {/* <OrbitRing radius={6} color="gray" />
      <OrbitRing radius={8} color="gray" />
      <OrbitRing radius={10} color="gray" />
      <OrbitRing radius={12} color="gray" />
      <OrbitRing radius={15} color="gray" />
      <OrbitRing radius={18} color="gray" />
      <OrbitRing radius={21} color="gray" />
      <OrbitRing radius={24} color="gray" /> */}
    </Canvas>
  );
}
