import { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    id: "sym-001",
    slug: "fatiga-cansancio-excesivo",
    name: "Fatiga o Cansancio Excesivo",
    description: "Falta de energía persistente en el niño, desinterés por el juego y somnolencia inusual, que no mejora con el descanso.",
    causes: ["Anemia ferropénica", "Anemia aplásica", "Anemia hemolítica", "Leucemias agudas"],
    whyConsult: "La fatiga crónica en niños suele ser el primer síntoma de un déficit de glóbulos rojos (anemia) o de fallas más graves en la médula ósea. Es vital una valoración integral.",
    relatedConditions: ["enf-001", "enf-003", "enf-004", "enf-005", "enf-006", "enf-007", "enf-009", "enf-014"],
    image: "/sintomas/Fatiga_o_Cansancio_Excesivo.png",
    seo: {
      title: "Fatiga y Cansancio Excesivo en Niños | Hematóloga Pediatra",
      description: "¿Tu hijo se nota cansado o sin energía para jugar? Podría ser anemia o un problema hematológico. Agenda consulta con la Dra. Lizbeth Hernandez.",
      keywords: ["Cansancio extremo en niños CDMX", "Anemia infantil fatiga", "Hematología pediátrica fatiga"],
    }
  },
  {
    id: "sym-002",
    slug: "palidez-intensa",
    name: "Palidez Intensa o Persistente",
    description: "Pérdida del tono rosado saludable en la piel, labios, encías o palmas de las manos del niño, a menudo acompañada de taquicardia o debilidad.",
    causes: ["Anemia ferropénica", "Anemia hemolítica", "Anemia aplásica", "Leucemias y linfomas"],
    whyConsult: "La palidez refleja una reducción severa de la hemoglobina. Si es de inicio rápido o se acompaña de latidos rápidos del corazón, requiere atención médica inmediata.",
    relatedConditions: ["enf-001", "enf-003", "enf-004", "enf-005", "enf-006", "enf-007", "enf-009", "enf-014"],
    image: "/sintomas/Palidez_Intensa_Persistente.png",
    seo: {
      title: "Palidez Intensa en Niños y Lactantes | Dra. Lizbeth Hernandez",
      description: "¿Notas a tu hijo muy pálido, desganado o con taquicardia? Descubre las causas con una especialista en hematología pediátrica.",
      keywords: ["Palidez en niños causas CDMX", "Tratamiento de anemia infantil", "Hematólogo pediatra Roma Norte"],
    }
  },
  {
    id: "sym-003",
    slug: "moretones-faciles-sangrados",
    name: "Moretones Fáciles y Sangrado Frecuente",
    description: "Aparición de hematomas (moretones) sin traumatismo previo o ante golpes muy leves, así como sangrado frecuente de encías o nariz.",
    causes: ["Trombocitopenia inmune (PTI)", "Hemofilia", "Enfermedad de Von Willebrand", "Alteraciones plaquetarias"],
    whyConsult: "Los sangrados repetitivos y los moretones espontáneos indican un problema en las plaquetas o en los factores de coagulación del niño. Deben evaluarse de inmediato para evitar complicaciones severas.",
    relatedConditions: ["enf-002", "enf-003", "enf-008", "enf-010", "enf-013", "enf-014"],
    image: "/sintomas/Moretones_Faciles_Sangrado_Frecuente.png",
    seo: {
      title: "Moretones y Sangrado de Nariz en Niños | Hematóloga CDMX",
      description: "¿Tu hijo tiene moretones frecuentes sin haberse golpeado o sangrados nasales difíciles de controlar? Agenda cita de valoración.",
      keywords: ["Moretones en niños causas", "Sangrado de encías niños", "Trombocitopenia infantil CDMX"],
    }
  },
  {
    id: "sym-004",
    slug: "ganglios-inflamados-adenopatias",
    name: "Ganglios Inflamados (Adenopatías)",
    description: "Presencia de bultos palpables o visibles en el cuello, axilas o ingle, que pueden ser dolorosos o asintomáticos.",
    causes: ["Infecciones virales o bacterianas", "Linfomas", "Leucemias", "Histiocitosis"],
    whyConsult: "Aunque la mayoría de los ganglios inflamados responden a infecciones comunes, los nódulos que crecen de forma persistente, que no duelen o que son duros deben ser evaluados por un hematólogo pediatra.",
    relatedConditions: ["enf-011", "enf-012", "enf-014"],
    image: "/sintomas/Ganglios_Inflamados.png",
    seo: {
      title: "Ganglios Inflamados en Niños | Dra. Lizbeth Hernandez",
      description: "Valoración especializada de adenopatías o ganglios inflamados persistentes en el cuello, axilas e ingle en la Ciudad de México.",
      keywords: ["Ganglios inflamados niños CDMX", "Adenopatías infantiles causas", "Linfoma infantil síntomas"],
    }
  },
  {
    id: "sym-005",
    slug: "alteraciones-biometria-hematica",
    name: "Alteraciones en la Biometría Hemática",
    description: "Hallazgos anormales en análisis de laboratorio, tales como hemoglobina baja, plaquetas bajas o altas, y leucocitos fuera de rango.",
    causes: ["Pancitopenia", "Neutropenia", "Infecciones", "Leucemias o síndromes de falla medular"],
    whyConsult: "Una biometría hemática alterada es una señal de alerta que requiere una interpretación hematológica experta para identificar el origen exacto del trastorno sanguíneo.",
    relatedConditions: ["enf-001", "enf-002", "enf-003", "enf-004", "enf-007", "enf-008", "enf-009", "enf-010", "enf-013", "enf-014", "enf-015"],
    image: "/sintomas/Alteraciones_Biometria_Hematica.png",
    seo: {
      title: "Plaquetas y Leucocitos Alterados en Niños | Hematología",
      description: "¿El estudio de tu hijo salió con plaquetas bajas, anemia o leucocitos alterados? Interpreta los resultados con un experto.",
      keywords: ["Plaquetas bajas en niños CDMX", "Leucocitos altos pediatría", "Biometría hemática infantil"],
    }
  },
  {
    id: "sym-006",
    slug: "fiebre-prolongada-infecciones",
    name: "Fiebre Prolongada e Infecciones Recurrentes",
    description: "Episodios de fiebre que duran más de una semana sin foco infeccioso claro, o infecciones frecuentes que no responden al tratamiento usual.",
    causes: ["Neutropenia", "Inmunodeficiencias secundarias", "Leucemias agudas", "Falla medular"],
    whyConsult: "La fiebre persistente y las infecciones constantes indican debilidad en el sistema inmune o en la producción de glóbulos blancos. Requieren estudio inmediato.",
    relatedConditions: ["enf-003", "enf-011", "enf-012", "enf-014"],
    image: "/sintomas/Fiebre_Prolongada_Infecciones_Recurrentes.png",
    seo: {
      title: "Fiebre Prolongada e Infecciones en Niños | Dra. Lizbeth",
      description: "¿Tu hijo presenta fiebre de muchos días o se enferma muy seguido? Podría ser neutropenia o un problema hematológico. Consulta experta.",
      keywords: ["Fiebre prolongada en niños CDMX", "Neutropenia infantil", "Infecciones recurrentes pediatría"],
    }
  },
  {
    id: "sym-007",
    slug: "dolor-oseo-articular",
    name: "Dolor Óseo o Articular",
    description: "Molestias persistentes o agudas en los huesos o coyunturas del niño que no se asocian a golpes o ejercicio físico, a menudo más intensas por la noche.",
    causes: ["Leucemia linfoblástica aguda", "Crisis oclusivas por drepanocitosis", "Infecciones óseas", "Dolores de crecimiento benignos"],
    whyConsult: "El dolor de huesos o articulaciones en los niños que interrumpe su sueño o les impide caminar es un síntoma cardinal que exige descartar una infiltración celular en la médula ósea (como leucemia).",
    relatedConditions: ["enf-005", "enf-014", "enf-015"],
    image: "/sintomas/Dolor_Oseo_Articular.png",
    seo: {
      title: "Dolor de Huesos y Articulaciones en Niños | Hematología",
      description: "¿Tu hijo se queja de dolores en huesos o articulaciones sin haberse golpeado? Conoce cuándo consultar al hematólogo pediatra.",
      keywords: ["Dolor de huesos en niños causas", "Dolor articular infantil leucemia", "Dolor óseo pediatría CDMX"],
    }
  },
  {
    id: "sym-008",
    slug: "crecimiento-higado-bazo",
    name: "Crecimiento de Hígado o Bazo",
    description: "Aumento del tamaño del bazo (esplenomegalia) o del hígado (hepatomegalia), que se palpa como bultos o rigidez en el abdomen del niño.",
    causes: ["Anemia hemolítica", "Esferocitosis hereditaria", "Talasemias", "Leucemias y linfomas"],
    whyConsult: "El bazo y el hígado actúan como órganos de filtración y defensa. Su crecimiento excesivo indica una destrucción acelerada de glóbulos rojos o infiltración celular, requiriendo diagnóstico oportuno.",
    relatedConditions: ["enf-004", "enf-006", "enf-007", "enf-011", "enf-014"],
    image: "/sintomas/Crecimiento_Hígado_Bazo.png",
    seo: {
      title: "Bazo o Hígado Crecido en Niños | Esplenomegalia CDMX",
      description: "¿El pediatra detectó que tu hijo tiene el bazo o hígado inflamado? Consulta con la Dra. Lizbeth Hernandez, Hematóloga Pediatra.",
      keywords: ["Esplenomegalia en niños causas", "Bazo inflamado en niños", "Hepatomegalia infantil hematología"],
    }
  },
  {
    id: "sym-009",
    slug: "perdida-peso-sudoracion",
    name: "Pérdida de Peso y Sudoraciones Nocturnas",
    description: "Pérdida involuntaria de peso o estancamiento en el crecimiento del niño, acompañada de sudoración profusa durante el sueño que empapa su ropa.",
    causes: ["Linfoma (Hodgkin y No Hodgkin)", "Leucemia infantil", "Infecciones crónicas (como tuberculosis)"],
    whyConsult: "Estos signos se conocen como 'síntomas B' en medicina. Su presencia indica un estado hipermetabólico severo que requiere valoración inmediata para descartar neoplasias linfoides.",
    relatedConditions: ["enf-011", "enf-014"],
    image: "/sintomas/Perdida_Peso_Sudoraciones_Nocturnas.png",
    seo: {
      title: "Sudoración Nocturna y Pérdida de Peso en Niños | CDMX",
      description: "Valoración de sudoraciones abundantes en la noche y pérdida de peso sin justificación en pacientes pediátricos. Dra. Lizbeth Hernandez.",
      keywords: ["Sudores nocturnos niños causas", "Pérdida de peso infantil cáncer", "Síntomas B hematología pediatría"],
    }
  },
  {
    id: "sym-010",
    slug: "petequias-purpura-sintoma",
    name: "Petequias y Púrpura en la Piel",
    description: "Puntos rojos del tamaño de una cabeza de alfiler (petequias) o manchas moradas (púrpura) que brotan en la piel de forma repentina.",
    causes: ["Trombocitopenia inmune (PTI)", "Deficiencia de factores de coagulación", "Vasculitis", "Leucemias agudas"],
    whyConsult: "Estas lesiones representan hemorragias pequeñas bajo la piel. Si aparecen súbitamente, indican plaquetas bajas o fragilidad vascular grave y deben revisarse de urgencia.",
    relatedConditions: ["enf-002", "enf-008", "enf-010", "enf-013", "enf-014"],
    image: "/sintomas/petequias.png",
    seo: {
      title: "Puntos Rojos y Manchas Moradas en Niños | Hematóloga CDMX",
      description: "¿Tu hijo presenta puntos rojos pequeños o moretones en la piel sin haberse golpeado? Agenda cita de valoración inmediata.",
      keywords: ["Petequias en niños", "Puntos rojos en la piel niños causas", "Plaquetas bajas manchas moradas"],
    }
  },
  {
    id: "sym-011",
    slug: "ictericia-prolongada",
    name: "Ictericia Prolongada",
    description: "Tonalidad amarillenta en la piel y en la esclerótica (parte blanca de los ojos) del recién nacido o lactante que persiste por más de dos semanas.",
    causes: ["Anemia hemolítica neonatal", "Esferocitosis hereditaria", "Incompatibilidad de grupo sanguíneo o Rh", "Problemas de vías biliares"],
    whyConsult: "La ictericia prolongada puede ser señal de una destrucción excesiva de glóbulos rojos (hemólisis) o de problemas en el hígado. Debe ser valorada por el especialista para evitar daño neurológico por bilirrubinas.",
    relatedConditions: ["enf-004", "enf-007", "enf-009"],
    image: "/sintomas/ictericia.png",
    seo: {
      title: "Ojos y Piel Amarilla en Bebés | Ictericia Neonatal CDMX",
      description: "Diagnóstico de ictericia prolongada en recién nacidos y lactantes. Evita complicaciones con la Dra. Lizbeth Hernandez, Hematóloga Pediatra.",
      keywords: ["Ictericia prolongada lactantes", "Bebé amarillo causas hematológicas", "Incompatibilidad Rh recién nacido"],
    }
  },
  {
    id: "sym-012",
    slug: "anemia-sangrado-neonatal",
    name: "Anemia o Sangrado Neonatal",
    description: "Presencia de palidez extrema al nacer o sangrado inusual a través del cordón umbilical, tracto digestivo u otros sitios durante el primer mes de vida.",
    causes: ["Enfermedad hemorrágica del recién nacido", "Anemia por incompatibilidad materno-fetal", "Trombocitopenia neonatal aloinmune"],
    whyConsult: "Los recién nacidos tienen reservas muy limitadas de sangre. La anemia severa o cualquier manifestación de sangrado en el neonato es una urgencia crítica que requiere hematología neonatal especializada.",
    relatedConditions: ["enf-005", "enf-006", "enf-010"],
    image: "/sintomas/sangrado-neonatal.png",
    seo: {
      title: "Sangrado y Anemia en Recién Nacidos | Hematóloga CDMX",
      description: "Diagnóstico y tratamiento de anemias y sangrados en el primer mes de vida del bebé. Consulta de alta especialidad en CDMX.",
      keywords: ["Anemia neonatal causas", "Sangrado en cordón umbilical recién nacido", "Trastornos de coagulación neonatal"],
    }
  },
  {
    id: "sym-013",
    slug: "pancitopenia-laboratorio",
    name: "Pancitopenia en Estudios de Laboratorio",
    description: "Disminución simultánea por debajo de los límites normales de las tres líneas de células sanguíneas: glóbulos rojos, glóbulos blancos y plaquetas.",
    causes: ["Anemia aplásica", "Leucemias agudas", "Síndromes de falla medular", "Infecciones virales severas"],
    whyConsult: "La pancitopenia no es una enfermedad en sí misma, sino un hallazgo de laboratorio de alta alarma que indica que la médula ósea no está funcionando. Requiere un aspirado de médula ósea urgente.",
    relatedConditions: ["enf-003", "enf-014"],
    image: "/sintomas/pancitopenia.png",
    seo: {
      title: "Pancitopenia en Niños (Defensas, Plaquetas y Sangre Bajas)",
      description: "Interpretación experta y diagnóstico de la pancitopenia en niños. Agenda consulta urgente con la Dra. Lizbeth Hernandez.",
      keywords: ["Pancitopenia infantil causas CDMX", "Falla de médula ósea niños", "Estudio de tres líneas celulares bajas"],
    }
  }
];
