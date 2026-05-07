"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, Clock, Phone } from "lucide-react";

export default function WeddingInvitation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Detectăm scroll-ul în containerul principal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animații corelate cu scroll-ul
  const flapRotation = useTransform(scrollYProgress, [0, 0.1], [0, -150]); // Deschide capacul plicului
  const invitationY = useTransform(scrollYProgress, [0.1, 0.25], [0, -600]); // Scoate invitația din plic
  const envelopeOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]); // Plicul dispare treptat
  const contentScale = useTransform(scrollYProgress, [0.3, 0.45], [0.8, 1]); // Conținutul crește la dimensiune normală

  return (
    <div ref={containerRef} className="h-[500vh] bg-[#fdfbf7] relative">
      
      {/* --- LAYER 1: PLICUL (ENVELOPE) --- */}
      <motion.div 
        style={{ opacity: envelopeOpacity }}
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4"
      >
        <div className="relative w-full max-w-[400px] h-[300px] bg-[#800020] shadow-2xl">
          {/* Capacul plicului (Flap) */}
          <motion.div 
            style={{ rotateX: flapRotation, transformOrigin: "top" }}
            className="absolute top-0 left-0 w-full h-full bg-[#6b001a] z-[60] shadow-md"
            className="absolute top-0 left-0 w-0 h-0 border-l-[200px] border-l-transparent border-r-[200px] border-r-transparent border-t-[150px] border-t-[#6b001a] z-[60] origin-top"
          />
          
          {/* Corpul plicului (Fata) */}
          <div className="absolute bottom-0 left-0 w-full h-full border-l-[200px] border-l-transparent border-r-[200px] border-r-transparent border-b-[150px] border-b-[#800020] z-[55]" />
        </div>
      </motion.div>

      {/* --- LAYER 2: INVITAȚIA CARE IESE DIN PLIC --- */}
      <motion.div 
        style={{ y: invitationY, scale: contentScale }}
        className="fixed inset-0 z-40 flex flex-col items-center justify-start pt-32 px-6"
      >
        <div className="w-full max-w-[360px] bg-white p-8 shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Overlay textură hârtie */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

          {/* Header Cinematic */}
          <div className="text-center mb-8">
            <h2 className="font-serif text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Vă invităm la nunta noastră</h2>
            <h1 className="font-serif text-5xl text-[#800020] my-4">Andrei & Maria</h1>
            <div className="flex justify-center items-center gap-2 text-gray-400">
              <span className="h-[1px] w-10 bg-gray-300"></span>
              <span className="text-xl">🕊️</span>
              <span className="h-[1px] w-10 bg-gray-300"></span>
            </div>
          </div>

          {/* Secțiune Familie */}
          <div className="space-y-6 text-center font-light text-gray-700">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Părinți</p>
              <div className="flex justify-around items-center">
                <p>Fam. Ionescu 🕊️</p>
                <p>Fam. Popescu 🕊️</p>
              </div>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Nași</p>
              <p className="font-serif italic text-lg text-gray-800">Radu & Elena Vasilescu</p>
            </div>
          </div>

          {/* Program Eveniment */}
          <div className="mt-10 space-y-4 border-t border-gray-100 pt-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#fdf2f4] p-3 rounded-full text-[#800020]"><Calendar size={20} /></div>
              <div>
                <p className="font-bold text-gray-800">12 Iulie 2026</p>
                <p className="text-sm text-gray-500">Sâmbătă</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#fdf2f4] p-3 rounded-full text-[#800020]"><MapPin size={20} /></div>
              <div>
                <p className="font-bold text-gray-800">Biserica Sf. Nicolae</p>
                <p className="text-sm text-gray-500">Ora 16:00</p>
              </div>
            </div>
          </div>

          {/* Buton RSVP */}
          <button className="w-full mt-10 bg-[#800020] text-white py-4 rounded-none font-serif tracking-widest uppercase hover:bg-[#6b001a] transition-colors">
            Confirmă Participarea
          </button>
        </div>
      </motion.div>

      {/* --- LAYER 3: CONTINUARE SCROLL (Restul secțiunilor) --- */}
      <div className="absolute top-[150vh] w-full flex flex-col items-center px-6 space-y-20 pb-20">
         <div className="text-center max-w-md">
            <h3 className="font-serif text-3xl mb-4 text-[#800020]">Locația Petrecerii</h3>
            <div className="aspect-video w-full bg-gray-200 mb-4 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000')] bg-cover bg-center shadow-lg" />
            <p className="text-gray-600">Ambasador Events, Sala de Cristal, ora 19:00</p>
         </div>

         <div className="text-center">
            <h3 className="font-serif text-3xl mb-4 text-[#800020]">Vă așteptăm cu drag!</h3>
            <p className="italic text-gray-500">Vă rugăm să confirmați până la data de 1 Iunie.</p>
         </div>
      </div>

    </div>
  );
}