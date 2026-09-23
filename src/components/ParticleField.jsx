import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 260;

function Embers() {
  const pointsRef = useRef(null);
  const groupRef = useRef(null);

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const spd = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 9; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6; // z
      spd[i] = 0.15 + Math.random() * 0.35;
    }
    return [pos, spd];
  }, []);

  useFrame((state, delta) => {
    const arr = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < COUNT; i++) {
      const idx = i * 3 + 1;
      arr[idx] += speeds[i] * delta * 0.5; // rise
      arr[i * 3] += Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.0009; // sway
      if (arr[idx] > 4.6) arr[idx] = -4.6;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // gentle parallax toward pointer
    if (groupRef.current) {
      const targetX = state.pointer.x * 0.4;
      const targetY = state.pointer.y * 0.25;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.02;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          sizeAttenuation
          color={new THREE.Color("#e3c574")}
          transparent
          opacity={0.55}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export default function ParticleField({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <Embers />
      </Canvas>
    </div>
  );
}
