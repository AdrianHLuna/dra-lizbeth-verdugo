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
    description: "Las petequias son pequeños puntos rojos o morados en la piel que no desaparecen al presionarlos. La púrpura son manchas similares, pero de mayor tamaño. Ambas pueden aparecer cuando hay sangrado debajo de la piel debido a alteraciones de las plaquetas, los vasos sanguíneos o la coagulación",
    causesTitle: "Posibles causas de valoración",
    causes: [
      "Disminución de plaquetas (por ejemplo, trombocitopenia inmune).",
      "Alteraciones de la coagulación.",
      "Infecciones virales o bacterianas.",
      "Inflamación de los vasos sanguíneos (vasculitis).",
      "Enfermedades hematológicas como algunas leucemias.",
      "Reacciones a medicamentos"
    ],
    whyConsult: "Aunque algunas causas son benignas, las petequias o la púrpura también pueden ser una señal de trastornos hematológicos, infecciones graves o problemas de coagulación. Si aparecen de forma repentina, aumentan rápidamente o se acompañan de fiebre, sangrado o moretones frecuentes, requieren valoración médica.",
    manifestacionesTitle: "Síntomas asociados",
    manifestaciones: [
      "Moretones frecuentes o sin golpes importantes.",
      "Sangrado de nariz o encías.",
      "Sangrado prolongado después de heridas pequeñas.",
      "Fiebre.",
      "Palidez o cansancio.",
      "Aparición rápida de nuevas lesiones"
    ],
    preguntaPrincipal: "¿Has notado pequeños puntos rojos o morados que no desaparecen al presionarlos, o manchas violáceas sin causa aparente en la piel de tu hijo?",
    preguntaPrincipalResponse: "Las petequias y la púrpura pueden aparecer por diversas causas. Cuando son persistentes, aumentan en número o se acompañan de sangrado, fiebre o moretones frecuentes, es importante que un hematólogo pediatra valore a tu hijo para identificar la causa y determinar si requiere estudios adicionales.",
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
    causesTitle: "Posibles causas",
    causes: [
      "Fragilidad vascular nasal",
      "Rinitis alérgica",
      "Resequedad o irritación de la mucosa nasal",
      "Hábito de hurgarse la nariz o traumatismos locales",
      "Trombocitopenia (plaquetas bajas)",
      "Enfermedad de Von Willebrand",
      "Hemofilia u otros trastornos de la coagulación",
      "Leucemias agudas (poco frecuentes)"
    ],
    whyConsult: "Aunque muchas veces se relaciona con resequedad nasal, alergias o fragilidad de los vasos sanguíneos, el sangrado nasal frecuente también puede ser una manifestación de trastornos de la coagulación, alteraciones plaquetarias o, en casos poco frecuentes, enfermedades hematológicas. Una valoración médica permite identificar la causa y determinar si requiere estudios adicionales.",
    preguntaPrincipal: "¿Tu hijo presenta sangrados nasales frecuentes o difíciles de detener?",
    preguntaPrincipalResponse: "Los sangrados ocasionales suelen ser benignos, pero cuando son repetitivos, abundantes o se acompañan de moretones, sangrado de encías o antecedentes familiares de problemas de coagulación, es recomendable una valoración especializada para descartar alteraciones hematológicas.",
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
    description: "Sangrado de las encías que aparece de forma espontánea o ante traumatismos mínimos, como el cepillado dental o la alimentación.",
    causesTitle: "Posibles causas de valoración",
    causes: [
      "Gingivitis o inflamación de las encías.",
      "Acumulación de placa dental o sarro.",
      "Cepillado dental traumático o uso inadecuado del hilo dental.",
      "Deficiencias nutricionales (vitamina C o vitamina K).",
      "Trastornos de las plaquetas (como trombocitopenia).",
      "Enfermedad de Von Willebrand u otros trastornos de la coagulación.",
      "Leucemia u otras enfermedades hematológicas.",
      "Algunos medicamentos que favorecen el sangrado"
    ],
    whyConsult: "El sangrado de encías puede deberse a problemas dentales frecuentes, como gingivitis o acumulación de placa. Sin embargo, cuando es recurrente, abundante o se acompaña de otros sangrados o moretones, puede ser una señal de alteraciones de la coagulación, trastornos plaquetarios o enfermedades hematológicas que requieren valoración médica.",
    signosAlarmaTitle: "Signos de alarma:",
    signosAlarma: [
      "Sangrado frecuente o difícil de detener.",
      "Moretones sin causa aparente.",
      "Sangrado nasal recurrente.",
      "Petequias o puntitos rojos en la piel.",
      "Palidez, cansancio o fiebre.",
      "Inflamación importante de las encías o dolor dental."
    ],
    preguntaPrincipal: "¿Tu hijo presenta sangrado frecuente de las encías al cepillarse, comer o de forma espontánea?",
    preguntaPrincipalResponse: "Aunque muchas veces se relaciona con inflamación de las encías, el sangrado recurrente también puede ser un signo de alteraciones de la coagulación o enfermedades hematológicas. Una valoración médica puede ayudar a identificar la causa",
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
    description: "Menstruación abundante (sangrado menstrual abundante) es la presencia de un sangrado menstrual en niñas y adolescentes que interfiere con sus actividades habituales o que puede provocar anemia.",
    causesTitle: "Posibles causas que requieren valoración",
    causes: [
      "Ciclos anovulatorios (muy frecuentes durante los primeros años tras la primera menstruación).",
      "Enfermedad de Von Willebrand u otros trastornos de la coagulación.",
      "Alteraciones de las plaquetas.",
      "Deficiencias de factores de coagulación.",
      "Trombocitopenia.",
      "Síndrome de ovario poliquístico.",
      "Alteraciones tiroideas.",
      "Anemia por deficiencia de hierro secundaria al sangrado"
    ],
    whyConsult: "Porque el sangrado menstrual abundante puede ocasionar anemia, cansancio, mareos, disminución del rendimiento escolar y, en algunos casos, ser la primera manifestación de un trastorno hemorrágico hereditario como la enfermedad de Von Willebrand",
    signosAlarmaTitle: "Signos de alarma para consultar",
    signosAlarma: [
      "Menstruación que dura más de 7 días.",
      "Necesidad de cambiar la toalla sanitaria cada 1–2 horas.",
      "Sangrado que empapa la ropa o las sábanas.",
      "Coágulos grandes y frecuentes.",
      "Palidez, cansancio excesivo, mareos o falta de aire.",
      "Antecedentes familiares de trastornos de la coagulación o sangrados anormales"
    ],
    preguntaPrincipal: "¿Tu hija tiene menstruaciones muy abundantes, prolongadas o presenta cansancio y palidez durante su periodo?",
    preguntaPrincipalResponse: "El sangrado menstrual abundante en niñas y adolescentes puede ser normal en algunos casos, pero también puede indicar una alteración hematológica o causar anemia. Una valoración temprana permite identificar la causa y ofrecer el tratamiento adecuado.",
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
    description: "Fiebre que persiste por más de 7 días sin una causa clara, o infecciones frecuentes, recurrentes o de difícil control. Este síntoma puede indicar problemas en las defensas del organismo o enfermedades de la sangre que requieren valoración médica.",
    causes: [
      "Neutropenia.",
      "Inmunodeficiencias primarias o secundarias.",
      "Leucemias agudas.",
      "Falla medular (anemia aplásica).",
      "Infecciones crónicas o recurrentes que requieren estudio."
    ],
    whyConsult: "La fiebre prolongada o las infecciones repetidas pueden ser una señal de alteraciones en el sistema inmunológico, los glóbulos blancos o la médula ósea. Una evaluación temprana ayuda a identificar la causa y prevenir complicaciones.",
    manifestacionesTitle: "Además de la fiebre, pueden presentarse:",
    manifestaciones: [
      "Infecciones frecuentes de oído, garganta o pulmones.",
      "Infecciones que tardan mucho en mejorar.",
      "Cansancio o falta de energía.",
      "Palidez.",
      "Pérdida de peso involuntaria.",
      "Ganglios inflamados.",
      "Moretones o sangrado fácil"
    ],
    preguntaPrincipal: "¿Tu hijo presenta fiebre durante varios días o infecciones frecuentes que requieren antibióticos repetidamente?",
    signosAlarmaTitle: "Respuesta:",
    signosAlarma: [
      "La mayoría de las infecciones en la infancia son normales, pero cuando son muy frecuentes, severas o difíciles de controlar, es importante realizar una valoración para descartar alteraciones hematológicas o inmunológicas."
    ],
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
    description: "Los ganglios son pequeñas estructuras del sistema inmunológico que ayudan a combatir infecciones. Es común que aumenten de tamaño durante infecciones virales o bacterianas, pero en algunos casos pueden requerir una valoración médica más detallada.",
    causesTitle: "Posibles causas de adenopatias",
    causes: [
      "Infecciones virales o bacterianas (la causa más frecuente)",
      "Mononucleosis infecciosa",
      "Enfermedades autoinmunes",
      "Histiocitosis",
      "Linfomas",
      "Leucemias"
    ],
    whyConsult: "Aunque la mayoría de los ganglios inflamados responden a infecciones comunes, los nódulos que crecen de forma persistente, que no duelen o que son duros deben ser evaluados por un hematólogo pediatra.",
    manifestacionesTitle: "¿Qué otros síntomas pueden acompañarlos?",
    manifestaciones: [
      "Fiebre.",
      "Dolor de garganta o infecciones recientes.",
      "Cansancio excesivo.",
      "Pérdida de peso involuntaria.",
      "Sudoración nocturna.",
      "Moretones o sangrados fáciles"
    ],
    signosAlarmaTitle: "Dato de alarma:",
    signosAlarma: [
      "La mayoría de los ganglios inflamados en niños se deben a infecciones y desaparecen con el tiempo. Sin embargo, los ganglios que aumentan de tamaño, persisten por varias semanas, son duros o se acompañan de fiebre prolongada, pérdida de peso o sudoración nocturna deben ser valorados por un especialista."
    ],
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
    description: "El dolor en huesos o articulaciones es frecuente en la infancia y muchas veces se relaciona con crecimiento, actividad física o infecciones. Sin embargo, cuando es persistente, intenso o se acompaña de otros síntomas, puede requerir una valoración médica especializada.",
    causes: ["Leucemia linfoblástica aguda", "Crisis oclusivas por drepanocitosis", "Infecciones óseas", "Dolores de crecimiento benignos"],
    whyConsult: "Porque el dolor persistente puede afectar la calidad de vida del niño y, en algunos casos, ser un signo de una enfermedad que necesita diagnóstico y tratamiento oportunos. Si el dolor no mejora o se acompaña de otros síntomas, es importante acudir a valoración médica.",
    manifestacionesTitle: "Manifestaciones:",
    manifestaciones: [
      "Dolor en piernas, brazos o espalda.",
      "Dolor que despierta al niño durante la noche.",
      "Cojera o dificultad para caminar.",
      "Dolor que limita las actividades habituales.",
      "Inflamación o aumento de volumen de una articulación.",
      "Dolor persistente por varias semanas.",
      "Dolor acompañado de fiebre.",
      "Dolor asociado a palidez, cansancio, moretones o sangrados"
    ],
    signosAlarmaTitle: "Signos de alarma:",
    signosAlarma: [
      "Dolor que empeora progresivamente.",
      "Dolor nocturno que interrumpe el sueño.",
      "Dolor sin antecedente de golpe o lesión.",
      "Cojera persistente o rechazo a caminar.",
      "Fiebre prolongada.",
      "Pérdida de peso o disminución del apetito.",
      "Ganglios inflamados.",
      "Palidez marcada.",
      "Aparición de moretones o sangrados frecuentes."
    ],
    preguntaPrincipal: "¿Tu hijo presenta dolor óseo o articular persistente?",
    preguntaPrincipalResponse: "Agenda una valoración. Un diagnóstico oportuno permite identificar la causa del dolor y descartar enfermedades hematológicas, inmunológicas u oncológicas cuando sea necesario.",
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
    description: "El crecimiento del hígado o del bazo no es una enfermedad en sí misma, sino un signo de que algo está ocurriendo en el organismo. Puede presentarse por infecciones, enfermedades de la sangre, trastornos metabólicos, enfermedades del hígado u otras condiciones que requieren valoración médica.",
    causesTitle: "Posibles causas que requieren valoración médica",
    causesIntro: "El crecimiento del hígado o del bazo puede tener diversas causas. Algunas son temporales y benignas, mientras que otras requieren estudios y tratamiento especializado para identificar su origen.",
    causes: [
      "Infecciones virales, bacterianas o parasitarias.",
      "Anemias y otras enfermedades de la sangre.",
      "Enfermedades del hígado.",
      "Trastornos del sistema inmunológico.",
      "Enfermedades metabólicas o genéticas poco frecuentes.",
      "Algunas enfermedades oncológicas, como leucemias o linfomas.",
      "Problemas de circulación de la sangre en el hígado o el bazo"
    ],
    whyConsult: "El crecimiento del hígado o del bazo puede ser una señal de enfermedades que requieren diagnóstico y tratamiento oportunos. Si no se identifica la causa, algunas condiciones pueden progresar y afectar la salud del niño.",
    manifestacionesTitle: "Síntomas que pueden acompañarlo",
    manifestaciones: [
      "Abdomen más grande o abultado de lo habitual.",
      "Sensación de llenura rápida al comer.",
      "Dolor o molestia abdominal.",
      "Palidez.",
      "Cansancio excesivo.",
      "Moretones o sangrados fáciles.",
      "Color amarillo en la piel o los ojos.",
      "Fiebre prolongada.",
      "Pérdida de peso o falta de apetito."
    ],
    preguntaPrincipal: "¿Has notado que el abdomen de tu hijo está más abultado o que le han detectado crecimiento del hígado o del bazo?",
    preguntaPrincipalResponse: "Si sospechas que tu hijo tiene crecimiento del hígado o del bazo, es importante una valoración médica para identificar la causa y determinar si requiere estudios o tratamiento especializado.",
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
    causesTitle: "Posibles causas de valoración",
    causes: [
      "Infecciones prolongadas.",
      "Alteraciones hormonales o metabólicas.",
      "Enfermedades inflamatorias o autoinmunes.",
      "Problemas de absorción intestinal.",
      "Trastornos hematológicos.",
      "Otras enfermedades que requieren estudio médico."
    ],
    whyConsult: "Cuando un niño pierde peso sin una explicación clara o presenta sudoración excesiva, especialmente durante la noche, puede ser una señal de que su cuerpo está enfrentando un problema de salud que requiere evaluación médica. Aunque muchas veces las causas son benignas, en algunos casos estos síntomas pueden asociarse con infecciones prolongadas, alteraciones hormonales, enfermedades inflamatorias o trastornos hematológicos. La valoración oportuna permite identificar la causa y ofrecer el tratamiento adecuado.",
    manifestacionesTitle: "Síntomas que pueden acompañarlo",
    manifestaciones: [
      "Pérdida de peso sin cambios en la alimentación.",
      "Sudoración nocturna que moja la ropa o las sábanas.",
      "Fiebre persistente o recurrente.",
      "Cansancio o falta de energía.",
      "Palidez.",
      "Ganglios inflamados.",
      "Disminución del apetito.",
      "Infecciones frecuentes"
    ],
    preguntaPrincipal: "¿Tu hijo ha perdido peso sin explicación o presenta sudoración excesiva, especialmente durante la noche?",
    preguntaPrincipalResponse: "Estos síntomas no siempre indican una enfermedad grave, pero sí justifican una valoración médica, sobre todo si se acompañan de fiebre, cansancio, palidez, ganglios inflamados o disminución del apetito. El especialista podrá determinar si se requieren estudios adicionales.",
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
    description: "La ictericia prolongada es la coloración amarillenta de la piel y los ojos que persiste más tiempo de lo esperado. En recién nacidos de término se considera prolongada cuando dura más de 14 días, y en prematuros más de 21 días. Aunque con frecuencia se relaciona con la lactancia materna, también puede ser un signo de enfermedades del hígado, las vías biliares o algunos trastornos de la sangre",
    causesTitle: "Posibles causas que requieren valoración médica",
    causes: [
      "Ictericia asociada a la leche materna.",
      "Incompatibilidad de grupo sanguíneo (ABO o Rh).",
      "Anemias hemolíticas hereditarias, como la esferocitosis hereditaria.",
      "Deficiencia de G6PD y otros trastornos hereditarios de los glóbulos rojos.",
      "Infecciones.",
      "Enfermedades del hígado o de las vías biliares.",
      "Alteraciones metabólicas o endocrinas, como el hipotiroidismo congénito."
    ],
    whyConsult: "Aunque muchas veces la ictericia prolongada tiene causas benignas, en algunos niños puede ser la primera manifestación de enfermedades del hígado, las vías biliares o trastornos hematológicos que requieren diagnóstico y tratamiento oportunos. Una valoración médica temprana ayuda a identificar la causa y evitar complicaciones",
    manifestacionesTitle: "Síntomas que pueden acompañarlo",
    manifestaciones: [
      "Color amarillo en piel y ojos.",
      "Orina oscura.",
      "Heces muy claras o blancas.",
      "Falta de apetito.",
      "Poca ganancia de peso.",
      "Somnolencia excesiva o irritabilidad.",
      "Crecimiento del hígado o del bazo."
    ],
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
    description: "Palidez intensa al nacimiento o sangrado anormal durante el primer mes de vida, incluyendo sangrado por el cordón umbilical, boca, nariz, tracto digestivo u otros sitios.",
    causesTitle: "Posibles causas",
    causes: [
      "Pérdida de sangre antes, durante o después del nacimiento (hemorragia fetomaterna, complicaciones del parto o sangrados internos).",
      "Incompatibilidad de grupo sanguíneo ABO o Rh, que puede provocar destrucción acelerada de los glóbulos rojos.",
      "Otras anemias hemolíticas hereditarias, como esferocitosis hereditaria o deficiencia de G6PD.",
      "Infecciones congénitas o neonatales, que pueden afectar la producción o supervivencia de los glóbulos rojos.",
      "Trastornos de la coagulación o enfermedad hemorrágica del recién nacido por deficiencia de vitamina K.",
      "Producción insuficiente de glóbulos rojos, especialmente en recién nacidos prematuros (anemia de la prematuridad) o por enfermedades poco frecuentes de la médula ósea."
    ],
    whyConsult: "La anemia neonatal puede disminuir el aporte de oxígeno a los órganos y tejidos. Dependiendo de la causa y la gravedad, puede provocar dificultad para alimentarse, cansancio excesivo, respiración rápida, palidez marcada o, en casos severos, compromiso cardiovascular. Una valoración oportuna permite identificar la causa y brindar el tratamiento adecuado.",
    manifestacionesTitle: "Síntomas",
    manifestaciones: [
      "Palidez de piel o mucosas.",
      "Dificultad para alimentarse.",
      "Sueño excesivo o poca actividad.",
      "Respiración rápida.",
      "Latidos cardíacos rápidos.",
      "Ictericia (piel u ojos amarillos), especialmente cuando existe hemólisis"
    ],
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
    slug: "pancitopenia",
    name: "Pancitopenia",
    description: "La pancitopenia es un hallazgo en los estudios de laboratorio que significa que hay una disminución de los tres tipos principales de células sanguíneas: glóbulos rojos, glóbulos blancos y plaquetas. Esto puede aumentar el riesgo de anemia, infecciones y sangrados, por lo que requiere una valoración médica para identificar la causa.",
    causesTitle: "¿Qué puede provocar?",
    causes: [
      "Anemia aplásica u otros trastornos de la médula ósea.",
      "Leucemia y otras enfermedades hematológicas.",
      "Deficiencia de vitamina B12 o ácido fólico.",
      "Algunas infecciones virales o bacterianas.",
      "Enfermedades autoinmunes.",
      "Efectos de ciertos medicamentos o tratamientos."
    ],
    whyConsult: "Porque puede ser la manifestación de una enfermedad que afecta la producción normal de células sanguíneas. Una evaluación oportuna permite identificar la causa y establecer el tratamiento adecuado antes de que aparezcan complicaciones por anemia, infecciones o sangrados.",
    preguntaPrincipal: "¿En los estudios de laboratorio de tu hijo encontraron disminución de glóbulos rojos, glóbulos blancos y plaquetas?",
    preguntaPrincipalResponse: "La pancitopenia es un hallazgo que requiere valoración especializada. Aunque puede deberse a diferentes causas, algunas necesitan diagnóstico y tratamiento oportunos para evitar complicaciones relacionadas con anemia, infecciones o sangrados.",
    relatedConditions: ["enf-003", "enf-014", "enf-016", "enf-017"],
    image: "/sintomas/Alteraciones_Biometria_Hematica.png",
    seo: {
      title: "Pancitopenia en Niños (Estudios de Sangre) | Dra. Lizbeth",
      description: "¿Los estudios de tu hijo muestran glóbulos rojos, blancos y plaquetas bajas? Conoce qué es la pancitopenia y cuándo consultar a la hematóloga pediatra.",
      keywords: ["Pancitopenia en niños causas", "Glóbulos rojos blancos y plaquetas bajas", "Hematólogo pediatra Roma Norte"],
    }
  }
];
