import React, { useEffect, useRef, useCallback, useState } from 'react'; // Added useState for content generation

// --- 1. Custom Background Styles (Combined from App.css) ---
const customStyles = `
/* Global Reset */
* {
  box-sizing: border-box;
}
body, html, #root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #070b14; 
  color: #e5e5e5;
  font-family: 'Inter', sans-serif;
  /* REMOVED: overflow: hidden; */
}

/* Background Container to prevent background elements from causing scroll */
.background-container {
    position: fixed;
    inset: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; /* Only the background layers are hidden */
}

/* Gradient overlay */
.gradient-overlay {
  position: absolute; /* Changed from fixed to absolute within background-container */
  inset: 0;
  pointer-events: none;
  background: radial-gradient(60vmax 60vmax at 10% 20%, #00d4ff0f, transparent 60%),
    radial-gradient(50vmax 50vmax at 80% 10%, #56f6a60c, transparent 60%),
    radial-gradient(40vmax 40vmax at 50% 90%, #7a5cff14, transparent 60%);
  animation: floatGlow 18s linear infinite alternate;
}
@keyframes floatGlow {
  from {
    filter: hue-rotate(0) blur(0.4px);
  }
  to {
    filter: hue-rotate(20deg) blur(0.6px);
  }
}

/* Floating shapes container and base style */
.float-shapes {
  position: absolute; /* Changed from fixed to absolute within background-container */
  inset: 0;
  pointer-events: none;
}
.shape {
  position: absolute;
  border: 1px solid #2a5477;
  border-radius: 12px;
  filter: drop-shadow(0 0 12px #00d4ff22);
  background-color: rgba(26, 34, 50, 0.2);
}

/* Specific shape positions/sizes */
.s1 {
  top: 8%; left: 6%; width: 90px; height: 90px; transform: rotate(8deg); 
  animation: yoyo 9s ease-in-out infinite;
}
.s2 {
  top: 20%; right: 12%; width: 70px; height: 110px; transform: rotate(-18deg); 
  animation: yoyo 12s 1s ease-in-out infinite;
}
.s3 {
  bottom: 18%; left: 12%; width: 120px; height: 60px; transform: rotate(12deg); 
  animation: yoyo 10s 0.5s ease-in-out infinite;
}
.s4 {
  bottom: 10%; right: 8%; width: 100px; height: 100px; transform: rotate(-6deg); 
  animation: yoyo 11s 1.2s ease-in-out infinite;
}
.s5 {
  top: 45%; left: 45%; width: 60px; height: 140px; transform: rotate(22deg); 
  animation: yoyo 13s 0.2s ease-in-out infinite;
}

/* Yoyo Keyframes */
@keyframes yoyo {
  0%, 100% {
    transform: translateY(0); 
  }
  50% {
    transform: translateY(-16px);
  }
}

/* Canvas Style */
.bg-canvas { 
  position: absolute; /* Changed from fixed to absolute within background-container */
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
`;

// --- 2. ParticleBackground Component (Combined from ParticleBackground.js) ---
const LINK_DISTANCE = 110;
const SPEED = 0.28;

const rand = (min, max) => Math.random() * (max - min) + min;

function ParticleBackground() {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    
    const stateRef = useRef({
        particles: [],
        width: 0,
        height: 0,
        dpr: 1,
    });

    const spawnParticles = useCallback((width, height) => {
        const MAX = Math.min(120, Math.floor((width * height) / 13000)); 
        return new Array(MAX).fill(0).map(() => {
            const angle = Math.random() * Math.PI * 2;
            const speed = SPEED * (0.6 + Math.random() * 0.8);
            return {
                x: Math.random() * width,
                y: Math.random() * height,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                r: rand(1.0, 2.2),
            };
        });
    }, []);

    const resize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const { innerWidth, innerHeight } = window;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = Math.floor(innerWidth * dpr);
        canvas.height = Math.floor(innerHeight * dpr);

        stateRef.current.dpr = dpr;
        stateRef.current.width = innerWidth;
        stateRef.current.height = innerHeight;

        const ctx = canvas.getContext('2d');
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); 
        
        stateRef.current.particles = spawnParticles(innerWidth, innerHeight);

    }, [spawnParticles]);

    const step = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const { particles, width, height } = stateRef.current;
        
        // This clear rect uses the background color to create the tail effect
        ctx.fillStyle = 'rgba(7, 11, 20, 0.4)'; 
        ctx.fillRect(0, 0, width, height); 

        // 1. Draw Links
        for (let i = 0; i < particles.length; i++) {
            const a = particles[i];
            for (let j = i + 1; j < particles.length; j++) {
                const b = particles[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dist = Math.hypot(dx, dy);

                if (dist < LINK_DISTANCE) {
                    const alpha = 1 - (dist / LINK_DISTANCE);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${0.14 * alpha})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }

        // 2. Draw Dots & Update Position
        ctx.fillStyle = 'rgba(86, 246, 166, 0.9)';
        for (const p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();

            p.x += p.vx;
            p.y += p.vy;

            // Wrap around logic
            if (p.x < -10) p.x = width + 10;
            if (p.x > width + 10) p.x = -10;
            if (p.y < -10) p.y = height + 10;
            if (p.y > height + 10) p.y = -10;
        }

        animationRef.current = requestAnimationFrame(step);
    }, []);

    // Effect Hook for Setup and Cleanup
    useEffect(() => {
        resize();
        animationRef.current = requestAnimationFrame(step);
        window.addEventListener('resize', resize);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener('resize', resize);
        };
    }, [resize, step]);

    return (
        // New container to limit overflow: hidden only to background elements
        <div className="background-container"> 
            {/* Canvas Element: Use ref to get DOM access */}
            <canvas ref={canvasRef} id="bg-canvas" className="bg-canvas"></canvas>

            {/* Static Overlays */}
            <div className="gradient-overlay"></div>
            <div className="float-shapes" aria-hidden="true">
                <span className="shape s1"></span>
                <span className="shape s2"></span>
                <span className="shape s3"></span>
                <span className="shape s4"></span>
                <span className="shape s5"></span>
            </div>
        </div>
    );
}

// --- 3. Main App Component ---
const App = () => {
    // Generate some extra content for scrolling test
    const dummyContent = Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="max-w-xl w-full mx-auto my-12 p-8 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl">
            <h2 className="text-xl font-bold text-indigo-400 mb-2">Section {i + 1}: Data Node Status</h2>
            <p className="text-sm text-gray-400">
                Log entry: {new Date().toLocaleTimeString()} - Latency check passed. All nodes reporting optimal throughput.
                The current architecture supports high-availability failover in regions A, B, and C.
            </p>
        </div>
    ));

    return (
        <>
            {/* Inject custom CSS for the background effects */}
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />

            {/* Render the dynamic and static background elements */}
            <ParticleBackground />

            {/* Foreground Content (relative z-index allows it to float over the fixed background) */}
            
        </>
    );
};

export default App;