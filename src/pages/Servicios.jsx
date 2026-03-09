import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle, ArrowRight, Activity, Clock, ShieldCheck } from 'lucide-react';

// --- IMPORTACIONES SIN TILDES ---
import ablacion from '../assets/ablacion.jpg';
import arteriografia from '../assets/arteriografia.webp';
import biopsia from '../assets/biopsia.webp';
import drenaje from '../assets/drenaje.webp';
import ecoDoppler from '../assets/eco-doppler.jpg';
import ecoGeneral from '../assets/eco-general.jpg';
import ecoMusculo from '../assets/eco-musculo.jpg';
import ecografia from '../assets/ecografia.jpeg';
import embolizacion from '../assets/embolizacion.jpg';
import mamografia from '../assets/mamografia.png';
import medicina from '../assets/medicina.webp';
import rayosx from '../assets/rayosx.webp';
import tomografia from '../assets/tomografia.webp';

export const Servicios = () => {
  const whatsappUrl = "https://wa.me/51981553457?text=Hola, deseo información detallada sobre el servicio de: ";

  const servicios = [
    { 
      titulo: "Ecografía General", 
      desc: "Evaluación detallada de órganos internos para detectar anomalías de manera temprana.", 
      puntos: ["Abdominal, Renal y Pélvica", "Resultados inmediatos", "Tecnología de alta resolución"],
      img: ecoGeneral 
    },
    { 
      titulo: "Ecografía 4D - 5D", 
      desc: "La experiencia más emocionante para futuros padres con nitidez asombrosa.", 
      puntos: ["Grabación en tiempo real", "Detección de rasgos faciales", "Informe médico detallado"],
      img: ecografia 
    },
    { 
      titulo: "Ecografía Doppler Color", 
      desc: "Estudio vital para evaluar la salud de tus venas y arterias.", 
      puntos: ["Evaluación circulatoria", "Detección de varices/trombos", "Ideal para pacientes cardiacos"],
      img: ecoDoppler 
    },
    { 
      titulo: "Ecografía Músculo Esquelética", 
      desc: "Diagnóstico especializado para deportistas y pacientes con dolores articulares.", 
      puntos: ["Desgarros y tendinitis", "Evaluación de ligamentos", "Guía para infiltraciones"],
      img: ecoMusculo 
    },
    { 
      titulo: "Rayos X Digital", 
      desc: "Radiografía moderna con menor exposición a radiación y entrega rápida.", 
      puntos: ["Evaluación ósea completa", "Radiografía de tórax", "Procesado digital nítido"],
      img: rayosx 
    },
    { 
      titulo: "Mamografía Digital", 
      desc: "El examen preventivo más importante para la salud integral de la mujer.", 
      puntos: ["Detección precoz", "Mínima molestia", "Especialistas en lectura mamaria"],
      img: mamografia 
    },
    { 
      titulo: "Tomografía (TAC)", 
      desc: "Escaneos corporales detallados para diagnósticos complejos y precisos.", 
      puntos: ["Vistas transversales 3D", "Evaluación de órganos", "Alta velocidad de escaneo"],
      img: tomografia 
    },
    { 
      titulo: "Medicina General", 
      desc: "Atención médica primaria para toda la familia con enfoque preventivo.", 
      puntos: ["Chequeos integrales", "Tratamiento de enfermedades comunes", "Staff altamente calificado"],
      img: medicina 
    },
    { 
      titulo: "Biopsias Guiadas", 
      desc: "Procedimientos seguros para toma de muestras de tejido con guía de imagen.", 
      puntos: ["Mínimamente invasivo", "Precisión milimétrica", "Anestesia local"],
      img: biopsia 
    },
    { 
      titulo: "Arteriografía", 
      desc: "Estudio avanzado para visualizar obstrucciones o daños en las arterias.", 
      puntos: ["Diagnóstico vascular", "Alta especialización", "Equipos de última generación"],
      img: arteriografia 
    },
    { 
      titulo: "Embolización Vascular", 
      desc: "Tratamiento moderno para detener hemorragias o reducir tumores sin cirugía.", 
      puntos: ["Sin cortes profundos", "Recuperación rápida", "Procedimiento ambulatorio"],
      img: embolizacion 
    },
    { 
      titulo: "Ablación por Radiofrecuencia", 
      desc: "Tratamiento térmico avanzado para eliminar tejidos o tumores localizados.", 
      puntos: ["Alternativa a la cirugía", "Alta efectividad", "Control de dolor"],
      img: ablacion 
    },
    { 
      titulo: "Drenaje Percutáneo", 
      desc: "Extracción segura de líquidos o abscesos bajo guía ecográfica continua.", 
      puntos: ["Alivio inmediato", "Procedimiento guiado", "Menor riesgo de infección"],
      img: drenaje 
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HEADER SECCIÓN */}
      <div className="bg-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Nuestras <span className="text-cyan-400">Especialidades</span>
          </motion.h1>
          <p className="text-blue-100 max-w-xl mx-auto text-lg">
            Diagnósticos precisos con tecnología médica de vanguardia.
          </p>
        </div>
      </div>

      {/* 2. GRID DE TARJETAS */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicios.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition group border border-slate-100"
            >
              {/* Contenedor imagen */}
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={s.img} 
                  alt={s.titulo} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute top-6 left-6 bg-cyan-500 text-white px-4 py-1 rounded-full shadow-lg">
                  <span className="text-xs font-bold uppercase tracking-widest">Especialidad</span>
                </div>
              </div>

              {/* Contenido texto */}
              <div className="p-8 flex flex-col flex-grow bg-white">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-cyan-600 transition tracking-tight">
                  {s.titulo}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>

                {/* LISTA DE PUNTOS CLAVE */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {s.puntos.map((punto, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                      <div className="bg-green-100 p-1 rounded-full">
                        <CheckCircle size={14} className="text-green-600" />
                      </div>
                      {punto}
                    </li>
                  ))}
                </ul>
                
                {/* Botón WhatsApp */}
                <a 
                  href={`${whatsappUrl}${encodeURIComponent(s.titulo)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-900 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-cyan-500 hover:shadow-lg transition-all duration-300 transform active:scale-95"
                >
                  <MessageCircle size={20} /> Consultar Precio
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. CTA FINAL */}
      <section className="bg-blue-900 py-20 text-center text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Activity className="text-cyan-400 mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-bold mb-6">¿Necesitas una atención urgente?</h2>
          <p className="mb-10 text-xl text-blue-100 max-w-2xl mx-auto">
            Nuestro equipo está listo para atenderte. Atendemos por orden de llegada y previa cita.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/51981553457"
              target="_blank"
              className="bg-cyan-500 text-white px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-cyan-400 transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MessageCircle size={24} /> Escribir al WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};