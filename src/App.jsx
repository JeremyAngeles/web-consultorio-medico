import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

// IMPORTAMOS TUS COMPONENTES
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// IMPORTAMOS LAS PÁGINAS REALES
import { Home } from './pages/Home';
import { Nosotros } from './pages/Nosotros';
import { Servicios } from './pages/Servicios'; // <--- ESTO ES LO QUE FALTABA

function App() {
  // Número actualizado del tío Jhon
  const numeroWhatsapp = "51981553457";
  const mensajeWhatsapp = "Hola, deseo solicitar una cita e información sobre sus servicios.";
  const whatsappUrl = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensajeWhatsapp)}`;

  return (
    <BrowserRouter>
      <div className="font-sans text-slate-800 bg-slate-50 flex flex-col min-h-screen">
        
        {/* 1. BARRA SUPERIOR Y MENÚ */}
        <TopBar />
        <Navbar />

        {/* 2. RUTAS DE NAVEGACIÓN */}
        <div className="flex-grow">
          <Routes>
            {/* Página Principal */}
            <Route path="/" element={<Home />} />
            
            {/* Página Nosotros */}
            <Route path="/nosotros" element={<Nosotros />} />

            {/* Página de Servicios (LA NUEVA) */}
            <Route path="/servicios" element={<Servicios />} />
            
            {/* Redirección por defecto */}
            <Route path="/contacto" element={<Home />} />
          </Routes>
        </div>

        {/* 3. PIE DE PÁGINA */}
        <Footer />

        {/* 4. BOTÓN FLOTANTE DE WHATSAPP */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer" 
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition z-50 animate-bounce flex items-center justify-center"
          title="Chat con nosotros"
        >
          <MessageCircle size={32} />
        </a>

      </div>
    </BrowserRouter>
  );
}

export default App;