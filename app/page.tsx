"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function WeddingInvitationFinal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // ANIMAȚII ELEMENTE
  const flapRotation = useTransform(smoothScroll, [0, 0.1], [0, -160]);
  const invitationY = useTransform(smoothScroll, [0.1, 0.35], [0, -600]);
  const flowersOpacity = useTransform(smoothScroll, [0.3, 0.45], [0, 1]);
  const flowersScale = useTransform(smoothScroll, [0.3, 0.5], [0.8, 1]);

  return (
    <main ref={containerRef} className="h-[700vh] bg-[#fdfbf7] relative overflow-x-hidden">
      
      {/* 1. TEXTURA DE HÂRTIE (Peste tot) */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-30 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      {/* 2. PLICUL (Fundal și Capac) */}
      <motion.div style={{ opacity: useTransform(smoothScroll, [0.4, 0.5], [1, 0]) }} className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-[420px] h-[300px] bg-[#800020] shadow-2xl">
          <motion.div 
            style={{ rotateX: flapRotation, transformOrigin: "top", perspective: "1000px" }}
            className="absolute top-0 left-0 w-full h-full bg-[#6b001a] z-[60] origin-top border-t border-white/10"
            style={{ clipPath: "polygon(0 0, 50% 50%, 100% 0)" }} // Forma de V a capacului
          />
          <div className="absolute inset-0 bg-[#800020] z-10" />
        </div>
      </motion.div>

      {/* 3. INVITAȚIA (Hârtia cu elementele grafice) */}
      <motion.div 
        style={{ y: invitationY, scale: useTransform(smoothScroll, [0.3, 0.4], [0.9, 1]) }}
        className="fixed inset-0 z-40 flex flex-col items-center justify-start pt-20 px-4"
      >
        <div className="w-full max-w-[380px] bg-[#fffdfa] shadow-2xl relative min-h-[700px] pb-20">
          
          {/* MONOGRAMA D&C (Sus) */}
          <div className="pt-10 flex justify-center opacity-80">
            <img src="/monograma-floral.png" alt="D&C" className="w-32 h-auto" /> 
            {/* ^ Aici pui imaginea cu cercul de flori din poza ta */}
          </div>

          {/* TEXTUL TĂU (Fonturi cursive și serif) */}
          <div className="px-8 text-center mt-6 space-y-4">
            <p className="uppercase tracking-[0.3em] text-[10px] text-gray-400">Și astfel începe pentru totdeauna</p>
            <h1 className="text-5xl font-serif text-[#800020] py-4 italic">Diana & Ciprian</h1>
            
            <div className="text-[11px] leading-relaxed uppercase tracking-wider text-gray-600 border-t border-gray-100 pt-6">
              <p>Alături de mamele noastre</p>
              <p>Și purtând în inimă pe cei care ne lipsesc,</p>
              
              <div className="flex justify-between py-6 italic normal-case text-base text-gray-800 font-serif">
                <div className="flex-1 border-r border-gray-100">
                  Elena și Mugurel 🕊️ <br/> <span className="text-[9px] font-bold uppercase not-italic tracking-tighter">OLTEANU</span>
                </div>
                <div className="flex-1">
                  Elena și Constantin 🕊️ <br/> <span className="text-[9px] font-bold uppercase not-italic tracking-tighter">ONODEA</span>
                </div>
              </div>

              <div className="py-4">
                <p className="text-[10px] lowercase italic mb-1">Și de nașii noștri dragi,</p>
                <p className="text-xl font-serif italic normal-case text-gray-900">Lavinia și Dănuț Marian</p>
              </div>

              <p className="pt-4 text-[10px]">Vă invităm să ne fiți alături la celebrarea căsătoriei noastre</p>
            </div>

            <div className="py-10 text-3xl font-serif text-[#800020] italic border-b border-gray-100">
              19 Septembrie 2026
            </div>
          </div>

          {/* 4. ELEMENTELE GRAFICE (Florile care apar la scroll) */}
          <motion.div 
            style={{ opacity: flowersOpacity, scale: flowersScale }}
            className="absolute -bottom-10 -right-10 w-64 h-64 z-50 pointer-events-none"
          >
            <img src="/orhidee.png" alt="Flori" className="w-full h-full object-contain" />
            {/* ^ Aici pui imaginea cu orhideele mov din video */}
          </motion.div>
        </div>
      </motion.div>

      {/* 5. PROGRAMUL (Timeline vertical ca în video) */}
      <div className="absolute top-[350vh] w-full flex flex-col items-center px-10 space-y-20 pb-40">
          <div className="w-full max-w-sm space-y-16 relative">
            <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-[#800020]/20" />
            
            <div className="relative pl-12">
              <div className="absolute left-[11px] top-1 w-2 h-2 rounded-full bg-[#800020]" />
              <p className="text-[10px] uppercase tracking-widest text-[#800020] font-bold">16:00 Cununia Civilă</p>
              <p className="text-gray-500 text-sm italic font-serif">Casa Căsătoriilor, Mangalia</p>
            </div>

            <div className="relative pl-12">
              <div className="absolute left-[11px] top-1 w-2 h-2 rounded-full bg-[#800020]" />
              <p className="text-[10px] uppercase tracking-widest text-[#800020] font-bold">17:00 Cununia Religioasă</p>
              <p className="text-gray-500 text-sm italic font-serif">Biserica "Sf. Gheorghe", Mangalia</p>
            </div>

            <div className="relative pl-12">
              <div className="absolute left-[11px] top-1 w-2 h-2 rounded-full bg-[#800020]" />
              <p className="text-[10px] uppercase tracking-widest text-[#800020] font-bold">19:30 Petrecerea</p>
              <p className="text-gray-500 text-sm italic font-serif">Restaurant Atena, Saturn</p>
            </div>
          </div>

          <div className="text-center space-y-6 pt-20">
             <p className="font-serif text-2xl italic">Vă așteptăm cu drag!</p>
             <button className="bg-[#800020] text-white px-10 py-4 text-[10px] tracking-[0.3em] uppercase">
                Confirmă pe WhatsApp
             </button>
          </div>
      </div>
    </main>
  );
}