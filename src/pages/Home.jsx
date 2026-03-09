import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, Shield, Award, Users, ChevronLeft, ChevronRight, MessageCircle, CheckCircle, ArrowRight, MapPin, Phone, Clock } from 'lucide-react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';

// Componentes reutilizables
import { Hero } from '../components/Hero';
import { Paquetes } from '../components/Paquetes'; 

// TUS IMÁGENES
import imgAtendiendo from '../assets/atendiendo.jpg';
import imgEcografia from '../assets/ecografia.jpeg';
import imgGinecologia from '../assets/ginecologia.jpg';
import imgRayosX from '../assets/rayosx.webp';
import imgTubos from '../assets/tubos.jpg';
import imgGrupal from '../assets/grupal.jpg';

// --- CONTADOR CORREGIDO ---
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          node.textContent = Math.floor(latest) + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

export const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // NÚMERO DE WHATSAPP ACTUALIZADO
  const whatsappUrl = "https://wa.me/51981553457?text=Hola, deseo solicitar una cita e información sobre sus servicios médicos.";

  const testimonials = [
    {
      id: 1, name: "Raul Mendez", role: "Paciente Recurrente",
      quote: "Excelente atención, muy amables y cordiales. Se preocupan por todo, desde que entras hasta que te dan los resultados.", stars: 5
    },
    {
      id: 2, name: "Maria Lopez", role: "Futura Mamá",
      quote: "Me realicé mi ecografía 5D aquí y fue mágico. La paciencia del doctor para explicarme cada detalle fue increíble.", stars: 5
    },
    {
      id: 3, name: "Carlos Ruiz", role: "Chequeo General",
      quote: "Rápidos y eficientes. Los precios son muy justos para la calidad de atención que brindan. Totalmente recomendado.", stars: 4
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <>
      {/* 1. PORTADA (HERO) */}
      <Hero />

      {/* 2. BARRA AZUL DE ESTADÍSTICAS */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/3 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-md">
                Tu Salud es<br/> <span className="text-cyan-300">Nuestra Prioridad</span>
              </h2>
              <p className="text-blue-100 text-lg max-w-sm mx-auto md:mx-0">
                Combinamos tecnología avanzada con calidez humana para cuidar de ti y tu familia.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl w-40">
                <div className="bg-white text-blue-600 p-3 rounded-full mb-3 shadow-lg"><Shield size={28} /></div>
                <span className="text-4xl font-extrabold text-white"><Counter value={100} suffix="%" /></span>
                <span className="text-sm text-cyan-100 font-medium tracking-wider uppercase mt-1">Seguridad</span>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} transition={{ delay: 0.1 }} className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl w-40">
                <div className="bg-white text-blue-600 p-3 rounded-full mb-3 shadow-lg"><Award size={28} /></div>
                <span className="text-4xl font-extrabold text-white"><Counter value={15} suffix="+" /></span>
                <span className="text-sm text-cyan-100 font-medium tracking-wider uppercase mt-1">Años Exp.</span>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} transition={{ delay: 0.2 }} className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl w-40">
                <div className="bg-white text-blue-600 p-3 rounded-full mb-3 shadow-lg"><Users size={28} /></div>
                <span className="text-4xl font-extrabold text-white"><Counter value={5000} suffix="+" /></span>
                <span className="text-sm text-cyan-100 font-medium tracking-wider uppercase mt-1">Pacientes</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICIO DESTACADO RESPONSIVO */}
<section className="py-10 md:py-20 container mx-auto px-4">
  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[680px] md:min-h-[550px] flex items-center group">
    
    {/* Imagen de Fondo: object-center para mantener el enfoque en el celular */}
    <img 
      src={imgEcografia} 
      alt="Ecografía 5D" 
      className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-700 opacity-90 md:opacity-100" 
    />
    
    {/* Overlay Mejorado: En móvil oscurece más para leer los puntos del listado */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/60 to-blue-900/90 md:bg-gradient-to-r md:from-blue-900 md:via-blue-900/80 md:to-transparent"></div>

    {/* Contenido */}
    <div className="relative z-10 p-8 md:p-20 text-white max-w-2xl">
      <span className="text-cyan-400 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-4 block animate-pulse">
        ★ Servicio Destacado
      </span>
      
      <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
        Ecografías <br/>
        <span className="text-cyan-400">Genéticas 5D</span>
      </h2>
      
      <p className="text-blue-50 text-sm md:text-lg mb-8 leading-relaxed">
        Vive la experiencia de ver a tu bebé en tiempo real. Detectamos anomalías genéticas desde la semana 11 con la mayor precisión de Ate.
      </p>
      
      <ul className="grid grid-cols-1 gap-3 mb-10">
        <li className="flex items-center gap-3 text-sm md:text-lg bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
          <CheckCircle className="text-cyan-400" size={18} /> Resultado el mismo día
        </li>
        <li className="flex items-center gap-3 text-sm md:text-lg bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
          <CheckCircle className="text-cyan-400" size={18} /> Incluye Fotos y Video
        </li>
      </ul>

      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href={whatsappUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 text-white px-8 py-4 rounded-full font-bold hover:bg-cyan-400 transition flex items-center justify-center gap-2 shadow-xl active:scale-95 text-center"
        >
          <MessageCircle size={20} /> WhatsApp 981 553 457
        </a>
        <Link 
          to="/servicios"
          className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition flex items-center justify-center gap-2 text-center"
        >
          Ver más servicios <ArrowRight size={20}/>
        </Link>
      </div>
    </div>
  </div>
</section>

 {/* 4. MÁS ESPECIALIDADES - DISEÑO PREMIUM */}
<section id="servicios" className="py-20 bg-slate-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-cyan-600 font-bold uppercase tracking-[0.2em] text-sm mb-2 block"
      >
        Excelencia Médica
      </motion.span>
      <h2 className="text-4xl md:text-5xl font-black text-blue-900">Más Especialidades</h2>
      <div className="w-24 h-2 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Ginecología */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
      >
        <Link to="/servicios">
          <div className="h-64 overflow-hidden relative">
            <img src={imgGinecologia} alt="Ginecología" className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-3 tracking-tight">Ginecología</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Papanicolau, control prenatal y salud integral femenina.</p>
          </div>
        </Link>
      </motion.div>

      {/* Rayos X */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
      >
        <Link to="/servicios">
          <div className="h-64 overflow-hidden relative">
            <img src={imgRayosX} alt="Rayos X" className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-3 tracking-tight">Rayos X</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Radiología digital de alta precisión y entrega rápida.</p>
          </div>
        </Link>
      </motion.div>

      {/* Laboratorio */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
      >
        <Link to="/servicios">
          <div className="h-64 overflow-hidden relative">
            <img src={imgTubos} alt="Laboratorio" className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-3 tracking-tight">Laboratorio</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Análisis clínicos confiables con tecnología de punta.</p>
          </div>
        </Link>
      </motion.div>

      {/* TARJETA FINAL: VER TODO */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-blue-900 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group relative"
      >
        <div className="absolute inset-0 opacity-40">
          <img src={imgAtendiendo} alt="Todos los servicios" className="w-full h-full object-cover"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-blue-900/90"></div>
        
        <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="bg-cyan-500 p-5 rounded-full mb-6 shadow-2xl"
          >
             <ArrowRight size={40} />
          </motion.div>
          <h3 className="text-2xl font-black mb-3">Catálogo Completo</h3>
          <p className="text-cyan-100 text-sm mb-8 opacity-90">Explora nuestras más de 15 especialidades médicas.</p>
          <Link 
            to="/servicios" 
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest hover:bg-cyan-400 hover:text-white transition-all shadow-lg"
          >
            Ver Todo
          </Link>
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* 5. PRECIOS */}
      <Paquetes />

      {/* 6. TESTIMONIOS */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Nuestros Pacientes Nos Recomiendan</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row min-h-[400px]">
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <img src={imgAtendiendo} alt="Pacientes felices" className="absolute inset-0 w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply"></div>
            </div>

            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative bg-white">
              <div className="mb-6"><span className="text-cyan-500 text-6xl font-serif leading-none opacity-50">“</span></div>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
                >
                  <p className="text-xl text-slate-700 font-medium italic mb-6 leading-relaxed">{testimonials[currentTestimonial].quote}</p>
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h4 className="font-bold text-blue-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{testimonials[currentTestimonial].role}</p>
                    </div>
                    <div className="flex text-yellow-400 gap-1">{[...Array(testimonials[currentTestimonial].stars)].map((_, i) => (<Star key={i} size={18} fill="currentColor" />))}</div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between border-t pt-6 border-slate-100 mt-auto">
                <div className="flex gap-3">
                  <button onClick={prevTestimonial} className="p-3 rounded-full border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition text-blue-900"><ChevronLeft size={20}/></button>
                  <button onClick={nextTestimonial} className="p-3 rounded-full border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition text-blue-900"><ChevronRight size={20}/></button>
                </div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-5 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-blue-800 transition text-sm md:text-base">
                  <MessageCircle size={18} /> <span className="hidden sm:inline">Whatsapp</span> 981...
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECCIÓN STAFF Y UBICACIÓN (NUEVA) */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* IZQUIERDA: INFO Y STAFF */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Ubícanos en Ate</h2>
              <p className="text-slate-600 mb-10 text-lg">
                Visítanos en nuestra sede principal y recibe atención médica de primer nivel con el mejor staff de la zona.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600"><MapPin size={24}/></div>
                  <div>
                    <h4 className="font-bold text-blue-900">Dirección</h4>
                    <p className="text-slate-600 font-medium">Av. Nicolás Ayllon 5285, Ate - Lima (Costado de Bata)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600"><Phone size={24}/></div>
                  <div>
                    <h4 className="font-bold text-blue-900">Teléfono / WhatsApp</h4>
                    <p className="text-slate-600 font-medium">+51 981 553 457 / 942 250 324</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-full text-cyan-600"><Clock size={24}/></div>
                  <div>
                    <h4 className="font-bold text-blue-900">Horario de Atención</h4>
                    <p className="text-slate-600 font-medium">Lunes a Sábado: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block bg-blue-900 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-blue-800 transition"
              >
                Agendar mi Cita
              </a>
            </motion.div>

            {/* DERECHA: MAPA BONITO */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.831517781358!2d-76.9248259!3d-12.0515783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6ef67e1a319%3A0xc3f9a7ef47e1a319!2sAv.%20Nicol%C3%A1s%20Ayll%C3%B3n%205285%2C%20Ate%2015012!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Ubicación"
              ></iframe>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 8. FOTO DE STAFF FINAL (ENLACE A NOSOTROS) */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgGrupal} 
            alt="Equipo Médico Los Angeles" 
            className="w-full h-full object-cover object-[center_15%]" 
          />
          <div className="absolute inset-0 bg-blue-900/75"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Confía en <span className="text-cyan-400">Expertos</span>
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Un equipo humano y profesional comprometido con tu bienestar y el de tu familia.
            </p>
            <Link 
              to="/nosotros" 
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-cyan-500 hover:text-white transition-all shadow-xl inline-block transform hover:-translate-y-1"
            >
              Saber más de Nosotros
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};