import { MedicalService } from "@/types/schema";

export const services: MedicalService[] = [
  {
    id: "ser-001",
    slug: "aspirado-medula-osea",
    name: "Aspirado de Médula Ósea",
    description: "Procedimiento especializado para extraer una pequeña muestra de la parte líquida de la médula ósea con fines de diagnóstico de trastornos sanguíneos.",
    longDescription: "El aspirado de médula ósea es un procedimiento en el que se obtiene una pequeña muestra líquida de la médula ósea, generalmente del hueso de la cadera. Permite evaluar cómo se producen las células de la sangre y ayuda al diagnóstico de leucemias, anemias graves, infecciones, infiltración medular o fallas de médula ósea.",
    type: "ambulatorio",
    isPainful: true,
    anesthesiaType: "Sedación y anestesia local",
    duration: "20 a 30 minutos",
    recoveryTime: "24 a 48 horas",
    benefitsTitle: "¿Cuándo está indicado realizarlo?",
    benefitsIntro: "Puede ser útil cuando un niño presenta:",
    benefits: [
      "Anemia, plaquetas o leucocitos muy bajos sin causa clara.",
      "Sospecha de leucemia u otra enfermedad hematológica.",
      "Fiebre prolongada, crecimiento de ganglios, hígado o bazo.",
      "Sospecha de falla medular o infiltración de médula ósea."
    ],
    postOpRecommendations: [
      "Mantener el vendaje limpio y seco durante las primeras 24 horas",
      "Evitar actividades físicas intensas o deportes de contacto por 2 a 3 días",
      "Vigilar la aparición de sangrado persistente, fiebre o dolor intenso en el sitio"
    ],
    priceRange: "Según valoración médica",
    technicalSpecs: {
      "Equipo requerido": "Agujas especializadas de aspiración pediátrica",
      "Procesamiento": "Mielograma y, según el caso, citometría de flujo, estudios genéticos, moleculares, cultivos u otros estudios complementarios"
    },
    image: "/servicios/Aspirado_Medula_Osea.png",
    painDescription: "Se realiza con anestesia local y medidas de analgesia o sedación según la edad y condición del niño para mayor comodidad del paciente. Puede presentarse molestia leve o dolor transitorio en el sitio de punción durante las primeras 24 a 48 horas.",
    risksTitle: "Riesgos",
    risks: [
      "Es un procedimiento seguro cuando se realiza por personal capacitado. Las complicaciones son poco frecuentes, pero pueden incluir dolor local, moretón, sangrado o infección en el sitio de punción"
    ],
    ctaQuestion: "¿A tu hijo le han solicitado un aspirado de médula ósea?",
    ctaAnswer: "Recibe una valoración especializada y orientación completa sobre el procedimiento, su indicación y los cuidados posteriores.",
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
    longDescription: "La biopsia de médula ósea es un procedimiento en el que se obtiene una pequeña muestra sólida de tejido medular, generalmente del hueso de la cadera. Permite evaluar la estructura de la médula ósea, detectar infiltración por enfermedades hematológicas y complementar la información obtenida con el aspirado de médula ósea.",
    type: "ambulatorio",
    isPainful: true,
    anesthesiaType: "Sedación y anestesia local",
    duration: "30 minutos",
    recoveryTime: "24 a 48 horas",
    benefitsTitle: "¿Cuándo se indica?",
    benefits: [
      "Sospecha de leucemia, linfoma u otros cánceres hematológicos.",
      "Pancitopenia o alteraciones persistentes de las células sanguíneas.",
      "Anemia aplásica y otras fallas medulares.",
      "Evaluación de infiltración de médula ósea.",
      "Seguimiento y valoración de respuesta al tratamiento."
    ],
    recommendationsTitle: "Recomendaciones después del procedimiento",
    postOpRecommendations: [
      "Mantener reposo relativo durante las primeras 24 horas.",
      "Mantener limpio y seco el sitio de punción durante las primeras 24 horas.",
      "Administrar el analgésico indicado si existe molestia local.",
      "Evitar actividades físicas intensas durante 24 a 48 horas.",
      "Acudir a valoración si presenta sangrado persistente, fiebre, enrojecimiento importante o dolor intenso en el sitio de punción."
    ],
    priceRange: "Según valoración médica",
    technicalSpecs: {
      "Sitio de punción": "Hueso de la cadera (cresta ilíaca posterior)",
      "Estudios adicionales": "Estudio histopatológico de la muestra de médula ósea para evaluar su estructura y composición celular.",
      "Procesamiento": "La muestra es analizada por Anatomía Patológica mediante estudios histológicos y, cuando está indicado, inmunohistoquímica u otras pruebas complementarias."
    },
    image: "/servicios/Biopsia_Medula_Osea.png",
    painDescription: "Moderado. El procedimiento se realiza con anestesia local y, cuando está indicado, sedación para disminuir las molestias y mejorar la comodidad del paciente.",
    comfortTitle: "Anestesia y comodidad del paciente",
    comfortDescription: "El procedimiento se realiza con anestesia local y, dependiendo de la edad del paciente y la indicación médica, puede utilizarse sedación para brindar mayor comodidad y seguridad durante el estudio",
    risksTitle: "Riesgos",
    risks: [
      "La biopsia de médula ósea es un procedimiento seguro. Las complicaciones son poco frecuentes y pueden incluir dolor local, sangrado, hematoma o infección en el sitio de punción."
    ],
    ctaQuestion: "¿A tu hijo le han encontrado alteraciones en la biometría hemática o existe sospecha de una enfermedad de la sangre o de la médula ósea?",
    ctaAnswer: "La biopsia de médula ósea permite estudiar directamente el tejido donde se producen las células sanguíneas. Es una herramienta fundamental para diagnosticar y dar seguimiento a diversas enfermedades hematológicas en niños y adolescentes.",
    differenceTitle: "¿Cuál es la diferencia con el aspirado?",
    differenceContent: "El aspirado obtiene la parte líquida de la médula ósea, mientras que la biopsia obtiene una pequeña muestra sólida de tejido. Ambos estudios suelen realizarse al mismo tiempo porque proporcionan información complementaria.",
    additionalQuestions: [
      {
        question: "¿Se realiza junto con aspirado de médula ósea?",
        answer: "Frecuentemente sí. Ambos procedimientos aportan información complementaria y suelen realizarse durante la misma intervención para obtener un diagnóstico más completo."
      }
    ],
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
    longDescription: "La lectura de frotis de sangre periférica es un estudio en el que se examinan las células sanguíneas al microscopio. Permite evaluar la forma, tamaño y características de los glóbulos rojos, glóbulos blancos y plaquetas, aportando información clave para el diagnóstico de anemias, infecciones, alteraciones hematológicas y algunos tipos de leucemia.",
    type: "consultorio",
    isPainful: false,
    duration: "Variable según complejidad del caso",
    recoveryTime: "Inmediato",
    benefits: [
      "Identificación de alteraciones en glóbulos rojos, glóbulos blancos y plaquetas.",
      "Orientación diagnóstica en anemias hereditarias o adquiridas.",
      "Detección de blastos u otras células anormales.",
      "Apoyo en la evaluación de infecciones, inflamación y enfermedades hematológicas.",
      "Complemento fundamental para la interpretación de la biometría hemática."
    ],
    postOpRecommendations: [
      "No requiere cuidados especiales después de la toma de muestra.",
      "Puede retomar sus actividades habituales inmediatamente.",
      "Mantener presión local algunos minutos si la muestra fue obtenida por venopunción.",
      "Consultar a su médico si presenta sangrado persistente o inflamación en el sitio de punción."
    ],
    priceRange: "Puede estar incluido dentro de la valoración Hematológica",
    technicalSpecs: {
      "Método": "Análisis morfológico de celulas sanguineas mediante microscopia"
    },
    image: "/servicios/Lectura_Frotis_Sangre_Periferica.png",
    painDescription: "Indoloro (solo requiere una muestra de sangre)",
    ctaQuestion: "¿Tu hijo requiere un frotis de sangre periférica?",
    ctaAnswer: "La interpretación del frotis de sangre periférica por una hematóloga pediatra aporta información que puede no ser identificada por los equipos automatizados de laboratorio y permite una evaluación más completa del paciente",
    additionalQuestions: [
      {
        question: "¿Qué puede detectar este estudio?",
        answer: "Este estudio puede detectar: \n• Anemias.\n• Alteraciones de plaquetas.\n• Infecciones.\n• Leucemias y otras enfermedades hematológicas.\n• Anomalías hereditarias de los glóbulos rojos."
      }
    ],
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
    longDescription: "La punción lumbar es un procedimiento mediante el cual se obtiene una pequeña muestra de líquido cefalorraquídeo (LCR), el líquido que rodea el cerebro y la médula espinal. Permite diagnosticar diversas enfermedades y, en algunos casos, administrar medicamentos directamente en el sistema nervioso central.",
    type: "ambulatorio",
    isPainful: true,
    anesthesiaType: "Sedación y anestesia local",
    duration: "15–30 minutos",
    recoveryTime: "observación breve y alta el mismo día en la mayoría de los casos.",
    benefitsTitle: "Indicaciones frecuentes",
    benefits: [
      "Sospecha de infección del sistema nervioso central.",
      "Estudio de enfermedades hematológicas y oncológicas.",
      "Diagnóstico de infiltración meníngea por leucemia.",
      "Administración de quimioterapia intratecal."
    ],
    recommendationsTitle: "Recomendaciones posteriores",
    postOpRecommendations: [
      "Mantener reposo relativo el día del procedimiento.",
      "Mantener adecuada hidratación.",
      "Administrar el analgésico indicado si existe molestia.",
      "Acudir a valoración si presenta dolor intenso, fiebre, sangrado o síntomas neurológicos."
    ],
    priceRange: "Según valoración médica",
    technicalSpecs: {
      "Sitio de punción": "región lumbar baja.",
      "Muestra": "líquido cefalorraquídeo."
    },
    image: "/servicios/Puncion_Lumbar.png",
    painDescription: "leve a moderado; se utilizan medidas de analgesia y anestesia.",
    ctaQuestion: "¿Tu hijo necesita una punción lumbar para completar su diagnóstico o tratamiento?",
    ctaAnswer: "La punción lumbar es un procedimiento seguro y ampliamente utilizado en pediatría. Permite obtener información importante para el diagnóstico de diversas enfermedades y, en algunos casos, administrar tratamientos específicos de forma segura y eficaz.",
    seo: {
      title: "Punción Lumbar Pediátrica | Hematóloga Pediatra CDMX",
      description: "Procedimiento de punción lumbar y administración de medicamentos intratecales en niños con leucemia o afecciones hematológicas.",
      keywords: ["Punción lumbar en niños CDMX", "Líquido cefalorraquídeo estudio", "Quimioterapia intratecal infantil"],
    }
  },
  {
    id: "ser-005",
    slug: "interpretacion-resultados-laboratorio",
    name: "Análisis e integración clínica de estudios de laboratorio",
    description: "Evaluación y análisis especializado de estudios clínicos y de laboratorio general para identificar indicios de trastornos sanguíneos o inmunológicos en niños.",
    longDescription: "La interpretación de resultados de laboratorio consiste en el análisis especializado e integral de estudios como biometría hemática, perfil de hierro, pruebas de coagulación, frotis de sangre periférica y otros análisis complementarios. La Dra. Lizbeth Hernández correlaciona estos resultados con la historia clínica y la exploración física del paciente para identificar alteraciones hematológicas, orientar el diagnóstico y definir los estudios o tratamientos más adecuados.",
    type: "consultorio",
    isPainful: false,
    duration: "30 a 60 minutos según la complejidad del caso y la cantidad de estudios a revisar",
    recoveryTime: "no aplica",
    benefits: [
      "Identificación temprana de alteraciones hematológicas, inmunológicas o metabólicas reflejadas en los estudios de laboratorio.",
      "Correlación precisa entre síntomas físicos y parámetros medidos en laboratorio",
      "Orientación de estudios complementarios para alcanzar un diagnóstico más preciso."
    ],
    postOpRecommendations: [
      "Traer todos los estudios de laboratorio previos impresos o en formato digital",
      "Anotar cualquier síntoma detectado en casa (fatiga, moretones, sangrado) para correlación clínica",
      "Informar antecedentes médicos, tratamientos actuales y estudios previos relacionados."
    ],
    priceRange: "Según valoración médica",
    technicalSpecs: {
      "Alcance": "Interpretación de biometría hemática, perfil de hierro, pruebas de coagulación, estudios inmunológicos, frotis de sangre periférica, estudios de médula ósea y otras pruebas especializadas relacionadas con enfermedades hematológicas.",
      "Requerimiento": "Presentar estudios de laboratorio impresos o digitales, así como información clínica relevante para una interpretación más precisa"
    },
    image: "/servicios/Interpretacion_Resultados_Laboratorio.png",
    painDescription: "No aplica (servicio de revisión e interpretación de estudios)",
    ctaQuestion: "¿Los resultados de laboratorio de tu hijo te generan dudas o preocupación?",
    ctaAnswer: "La valoración especializada permite comprender el significado de los hallazgos, relacionarlos con los síntomas del paciente y establecer un plan diagnóstico o de seguimiento adecuado.",
    additionalQuestions: [
      {
        question: "¿Por qué es importante una interpretación especializada?",
        answer: "Una interpretación experta puede ayudar a detectar alteraciones hematológicas que no siempre son evidentes en los reportes de laboratorio y orientar oportunamente el diagnóstico y seguimiento."
      }
    ],
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
    longDescription: "La interpretación de biometría hemática consiste en el análisis especializado de los glóbulos rojos, glóbulos blancos y plaquetas. Este estudio permite detectar alteraciones como anemia, infecciones, inflamación, trastornos de coagulación y otras enfermedades hematológicas. Se correlacionan los resultados con la edad, los síntomas y los antecedentes del paciente para ofrecer una valoración más precisa.",
    type: "consultorio",
    isPainful: false,
    durationLabel: "Tiempo de revisión",
    duration: "20 a 30 minutos",
    recoveryTime: "No aplica",
    benefits: [
      "Identificación de anemia y sus posibles causas.",
      "Evaluación de alteraciones en glóbulos blancos relacionadas con infecciones o inflamación.",
      "Detección de alteraciones en el número de plaquetas.",
      "Identificación de datos sugestivos de enfermedades hematológicas.",
      "Seguimiento de pacientes con enfermedades de la sangre."
    ],
    postOpRecommendations: [
      "Presentar la biometría hemática más reciente.",
      "Llevar estudios previos si existen para comparar resultados.",
      "Informar síntomas como palidez, cansancio, fiebre, sangrados o moretones.",
      "No suspender medicamentos sin indicación médica."
    ],
    priceRange: "Según valoración médica",
    technicalSpecs: {
      "Modalidad": "Presencial o en consulta de hematología",
      "Estudio requerido": "Biometría hemática impresa o digital",
      "Evaluación": "Glóbulos rojos, glóbulos blancos y plaquetas",
      "Alcance": "Análisis de hemoglobina, hematocrito, glóbulos rojos, glóbulos blancos, diferencial leucocitario y plaquetas.",
      "Requerimiento": "Biometría hemática reciente impresa o en formato digital, así como información clínica relevante del paciente."
    },
    image: "/servicios/Interpretacion_Biometria_Hematica.png",
    painDescription: "No aplica",
    ctaQuestion: "¿La biometría hemática de tu hijo muestra valores fuera de rango o difíciles de interpretar?",
    ctaAnswer: "La interpretación especializada de la biometría hemática permite identificar alteraciones en los glóbulos rojos, glóbulos blancos y plaquetas, ayudando a establecer un diagnóstico oportuno y definir si son necesarios estudios adicionales o seguimiento por hematología pediátrica.",
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
    longDescription: "La interpretación de estudios genéticos y moleculares consiste en el análisis especializado de pruebas que evalúan genes, cromosomas o alteraciones moleculares relacionadas con enfermedades hematológicas. Estos estudios pueden ayudar a identificar causas hereditarias, confirmar diagnósticos, orientar el pronóstico y apoyar la toma de decisiones terapéuticas. Se correlacionan los resultados con la historia clínica, los antecedentes familiares y los hallazgos de laboratorio para brindar una valoración integral del paciente. Una adecuada interpretación permite comprender el significado clínico de los hallazgos genéticos, evaluar su impacto en la salud del paciente y, cuando es necesario, valorar el riesgo para otros miembros de la familia.",
    type: "consultorio",
    isPainful: false,
    durationLabel: "Tiempo de revisión",
    duration: "30 a 60 minutos",
    recoveryTime: "No aplica",
    benefits: [
      "Interpretación especializada de variantes genéticas y moleculares.",
      "Correlación entre hallazgos genéticos y manifestaciones clínicas.",
      "Identificación de alteraciones hereditarias relacionadas con enfermedades hematológicas.",
      "Orientación sobre estudios complementarios o seguimiento familiar.",
      "Apoyo en decisiones diagnósticas, pronósticas y terapéuticas"
    ],
    postOpRecommendations: [
      "Presentar el informe completo del estudio genético o molecular.",
      "Llevar estudios previos relacionados y antecedentes familiares relevantes.",
      "Informar diagnósticos previos y tratamientos recibidos.",
      "Acudir con dudas específicas para explicar el significado clínico de los hallazgos."
    ],
    priceRange: "Según valoración médica",
    technicalSpecs: {
      "Modalidad": "Presencial o durante consulta de hematología pediátrica",
      "Estudios requeridos": "Reporte genético o molecular impreso o digital",
      "Evaluación especializada": "Correlación de hallazgos genéticos con síntomas, antecedentes familiares y diagnóstico clínico"
    },
    image: "/servicios/Interpretacion_Estudios_Geneticos_Moleculares.png",
    painDescription: "No aplica",
    ctaQuestion: "¿Tu hijo tiene algún estudio genético alterado?",
    ctaAnswer: "Biometría hemática alterada.\nPlaquetas altas o bajas.\nNeutropenia.\nAnemia.\nLeucocitos elevados.\nHallazgos incidentales en laboratorio.\n\nLa Dra. Lizbeth Hernández evalúa alteraciones en estudios de laboratorio, biometrías hemáticas y pruebas especializadas para identificar la causa y orientar el tratamiento más adecuado para cada paciente.",
    seo: {
      title: "Interpretación de Pruebas Genéticas y Moleculares CDMX | Dra. Lizbeth",
      description: "Análisis experto de estudios de cariotipo, FISH y PCR en hematología pediátrica. Dra. Lizbeth Hernández, Hematóloga Pediatra.",
      keywords: ["Estudios genéticos hematología niños", "Prueba de cariotipo CDMX pediatría", "PCR molecular leucemia infantil"]
    }
  }
];
