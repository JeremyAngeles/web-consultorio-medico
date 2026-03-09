import React from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { paquetes, numeroWhatsapp } from '../data/info';

export const Paquetes = () => {
  return (
    <section id="paquetes" className="py-16 bg-blue-50 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900">Paquetes y Campañas</h2>
          <p className="text-slate-500 mt-2">Precios especiales por tiempo limitado</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {paquetes.map((pkg, i) => (
            <div 
              key={i} 
              className={`
                bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col
                w-full sm:w-72  /* <--- AJUSTE PERFECTO: w-72 es delgada pero visible */
                min-h-[420px]   /* <--- ALTURA MÍNIMA: Para que se vean "grandes" y altas */
                transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2
                ${pkg.destacado ? 'ring-4 ring-cyan-400 scale-105 z-10' : 'border border-gray-100'}
              `}
            >
              {/* CABECERA */}
              <div className={`p-4 text-center ${pkg.destacado ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700'}`}>
                {pkg.destacado && (
                  <span className="bg-yellow-400 text-blue-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-2 inline-block tracking-wider">
                    Recomendado
                  </span>
                )}
                <h3 className="font-bold text-lg leading-tight flex items-center justify-center min-h-[48px]">
                  {pkg.titulo}
                </h3>
                <div className="text-4xl font-extrabold mt-2">{pkg.precio}</div>
              </div>
              
              {/* LISTA (Se estira para ocupar el espacio) */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <ul className="space-y-3 mb-6">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-600 leading-snug">
                      <div className="mt-0.5 bg-green-100 p-0.5 rounded-full shrink-0">
                        <Check size={12} className="text-green-600" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* BOTÓN AL FINAL */}
                <a 
                  href={`https://wa.me/${numeroWhatsapp}?text=Hola, me interesa la promo: ${pkg.titulo}`}
                  target="_blank"
                  className={`
                    block w-full text-center py-3 rounded-xl font-bold transition flex items-center justify-center gap-2
                    ${pkg.destacado 
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg' 
                      : 'border-2 border-blue-900 text-blue-900 hover:bg-blue-50'}
                  `}
                >
                  <MessageCircle size={18} /> Reservar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};