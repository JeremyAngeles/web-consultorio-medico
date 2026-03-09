import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import imgHome from '../assets/home.jpg'; 

export const Hero = () => {
  const whatsappUrl = `https://wa.me/51981553457?text=Hola,%20deseo%20solicitar%20una%20cita%20e%20información%20sobre%20sus%20servicios.`;

  return (
    <div className="relative min-h-[650px] md:h-[700px] flex items-center bg-slate-900 overflow-hidden">
      
      {/* IMAGEN DE FONDO: object-[70%] para que en móvil se vea más el lado derecho de la foto */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imgHome} 
          alt="Clínica Los Angeles" 
          className="w-full h-full object-cover object-[70%] md:object-center opacity-50"
        />
      </div>
      
      {/* OVERLAY: Gradiente vertical en móvil (to-b) para proteger el texto blanco */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-900/80 to-blue-900 md:bg-gradient-to-r md:from-blue-900 md:to-transparent z-0"></div>

      <div className="container mx-auto px-6 relative z-10 text-white py-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center md:text-left"
        >
          <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-xs md:text-sm font-bold mb-6 inline-block shadow-lg uppercase tracking-wider">
            Tu centro de confianza en Ate
          </span>
          
          <h1 className="text-4xl md:text-7xl font-black leading-[1.1] mb-6 drop-shadow-2xl">
            Diagnósticos <br className="hidden md:block"/>
            <span className="text-cyan-400">Precisos.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
            Especialistas en Ecografías y Análisis Clínicos con tecnología avanzada al servicio de tu salud.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#paquetes" 
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-white transition-all shadow-xl active:scale-95"
            >
              Ver Promociones
            </a>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 md:bg-transparent border-2 border-cyan-500 md:border-white/80 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              Contáctanos <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};