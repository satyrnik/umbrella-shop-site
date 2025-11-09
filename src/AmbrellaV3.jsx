import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

// Ambrella V3 — Evolution Protocol
// Black–Red–Gold premium theme + cinematic lab atmosphere
// - Abstract “energy silhouettes” (no real people)
// - Ampoule conveyor (subtle loop)
// - Flicker / alarm accents (tasteful)
// - Parallax smoke + neon lines
// - Animated emblem logo

export default function AmbrellaV3() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const theme = {
    body: "bg-gradient-to-b from-black via-[#0b0b0f] to-black text-gray-100",
    gold: "text-yellow-400",
    red: "text-red-500",
    card: "bg-gradient-to-br from-[#0d0d12]/80 to-black/70 border border-yellow-500/30 shadow-[0_0_45px_-10px_rgba(255,215,0,0.25)] backdrop-blur-md",
    btn: "bg-gradient-to-r from-red-600 via-yellow-500 to-red-700 text-black font-semibold shadow-[0_10px_30px_-10px_rgba(255,0,0,0.45)] hover:shadow-[0_10px_35px_-8px_rgba(255,215,0,0.45)]",
  };

  // Canvas-based conveyor animation (ampoules as glowing capsules)
  const conveyorRef = useRef(null);
  useEffect(() => {
    const canvas = conveyorRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf; let t = 0;
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    function resize(){
      // Reset transform before resizing to avoid scale compounding
      ctx.setTransform(1,0,0,1,0,0);
      canvas.width = canvas.clientWidth * DPR;
      canvas.height = canvas.clientHeight * DPR;
      ctx.scale(DPR, DPR);
    }
    const onResize = () => resize();
    resize();
    window.addEventListener("resize", onResize);

    const capsules = new Array(14).fill(0).map((_, i) => ({
      x: Math.random()*canvas.clientWidth,
      y: 30 + ((i%2)*22),
      speed: 0.6 + Math.random()*0.4,
      hue: 0,
    }));

    function drawCapsule(x, y, glow){
      const w = 46, h = 14, r = 7;
      ctx.save();
      ctx.translate(x, y);
      // glow
      ctx.shadowColor = `rgba(255,${180+Math.floor(glow*70)},0,0.45)`;
      ctx.shadowBlur = 24;
      // body
      ctx.fillStyle = "#111";
      ctx.strokeStyle = "rgba(255,215,0,0.6)";
      ctx.lineWidth = 1.5;
      roundRect(ctx, -w/2, -h/2, w, h, r); ctx.fill(); ctx.stroke();
      // red liquid window
      ctx.fillStyle = "rgba(255,40,40,0.85)";
      roundRect(ctx, -w/2+6, -h/2+3, w-12, h-6, r-4); ctx.fill();
      // micro highlight
      ctx.fillStyle = "rgba(255,255,255,0.25)";
      roundRect(ctx, -w/2+12, -h/2+4, 10, h-8, 3); ctx.fill();
      ctx.restore();
    }

    function roundRect(ctx, x, y, w, h, r){
      const rr = Math.min(r, w/2, h/2);
      ctx.beginPath();
      ctx.moveTo(x+rr, y);
      ctx.arcTo(x+w, y, x+w, y+h, rr);
      ctx.arcTo(x+w, y+h, x, y+h, rr);
      ctx.arcTo(x, y+h, x, y, rr);
      ctx.arcTo(x, y, x+w, y, rr);
      ctx.closePath();
    }

    function loop(){
      t += 1;
      ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
      // conveyor rails
      ctx.strokeStyle = "rgba(255,215,0,0.2)";
      ctx.lineWidth = 2;
      ctx.setLineDash([8,6]);
      ctx.beginPath();
      ctx.moveTo(0, 22);
      ctx.lineTo(canvas.clientWidth, 22);
      ctx.moveTo(0, 44);
      ctx.lineTo(canvas.clientWidth, 44);
      ctx.stroke();
      ctx.setLineDash([]);

      capsules.forEach(c => {
        c.x += c.speed;
        if(c.x > canvas.clientWidth + 60) c.x = -60;
        const glow = 0.6 + 0.4*Math.sin((t + c.x)*0.02);
        drawCapsule(c.x, c.y, glow);
      });

      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  // Utility: CSS keyframes for flicker / alarm glow
  const flickerClass = "animate-[flicker_2.2s_infinite]";
  const alarmClass = "animate-[alarm_6s_infinite]";

  return (
    <ParallaxProvider>
      <style>{`
        @keyframes flicker { 0%,19%,21%,23%,25%,54%,56%,100% { opacity: 1 } 20%,24%,55% { opacity: 0.4 } }
        @keyframes alarm { 0%{ box-shadow: 0 0 0 0 rgba(255,0,0,0.45);} 50%{ box-shadow: 0 0 35px 6px rgba(255,0,0,0.25);} 100%{ box-shadow: 0 0 0 0 rgba(255,0,0,0.45);} }
        .scanline:after{ content:''; position:absolute; inset:0; background: repeating-linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.02) 1px, transparent 1px, transparent 3px); pointer-events:none; }
      `}</style>

      <div className={`min-h-screen ${theme.body} font-sans overflow-x-hidden relative`}> 
        {/* Ambient halos */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute -top-20 -left-20 w-[60vw] h-[60vw] bg-red-800/15 rounded-full blur-3xl"/>
          <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-yellow-500/10 rounded-full blur-3xl"/>
        </div>

        {/* Neon wires */}
        <Parallax speed={-6} className="pointer-events-none -z-10 absolute inset-0">
          <svg width="100%" height="100%">
            <defs>
              <linearGradient id="wire" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#f00" stopOpacity="0.0"/>
                <stop offset="50%" stopColor="#ffd700" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#f00" stopOpacity="0.0"/>
              </linearGradient>
            </defs>
            {[...Array(6)].map((_, i) => (
              <polyline key={i} fill="none" stroke="url(#wire)" strokeWidth="2" points={`-50,${80+i*90} 200,${40+i*90} 600,${120+i*90} 1000,${20+i*90} 1400,${140+i*90}`} opacity="0.25"/>
            ))}
          </svg>
        </Parallax>

        {/* Header */}
        <header className="max-w-7xl mx-auto p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Emblem size={56} />
            <div>
              <div className={`text-2xl font-extrabold tracking-tight ${theme.gold}`}>Ambrella</div>
              <div className="text-xs text-gray-400">Evolution Protocol</div>
            </div>
          </div>
          <nav className="flex gap-6 text-sm text-gray-300">
            <a href="#products" className="hover:text-yellow-400 transition">Products</a>
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </nav>
        </header>

        {/* HERO: Emblem + Energy Silhouette */}
        <section className="relative overflow-hidden mt-6">
          {/* Parallax smoke */}
          <Parallax speed={-10}>
            <img src="https://images.unsplash.com/photo-1526401485004-2aa7f3b5ae7e?auto=format&fit=crop&w=1600&q=90" alt="smoke" className="absolute inset-0 w-full h-[100vh] object-cover opacity-25"/>
          </Parallax>

          {/* Conveyor overlay */}
          <div className="absolute left-1/2 -translate-x-1/2 top-24 w-[90vw] max-w-5xl h-52 rounded-2xl bg-black/30 border border-yellow-500/20 backdrop-blur-md scanline">
            <canvas ref={conveyorRef} className="w-full h-full"/>
            <div className={`absolute -top-3 right-4 px-3 py-1 rounded ${alarmClass} bg-red-700/30 text-red-300 text-[10px] tracking-widest border border-red-500/40`}>CONVEYOR ONLINE</div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto py-28 px-6 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={mounted ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1 }} className="flex justify-center">
              <Emblem size={120} pulse />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={mounted ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.8 }} className={`text-6xl font-extrabold mt-6 ${theme.red}`}>AMBRELLA</motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={mounted ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.8 }} className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">Human Performance Evolution — premium legal nutrition. Energy awakened.</motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={mounted ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8, duration: 0.8 }} className="mt-8 flex justify-center gap-4">
              <a href="#products" className={`px-8 py-3 rounded-lg ${theme.btn}`}>Explore</a>
              <a href="#contact" className={`px-8 py-3 rounded-lg border border-yellow-400/40 text-yellow-400 ${flickerClass}`}>Contact</a>
            </motion.div>
          </div>

          {/* Energy silhouettes (abstract) */}
          <div className="absolute inset-x-0 bottom-8 flex justify-center gap-12 opacity-70">
            <EnergySilhouette height={140} flip />
            <EnergySilhouette height={160} />
            <EnergySilhouette height={140} flip />
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="max-w-7xl mx-auto px-6 py-24">
          <h2 className={`text-3xl font-bold ${theme.gold}`}>Featured Products</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProducts.map((p, i) => (
              <motion.article key={p.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.15, duration: 0.6 }} className={`${theme.card} rounded-2xl overflow-hidden`}>
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
                  <div className="absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full bg-black/40 border border-yellow-500/30 text-yellow-300">PLATINUM</div>
                </div>
                <div className="p-5">
                  <h3 className={`font-bold text-xl ${theme.red}`}>{p.name}</h3>
                  <p className="text-sm text-gray-300 mt-1">{p.desc}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className={`font-semibold ${theme.gold}`}>{p.price}</div>
                    <a href="#contact" className={`text-sm px-4 py-2 rounded-md ${theme.btn}`}>Buy</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ABOUT — Lab panels */}
        <section id="about" className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className={`${theme.card} rounded-2xl p-8`}>
            <h3 className={`text-3xl font-bold ${theme.gold}`}>Evolution Protocol</h3>
            <p className="text-gray-300 text-lg mt-3">Science-first formulations. Third‑party tested. 100% legal. Built for elite athletes who demand measurable progress.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-gray-300">
              <li>✔ EU Lab Certificates</li>
              <li>✔ Ingredient Transparency</li>
              <li>✔ Batch Traceability</li>
              <li>✔ Athlete‑safe compliance</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid gap-6">
            <Panel title="PROJECT: AWAKENING" status="ONLINE"/>
            <Panel title="NEURAL FOCUS" status="STABLE" red />
            <Panel title="MUSCLE REPAIR" status="OPTIMAL" />
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className={`${theme.card} p-8 rounded-2xl`}>
            <h4 className={`text-2xl font-bold mb-4 ${theme.gold}`}>Contact Us</h4>
            <form className="flex flex-col gap-4">
              <input placeholder="Name" className="px-4 py-2 rounded bg-black/40 border border-yellow-500/30" />
              <input placeholder="Email" className="px-4 py-2 rounded bg-black/40 border border-yellow-500/30" />
              <textarea placeholder="Message" className="px-4 py-2 rounded bg-black/40 border border-yellow-500/30" rows="4" />
              <button type="button" className={`px-6 py-2 rounded-lg ${theme.btn}`}>Send</button>
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="p-8 rounded-2xl bg-black/40 border border-yellow-500/10">
            <h4 className={`text-2xl font-bold mb-4 ${theme.gold}`}>Find Us</h4>
            <p className="text-gray-300 text-sm mb-4">Worldwide shipping from EU. Partners across Europe & Ukraine.</p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>📦 Express shipping</li>
              <li>📍 Kyiv pickup</li>
              <li>💬 Telegram / WhatsApp</li>
            </ul>
          </motion.div>
        </section>

        <footer className="text-center text-sm text-gray-500 py-10 border-t border-gray-800">© {new Date().getFullYear()} Ambrella — All rights reserved.</footer>
      </div>
    </ParallaxProvider>
  );
}

// ------- Reusable UI pieces -------
const sampleProducts = [
  { id: 1, name: "Ambrella Power Serum", desc: "Formula X9 for explosive energy and endurance.", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", price: "€59.99" },
  { id: 2, name: "Recovery+ Protein", desc: "Ultra-pure isolate blend for muscle regeneration.", img: "https://images.unsplash.com/photo-1594737625785-caf5f9b59b4f?auto=format&fit=crop&w=1200&q=80", price: "€39.99" },
  { id: 3, name: "Nitro Boost Pre-Workout", desc: "Intense focus & drive before every session.", img: "https://images.unsplash.com/photo-1581578017420-ea95853b9f34?auto=format&fit=crop&w=1200&q=80", price: "€29.99" },
];

function Emblem({ size = 64, pulse = false }){
  return (
    <div className={`relative inline-block ${pulse ? "animate-pulse" : ""}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="gold" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffd700"/>
            <stop offset="100%" stopColor="#d4af37"/>
          </radialGradient>
          <linearGradient id="red" x1="0" x2="1">
            <stop offset="0%" stopColor="#ff0033"/>
            <stop offset="100%" stopColor="#a00000"/>
          </linearGradient>
        </defs>
        {/* hex-rose emblem (original stylization) */}
        {[0,60,120].map((rot,i)=> (
          <g key={i} transform={`rotate(${rot} 50 50)`}>
            <path d="M50 10 L65 25 L50 40 L35 25 Z" fill="url(#red)" opacity="0.9"/>
            <path d="M50 60 L65 75 L50 90 L35 75 Z" fill="url(#gold)" opacity="0.85"/>
          </g>
        ))}
        <circle cx="50" cy="50" r="6" fill="#111" stroke="#ffd700" strokeWidth="2"/>
      </svg>
      <div className="absolute inset-0 rounded-full blur-xl opacity-30" style={{ background: "radial-gradient(closest-side, rgba(255,215,0,0.6), transparent)" }} />
    </div>
  );
}

function Panel({ title, status, red }){
  return (
    <div className={`rounded-2xl p-6 border ${red ? "border-red-600/40" : "border-yellow-500/30"} bg-black/40 backdrop-blur-md relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="grid" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffd700" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#ff0033" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          {Array.from({length: 20}).map((_,i)=> (
            <line key={i} x1={i*40} y1={0} x2={i*40} y2={800} stroke="url(#grid)" strokeWidth="1" />
          ))}
        </svg>
      </div>
      <div className="flex items-center justify-between relative">
        <div className="text-sm tracking-wider text-gray-300">{title}</div>
        <div className={`text-[10px] px-2 py-1 rounded ${red ? "bg-red-700/30 text-red-300 border border-red-500/40" : "bg-yellow-700/20 text-yellow-300 border border-yellow-500/30"}`}>{status}</div>
      </div>
      <div className="mt-4 text-gray-400 text-sm">Realtime telemetry, compound purity analytics, and batch audit trail available upon request.</div>
    </div>
  );
}

function EnergySilhouette({ height = 160, flip = false }){
  const style = useMemo(() => ({ height }), [height]);
  return (
    <svg style={style} viewBox="0 0 80 200" className={`opacity-70 ${flip ? "-scale-x-100" : ""}`}>
      <defs>
        <linearGradient id="silRed" x1="0" x2="1">
          <stop offset="0%" stopColor="#ff0033" stopOpacity="0.0"/>
          <stop offset="50%" stopColor="#ff0033" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#ffd700" stopOpacity="0.0"/>
        </linearGradient>
      </defs>
      {/* abstract athletic form (no human detail) */}
      <path d="M40 10 C55 30 60 50 50 70 C40 90 45 110 60 130 C72 146 62 170 40 188 C20 170 18 150 28 132 C36 118 35 102 24 84 C10 62 18 36 40 10 Z" fill="url(#silRed)" stroke="#ffd70055" strokeWidth="1"/>
    </svg>
  );
}