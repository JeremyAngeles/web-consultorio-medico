import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Heart, Users, Clock, MapPin, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

// TUS IMÁGENES
import imgGrupal from '../assets/grupal.jpg';
import imgPrincipal from '../assets/principal.png';
import imgAtendiendo from '../assets/atendiendo.jpg';

export const Nosotros = () => {
    return (
        <div className="bg-slate-50 font-sans text-slate-800">

            {/* 1. HEADER / PORTADA */}
            <div className="relative bg-blue-900 text-white py-24 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold mb-4"
                    >
                        Quiénes Somos
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-blue-100 font-light"
                    >
                        Tu familia médica de confianza en Ate Vitarte
                    </motion.p>
                </div>
            </div>

            {/* 2. NUESTRA HISTORIA */}
            <section className="py-20 container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 relative"
                    >
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-100 rounded-full z-0"></div>
                        <img
                            src={imgAtendiendo}
                            alt="Atención al paciente"
                            className="relative z-10 rounded-2xl shadow-2xl w-full object-cover h-[450px]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-2 block">Nuestra Misión</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                            Comprometidos con la salud de tu familia
                        </h2>
                        <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                            Servicios Médicos Los Angeles Redentores nació para acercar salud de calidad a la comunidad de Ate. Brindamos confianza y tecnología al alcance de todos.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                <div className="bg-red-100 p-2 rounded-full"><Heart className="text-red-500" size={24} /></div>
                                <h4 className="font-bold text-blue-900">Trato Humano</h4>
                            </div>
                            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                <div className="bg-green-100 p-2 rounded-full"><CheckCircle className="text-green-500" size={24} /></div>
                                <h4 className="font-bold text-blue-900">Precisión</h4>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. MENSAJE DEL DIRECTOR */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 h-[400px]">
                            <img src={imgPrincipal} alt="Director Médico" className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="md:w-2/3 p-10 md:p-16">
                            <Award className="text-cyan-500 mb-4" size={40} />
                            <h3 className="text-2xl font-bold text-blue-900 mb-4">Palabras de la Dirección</h3>
                            <p className="text-slate-600 italic text-xl mb-8 border-l-4 border-cyan-500 pl-6 leading-relaxed">
                                "Promovemos una cultura de prevención para que cada vecino de Ate sepa que tiene un aliado de confianza en nuestra clínica."
                            </p>
                            <span className="font-bold text-blue-900 text-lg">Dirección Médica General</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SECCIÓN EQUIPO (ANIMACIÓN DE CARAS ARRIBA Y TEXTO ABAJO) */}
            <section className="relative min-h-[750px] flex items-end justify-center overflow-hidden">
                {/* FONDO CON ANIMACIÓN */}
                <motion.div
                    animate={{
                        y: [0, -25, 0],
                        scale: [1.1, 1.15, 1.1]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={imgGrupal}
                        alt="Equipo Médico"
                        className="w-full h-full object-cover object-[center_12%]"
                    />
                    {/* Overlay que se desvanece hacia arriba para dejar ver las caras */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/40 to-transparent"></div>
                </motion.div>

                {/* CONTENIDO POSICIONADO ABAJO PARA NO TAPAR LAS CARAS */}
                <div className="container mx-auto px-4 relative z-10 text-center text-white pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-10 drop-shadow-2xl">
                            Un Equipo de <span className="text-cyan-400">Expertos</span>
                        </h2>
                        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
                            <div className="flex flex-col items-center">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-full mb-4 border border-white/30">
                                    <ShieldCheck size={45} className="text-cyan-300" />
                                </div>
                                <p className="font-bold text-lg uppercase tracking-widest">Profesionales<br />Certificados</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-full mb-4 border border-white/30">
                                    <Users size={45} className="text-cyan-300" />
                                </div>
                                <p className="font-bold text-lg uppercase tracking-widest">Atención<br />Personalizada</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 5. UBICACIÓN Y CONTACTO */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-12">Ubícanos en Ate</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center border border-slate-100 shadow-sm">
                            <MapPin className="text-blue-600 mb-4" size={32} />
                            <h4 className="font-bold text-xl mb-2">Sede Principal</h4>
                            <p className="text-slate-600 text-sm">Av. Nicolás Ayllon 5285, Ate</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center border border-slate-100 shadow-sm">
                            <Clock className="text-green-600 mb-4" size={32} />
                            <h4 className="font-bold text-xl mb-2">Horarios</h4>
                            <p className="text-slate-600 text-sm">Lunes a Sábado: 8:00 AM - 8:00 PM</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center border border-slate-100 shadow-sm">
                            <Users className="text-purple-600 mb-4" size={32} />
                            <h4 className="font-bold text-xl mb-2">Citas</h4>
                            <p className="text-slate-600 text-sm">Atención por orden de llegada y previa cita.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CALL TO ACTION */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 text-center text-white px-4">
                <h2 className="text-3xl font-bold mb-6 text-white">Tu salud no puede esperar</h2>
                <a
                    href="https://wa.me/51981553457?text=Hola,%20deseo%20agendar%20una%20cita%20médica%20ahora%20mismo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-400 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition transform hover:scale-105 inline-block"
                >
                    Agenda tu Cita Ahora
                </a>
            </section>

        </div>
    );
};