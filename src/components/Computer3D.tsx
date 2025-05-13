import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const Computer3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [logoTexture, setLogoTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(500, 500);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Computer geometry with more detail
    const monitorGeometry = new THREE.BoxGeometry(3, 2, 0.2);
    const screenGeometry = new THREE.BoxGeometry(2.8, 1.8, 0.1);
    const standGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const baseGeometry = new THREE.BoxGeometry(2.5, 0.2, 2);

    // Materials with enhanced neon effect
    let monitorMaterial;
    if (logoTexture) {
      monitorMaterial = new THREE.MeshBasicMaterial({ map: logoTexture });
    } else {
      monitorMaterial = new THREE.MeshPhongMaterial({
        color: 0x222244,
        shininess: 100,
        emissive: 0x00f2fe,
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.9,
      });
    }

    const screenMaterial = new THREE.MeshPhongMaterial({
      color: 0x000000,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.5,
      shininess: 100,
    });

    const standMaterial = new THREE.MeshPhongMaterial({
      color: 0x7367f0,
      emissive: 0x7367f0,
      emissiveIntensity: 0.3,
      shininess: 100,
      transparent: true,
      opacity: 0.9,
    });

    const baseMaterial = new THREE.MeshPhongMaterial({
      color: 0xff00ff,
      emissive: 0xff00ff,
      emissiveIntensity: 0.3,
      shininess: 100,
      transparent: true,
      opacity: 0.9,
    });

    // Create meshes
    const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    const stand = new THREE.Mesh(standGeometry, standMaterial);
    const base = new THREE.Mesh(baseGeometry, baseMaterial);

    // Position elements
    monitor.position.y = 2;
    screen.position.y = 2;
    screen.position.z = 0.11;
    stand.position.y = 1;
    base.position.y = 0;

    // Add shadows
    monitor.castShadow = true;
    screen.castShadow = true;
    stand.castShadow = true;
    base.castShadow = true;

    // Add to scene
    scene.add(monitor);
    scene.add(screen);
    scene.add(stand);
    scene.add(base);

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f2fe, 2);
    pointLight1.position.set(5, 5, 5);
    pointLight1.castShadow = true;
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x7367f0, 2);
    pointLight2.position.set(-5, 5, 5);
    pointLight2.castShadow = true;
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xff00ff, 2);
    pointLight3.position.set(0, -5, 5);
    pointLight3.castShadow = true;
    scene.add(pointLight3);

    // Camera position
    camera.position.z = 8;
    camera.position.y = 2;

    // Animation
    let isAnimating = false;
    let clickAnimation = false;
    let hoverAnimation = false;

    const animate = () => {
      requestAnimationFrame(animate);

      if (isAnimating) {
        monitor.rotation.y += 0.02;
        screen.rotation.y += 0.02;
        stand.rotation.y += 0.02;
        base.rotation.y += 0.02;
      }

      if (clickAnimation) {
        const time = Date.now() * 0.001;
        monitor.scale.y = 0.95 + Math.sin(time * 5) * 0.05;
        screen.scale.y = 0.95 + Math.sin(time * 5) * 0.05;
        if (monitor.material instanceof THREE.MeshPhongMaterial) {
          monitor.material.emissiveIntensity = 0.3 + Math.sin(time * 5) * 0.4;
        }
        if (screen.material instanceof THREE.MeshPhongMaterial) {
          screen.material.emissiveIntensity = 0.5 + Math.sin(time * 5) * 0.5;
        }
      }

      if (hoverAnimation) {
        const time = Date.now() * 0.001;
        monitor.position.y = 2 + Math.sin(time * 2) * 0.1;
        screen.position.y = 2 + Math.sin(time * 2) * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Mouse interaction
    const handleMouseEnter = () => {
      isAnimating = true;
      hoverAnimation = true;
    };

    const handleMouseLeave = () => {
      isAnimating = false;
      hoverAnimation = false;
      monitor.rotation.y = 0;
      screen.rotation.y = 0;
      stand.rotation.y = 0;
      base.rotation.y = 0;
      monitor.position.y = 2;
      screen.position.y = 2;
    };

    const handleClick = () => {
      clickAnimation = true;
      setTimeout(() => {
        clickAnimation = false;
        monitor.scale.y = 1;
        screen.scale.y = 1;
        if (monitor.material instanceof THREE.MeshPhongMaterial) {
          monitor.material.emissiveIntensity = 0.3;
        }
        if (screen.material instanceof THREE.MeshPhongMaterial) {
          screen.material.emissiveIntensity = 0.5;
        }
      }, 1000);
    };

    mountRef.current.addEventListener('mouseenter', handleMouseEnter);
    mountRef.current.addEventListener('mouseleave', handleMouseLeave);
    mountRef.current.addEventListener('click', handleClick);

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeEventListener('mouseenter', handleMouseEnter);
        mountRef.current.removeEventListener('mouseleave', handleMouseLeave);
        mountRef.current.removeEventListener('click', handleClick);
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [logoTexture]);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load('/logo.png', (texture) => {
      setLogoTexture(texture);
    });
  }, []);

  return (
    <motion.div
      ref={mountRef}
      className="w-[500px] h-[500px] cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    />
  );
};

export default Computer3D; 