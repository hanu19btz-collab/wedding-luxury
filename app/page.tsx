"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// IMPORTĂM FONTURILE SPECIFICE (Trebuie configurate în layout.tsx)
// Exemplu clase Tailwind pentru fonturi: font-greatvibes, font-playfair, font-lato

export default function WeddingInvitationReplica() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mișcare fluidă (Smooth Scroll)
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // ANIMAȚII (Replica fidelă a video-ului)
  const flapRotation = useTransform(smoothProgress, [0, 0.15], [0, -170]); // Deschidere capac
  const invitationY = useTransform(smoothProgress, [0.15, 0.45], [0, -680]); // Invitația iese
  const invitationScale = useTransform(smoothProgress, [0.4, 0.55], [0.95, 1]); // Zoom invitație
  const envelopeOpacity = useTransform(smoothProgress, [0.5, 0.6], [1, 0]); // Plicul dispare

  return (
    <main ref={containerRef} className="h-[600vh] bg-[#f8f5f0] relative overflow-x-hidden">
      
      {/* TEXTURĂ GENERALĂ PAPER-FEEL (Fixă, peste tot) */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.05] bg-[url('/textura_hirtie_generala.jpg')] bg-repeat" />

      {/* --- LAYER: PLICUL (FOLOSEȘTE IMAGINILE DIN VIDEO) --- */}
      <motion.div 
        style={{ opacity: envelopeOpacity }}
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4"
      >
        <div className="relative w-full max-w-[420px] h-[300px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          
          {/* Imagine Fundal Interior Plic */}
          <div className="absolute inset-0 bg-[url('/plic_interior.jpg')] bg-cover bg-center z-10" />

          {/* CAPACUL PLICULUI (Animație 3D) */}
          <motion.div 
            style={{ 
                rotateX: flapRotation, 
                transformOrigin: "top",
                perspective: "1000px",
                zIndex: 40 
            }}
            className="absolute top-0 left-0 w-full h-full bg-[url('/plic_exterior.jpg')] bg-cover bg-center origin-top drop-shadow-xl"
          />
          
          {/* Imagine Față Plic (V-ul din față) */}
          <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/plic_front_face.png')] bg-cover bg-center z-30" />
        </div>
      </motion.div>

      {/* --- LAYER: INVITAȚIA (TEXTUL TĂU PE FUNDALUL DIN VIDEO) --- */}
      <motion.div 
        style={{ y: invitationY, scale: invitationScale }}
        className="fixed inset-0 z-[35] flex flex-col items-center justify-start pt-32 px-6"
      >
        {/* Container Hârtie cu Textura și Marginile din Video */}
        <div className="w-full max-w-[380px] h-[600px] bg-[url('/invitatie_textura.jpg')] bg-cover bg-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative">
          
          {/* Monograma Florală D&C din video (Repoziționată) */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2">
             <img src="/monograma_dc.png" alt="Monograma D&C" className="h-16 w-auto" />
          </div>

          {/* Textul tău suprapus exact ca în video */}
          <div className="absolute inset-0 p-10 pt-32 text-center flex flex-col items-center">
             <p className="font-lato text-[9px] tracking-[0.4em] uppercase text-gray-400 mb-6">Și astfel începe pentru totdeauna</p>
             
             {/* Numele Mirilor (Font Cursiv ca în video) */}
             <h1 className="font-greatvibes text-5xl text-[#800020] mb-8">Diana & Ciprian</h1>

             <div className="space-y-6 text-[10px] leading-relaxed text-gray-600 uppercase tracking-widest font-lato">
                <p>Alături de mamele noastre<br/>și purtând în inimă pe cei care ne lipsesc,</p>
                
                <div className="flex justify-between items-start gap-4 pt-4 border-t border-gray-100">
                    <div className="flex-1">
                        <p className="font-playfair italic text-sm normal-case text-gray-800">Elena și Mugurel 🕊️</p>
                        <p className="font-bold mt-1 text-[9px]">OLTEANU</p>
                    </div>
                    <div className="flex-1">
                        <p className="font-playfair italic text-sm normal-case text-gray-800">Elena și Constantin 🕊️</p>
                        <p className="font-bold mt-1 text-[9px]">ONODEA</p>
                    </div>
                </div>

                <div className="pt-6">
                    <p className="text-[9px] mb-2">Și de nașii noștri dragi,</p>
                    <p className="font-greatvibes text-2xl text-gray-800">Lavinia și Dănuț Marian</p>
                </div>
             </div>

             {/* DATA (Font Serif ca în video) */}
             <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
                <p className="font-playfair text-3xl text-[#800020] italic">19 Septembrie 2026</p>
             </div>
          </div>
        </div>
      </motion.div>

      {/* --- SECȚIUNI EXTRA: FLORI ȘI PROGRAM (STIL VIDEO) --- */}
      <div className="absolute top-[300vh] w-full pb-40 flex flex-col items-center px-8 space-y-32">
          
          <div className="text-center max-w-sm relative">
            {/* Orhideele din Video (Suprapuse peste program) */}
            <div className="absolute -left-20 top-0 z-0">
               <img src="/flori_orchid.png" alt="Orhidee" className="h-60 w-auto opacity-80" />
            </div>

            <div className="relative z-10 space-y-12">
                <h2 className="font-serif text-3xl text-[#800020] italic">Program Eveniment</h2>
                {/* Program Timeline... */}
            </div>
          </div>

          {/* RSVP Button, etc... */}
      </div>

    </main>
  );
}