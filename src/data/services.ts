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
      description: "Procedimiento de biopsia de médula ósea en pacientes pediátricos realizado por la Dra. Lizbeth Hernández, experta certificada.",
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
  },
  {
    id: "ser-005",
    slug: "interpretacion-resultados-laboratorio",
    name: "Interpretación de Resultados de Laboratorio",
    description: "Evaluación y análisis especializado de estudios clínicos y de laboratorio general para identificar indicios de trastornos sanguíneos o inmunológicos en niños.",
    longDescription: "La interpretación de resultados de laboratorio consiste en el análisis crítico, integrativo y experto de diversos estudios de laboratorio clínico (perfil de hierro, pruebas de función hepática, frotis, etc.). La Dra. Lizbeth Hernández correlaciona estos valores con el cuadro clínico del paciente pediátrico para confirmar diagnósticos hematológicos oportunos o guiar estudios moleculares adicionales.",
    type: "consultorio",
    isPainful: false,
    duration: "30 a 45 minutos",
    recoveryTime: "Inmediata",
    benefits: [
      "Detección temprana de trastornos metabólicos, hepáticos o inmunológicos vinculados a la sangre",
      "Correlación precisa entre síntomas físicos y parámetros medidos en laboratorio",
      "Optimización de costos al evitar estudios de laboratorio complementarios innecesarios"
    ],
    postOpRecommendations: [
      "Traer todos los estudios de laboratorio previos impresos o en formato digital",
      "Anotar cualquier síntoma detectado en casa (fatiga, moretones, sangrado) para correlación clínica",
      "Seguir las indicaciones de ayuno correspondientes en caso de requerirse nuevas muestras"
    ],
    priceRange: "Según valoración médica",
    technicalSpecs: {
      "Alcance": "Análisis de perfiles bioquímicos, inmunológicos e histopatológicos",
      "Requerimiento": "Estudios de laboratorio impresos o digitales no mayores a 3 meses de antigüedad"
    },
    image: "/servicios/Interpretacion_Resultados_Laboratorio.png",
    seo: {
      title: "Interpretación de Análisis de Laboratorio Pediátrico | CDMX",
      description: "Consulta especializada para la interpretación y diagnóstico a partir de resultados de análisis clínicos en niños con la Dra. Lizbeth Hernández.",
      keywords: ["Interpretación de estudios de laboratorio CDMX", "Análisis clínicos niños", "Hematóloga Pediatra Roma Norte"]
    }
  },
  {
    id: "ser-006",
    slug: "interpretacion-biometria-hematica",
    name: "Interpretación de Biometría Hemática",
    description: "Análisis detallado de las tres líneas celulares (glóbulos rojos, glóbulos blancos y plaquetas) para detectar anemias, infecciones y fallas medulares.",
    longDescription: "La biometría hemática es el estudio de laboratorio más importante en hematología. La interpretación médica experta por parte de la Dra. Lizbeth Hernández va más allá de los valores de referencia del laboratorio general, evaluando índices eritrocitarios, niveles de hemoglobina y recuentos absolutos de leucocitos y plaquetas adaptados a la edad pediátrica del paciente para detectar anemias, leucemias y otras anomalías graves.",
    type: "consultorio",
    isPainful: false,
    duration: "30 a 40 minutos",
    recoveryTime: "Inmediata",
    benefits: [
      "Identificación exacta del tipo de anemia (microcítica, macrocítica, etc.)",
      "Evaluación del recuento absoluto de plaquetas para prevenir riesgos de sangrado",
      "Monitoreo de neutrófilos y defensas para descartar inmunodeficiencias o fallas en la médula"
    ],
    postOpRecommendations: [
      "Presentar la biometría hemática más reciente con su respectivo histograma si está disponible",
      "Evitar automedicar al niño antes de la consulta para no alterar los recuentos celulares",
      "Anotar antecedentes familiares de anemias, transfusiones o problemas de sangrado"
    ],
    priceRange: "Según valoración médica",
    technicalSpecs: {
      "Líneas Evaluadas": "Eritroide (glóbulos rojos), Leucocitaria (glóbulos blancos) y Megacariocítica (plaquetas)",
      "Rango de Referencia": "Ajustado estrictamente por edad pediátrica y género"
    },
    image: "/servicios/Interpretacion_Biometria_Hematica.png",
    seo: {
      title: "Interpretación de Biometría Hemática Infantil | CDMX",
      description: "Análisis experto de plaquetas, leucocitos y hemoglobina en niños. Agenda consulta con la Dra. Lizbeth Hernández, Hematóloga Pediatra.",
      keywords: ["Biometría hemática completa niños", "Plaquetas bajas pediatra CDMX", "Análisis de sangre infantil interpretación"]
    }
  },
  {
    id: "ser-007",
    slug: "interpretacion-estudios-geneticos-moleculares",
    name: "Interpretación de Estudios Genéticos y Moleculares",
    description: "Análisis avanzado de pruebas moleculares, citogenética y secuenciación para identificar mutaciones específicas y causas hereditarias en enfermedades de la sangre.",
    longDescription: "Los estudios genéticos y moleculares son fundamentales en la hematología pediátrica moderna para precisar diagnósticos y pronósticos. La Dra. Lizbeth Hernández realiza el análisis e interpretación experta de estudios de cariotipo, PCR cuantitativa, hibridación in situ fluorescente (FISH) y secuenciación genética de nueva generación (NGS) para detectar mutaciones causantes de anemias congénitas, leucemias, talasemias o predisposiciones hereditarias.",
    type: "consultorio",
    isPainful: false,
    duration: "40 a 50 minutos",
    recoveryTime: "Inmediata",
    benefits: [
      "Identificación de mutaciones genéticas específicas para guiar terapias de precisión",
      "Determinación del pronóstico y estratificación de riesgo en leucemia infantil",
      "Asesoramiento genético familiar ante la sospecha de trastornos sanguíneos hereditarios"
    ],
    postOpRecommendations: [
      "Proporcionar copias completas de los informes de citogenética o biología molecular realizados",
      "Anotar antecedentes detallados de enfermedades de la sangre en familiares de primer y segundo grado",
      "Seguir indicaciones en caso de que se requiera la toma de muestra a los padres para estudios comparativos"
    ],
    priceRange: "Según valoración médica",
    technicalSpecs: {
      "Técnicas Analizadas": "PCR, FISH, Cariotipo convencional y molecular, Secuenciación NGS",
      "Objetivo": "Detección de translocaciones, deleciones, duplicaciones o mutaciones puntuales"
    },
    image: "/servicios/Interpretacion_Estudios_Geneticos_Moleculares.png",
    seo: {
      title: "Interpretación de Pruebas Genéticas y Moleculares CDMX | Dra. Lizbeth",
      description: "Análisis experto de estudios de cariotipo, FISH y PCR en hematología pediátrica. Dra. Lizbeth Hernández, Hematóloga Pediatra.",
      keywords: ["Estudios genéticos hematología niños", "Prueba de cariotipo CDMX pediatría", "PCR molecular leucemia infantil"]
    }
  }
];
