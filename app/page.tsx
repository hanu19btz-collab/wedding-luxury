"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MapPin, Calendar, Music, Heart } from "lucide-react";

export default function WeddingInvitation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Facem miscarea mai "moale" (smooth) cu un arc (spring)
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // ETAPA 1: Deschidere capac (0% -> 15% scroll)
  const flapRotation = useTransform(smoothProgress, [0, 0.15], [0, -180]);
  
  // ETAPA 2: Invitația iese din plic (15% -> 40% scroll)
  const invitationY = useTransform(smoothProgress, [0.15, 0.45], [0, -700]);
  const invitationScale = useTransform(smoothProgress, [0.4, 0.6], [0.9, 1.05]);
  
  // ETAPA 3: Plicul dispare (45% -> 60% scroll)
  const envelopeOpacity = useTransform(smoothProgress, [0.5, 0.6], [1, 0]);

  return (
    <main ref={containerRef} className="h-[600vh] bg-[#f8f5f0] relative overflow-x-hidden">
      
      {/* TEXTURĂ GENERALĂ (Peste tot site-ul) */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-20 bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />

      {/* --- PLICUL --- */}
      <motion.div 
        style={{ opacity: envelopeOpacity }}
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4"
      >
        <div className="relative w-full max-w-[420px] h-[300px] bg-[#800020] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          
          {/* Partea din spate a plicului */}
          <div className="absolute inset-0 bg-[#6b001a] z-10" />

          {/* CAPACUL (Flap) */}
          <motion.div 
            style={{ 
                rotateX: flapRotation, 
                transformOrigin: "top",
                perspective: "1000px",
                zIndex: 40 
            }}
            className="absolute top-0 left-0 w-full h-0 border-l-[210px] border-l-transparent border-r-[210px] border-r-transparent border-t-[160px] border-t-[#800020] drop-shadow-xl"
          />
          
          {/* PARTEA DE JOS A PLICULUI (V-ul din față) */}
          <div className="absolute bottom-0 left-0 w-full h-full border-l-[210px] border-l-transparent border-r-[210px] border-r-transparent border-b-[160px] border-b-[#960026] z-30" />
        </div>
      </motion.div>

      {/* --- INVITAȚIA --- */}
      <motion.div 
        style={{ y: invitationY, scale: invitationScale }}
        className="fixed inset-0 z-[35] flex flex-col items-center justify-start pt-40 px-6"
      >
        <div className="w-full max-w-[380px] bg-[#fffdfa] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-[8px] border-[#800020] relative">
          
          <div className="text-center">
             <span className="text-[#800020] tracking-[0.5em] text-[10px] uppercase font-bold">Salvați Data</span>
             <h1 className="font-serif text-5xl text-[#1a1a1a] mt-6 mb-2">Andrei</h1>
             <span className="font-serif text-2xl text-[#800020]">&</span>
             <h1 className="font-serif text-5xl text-[#1a1a1a] mb-8">Maria</h1>
             
             <div className="flex justify-center items-center gap-4 text-gray-300 my-8">
                <div className="h-[1px] w-12 bg-gray-200" />
                <Heart size={16} className="text-[#800020] fill-[#800020]" />
                <div className="h-[1px] w-12 bg-gray-200" />
             </div>

             <div className="space-y-6 font-light text-gray-700 leading-relaxed">
                <p className="text-sm">Cu binecuvântarea părinților</p>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-[#800020]">
                    <span>Fam. Ionescu</span>
                    <span>Fam. Popescu</span>
                </div>
                
                <div className="bg-[#fcf9f5] py-6 px-4 border border-dashed border-gray-200">
                    <p className="text-[10px] uppercase mb-2">Nași</p>
                    <p className="font-serif text-xl italic text-gray-900">Radu & Elena Vasilescu</p>
                </div>

                <div className="space-y-4 pt-4">
                    <div className="flex items-center justify-center gap-2">
                        <Calendar size={14} />
                        <span className="font-bold text-gray-900">12 IULIE 2026</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs">
                        <MapPin size={14} />
                        <span>Biserica Sf. Nicolae • Restaurant Ambasador</span>
                    </div>
                </div>
             </div>

             <div className="mt-12 flex flex-col gap-3">
                <button className="bg-[#800020] text-white py-4 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-black transition-all">
                   Confirmă prin WhatsApp
                </button>
             </div>
          </div>
        </div>
      </motion.div>

      {/* --- SECȚIUNI EXTRA --- */}
      <div className="absolute top-[300vh] w-full pb-40">
         <div className="max-w-sm mx-auto px-8 text-center space-y-20">
            <div className="space-y-4">
                <Music size={30} className="mx-auto text-[#800020] mb-4" />
                <h3 className="font-serif text-2xl uppercase tracking-widest">Momentul Nostru</h3>
                <p className="text-gray-500 italic text-sm">"Dragostea nu constă în a ne privi unul pe celălalt, ci în a privi împreună în aceeași direcție."</p>
            </div>
            
            <div className="aspect-[4/5] w-full bg-gray-200 shadow-2xl bg-[url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600')] bg-cover" />
         </div>
      </div>

    </main>
  );
}