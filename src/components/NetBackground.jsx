"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MidDarkNetBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // Renderer (medium-dark background)
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x101522, 1); // << BEST medium-dark color
    mount.appendChild(renderer.domElement);

    // Round dot texture to avoid squares
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 32;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#6d8eff";
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();
    const circleTexture = new THREE.CanvasTexture(canvas);

    // Nodes
    const COUNT = 70;
    const RANGE = 40;

    const positions = new Float32Array(COUNT * 3);
    const nodes = [];

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * RANGE;
      const y = (Math.random() - 0.5) * RANGE;

      nodes.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.02,
        vy: (Math.random() - 0.5) * 0.02,
      });

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = 0;
    }

    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const dotMat = new THREE.PointsMaterial({
      map: circleTexture,      // ensures round dots
      size: 2,
      alphaTest: 0.5,
      transparent: true,
      color: 0x6d8eff,
    });

    const dots = new THREE.Points(dotGeo, dotMat);
    scene.add(dots);

    // Lines (soft)
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x5b76ff,
      opacity: 0.2,
      transparent: true,
    });

    const lineGeo = new THREE.BufferGeometry();
    const linePositions = new Float32Array(COUNT * COUNT * 3);
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    // Animation loop
    const animate = () => {
      let lineIndex = 0;

      for (let i = 0; i < COUNT; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (Math.abs(n.x) > RANGE / 2) n.vx *= -1;
        if (Math.abs(n.y) > RANGE / 2) n.vy *= -1;

        positions[i * 3] = n.x;
        positions[i * 3 + 1] = n.y;

        for (let j = i + 1; j < COUNT; j++) {
          const dx = n.x - nodes[j].x;
          const dy = n.y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // fewer lines → clean + professional
          if (dist < 12) {
            linePositions[lineIndex++] = n.x;
            linePositions[lineIndex++] = n.y;
            linePositions[lineIndex++] = 0;

            linePositions[lineIndex++] = nodes[j].x;
            linePositions[lineIndex++] = nodes[j].y;
            linePositions[lineIndex++] = 0;
          }
        }
      }

      dotGeo.attributes.position.needsUpdate = true;
      lines.geometry.setDrawRange(0, lineIndex / 3);
      lines.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Resize
    const onResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        overflow: "hidden",
      }}
    />
  );
}
