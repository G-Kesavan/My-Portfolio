import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function FloatingObject({ geometry, color, position, scale }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!ref.current) return;

    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.y = t * 0.5;
    ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.3;
  });

  return (
    <mesh ref={ref} position={position} scale={scale} castShadow>
      {geometry && geometry}   {/* ✔ safe check */}
      <meshStandardMaterial
        color={color}
        metalness={0.4}
        roughness={0.3}
      />
    </mesh>
  );
}

export default function PortfolioBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas shadows camera={{ position: [0, 1.5, 6], fov: 45 }}>
        {/* LIGHTS */}
        <ambientLight intensity={0.4} />
        <directionalLight
          intensity={1}
          position={[5, 10, 2]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* ENVIRONMENT */}
        <Environment preset="city" />

        {/* FLOATING OBJECTS */}
        <FloatingObject
          geometry={<icosahedronGeometry args={[1, 1]} />}
          color="#ff6b6b"
          position={[-2.2, 0.3, -0.5]}
          scale={1}
        />

        <FloatingObject
          geometry={<torusKnotGeometry args={[0.6, 0.18, 128, 32]} />}
          color="#88e0ff"
          position={[1.6, 0.1, -1.2]}
          scale={1}
        />

        <FloatingObject
          geometry={<boxGeometry args={[1.4, 1, 0.6]} />}
          color="#6be7ff"
          position={[0.7, -0.1, 1.1]}
          scale={1}
        />

        <FloatingObject
          geometry={<ringGeometry args={[0.6, 1.0, 64]} />}
          color="#c88eff"
          position={[-0.4, 0.8, 2]}
          scale={1}
        />

        {/* PARTICLES */}
        {[...Array(100)].map((_, i) => (
          <mesh key={i} position={[(Math.random() - 0.5) * 12, Math.random() * 5 - 1, (Math.random() - 0.5) * 8]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial color={`hsl(${Math.random() * 360}, 70%, 65%)`} />
          </mesh>
        ))}

        {/* CAMERA CONTROLS */}
        <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}
