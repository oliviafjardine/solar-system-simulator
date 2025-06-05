// src/components/PlanetKey.tsx
import React from "react";
import "./PlanetKey.css";

const planetData = {
  name: "Earth",
  orbitSpeed: "29.78 km/s",
  size: "6,371 km radius",
  moons: 1,
  surfaceFeatures: "Oceans, continents, volcanoes",
  formation: "4.54 billion years ago",
};

export default function PlanetKey() {
  return (
    <div className="planet-key">
      <h2>🌍 {planetData.name} — Planet Key</h2>
      <div className="row"><span>Orbit Speed:</span><span>{planetData.orbitSpeed}</span></div>
      <div className="row"><span>Size:</span><span>{planetData.size}</span></div>
      <div className="row"><span># Moons:</span><span>{planetData.moons}</span></div>
      <div className="surface">
        <span>Surface Features:</span>
        <div className="subtext">{planetData.surfaceFeatures}</div>
      </div>
      <div className="row"><span>Formation:</span><span>{planetData.formation}</span></div>
    </div>
  );
}
