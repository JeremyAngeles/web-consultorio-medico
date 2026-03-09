import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-jhon.png';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = `https://wa.me/51981553457?text=Hola,%20deseo%20solicitar%20una%20cita%20e%20información%20sobre%20sus%20servicios.`;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
          <div className="flex flex-col">
            <span className="text-blue-900 font-extrabold text-2xl leading-none">LOS ANGELES</span>
            <span className="text-cyan-500 font-semibold text-sm tracking-widest uppercase">Servicios Médicos</span>
          </div>
        </Link>
        <div className="hidden md:flex gap-8 items-center font-medium text-slate-600">
          <Link to="/" className="hover:text-blue-900 transition-colors">Inicio</Link>
          <Link to="/servicios" className="hover:text-blue-900 transition-colors">Servicios</Link>
          <Link to="/nosotros" className="hover:text-blue-900 transition-colors">Nosotros</Link>
          <a href={whatsappUrl} target="_blank" className="bg-cyan-500 text-white px-6 py-2 rounded-md font-bold hover:bg-cyan-600 transition flex items-center gap-1 shadow-md">
            Contactar <ChevronRight size={16} />
          </a>
        </div>
        <button className="md:hidden text-blue-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-xl">
          <Link to="/" className="py-2 border-b" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <Link to="/servicios" className="py-2 border-b" onClick={() => setIsMenuOpen(false)}>Servicios</Link>
          <Link to="/nosotros" className="py-2 border-b" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
          <a href={whatsappUrl} target="_blank" className="py-2 text-cyan-600 font-bold" onClick={() => setIsMenuOpen(false)}>WhatsApp</a>
        </div>
      )}
    </nav>
  );
};