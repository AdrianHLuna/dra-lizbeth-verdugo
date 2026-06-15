import { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    id: "sym-002",
    slug: "palidez-intensa",
    name: "Palidez Intensa o Persistente",
    description: "La palidez intensa es una disminución notable del color normal de la piel y las mucosas (labios, encías o interior de los párpados). Puede ser un signo de anemia u otras enfermedades que requieren valoración médica.",
    causes: [
      "Anemia por deficiencia de hierro.",
      "Anemias hemolíticas.",
      "Pérdida de sangre.",
      "Infecciones o enfermedades crónicas.",
      "Trastornos de la médula ósea.",
      "Algunas enfermedades hereditarias de la sangre"
    ],
    whyConsult: "Busca atención médica inmediata si la palidez aparece de forma repentina o se acompaña de dificultad para respirar, desmayo, sangrado importante, somnolencia excesiva o debilidad.",
    manifestaciones: [
      "Piel, labios o encías más pálidos de lo habitual.",
      "Cansancio o falta de energía.",
      "Mareos o dolor de cabeza.",
      "Falta de aire al jugar o hacer ejercicio.",
      "Palpitaciones.",
      "Somnolencia o irritabilidad.",
      "Manos y pies fríos."
    ],
    preguntaPrincipal: "¿Has notado que tu hijo se ve más pálido de lo habitual, especialmente en labios, encías o alrededor de los ojos?",
    relatedConditions: ["enf-001", "enf-003", "enf-004", "enf-005", "enf-006", "enf-007", "enf-009", "enf-014"],
    image: "/sintomas/Palidez_Intensa_Persistente.png",
    seo: {
      title: "Palidez Intensa en Niños y Lactantes | Dra. Lizbeth Hernández",
      description: "¿Notas a tu hijo muy pálido, desganado o con taquicardia? Descubre las causas con una especialista en hematología pediátrica.",
      keywords: ["Palidez en niños causas CDMX", "Tratamiento de anemia infantil", "Hematólogo pediatra Roma Norte"],
    }
  },
  {
    id: "sym-001",
    slug: "fatiga-cansancio-excesivo",
    name: "Fatiga o Cansancio Excesivo",
    description: "Es una sensación de falta de energía o agotamiento que no mejora completamente con el descanso y que puede dificultar las actividades habituales de tu hijo, como jugar, hacer ejercicio, asistir a la escuela o concentrarse",
    causes: ["Anemia ferropénica", "Anemia aplásica", "Anemia hemolítica", "Leucemias agudas"],
    whyConsult: "El cansancio persistente no siempre es normal. Puede relacionarse con anemia, deficiencias nutricionales, infecciones, problemas del sueño, enfermedades endocrinas o trastornos hematológicos. Una valoración médica puede ayudar a identificar la causa y determinar si se requieren estudios adicionales.",
    relatedConditions: ["enf-001", "enf-003", "enf-004", "enf-005", "enf-006", "enf-007", "enf-009", "enf-014"],
    image: "/sintomas/Fatiga_o_Cansancio_Excesivo.png",
    manifestaciones: [
      "Se cansa más rápido que otros niños.",
      "Disminución del rendimiento escolar.",
      "Necesita dormir más de lo habitual.",
      "Falta de energía para jugar o hacer deporte.",
      "Mareos o dolor de cabeza.",
      "Palidez.",
      "Falta de aire al esfuerzo.",
      "Irritabilidad o dificultad para concentrarse.",
      "Taquicardia o sensación de que el corazón late más rápido.",
      "Debilidad generalizada."
    ],
    preguntaPrincipal: "¿Tu hijo se cansa fácilmente o tiene menos energía de lo habitual para jugar, hacer ejercicio o realizar sus actividades diarias?",
    signosAlarma: [
      "Palidez marcada.",
      "Falta de aire.",
      "Mareos frecuentes.",
      "Pérdida de peso.",
      "Fiebre prolongada.",
      "Moretones o sangrado inusual.",
      "Ganglios aumentados de tamaño"
    ],
    seo: {
      title: "Fatiga y Cansancio Excesivo en Niños | Hematóloga Pediatra",
      description: "¿Tu hijo se nota cansado o sin energía para jugar? Podría ser anemia o un problema hematológico. Agenda consulta con la Dra. Lizbeth Hernández.",
      keywords: ["Cansancio extremo en niños CDMX", "Anemia infantil fatiga", "Hematología pediátrica fatiga"],
    }
  },
  {
    id: "sym-003",
    slug: "moretones-faciles-sangrados",
    name: "Moretones Fáciles y Sangrado Frecuente",
    description: "Aparición de moretones frecuentes o excesivos ante golpes leves, así como sangrados repetitivos de nariz, encías o después de pequeñas heridas.",
    causes: [
      "Trombocitopenia inmune (PTI)",
      "Hemofilia",
      "Enfermedad de Von Willebrand",
      "Alteraciones plaquetarias",
      "Algunos medicamentos",
      "Deficiencias nutricionales",
      "Otras alteraciones de la coagulación"
    ],
    whyConsult: "Los moretones frecuentes o los sangrados repetitivos pueden ser una señal de alteraciones en las plaquetas, la coagulación o, en algunos casos, otras enfermedades. Una valoración médica oportuna permite identificar la causa y ofrecer el tratamiento adecuado.",
    manifestaciones: [
      "Moretones frecuentes o muy grandes",
      "Aparición de moretones sin golpes importantes",
      "Sangrado nasal frecuente",
      "Sangrado de encías al cepillarse los dientes",
      "Puntitos rojos en la piel (petequias)",
      "Sangrado prolongado despues de una herida o procedimiento dentale",
      "Menstruaciones muy abundantes en adolescentes",
      "Antecedentes familiares de problemas de sangrado"
    ],
    preguntaPrincipal: "¿Cuándo buscar atención médica?",
    signosAlarmaTitle: "Síntoma de alarma hematológico:",
    signosAlarma: [
      "Moretones grandes sin golpes importantes",
      "Sangrado nasal frecuente o difícil de detener",
      "Sangrado de encías sin causa aparente",
      "Aparición de petequias",
      "Sangre en orina o heces oscuras",
      "Moretones y/o petequias acompañados de palidez, cansancio o fiebre"
    ],
    relatedConditions: ["enf-002", "enf-003", "enf-008", "enf-010", "enf-013", "enf-014"],
    image: "/sintomas/Moretones_Faciles_Sangrado_Frecuente.png",
    seo: {
      title: "Moretones y Sangrado de Nariz en Niños | Hematóloga CDMX",
      description: "¿Tu hijo tiene moretones frecuentes sin haberse golpeado o sangrados nasales difíciles de controlar? Agenda cita de valoración.",
      keywords: ["Moretones en niños causas", "Sangrado de encías niños", "Trombocitopenia infantil CDMX"],
    }
  },
  {
    id: "sym-010",
    slug: "petequias-purpura-sintoma",
    name: "Petequias y Púrpura",
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
    id: "sym-014",
    slug: "epistaxis-repeticion",
    name: "Epistaxis de Repetición",
    description: "Episodios frecuentes y recurrentes de sangrado por la nariz en niños y adolescentes, que pueden presentarse de forma espontánea o ante mínimos estímulos.",
    causes: ["Fragilidad vascular nasal", "Trombocitopenia (plaquetas bajas)", "Enfermedad de Von Willebrand", "Hemofilia", "Leucemias agudas"],
    whyConsult: "El sangrado nasal frecuente puede ser señal de una alteración en la coagulación o de plaquetas bajas en la sangre. Es crucial una evaluación hematológica experta para identificar la causa subyacente y prevenir complicaciones.",
    relatedConditions: ["enf-002", "enf-003", "enf-008", "enf-010", "enf-014"],
    image: "/sintomas/epistaxis_repeticion.png",
    seo: {
      title: "Epistaxis de Repetición en Niños (Sangrado Nasal) | CDMX",
      description: "¿Tu hijo presenta sangrado de nariz de forma frecuente? Conoce las causas y cuándo consultar a la Dra. Lizbeth Hernández, Hematóloga Pediatra.",
      keywords: ["Epistaxis de repetición en niños", "Sangrado nasal frecuente niños CDMX", "Hematólogo pediatra sangrado nariz"],
    }
  },
  {
    id: "sym-015",
    slug: "sangrado-encias",
    name: "Sangrado en Encías",
    description: "Pérdida de sangre en las encías del niño de forma espontánea, durante el cepillado dental o al comer alimentos blandos, a menudo sin inflamación previa.",
    causes: ["Trombocitopenia inmune (PTI)", "Deficiencia de factores de coagulación (Hemofilia)", "Enfermedad de Von Willebrand", "Leucemias agudas o aplasia medular"],
    whyConsult: "El sangrado gingival espontáneo es un signo común de recuento bajo de plaquetas (trombocitopenia) o de fallas en la cascada de coagulación. Requiere una revisión clínica detallada para descartar trastornos hematológicos graves.",
    relatedConditions: ["enf-002", "enf-003", "enf-008", "enf-010", "enf-014"],
    image: "/sintomas/sangrado_encias.png",
    seo: {
      title: "Sangrado de Encías en Niños y Lactantes | Dra. Lizbeth",
      description: "El sangrado de encías en niños puede indicar alteraciones plaquetarias o problemas de coagulación. Consulta a una experta en hematología pediátrica.",
      keywords: ["Sangrado de encías en niños causas", "Gingivorragia infantil CDMX", "Trastornos plaquetarios niños encías"],
    }
  },
  {
    id: "sym-016",
    slug: "menstruacion-abundante-ninas",
    name: "Menstruación Abundante",
    description: "Flujo menstrual excesivamente abundante o prolongado (menorragia) en niñas y adolescentes que inician sus periodos menstruales, a menudo requiriendo cambiar toallas sanitarias con gran frecuencia.",
    causes: ["Enfermedad de Von Willebrand", "Disfunción plaquetaria", "Trombocitopenia inmune (PTI)", "Alteraciones hormonales de la adolescencia"],
    whyConsult: "Hasta un veinte por ciento de las adolescentes con sangrado menstrual abundante presentan un trastorno hemorrágico subyacente, como la enfermedad de Von Willebrand. La evaluación a tiempo evita anemia severa y mejora su calidad de vida.",
    relatedConditions: ["enf-002", "enf-010"],
    image: "/sintomas/menstruacion_abundante.png",
    seo: {
      title: "Menstruación Abundante en Niñas (Menorragia) | CDMX",
      description: "¿Tu hija tiene periodos menstruales muy abundantes? Podría tratarse de un trastorno hemorrágico. Agenda valoración con la Dra. Lizbeth Hernández.",
      keywords: ["Menstruación abundante en adolescentes", "Enfermedad de Von Willebrand menorragia", "Hematóloga pediatra menstruación CDMX"],
    }
  },
  {
    id: "sym-006",
    slug: "fiebre-prolongada-infecciones",
    name: "Fiebre Prolongada e Infecciones Recurrentes",
    description: "Episodios de fiebre que duran más de una semana sin foco infeccioso claro, o infecciones frecuentes que no responden al tratamiento usual.",
    causes: ["Neutropenia", "Inmunodeficiencias secundarias", "Leucemias agudas", "Falla medular"],
    whyConsult: "La fiebre persistente y las infecciones constantes indican debilidad en el sistema inmune o en la producción de glóbulos blancos. Requieren estudio inmediato.",
    relatedConditions: ["enf-003", "enf-011", "enf-012", "enf-014", "enf-017"],
    image: "/sintomas/Fiebre_Prolongada_Infecciones_Recurrentes.png",
    seo: {
      title: "Fiebre Prolongada e Infecciones en Niños | Dra. Lizbeth",
      description: "¿Tu hijo presenta fiebre de muchos días o se enferma muy seguido? Podría ser neutropenia o un problema hematológico. Consulta experta.",
      keywords: ["Fiebre prolongada en niños CDMX", "Neutropenia infantil", "Infecciones recurrentes pediatría"],
    }
  },
  {
    id: "sym-004",
    slug: "ganglios-inflamados-adenopatias",
    name: "Ganglios Inflamados",
    description: "Presencia de bultos palpables o visibles en el cuello, axilas o ingle, que pueden ser dolorosos o asintomáticos.",
    causes: ["Infecciones virales o bacterianas", "Linfomas", "Leucemias", "Histiocitosis"],
    whyConsult: "Aunque la mayoría de los ganglios inflamados responden a infecciones comunes, los nódulos que crecen de forma persistente, que no duelen o que son duros deben ser evaluados por un hematólogo pediatra.",
    relatedConditions: ["enf-011", "enf-012", "enf-014"],
    image: "/sintomas/Ganglios_Inflamados.png",
    seo: {
      title: "Ganglios Inflamados en Niños | Dra. Lizbeth Hernández",
      description: "Valoración especializada de adenopatías o ganglios inflamados persistentes en el cuello, axilas e ingle en la Ciudad de México.",
      keywords: ["Ganglios inflamados niños CDMX", "Adenopatías infantiles causas", "Linfoma infantil síntomas"],
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
      description: "¿El pediatra detectó que tu hijo tiene el bazo o hígado inflamado? Consulta con la Dra. Lizbeth Hernández, Hematóloga Pediatra.",
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
      description: "Valoración de sudoraciones abundantes en la noche y pérdida de peso sin justificación en pacientes pediátricos. Dra. Lizbeth Hernández.",
      keywords: ["Sudores nocturnos niños causas", "Pérdida de peso infantil cáncer", "Síntomas B hematología pediatría"],
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
      description: "Diagnóstico de ictericia prolongada en recién nacidos y lactantes. Evita complicaciones con la Dra. Lizbeth Hernández, Hematóloga Pediatra.",
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
    slug: "alteraciones-biometria-hematica",
    name: "Alteraciones Importantes en la Biometría Hemática",
    description: "Hallazgos anormales en los estudios de biometría hemática completa (como anemia, plaquetas bajas o glóbulos blancos alterados) que indican un desequilibrio en la sangre y requieren valoración por un hematólogo pediatra.",
    causes: ["Anemia aplásica o ferropénica", "Trombocitopenia (plaquetas bajas)", "Neutropenia o leucocitosis (defensas alteradas)", "Leucemias agudas"],
    whyConsult: "Cualquier alteración persistente o significativa en las células sanguíneas debe ser evaluada para identificar a tiempo la causa subyacente y prevenir complicaciones mayores.",
    relatedConditions: ["enf-003", "enf-014", "enf-016", "enf-017"],
    image: "/sintomas/Alteraciones_Biometria_Hematica.png",
    seo: {
      title: "Alteraciones en la Biometría Hemática en Niños | CDMX",
      description: "Interpretación y diagnóstico de biometrías hemáticas alteradas (anemia, plaquetas o leucocitos) en niños. Dra. Lizbeth Hernández.",
      keywords: ["Biometría hemática alterada niños", "Estudio de sangre alterado niños", "Hematólogo pediatra Roma Norte"],
    }
  }
];
