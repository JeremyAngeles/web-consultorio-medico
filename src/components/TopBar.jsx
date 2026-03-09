import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import { numeroWhatsapp } from '../data/info';

export const TopBar = () => {
  return (
    <div className="bg-blue-950 text-white py-2 text-xs hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Lado Izquierdo: Contacto Rápido */}
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-cyan-400" />
            <span>informes@angelesredentores.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-cyan-400" />
            <span>{numeroWhatsapp}</span>
          </div>
        </div>

        {/* Lado Derecho: Horario y Dirección */}
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-cyan-400" />
            <span>Lun - Sab: 8:00 AM - 8:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-cyan-400" />
            <span>Ate Vitarte, Lima</span>
          </div>
        </div>
      </div>
    </div>
  );
};