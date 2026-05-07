"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MapPin, Calendar, Clock, Phone, Heart } from "lucide-react";

export default function WeddingInvitation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // ANIMAȚII (Inspirate din video)
  const flapRotation = useTransform(smoothProgress, [0, 0.15], [0, -160]);
  const invitationY = useTransform(smoothProgress, [0.15, 0.4], [0, -650]);
  const invitationScale = useTransform(smoothProgress, [0.4, 0.55], [0.92, 1]);
  const envelopeOpacity = useTransform(smoothProgress, [0.5, 0.6], [1, 0]);

  return (
    <main ref={containerRef} className="h-[600vh] bg-[#fdfbf7] relative overflow-x-hidden">
      
      {/* Overlay Textură Hârtie (Efectul din video) */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      {/* --- LAYER: PLICUL (ENVELOPE) --- */}
      <motion.div 
        style={{ opacity: envelopeOpacity }}
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4"
      >
        <div className="relative w-full max-w-[420px] h-[300px] bg-[#800020] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-[#6b001a] z-10 shadow-inner" />
          
          {/* Monograma D&C pe plic (Sigiliu) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 border border-white/20 rounded-full p-6 text-white/40 font-serif italic text-2xl">
            D&C
          </div>

          {/* Capacul plicului */}
          <motion.div 
            style={{ rotateX: flapRotation, transformOrigin: "top", perspective: "1000px", zIndex: 40 }}
            className="absolute top-0 left-0 w-0 h-0 border-l-[210px] border-l-transparent border-r-[210px] border-r-transparent border-t-[160px] border-t-[#800020] drop-shadow-2xl"
          />
          
          {/* Fața plicului (V-ul de jos) */}
          <div className="absolute bottom-0 left-0 w-full h-full border-l-[210px] border-l-transparent border-r-[210px] border-r-transparent border-b-[160px] border-b-[#960026] z-30" />
        </div>
      </motion.div>

      {/* --- LAYER: INVITAȚIA (DATA DIN POZĂ) --- */}
      <motion.div 
        style={{ y: invitationY, scale: invitationScale }}
        className="fixed inset-0 z-[35] flex flex-col items-center justify-start pt-28 px-6"
      >
        <div className="w-full max-w-[370px] bg-white p-10 shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-gray-100 text-center relative overflow-hidden">
          
          {/* Margini neregulate (Efect "Torn Paper") */}
          <div className="absolute inset-0 border-[12px] border-white z-20 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]" />

          <div className="relative z-10">
            {/* Monograma Florală (Placeholder) */}
            <div className="mb-4 flex justify-center">
                <div className="border border-[#800020]/20 rounded-full p-4 font-serif text-[#800020] italic">D & C</div>
            </div>

            <p className="font-serif text-[9px] tracking-[0.4em] uppercase text-gray-400 mb-8">Și astfel începe pentru totdeauna</p>
            
            <h1 className="font-serif text-5xl text-[#800020] mb-8 font-light tracking-tight">Diana & Ciprian</h1>

            <div className="space-y-6 text-[11px] leading-relaxed text-gray-600 uppercase tracking-widest">
                <p>Alături de mamele noastre<br/>și purtând în inimă pe cei care ne lipsesc,</p>
                
                <div className="flex justify-between items-start gap-4 pt-4 border-t border-gray-50">
                    <div className="flex-1">
                        <p className="font-serif italic text-sm normal-case text-gray-800">Elena și Mugurel 🕊️</p>
                        <p className="text-[9px] font-bold mt-1">OLTEANU</p>
                    </div>
                    <div className="h-10 w-[1px] bg-gray-100 mt-2" />
                    <div className="flex-1">
                        <p className="font-serif italic text-sm normal-case text-gray-800">Elena și Constantin 🕊️</p>
                        <p className="text-[9px] font-bold mt-1">ONODEA</p>
                    </div>
                </div>

                <div className="pt-6">
                    <p className="text-[9px] mb-2">Și de nașii noștri dragi,</p>
                    <p className="font-serif text-xl italic normal-case text-gray-800">Lavinia și Dănuț Marian</p>
                </div>

                <p className="pt-6 text-[10px]">Vă invităm să ne fiți alături la celebrarea căsătoriei noastre</p>
            </div>

            {/* DATA DIN POZĂ */}
            <div className="mt-10 mb-8">
                <p className="font-serif text-3xl text-[#800020] italic">19 Septembrie 2026</p>
            </div>

            {/* BUTON RSVP (WhatsApp) */}
            <a 
              href="https://wa.me/40785050154" 
              className="block w-full bg-[#800020] text-white py-4 text-[10px] tracking-[0.3em] font-bold uppercase transition-all hover:bg-black"
            >
              Confirmă Participarea
            </a>
          </div>
        </div>
      </motion.div>

      {/* --- SECȚIUNI DE SCROLL: PROGRAM (STIL VIDEO) --- */}
      <div className="absolute top-[280vh] w-full pb-40 flex flex-col items-center px-8 space-y-32">
          
          <div className="text-center space-y-12 max-w-sm">
            <h2 className="font-serif text-4xl text-[#800020] italic">Program</h2>
            
            <div className="space-y-16">
                <div className="relative pl-12 text-left border-l border-gray-100">
                    <div className="absolute -left-[9px] top-0 bg-white p-1 text-[#800020] border border-gray-100 rounded-full"><Clock size={14} /></div>
                    <p className="font-bold text-xs uppercase tracking-widest text-gray-800">16:00 Cununia Civilă</p>
                    <p className="text-sm text-gray-500 font-light mt-1 italic">Casa Căsătoriilor, Mangalia</p>
                </div>

                <div className="relative pl-12 text-left border-l border-gray-100">
                    <div className="absolute -left-[9px] top-0 bg-white p-1 text-[#800020] border border-gray-100 rounded-full"><Heart size={14} /></div>
                    <p className="font-bold text-xs uppercase tracking-widest text-gray-800">17:00 Cununia Religioasă</p>
                    <p className="text-sm text-gray-500 font-light mt-1 italic">Biserica "Sf. Gheorghe", Mangalia</p>
                </div>

                <div className="relative pl-12 text-left border-l border-gray-100">
                    <div className="absolute -left-[9px] top-0 bg-white p-1 text-[#800020] border border-gray-100 rounded-full"><MapPin size={14} /></div>
                    <p className="font-bold text-xs uppercase tracking-widest text-gray-800">19:30 Petrecerea</p>
                    <p className="text-sm text-gray-500 font-light mt-1 italic">Restaurant Atena, Saturn</p>
                </div>
            </div>

            <div className="pt-20">
                <p className="font-serif text-2xl italic text-gray-800">Vă așteptăm cu drag!</p>
                <p className="text-[10px] text-gray-400 mt-4 leading-relaxed px-10">
                    CONFIRMĂRI PÂNĂ LA 1 SEPTEMBRIE 2026<br/>
                    DIANA: 0785 050 154 / CIPRIAN: 0752 146 011
                </p>
            </div>
          </div>

      </div>

    </main>
  );
}