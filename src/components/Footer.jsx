import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Send } from 'lucide-react';
import { Link } from 'react-router-dom'; // Importante para la navegación
import { numeroWhatsapp } from '../data/info';
import logo from '../assets/logo-jhon.png';

export const Footer = () => {
  const whatsappUrl = `https://wa.me/${numeroWhatsapp}?text=Hola,%20deseo%20solicitar%20una%20cita%20e%20información%20sobre%20sus%20servicios.`;

  return (
    <footer className="bg-[#0f60b6] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full border-[40px] border-white/20 transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute right-0 bottom-0 w-[700px] h-[700px] rounded-full border-[40px] border-white/10 transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12 border-b border-white/20 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 inline-block">
               <img 
                 src={logo} 
                 alt="Logo Los Angeles" 
                 className="h-20 w-auto object-contain brightness-0 invert opacity-90"
               />
            </div>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
              Contamos con el mejor Staff. Nuestro Centro Médico estará siempre disponible para Ud. brindando calidad y confianza.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li><a href="/#servicios" className="hover:text-cyan-300 transition">Ecografías 5D</a></li>
              <li><a href="/#servicios" className="hover:text-cyan-300 transition">Laboratorio Clínico</a></li>
              <li><a href="/#servicios" className="hover:text-cyan-300 transition">Ginecología</a></li>
              <li><a href="/#servicios" className="hover:text-cyan-300 transition">Medicina General</a></li>
              <li><a href="/#servicios" className="hover:text-cyan-300 transition">Rayos X</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Enlaces</h4>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li><Link to="/nosotros" className="hover:text-cyan-300 transition">Nosotros</Link></li>
              <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">Contacto</a></li>
              <li><a href="/#paquetes" className="hover:text-cyan-300 transition">Promociones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contáctenos</h4>
            <ul className="space-y-4 text-blue-100 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-cyan-300 shrink-0" size={18} />
                <span>Av. Nicolás Ayllon 5285, Ate - Lima <br/>(Costado de Bata)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-cyan-300 shrink-0" size={18} />
                <span>{numeroWhatsapp} / 942 250 324</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-cyan-300 shrink-0" size={18} />
                <span>informes@angelesredentores.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-blue-200 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 Servicios Médicos Los Angeles Redentores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};