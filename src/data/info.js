// src/data/info.js

export const serviciosLista = [
  "Ecografía General", "Ecografía 4D - 5D", "Ecografía Doppler Color", 
  "Ecografía Músculo Esquelético", "Ecografía de Mamas", "Rayos X", 
  "Mamografía", "Tomografía", "Análisis Clínicos", "Biopsias",
  "Arteriografía", "Embolización", "Ablación por Radiofrecuencia", "Drenaje"
];

// --- AQUÍ ESTÁN LAS NUEVAS PROMOCIONES DE TU TÍO ---
export const paquetes = [
  {
    titulo: "Control Renal Premium",
    precio: "S/ 150",
    items: [
      "Ecografía Renal + EKG",
      "Glucosa, Urea, Creatinina",
      "Depuración Creatinina 24h",
      "Proteinuria + Orina Completa",
      "Hemograma Completo",
      "Consulta Médica Incluida"
    ],
    destacado: true // Este lo resaltamos porque es muy completo
  },
  {
    titulo: "Ginecológico Nº 2",
    precio: "S/ 180",
    items: [
      "Consulta Especializada",
      "Ecografía Transvaginal",
      "Ecografía de Mamas",
      "Toma de Papanicolau (PAP)",
      "Toma de Secreción (CSV)"
    ],
    destacado: true
  },
  {
    titulo: "Ginecológico Nº 1",
    precio: "S/ 120",
    items: [
      "Consulta Especializada",
      "Toma de Papanicolau (PAP)",
      "Toma de Secreción (CSV)",
      "Examen Completo de Orina",
      "Atención Lun a Dom (8am-8pm)"
    ],
    destacado: false
  },
  {
    titulo: "Chequeo General",
    precio: "S/ 100",
    items: [
      "Consulta Medicina General",
      "Examen Físico Completo",
      "Evaluación de Funciones Vitales",
      "Descarte de Anemia",
      "Promoción Ilimitada"
    ],
    destacado: false
  },
  {
    titulo: "Campaña Papanicolau",
    precio: "S/ 30",
    items: [
      "Toma de Muestra PAP",
      "Material descartable incluido",
      "Solo Lunes a Viernes",
      "Horario: 8:00 AM - 12:00 PM",
      "Promoción por tiempo limitado"
    ],
    destacado: false
  }
];

export const numeroWhatsapp = "51981553457";