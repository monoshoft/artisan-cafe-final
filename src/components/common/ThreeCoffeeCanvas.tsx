import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RotateCcw, Sparkles } from 'lucide-react';

interface ThreeCoffeeCanvasProps {
  cupColor?: string;
  saucerColor?: string;
  accentTheme?: 'dark' | 'cream' | 'gold' | 'emerald';
  compact?: boolean;
}

export const ThreeCoffeeCanvas: React.FC<ThreeCoffeeCanvasProps> = ({
  cupColor = '#1F1B18',
  saucerColor = '#161311',
  accentTheme = 'dark',
  compact = false,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [cupRotationSpeed, setCupRotationSpeed] = useState(0.004);
  const [steamIntensity, setSteamIntensity] = useState<'normal' | 'rich'>('rich');

  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    cupGroup: THREE.Group;
    steamParticles: THREE.Points;
    frameId: number;
    targetRotationY: number;
    currentRotationY: number;
    targetTiltX: number;
    currentTiltX: number;
  } | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    const width = container.clientWidth || (compact ? 320 : 480);
    const height = container.clientHeight || (compact ? 320 : 440);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 5.2);
    camera.lookAt(0, 0.35, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.replaceChildren(renderer.domElement);

    // Studio Environment map
    try {
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      pmrem.dispose();
    } catch {
      // Fallback silently if PMREM fails
    }

    // Studio Lighting
    const keyLight = new THREE.DirectionalLight(0xfff5e6, 2.4);
    keyLight.position.set(3.5, 5, 3);
    keyLight.castShadow = !isSoftwareGl;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x8bc4ff, 0.9);
    fillLight.position.set(-4, 2, -2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffb366, 2.0, 10);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    const hemiLight = new THREE.HemisphereLight(0xffebd2, 0x1f1a14, 0.8);
    scene.add(hemiLight);

    // Assembly Group
    const cupGroup = new THREE.Group();
    cupGroup.position.y = -0.15;
    scene.add(cupGroup);

    // Procedural Latte Art Canvas Texture
    const latteCanvas = document.createElement('canvas');
    latteCanvas.width = 512;
    latteCanvas.height = 512;
    const ctx = latteCanvas.getContext('2d');
    if (ctx) {
      // Rich crema base
      const grad = ctx.createRadialGradient(256, 256, 20, 256, 256, 256);
      grad.addColorStop(0, '#5C3317');
      grad.addColorStop(0.4, '#7A431D');
      grad.addColorStop(0.8, '#A05A2C');
      grad.addColorStop(1, '#4A250E');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Microfoam texture specks
      for (let i = 0; i < 2000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const r = Math.random() * 1.5;
        ctx.fillStyle = Math.random() > 0.6 ? 'rgba(255, 248, 235, 0.15)' : 'rgba(100, 50, 20, 0.1)';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Elegant Latte Art Rosetta / Tulip
      ctx.save();
      ctx.translate(256, 256);

      // Outer heart / leaf petals
      const petals = [
        { y: -70, rx: 75, ry: 40, w: 'rgba(255, 245, 230, 0.94)' },
        { y: -35, rx: 90, ry: 48, w: 'rgba(255, 245, 230, 0.95)' },
        { y: 5, rx: 100, ry: 52, w: 'rgba(255, 245, 230, 0.96)' },
        { y: 50, rx: 85, ry: 46, w: 'rgba(255, 245, 230, 0.95)' },
        { y: 90, rx: 65, ry: 38, w: 'rgba(255, 245, 230, 0.92)' },
        { y: 125, rx: 40, ry: 25, w: 'rgba(255, 245, 230, 0.9)' },
        { y: 150, rx: 20, ry: 16, w: 'rgba(255, 245, 230, 0.85)' },
      ];

      petals.forEach((p) => {
        ctx.beginPath();
        ctx.ellipse(0, p.y, p.rx, p.ry, 0, 0, Math.PI * 2);
        ctx.fillStyle = p.w;
        ctx.shadowColor = 'rgba(70, 35, 15, 0.35)';
        ctx.shadowBlur = 12;
        ctx.fill();
      });

      // Stem pull-through
      ctx.beginPath();
      ctx.moveTo(0, -95);
      ctx.lineTo(0, 165);
      ctx.lineWidth = 14;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#5A2E12';
      ctx.stroke();

      // Delicate inner heart on top
      ctx.beginPath();
      ctx.arc(-14, -85, 16, 0, Math.PI * 2);
      ctx.arc(14, -85, 16, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 248, 238, 0.98)';
      ctx.fill();

      ctx.restore();
    }

    const latteTexture = new THREE.CanvasTexture(latteCanvas);
    latteTexture.colorSpace = THREE.SRGBColorSpace;
    latteTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    // Ceramic Materials
    const cupMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(cupColor),
      roughness: 0.16,
      metalness: 0.05,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      reflectivity: 0.8,
    });

    const saucerMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(saucerColor),
      roughness: 0.22,
      metalness: 0.04,
      clearcoat: 0.8,
    });

    const coffeeSurfaceMaterial = new THREE.MeshStandardMaterial({
      map: latteTexture,
      roughness: 0.35,
      metalness: 0.02,
    });

    // 1. Ceramic Cup Body (Lathe Geometry for authentic curvature)
    const cupPoints: THREE.Vector2[] = [];
    cupPoints.push(new THREE.Vector2(0.0, 0.0));
    cupPoints.push(new THREE.Vector2(0.65, 0.0));
    cupPoints.push(new THREE.Vector2(0.72, 0.05));
    cupPoints.push(new THREE.Vector2(0.85, 0.3));
    cupPoints.push(new THREE.Vector2(0.98, 0.7));
    cupPoints.push(new THREE.Vector2(1.08, 1.15));
    cupPoints.push(new THREE.Vector2(1.10, 1.25)); // lip rim
    cupPoints.push(new THREE.Vector2(1.02, 1.25));
    cupPoints.push(new THREE.Vector2(0.98, 1.12)); // inside cavity
    cupPoints.push(new THREE.Vector2(0.88, 0.7));
    cupPoints.push(new THREE.Vector2(0.76, 0.3));
    cupPoints.push(new THREE.Vector2(0.60, 0.15));
    cupPoints.push(new THREE.Vector2(0.0, 0.15));

    const cupGeom = new THREE.LatheGeometry(cupPoints, 48);
    const cupMesh = new THREE.Mesh(cupGeom, cupMaterial);
    cupMesh.castShadow = !isSoftwareGl;
    cupMesh.receiveShadow = !isSoftwareGl;
    cupGroup.add(cupMesh);

    // 2. Cup Handle (Curved Torus Segment)
    const handleGeom = new THREE.TorusGeometry(0.42, 0.085, 24, 36, Math.PI * 0.95);
    const handleMesh = new THREE.Mesh(handleGeom, cupMaterial);
    handleMesh.position.set(1.12, 0.72, 0);
    handleMesh.rotation.z = -Math.PI * 0.45;
    handleMesh.castShadow = !isSoftwareGl;
    cupGroup.add(handleMesh);

    // 3. Ceramic Saucer
    const saucerPoints: THREE.Vector2[] = [];
    saucerPoints.push(new THREE.Vector2(0.0, -0.04));
    saucerPoints.push(new THREE.Vector2(0.8, -0.04));
    saucerPoints.push(new THREE.Vector2(1.1, 0.02));
    saucerPoints.push(new THREE.Vector2(1.55, 0.16));
    saucerPoints.push(new THREE.Vector2(1.65, 0.22));
    saucerPoints.push(new THREE.Vector2(1.63, 0.17));
    saucerPoints.push(new THREE.Vector2(1.48, 0.09));
    saucerPoints.push(new THREE.Vector2(0.9, -0.02));
    saucerPoints.push(new THREE.Vector2(0.0, -0.02));

    const saucerGeom = new THREE.LatheGeometry(saucerPoints, 52);
    const saucerMesh = new THREE.Mesh(saucerGeom, saucerMaterial);
    saucerMesh.position.y = 0.02;
    saucerMesh.castShadow = !isSoftwareGl;
    saucerMesh.receiveShadow = !isSoftwareGl;
    cupGroup.add(saucerMesh);

    // 4. Coffee / Latte Surface Disc
    const liquidGeom = new THREE.CircleGeometry(0.97, 48);
    const liquidMesh = new THREE.Mesh(liquidGeom, coffeeSurfaceMaterial);
    liquidMesh.rotation.x = -Math.PI / 2;
    liquidMesh.position.y = 1.08;
    cupGroup.add(liquidMesh);

    // 5. Contact Shadow Plane
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const sGrad = sCtx.createRadialGradient(128, 128, 20, 128, 128, 128);
      sGrad.addColorStop(0, 'rgba(0, 0, 0, 0.6)');
      sGrad.addColorStop(0.5, 'rgba(0, 0, 0, 0.25)');
      sGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      sCtx.fillStyle = sGrad;
      sCtx.fillRect(0, 0, 256, 256);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(3.6, 3.6),
      new THREE.MeshBasicMaterial({
        map: shadowTex,
        transparent: true,
        opacity: 0.65,
        depthWrite: false,
      })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.05;
    cupGroup.add(shadowPlane);

    // 6. Procedural Rising Steam Particles
    const particleCount = compact ? 45 : 75;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVels = new Float32Array(particleCount * 3);
    const particleLifes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 0.55;
      particlePositions[i * 3] = Math.cos(angle) * radius;
      particlePositions[i * 3 + 1] = 1.1 + Math.random() * 1.4;
      particlePositions[i * 3 + 2] = Math.sin(angle) * radius;

      particleVels[i * 3] = (Math.random() - 0.5) * 0.005;
      particleVels[i * 3 + 1] = 0.008 + Math.random() * 0.012;
      particleVels[i * 3 + 2] = (Math.random() - 0.5) * 0.005;

      particleLifes[i] = Math.random();
    }

    const steamGeom = new THREE.BufferGeometry();
    steamGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Particle texture
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext('2d');
    if (pCtx) {
      const pGrad = pCtx.createRadialGradient(32, 32, 2, 32, 32, 32);
      pGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
      pGrad.addColorStop(0.4, 'rgba(240, 230, 220, 0.2)');
      pGrad.addColorStop(1, 'rgba(240, 230, 220, 0)');
      pCtx.fillStyle = pGrad;
      pCtx.fillRect(0, 0, 64, 64);
    }
    const pTexture = new THREE.CanvasTexture(pCanvas);

    const steamMat = new THREE.PointsMaterial({
      size: compact ? 0.35 : 0.45,
      map: pTexture,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const steamParticles = new THREE.Points(steamGeom, steamMat);
    cupGroup.add(steamParticles);

    sceneRef.current = {
      renderer,
      scene,
      camera,
      cupGroup,
      steamParticles,
      frameId: 0,
      targetRotationY: 0.4,
      currentRotationY: 0.4,
      targetTiltX: 0.15,
      currentTiltX: 0.15,
    };

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();
      const ref = sceneRef.current;
      if (!ref) return;

      // Smooth damped rotation
      ref.currentRotationY = THREE.MathUtils.damp(ref.currentRotationY, ref.targetRotationY, 4, delta);
      ref.currentTiltX = THREE.MathUtils.damp(ref.currentTiltX, ref.targetTiltX, 4, delta);

      ref.cupGroup.rotation.y = ref.currentRotationY;
      ref.cupGroup.rotation.x = ref.currentTiltX;

      // Auto-float if idle
      if (!isInteracting) {
        ref.targetRotationY += cupRotationSpeed;
        ref.cupGroup.position.y = -0.15 + Math.sin(clock.getElapsedTime() * 1.5) * 0.025;
      }

      // Steam animation
      const posAttr = ref.steamParticles.geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;
      const speedMult = steamIntensity === 'rich' ? 1.2 : 0.7;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        posArray[idx + 1] += (0.009 + particleVels[idx + 1]) * speedMult;
        posArray[idx] += Math.sin(clock.getElapsedTime() * 2 + i) * 0.002;

        if (posArray[idx + 1] > 2.8) {
          const angle = Math.random() * Math.PI * 2;
          const r = Math.random() * 0.6;
          posArray[idx] = Math.cos(angle) * r;
          posArray[idx + 1] = 1.1;
          posArray[idx + 2] = Math.sin(angle) * r;
        }
      }
      posAttr.needsUpdate = true;

      ref.renderer.render(ref.scene, ref.camera);
      ref.frameId = requestAnimationFrame(animate);
    };

    if (sceneRef.current) {
      sceneRef.current.frameId = requestAnimationFrame(animate);
    }

    // Mouse Interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!sceneRef.current) return;
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        sceneRef.current.targetRotationY += deltaX * 0.012;
        sceneRef.current.targetTiltX = Math.max(-0.2, Math.min(0.45, sceneRef.current.targetTiltX + deltaY * 0.008));
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      } else {
        // Soft hover parallax
        const rect = container.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        sceneRef.current.targetTiltX = 0.15 + normY * 0.15;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 2000);
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // Resize handler
    const handleResize = () => {
      if (!mountRef.current || !sceneRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      if (w > 0 && h > 0) {
        sceneRef.current.camera.aspect = w / h;
        sceneRef.current.camera.updateProjectionMatrix();
        sceneRef.current.renderer.setSize(w, h);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.frameId);
        sceneRef.current.renderer.dispose();
      }
      domEl.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
    };
  }, [cupColor, saucerColor, compact, steamIntensity]);

  const handleReset = () => {
    if (sceneRef.current) {
      sceneRef.current.targetRotationY = 0.4;
      sceneRef.current.targetTiltX = 0.15;
    }
  };

  return (
    <div className="relative group w-full h-full flex items-center justify-center select-none">
      <div
        ref={mountRef}
        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
        title="Drag to rotate the 3D ceramic cup"
      />

      {/* Floating 3D Control Pill */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700/60 text-xs text-stone-300 opacity-80 group-hover:opacity-100 transition-opacity pointer-events-auto shadow-lg">
        <span className="flex items-center gap-1.5 font-medium text-[11px] text-amber-400">
          <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
          Interactive 3D
        </span>
        <span className="text-stone-600">|</span>
        <button
          onClick={handleReset}
          className="flex items-center gap-1 hover:text-white transition-colors text-[11px]"
          title="Reset View"
        >
          <RotateCcw className="w-3 h-3" />
          Reset
        </button>
        <span className="text-stone-600">|</span>
        <button
          onClick={() => setCupRotationSpeed((s) => (s > 0 ? 0 : 0.005))}
          className="hover:text-white transition-colors text-[11px]"
        >
          {cupRotationSpeed > 0 ? 'Pause Spin' : 'Spin'}
        </button>
      </div>
    </div>
  );
};
