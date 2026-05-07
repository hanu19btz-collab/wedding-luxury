"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";

export default function WeddingInvitation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animații
  const flapRotation = useTransform(scrollYProgress, [0, 0.1], [0, -150]);
  const invitationY = useTransform(scrollYProgress, [0.1, 0.25], [0, -550]);
  const envelopeOpacity = useTransform(scrollYProgress, [0.35, 0.45], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);

  return (
    <main ref={containerRef} className="h-[500vh] bg-[#fdfbf7] relative overflow-x-hidden">
      
      {/* PLICUL (STAY FIXED) */}
      <motion.div 
        style={{ opacity: envelopeOpacity }}
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4"
      >
        <div className="relative w-full max-w-[400px] h-[280px] bg-[#800020] shadow-2xl">
          {/* Partea de sus a plicului (Flap) */}
          <motion.div 
            style={{ rotateX: flapRotation, transformOrigin: "top", zIndex: 60 }}
            className="absolute top-0 left-0 w-0 h-0 border-l-[184px] sm:border-l-[200px] border-l-transparent border-r-[184px] sm:border-r-[200px] border-r-transparent border-t-[140px] border-t-[#6b001a] origin-top"
          />
          
          {/* Corpul plicului */}
          <div className="absolute bottom-0 left-0 w-full h-full border-l-[184px] sm:border-l-[200px] border-l-transparent border-r-[184px] sm:border-r-[200px] border-r-transparent border-b-[140px] border-b-[#800020] z-[55]" />
        </div>
      </motion.div>

      {/* INVITAȚIA PROPRIU-ZISĂ */}
      <motion.div 
        style={{ y: invitationY, scale: contentScale }}
        className="fixed inset-0 z-40 flex flex-col items-center justify-start pt-24 px-6"
      >
        <div className="w-full max-w-[360px] bg-white p-8 shadow-2xl border border-gray-100 relative">
          {/* Textură subtilă de hârtie */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

          <div className="relative z-10 text-center">
            <h2 className="font-serif text-xs uppercase tracking-[0.4em] text-gray-400 mb-6">Vă invităm la</h2>
            <h1 className="font-serif text-4xl text-[#800020] mb-2">Andrei & Maria</h1>
            <div className="text-2xl text-gray-300 my-4">🕊️</div>

            <div className="space-y-6 text-sm text-gray-600 font-light">
              <div className="flex justify-between items-center px-4">
                <span>Fam. Ionescu 🕊️</span>
                <span>Fam. Popescu 🕊️</span>
              </div>
              
              <div className="py-4 border-y border-gray-50">
                <p className="text-[10px] uppercase tracking-widest mb-1">Nași</p>
                <p className="font-serif text-lg text-gray-800 italic">Radu & Elena Vasilescu</p>
              </div>

              <div className="space-y-4 pt-4 text-left">
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-[#800020]" />
                  <span>12 Iulie 2026, Sâmbătă</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#800020]" />
                  <span>Biserica Sf. Nicolae, Ora 16:00</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-10 bg-[#800020] text-white py-4 text-xs tracking-widest uppercase hover:bg-black transition-all">
              Confirmă Prezența
            </button>
          </div>
        </div>
      </motion.div>

      {/* SECȚIUNI DE SCROLL (Apar după ce dispare plicul) */}
      <div className="absolute top-[200vh] w-full flex flex-col items-center px-8 space-y-32 pb-32">
          <div className="text-center">
            <h3 className="font-serif text-3xl text-[#800020] mb-6">Locație Petrecere</h3>
            <div className="w-full h-48 bg-gray-200 rounded-sm overflow-hidden shadow-inner mb-4">
               <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600" alt="Venue" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-500 italic">Ambasador Events, Ora 19:00</p>
          </div>
      </div>

    </main>
  );
}