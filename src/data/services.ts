import { MedicalService } from "@/types/schema";

export const services: MedicalService[] = [
  {
    id: "ser-001",
    slug: "aspirado-medula-osea",
    name: "Aspirado de Médula Ósea",
    description: "Procedimiento especializado para extraer una pequeña muestra de la parte líquida de la médula ósea con fines de diagnóstico de trastornos sanguíneos.",
    longDescription: "El aspirado de médula ósea consiste en la obtención de una muestra del tejido líquido que se encuentra dentro de los huesos largos o planos (generalmente el hueso de la pelvis). Es indispensable para evaluar la producción de células sanguíneas y diagnosticar leucemias, anemias graves y fallas medulares en niños.",
    type: "ambulatorio",
    isPainful: true,
    anesthesiaType: "Sedación y anestesia local",
    duration: "20 a 30 minutos",
    recoveryTime: "24 a 48 horas",
    benefits: [
      "Diagnóstico definitivo de leucemias y otras neoplasias hematológicas",
      "Evaluación precisa de la función y salud de la médula ósea",
      "Permite diseñar planes de tratamiento específicos y personalizados"
    ],
    postOpRecommendations: [
      "Mantener el vendaje limpio y seco durante las primeras 24 horas",
      "Evitar actividades físicas intensas o deportes de contacto por 2 a 3 días",
      "Vigilar la aparición de sangrado persistente, fiebre o dolor intenso en el sitio"
    ],
    priceRange: "Según valoración médica",
    technicalSpecs: {
      "Equipo requerido": "Agujas especializadas de aspiración pediátrica",
      "Procesamiento": "Mielograma y citometría de flujo"
    },
    image: "/servicios/Aspirado_Medula_Osea.png",
    seo: {
      title: "Aspirado de Médula Ósea Pediátrica | Dra. Lizbeth",
      description: "Estudio especializado de aspirado de médula ósea para el diagnóstico preciso de enfermedades de la sangre en niños.",
      keywords: ["Aspirado de médula ósea niños CDMX", "Mielograma pediátrico", "Estudio de médula ósea"],
    }
  },
  {
    id: "ser-002",
    slug: "biopsia-medula-osea",
    name: "Biopsia de Médula Ósea",
    description: "Extracción de una pequeña muestra de hueso y tejido sólido de la médula ósea para un análisis histopatológico detallado.",
    longDescription: "A diferencia del aspirado, la biopsia de médula ósea extrae un pequeño fragmento cilíndrico de tejido sólido. Esto permite al patólogo observar la estructura celular completa de la médula y su relación con el hueso, proporcionando información diagnóstica crucial que no se obtiene únicamente con el líquido.",
    type: "ambulatorio",
    isPainful: true,
    anesthesiaType: "Sedación y anestesia local",
    duration: "30 minutos",
    recoveryTime: "48 horas",
    benefits: [
      "Determinación de la celularidad global de la médula ósea",
      "Diagnóstico diferencial de aplasia medular o invasión tumoral",
      "Estudios complementarios de inmunohistoquímica"
    ],
    postOpRecommendations: [
      "Guardar reposo relativo el día del procedimiento",
      "Mantener seca la zona de la punción por 24 horas",
      "Tomar analgésicos indicados por el especialista en caso de molestia leve"
    ],
    priceRange: "Según valoración médica",
    technicalSpecs: {
      "Sitio de punción": "Cresta ilíaca posterior",
      "Estudios adicionales": "Histopatología de fragmento óseo"
    },
    image: "/servicios/Biopsia_Medula_Osea.png",
    seo: {
      title: "Biopsia de Médula Ósea en Niños | Hematología CDMX",
      description: "Procedimiento de biopsia de médula ósea en pacientes pediátricos realizado por la Dra. Lizbeth Hernandez, experta certificada.",
      keywords: ["Biopsia de médula ósea infantil", "Estudio histopatológico de médula", "Hematólogo pediatra Roma Norte"],
    }
  },
  {
    id: "ser-003",
    slug: "lectura-frotis-sangre-periferica",
    name: "Lectura de Frotis de Sangre Periférica",
    description: "Evaluación microscópica detallada de las células sanguíneas para analizar su forma, tamaño y cantidad real en circulación.",
    longDescription: "Es una de las herramientas más valiosas en la hematología. Mediante la observación directa de una gota de sangre extendida en un portaobjetos y teñida convenientemente, la Dra. Lizbeth analiza la morfología de glóbulos rojos, glóbulos blancos y plaquetas para identificar anemias específicas, células anormales (blastos) o alteraciones en la forma celular.",
    type: "consultorio",
    isPainful: false,
    duration: "15 a 20 minutos",
    recoveryTime: "Inmediato",
    benefits: [
      "Detección inmediata de anomalías morfológicas celulares",
      "Clasificación rápida de tipos de anemia (ej. microcítica, drepanocitos)",
      "Confirmación rápida de sospechas de leucemia o infecciones graves"
    ],
    postOpRecommendations: [
      "No requiere cuidados especiales post-toma de muestra"
    ],
    priceRange: "Incluido en la consulta o costo mínimo de análisis",
    technicalSpecs: {
      "Método": "Microscopía óptica de alta resolución",
      "Muestra": "Gota de sangre capilar o venosa"
    },
    image: "/servicios/Lectura_Frotis_Sangre_Periferica.png",
    seo: {
      title: "Lectura de Frotis de Sangre Periférica | Dra. Lizbeth",
      description: "Análisis morfológico de células sanguíneas bajo microscopio para el diagnóstico rápido de anemias y leucemias.",
      keywords: ["Frotis de sangre periférica niños CDMX", "Morfología de células sanguíneas", "Análisis microscópico de sangre"],
    }
  },
  {
    id: "ser-004",
    slug: "puncion-lumbar",
    name: "Punción Lumbar",
    description: "Procedimiento para extraer líquido cefalorraquídeo del canal espinal para diagnosticar o administrar medicamentos en el sistema nervioso.",
    longDescription: "La punción lumbar consiste en la introducción de una aguja delgada en el espacio intervertebral de la columna lumbar baja para extraer líquido cefalorraquídeo o aplicar quimioterapia intratecal en niños con leucemias o linfomas. Es una técnica segura realizada bajo estrictas condiciones de asepsia.",
    type: "ambulatorio",
    isPainful: true,
    anesthesiaType: "Sedación y anestesia local",
    duration: "20 a 30 minutos",
    recoveryTime: "12 a 24 horas",
    benefits: [
      "Permite diagnosticar la invasión de células tumorales en el sistema nervioso",
      "Facilita la aplicación directa de tratamientos preventivos o curativos (quimioterapia intratecal)",
      "Ayuda a medir la presión del líquido cefalorraquídeo"
    ],
    postOpRecommendations: [
      "Mantener al niño recostado en posición plana (boca arriba) por 2 a 4 horas post-procedimiento",
      "Asegurar una buena hidratación oral",
      "Monitorear la presencia de dolor de cabeza, náuseas o fiebre"
    ],
    priceRange: "Según valoración médica",
    technicalSpecs: {
      "Ubicación": "Espacio intervertebral L3-L4 o L4-L5",
      "Medicamentos": "Quimioterapia intratecal (según protocolo)"
    },
    image: "/servicios/Puncion_Lumbar.png",
    seo: {
      title: "Punción Lumbar Pediátrica | Hematóloga Pediatra CDMX",
      description: "Procedimiento de punción lumbar y administración de medicamentos intratecales en niños con leucemia o afecciones hematológicas.",
      keywords: ["Punción lumbar en niños CDMX", "Líquido cefalorraquídeo estudio", "Quimioterapia intratecal infantil"],
    }
  }
];
