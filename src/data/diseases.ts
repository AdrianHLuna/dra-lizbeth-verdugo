import { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "enf-001",
    slug: "anemia-ferropenica",
    name: "Anemia Ferropénica",
    description: "La anemia ferropénica es el tipo más frecuente de anemia en la infancia y ocurre cuando el organismo no cuenta con suficiente hierro para producir hemoglobina, la proteína encargada de transportar oxígeno en la sangre. Esto puede ocasionar cansancio, palidez y afectar el crecimiento, el aprendizaje y el desarrollo del niño.",
    symptoms: [
      "Fatiga y cansancio excesivo",
      "Palidez en piel y encías",
      "Irritabilidad",
      "Falta de apetito",
      "Uñas quebradizas",
      "Mareo o dolor de cabeza",
      "Disminución del rendimiento escolar o dificultad para concentrarse",
      "Taquicardia o palpitaciones",
      "Antojos inusuales (comer hielo, tierra o almidón)",
      "Retraso del crecimiento o del desarrollo en casos prolongados"
    ],
    causes: [
      "Dieta insuficiente en hierro.",
      "Consumo excesivo de leche de vaca.",
      "Aumento de requerimientos durante el crecimiento.",
      "Pérdidas sanguíneas (menstruaciones abundantes o sangrado gastrointestinal).",
      "Trastornos de absorción intestinal (celiaquía, enfermedad inflamatoria intestinal,parásitosis)."
    ],
    riskFactors: ["Nacimiento prematuro o bajo peso al nacer", "Introducción tardía de alimentos sólidos", "Consumo excesivo de leche de vaca en infantes"],
    complications: ["Retraso en el desarrollo psicomotor", "Problemas de aprendizaje y concentración", "Debilidad del sistema inmunitario con propensión a infecciones"],
    treatments: [
      "Tratamiento con hierro oral bajo supervisión médica",
      "Ajustes en la alimentación para favorecer una adecuada ingesta de hierro y vitamina C",
      "Identificación y tratamiento de la causa que originó la deficiencia de hierro",
      "Seguimiento mediante estudios de laboratorio para evaluar la respuesta al tratamiento y la recuperación de los depósitos de hierro",
      "Hierro intravenoso en casos seleccionados cuando el hierro oral no es suficiente o no puede administrarse"
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo dura el tratamiento con hierro?",
        answer: "Generalmente dura entre 3 y 6 meses, aunque puede variar según la gravedad de la anemia y la respuesta al tratamiento. Es importante continuar el hierro incluso después de que la hemoglobina se normalice para reponer las reservas de hierro del organismo."
      },
      {
        question: "¿La leche de vaca puede causar anemia?",
        answer: "Sí. El consumo excesivo de leche de vaca puede favorecer la anemia ferropénica, especialmente en niños pequeños. Además de disminuir la absorción de hierro, puede desplazar otros alimentos ricos en hierro de la dieta."
      },
      {
        question: "¿Cómo se diagnostica la anemia ferropénica?",
        answer: "El diagnóstico se realiza mediante una valoración médica y estudios de laboratorio, que incluyen biometría hemática, perfil de hierro y ferritina sérica. En algunos casos pueden requerirse estudios adicionales para identificar la causa de la deficiencia de hierro."
      },
      {
        question: "¿Qué alimentos ayudan a aumentar el hierro?",
        answer: "Los alimentos ricos en hierro incluyen carnes rojas, pollo, pescado, lentejas, frijoles, garbanzos y cereales fortificados. Consumirlos junto con alimentos ricos en vitamina C ayuda a mejorar la absorción del hierro."
      },
      {
        question: "¿La anemia ferropénica puede afectar el aprendizaje o el desarrollo?",
        answer: "Sí. Cuando la deficiencia de hierro es prolongada, puede afectar la atención, el aprendizaje, el desarrollo cognitivo y el comportamiento. Por ello es importante detectarla y tratarla oportunamente."
      }
    ],
    image: "/enfermedades/anemia_ferropenica.png",
    relatedServices: ["ser-003", "ser-006"],
    relatedSymptoms: ["sym-001", "sym-002"],
    whenToConsult: [
      "Si la anemia es severa.",
      "Si no mejora con el tratamiento indicado.",
      "Si existen antecedentes familiares de enfermedades hematológicas.",
      "Si se acompaña de ictericia, moretones o sangrados.",
      "Si hay alteraciones adicionales en la biometría hemática.",
      "Si la causa de la anemia no es clara"
    ],
    seo: {
      title: "Anemia Ferropénica en Niños | Hematóloga Pediatra CDMX",
      description: "Diagnóstico y tratamiento de la anemia ferropénica por falta de hierro en bebés y niños. Consulta con la Dra. Lizbeth Hernández.",
      keywords: ["Anemia ferropénica infantil CDMX", "Falta de hierro en niños", "Tratamiento de anemia en lactantes"],
    },
    category: "anemias-globulos-rojos",
  },
  {
    id: "enf-002",
    slug: "trombocitopenia-inmune-pti",
    name: "Trombocitopenia Inmune",
    technicalName: "Púrpura Trombocitopénica Inmune",
    description: "La trombocitopenia inmune primaria (PTI) es una enfermedad autoinmune en la que el sistema inmunológico destruye las plaquetas y disminuye su producción, lo que provoca un aumento del riesgo de sangrado. Es una de las causas más frecuentes de trombocitopenia adquirida en la infancia y, en muchos niños, se resuelve espontáneamente.",
    symptoms: [
      "Aparición de moretones fáciles sin causa",
      "Petequias que son pequeños puntos rojos en la piel",
      "Epistaxis de repetición",
      "Sangrado en encías",
      "Sangrado prolongado después de golpes o heridas menores.",
      "Sangrado menstrual abundante",
      "Ampollas con sangre en la boca (ampollas hemorrágicas o sangrado de mucosas)."
    ],
    causes: [
      "Producción de autoanticuerpos que destruyen las plaquetas.",
      "Disminución de la producción de plaquetas en la médula ósea.",
      "En muchos niños aparece después de una infección viral y no se identifica otra enfermedad que la explique."
    ],
    riskFactors: [
      "Edad entre 2 y 10 años.",
      "Infección viral reciente.",
      "Vacunación reciente (muy poco frecuente)."
    ],
    complications: ["Hemorragias graves espontáneas en órganos internos (poco frecuentes pero de alto riesgo)", "Ansiedad familiar por riesgo de sangrado"],
    treatments: [
      "Vigilancia clínica en pacientes con sangrado leve.",
      "Inmunoglobulina intravenosa (IVIG).",
      "Corticoesteroides.",
      "Agonistas del receptor de trombopoyetina (eltrombopag o romiplostim) en PTI persistente o crónica seleccionada."
    ],
    faqs: [
      { question: "¿El niño puede realizar actividades físicas normales?", answer: "La mayoría de los niños puede realizar actividades cotidianas. Sin embargo, cuando las plaquetas están muy bajas, se recomienda evitar deportes de contacto o actividades con alto riesgo de golpes hasta que el hematólogo indique que es seguro retomarlas." },
      { question: "¿Esta enfermedad se vuelve crónica?", answer: "La mayoría de los niños se recupera completamente en los primeros 6 a 12 meses. Aproximadamente entre 20 y 30% pueden desarrollar PTI persistente o crónica." },
      { question: "¿Requiere transfusión de plaquetas?", answer: "Generalmente no. Las transfusiones de plaquetas suelen reservarse para casos de sangrado grave o situaciones especiales, ya que las plaquetas transfundidas pueden ser destruidas rápidamente por el sistema inmunitario." },
      { question: "¿Cuánto tarda en resolverse con tratamiento?", answer: "La respuesta al tratamiento es variable. Algunos niños presentan aumento de plaquetas en los primeros 7 días, mientras que otros pueden tardar varias semanas. El objetivo principal del tratamiento es disminuir el riesgo de sangrado y permitir una vida segura mientras ocurre la recuperación." },
      { question: "¿Todos los niños con PTI necesitan tratamiento?", answer: "No. En muchos niños con PTI y sangrado leve, la observación cuidadosa puede ser la mejor opción. El tratamiento se individualiza según los síntomas, el riesgo de sangrado y el impacto en la calidad de vida" },
      { question: "¿Las plaquetas bajas siempre significan una enfermedad grave?", answer: "No. Aunque las plaquetas bajas requieren valoración médica, la PTI suele ser una enfermedad benigna en la mayoría de los niños. Muchos pacientes presentan únicamente petequias, moretones o sangrados leves y pueden recuperarse completamente." },
      { question: "¿Cómo se diagnostica la PTI?", answer: "El diagnóstico se basa en la historia clínica, la exploración física y una biometría hemática que muestra plaquetas bajas con el resto de las células sanguíneas normales. En algunos casos pueden requerirse estudios adicionales para descartar otras causas de trombocitopenia." }
    ],
    image: "/enfermedades/Trombocitopenia_Inmune.png",
    relatedServices: ["ser-001", "ser-003", "ser-006"],
    relatedSymptoms: ["sym-003", "sym-010", "sym-014", "sym-015", "sym-016"],
    ctaQuestion: "¿Tu hijo presenta moretones frecuentes, petequias o le han informado que tiene las plaquetas bajas?",
    ctaAnswer: "Si tu hijo presenta moretones sin causa aparente, petequias o sangrados frecuentes, una valoración temprana por Hematología Pediátrica permite confirmar el diagnóstico, descartar otras enfermedades e indicar el tratamiento más adecuado cuando sea necesario.",
    seo: {
      title: "Trombocitopenia Inmune en Niños | Púrpura Infantil CDMX",
      description: "Información y tratamiento especializado para la Púrpura Trombocitopénica Inmune (PTI) en niños con la Dra. Lizbeth Hernández.",
      keywords: ["Trombocitopenia inmune niños", "Plaquetas bajas en niños causas", "Púrpura infantil tratamiento CDMX"],
    },
    category: "coagulacion-hemostasia",
  },
  {
    id: "enf-003",
    slug: "anemia-aplasica",
    name: "Anemia Aplásica",
    description: "La anemia aplásica es una enfermedad poco frecuente en la que la médula ósea deja de producir suficientes células sanguíneas: glóbulos rojos, glóbulos blancos y plaquetas. Esto provoca anemia, infecciones frecuentes y tendencia al sangrado.",
    symptoms: [
      "Cansancio excesivo o debilidad",
      "Palidez",
      "Falta de aire al esfuerzo",
      "Infecciones frecuentes o difíciles de controlar",
      "Fiebre",
      "Aparición fácil de moretones",
      "Sangrado de nariz o encías",
      "Petequias (puntitos rojos o morados en la piel)"
    ],
    causes: [
      "En la mayoría de los niños no se identifica una causa específica (anemia aplásica adquirida idiopática)",
      "Alteraciones del sistema inmunológico que atacan la médula ósea",
      "Algunas infecciones virales",
      "Exposición a ciertos medicamentos o sustancias químicas",
      "Enfermedades hereditarias de falla medular, como la anemia de Fanconi"
    ],
    riskFactors: [
      "Antecedentes familiares de enfermedades hereditarias de la médula ósea",
      "Haber recibido quimioterapia o radioterapia",
      "Exposición a sustancias químicas como benceno o pesticidas",
      "Antecedentes de exposición a medicamentos con riesgo de toxicidad medular"
    ],
    complications: ["Hemorragias graves", "Infecciones severas generalizadas (septicemia)", "Insuficiencia cardíaca por anemia crónica"],
    treatments: [
      "Transfusiones de glóbulos rojos o plaquetas cuando son necesarias",
      "Medicamentos inmunosupresores para disminuir el ataque del sistema inmune a la médula ósea",
      "Medicamentos estimulantes de la médula ósea en casos seleccionados",
      "Antibióticos cuando existen infecciones",
      "Trasplante de médula ósea o de células madre hematopoyéticas, que puede ser el tratamiento curativo en muchos niños"
    ],
    faqs: [
      { question: "¿Es lo mismo que leucemia?", answer: "No. La leucemia es un cáncer de la sangre en el que se producen células anormales de manera descontrolada. En la anemia aplásica, la médula ósea deja de producir suficientes glóbulos rojos, glóbulos blancos y plaquetas." },
      { question: "¿Cómo se diagnostica la anemia aplásica?", answer: "El diagnóstico se realiza mediante biometría hemática completa, recuento de reticulocitos, aspirado y biopsia de médula ósea, además de estudios especializados para investigar la causa." },
      { question: "¿Se puede curar con trasplante de médula ósea?", answer: "Sí. El trasplante de células madre hematopoyéticas (trasplante de médula ósea) puede curar la enfermedad en muchos pacientes, especialmente cuando existe un donante compatible." },
      { question: "¿La anemia aplásica es cáncer?", answer: "No. La anemia aplásica no es un cáncer. Es una enfermedad en la que la médula ósea produce muy pocas células sanguíneas. Sin embargo, requiere atención especializada porque puede ser grave." },
      { question: "¿La anemia aplásica es hereditaria?", answer: "En la mayoría de los casos no es hereditaria. Sin embargo, existen algunas enfermedades genéticas poco frecuentes, como la anemia de Fanconi, que pueden causar anemia aplásica y requieren estudios especializados." },
      { question: "¿Cuánto dura el tratamiento inmunosupresor?", answer: "La respuesta al tratamiento inmunosupresor suele observarse después de varios meses. El seguimiento médico es prolongado y puede continuar durante varios años para vigilar recaídas o complicaciones." }
    ],
    image: "/enfermedades/Anemia_Aplasica.png",
    relatedServices: ["ser-001", "ser-002", "ser-006", "ser-007"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-003", "sym-006", "sym-013", "sym-014", "sym-015"],
    diseasesToRuleOut: [
      "Anemia de Fanconi.",
      "Disqueratosis congénita.",
      "Síndrome de Shwachman-Diamond.",
      "Leucemia aguda.",
      "Síndromes mielodisplásicos.",
      "Hemoglobinuria paroxística nocturna"
    ],
    ctaQuestion: "¿Tu hijo presenta anemia persistente, infecciones frecuentes o sangrados inexplicables?",
    ctaAnswer: "La anemia aplásica requiere una evaluación especializada para identificar la causa e iniciar el tratamiento oportunamente. Un diagnóstico temprano puede mejorar el pronóstico y prevenir complicaciones.",
    seo: {
      title: "Anemia Aplásica Infantil | Falla Medular CDMX",
      description: "Diagnóstico y alternativas de tratamiento para la anemia aplásica en niños con la Dra. Lizbeth Hernández, Hematóloga Pediatra.",
      keywords: ["Anemia aplásica en niños CDMX", "Falla de médula ósea infantil", "Hematólogo pediatra experto"],
    },
    category: "anemias-globulos-rojos",
  },
  {
    id: "enf-004",
    slug: "anemia-hemolitica",
    name: "Anemia Hemolítica",
    description: "La anemia hemolítica ocurre cuando los glóbulos rojos se destruyen más rápido de lo que la médula ósea puede producirlos. Esto provoca que disminuya la cantidad de glóbulos rojos en la sangre y aparezcan síntomas como palidez, cansancio e ictericia (color amarillo en piel y ojos). Existen diferentes tipos de anemia hemolítica y el tratamiento depende de la causa específica.",
    symptoms: [
      "Palidez",
      "Cansancio o debilidad",
      "Color amarillo en piel y ojos (ictericia)",
      "Orina oscura",
      "Latidos rápidos del corazón",
      "Dificultad para realizar actividades físicas",
      "Crecimiento del bazo (esplenomegalia)"
    ],
    causes: [
      "Causas hereditarias: Esferocitosis hereditaria, Drepanocitosis (anemia falciforme), Talasemias, Deficiencia de glucosa-6-fosfato deshidrogenasa (G6PD) y Deficiencia de piruvato quinasa",
      "Causas adquiridas: Anemia hemolítica autoinmune, Infecciones, Algunos medicamentos, Reacciones transfusionales y Enfermedades autoinmunes"
    ],
    riskFactors: ["Antecedentes familiares de anemias hereditarias", "Enfermedades autoinmunes", "Infecciones virales recientes"],
    complications: ["Cálculos biliares a temprana edad", "Crisis aplásicas por infecciones virales", "Anemia grave que requiere transfusiones de urgencia"],
    treatments: [
      "Observación y vigilancia médica según la causa",
      "Suplementos de ácido fólico",
      "Medicamentos para controlar el sistema inmunológico",
      "Transfusiones sanguíneas",
      "Cirugía para retirar el bazo (en algunos casos seleccionados)"
    ],
    faqs: [
      { question: "¿Por qué se ponen amarillos los ojos del niño?", answer: "Cuando los glóbulos rojos se destruyen más rápido de lo normal, aumenta la cantidad de bilirrubina en la sangre. Esto puede hacer que los ojos and la piel se vean amarillos, una condición llamada ictericia." },
      { question: "¿Es una enfermedad hereditaria?", answer: "Algunas formas de anemia hemolítica son hereditarias y se transmiten de padres a hijos. Otras son adquiridas y pueden aparecer por enfermedades autoinmunes, infecciones o algunos medicamentos." },
      { question: "¿Cómo se realiza el diagnóstico?", answer: "El diagnóstico se realiza mediante estudios de sangre que permiten identificar la causa de la destrucción de los glóbulos rojos. Estos incluyen biometría hemática, recuento de reticulocitos, bilirrubinas, deshidrogenasa láctica (DHL), haptoglobina, frotis de sangre periférica y, en algunos casos, la prueba de Coombs. Dependiendo de la sospecha clínica, pueden requerirse estudios especializados adicionales." },
      { question: "¿La anemia hemolítica puede requerir transfusiones?", answer: "En algunos casos sí. Cuando la anemia es grave o provoca síntomas importantes, puede ser necesaria una transfusión de glóbulos rojos. La decisión depende de la causa, la gravedad y el estado clínico del paciente" },
      { question: "¿La anemia hemolítica siempre es grave?", answer: "No necesariamente. Algunas formas son leves y solo requieren vigilancia periódica, mientras que otras pueden provocar anemia importante y requerir tratamiento especializado. El pronóstico depende de la causa y de la rapidez con que se establezca el diagnóstico." }
    ],
    image: "/enfermedades/Anemia_Hemolitica.png",
    relatedServices: ["ser-003", "ser-006"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-008", "sym-011"],
    seo: {
      title: "Anemia Hemolítica en Niños | Hematóloga Pediatra CDMX",
      description: "Diagnóstico especializado y tratamiento de la anemia hemolítica e ictericia en niños y bebés. Dra. Lizbeth Hernández.",
      keywords: ["Anemia hemolítica infantil", "Niño con ojos amarillos causas", "Destrucción de glóbulos rojos niños"],
    },
    category: "anemias-globulos-rojos",
  },
  {
    id: "enf-005",
    slug: "drepanocitosis",
    name: "Drepanocitosis (Anemia de Células Falciformes)",
    technicalName: "Anemia Falciforme",
    description: "La drepanocitosis es un trastorno hereditario causado por una alteración en el gen de la β-globina (HBB), responsable de la producción de hemoglobina. Esta alteración produce hemoglobina S (HbS), una forma anormal de hemoglobina que puede hacer que los glóbulos rojos adopten una forma similar a una hoz o media luna, afectando su función y supervivencia.",
    symptoms: [
      "Anemia crónica",
      "Palidez",
      "Ictericia (color amarillo en ojos o piel)",
      "Fatiga",
      "Crisis de dolor",
      "Hinchazón de manos y pies en lactantes",
      "Infecciones frecuentes",
      "Retraso en el crecimiento",
      "Crecimiento del bazo"
    ],
    causes: ["Mutación puntual del gen de la β-globina (HBB) que produce hemoglobina S (HbS). Esta mutación sustituye el ácido glutámico por valina en la posición 6 de la cadena β-globina y se hereda de ambos padres"],
    riskFactors: [
      "Antecedentes familiares de rasgo falciforme o drepanocitosis.",
      "Ambos padres portadores del rasgo falciforme.",
      "Hermanos con drepanocitosis o rasgo falciforme",
      "Resultado positivo en el tamiz neonatal.",
      "Ascendencia africana, caribeña, mediterránea, de Medio Oriente o de algunas regiones de América Latina."
    ],
    complications: ["Accidente cerebrovascular a temprana edad", "Síndrome torácico agudo (infiltrado pulmonar grave)", "Daño orgánico crónico en riñones, bazo y articulaciones"],
    treatments: ["Hidroxiurea y otros tratamientos para disminuir las crisis dolorosas y prevenir complicaciones.", "Vacunación completa y antibióticos profilácticos", "Transfusiones de sangre y trasplante de médula ósea"],
    faqs: [
      {
        question: "¿La drepanocitosis es hereditaria?",
        answer: `Sí. La drepanocitosis es una enfermedad genética que se transmite de padres a hijos. Ocurre cuando un niño hereda una copia alterada del gen de la hemoglobina de cada uno de sus padres.

Muchas personas pueden ser portadoras del llamado rasgo falciforme, lo que significa que tienen una sola copia alterada del gen y generalmente no presentan síntomas. Sin embargo, cuando ambos padres son portadores, existe la posibilidad de que sus hijos desarrollen la enfermedad.

Por esta razón, cuando se diagnostica drepanocitosis en un niño, puede ser recomendable evaluar a otros miembros de la familia y recibir asesoramiento genético para comprender el riesgo en futuros embarazos.`
      },
      {
        question: "¿Por qué ocurren las crisis dolorosas?",
        answer: `Las crisis dolorosas ocurren cuando los glóbulos rojos con forma anormal se vuelven rígidos y pueden bloquear pequeños vasos sanguíneos. Esto dificulta el flujo normal de sangre y oxígeno hacia los tejidos, provocando episodios de dolor que pueden afectar huesos, articulaciones, abdomen u otras partes del cuerpo.

Las infecciones, la deshidratación, los cambios bruscos de temperatura y otros factores pueden favorecer la aparición de estas crisis.`
      },
      {
        question: "¿La drepanocitosis tiene cura?",
        answer: `Actualmente, el trasplante de células madre hematopoyéticas es la única opción con potencial curativo para algunos pacientes. Sin embargo, existen tratamientos que ayudan a prevenir complicaciones, disminuir las crisis dolorosas y mejorar significativamente la calidad de vida.

El seguimiento regular por Hematología Pediátrica es fundamental para detectar y tratar oportunamente las complicaciones de la enfermedad.`
      },
      {
        question: "¿Cuándo puede necesitar una transfusión un niño con drepanocitosis?",
        answer: `Algunas complicaciones de la drepanocitosis pueden requerir transfusiones de sangre. Estas pueden utilizarse para tratar anemia grave o prevenir complicaciones específicas, como algunas alteraciones neurológicas, pulmonares o relacionadas con procedimientos quirúrgicos.

La necesidad de una transfusión depende de cada situación clínica y debe ser valorada por un especialista.`
      },
      {
        question: "¿Mi hijo podrá llevar una vida normal?",
        answer: `Con un diagnóstico oportuno, seguimiento especializado y medidas adecuadas para prevenir complicaciones, muchos niños con drepanocitosis pueden asistir a la escuela, realizar actividades cotidianas y mantener una buena calidad de vida.

El control médico regular, la prevención de infecciones y el apego al tratamiento son fundamentales para favorecer un desarrollo saludable.`
      },
      {
        question: "¿Cómo se diagnostica la drepanocitosis?",
        answer: `El diagnóstico se realiza mediante estudios especializados que identifican el tipo de hemoglobina presente en la sangre. Entre ellos se encuentran la electroforesis de hemoglobina, la cromatografía líquida de alta resolución (HPLC) y otras pruebas confirmatorias. En algunos países y regiones, la enfermedad puede detectarse desde el nacimiento mediante tamiz neonatal.`
      },
      {
        question: "¿Por qué son importantes las vacunas y la prevención de infecciones?",
        answer: `Los niños con drepanocitosis tienen un mayor riesgo de presentar infecciones graves debido a que el bazo puede perder parte de su función con el tiempo. Por ello, es fundamental mantener un esquema de vacunación completo, acudir a controles médicos periódicos y buscar atención médica inmediata ante la presencia de fiebre.`
      },
      {
        question: "¿Qué cuidados ayudan a prevenir las crisis?",
        answer: "Mantener una buena hidratación, evitar cambios bruscos de temperatura, acudir rápidamente ante fiebre, seguir el tratamiento indicado y asistir a las consultas de seguimiento ayuda a disminuir el riesgo de complicaciones."
      }
    ],
    image: "/enfermedades/Drepanocitosis.png",
    relatedServices: ["ser-003", "ser-006", "ser-007"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-007", "sym-012"],
    ctaQuestion: "¿Tu hijo presenta anemia persistente, coloración amarilla en ojos o piel, o episodios recurrentes de dolor?",
    ctaAnswer: "La drepanocitosis puede manifestarse con anemia, ictericia, crisis dolorosas e infecciones frecuentes. Una valoración por Hematología Pediátrica permite confirmar el diagnóstico, prevenir complicaciones y ofrecer el tratamiento más adecuado para cada paciente.",
    seo: {
      title: "Drepanocitosis (Anemia Falciforme) en Niños | CDMX",
      description: "Manejo experto de la anemia falciforme y crisis de dolor en niños. Consulta con la Dra. Lizbeth Hernández, Hematóloga Pediatra.",
      keywords: ["Anemia falciforme niños CDMX", "Drepanocitosis infantil tratamiento", "Crisis de dolor hematológicas"],
    },
    category: "anemias-globulos-rojos",
  },
  {
    id: "enf-006",
    slug: "talasemia",
    name: "Talasemia",
    description: "Las talasemias son un grupo de trastornos sanguíneos hereditarios caracterizados por una producción disminuida o ausente de las cadenas alfa o beta de la globina, lo que causa anemia de intensidad variable.",
    symptoms: [
      "Palidez.",
      "Cansancio o fatiga fácil.",
      "Irritabilidad.",
      "Falta de apetito.",
      "Retraso en el crecimiento y desarrollo.",
      "Retraso en la pubertad en adolescentes con formas graves",
      "Coloración amarillenta de la piel o los ojos (ictericia).",
      "Orina oscura.",
      "Aumento del tamaño del hígado y/o del bazo (hepatoesplenomegalia).",
      "Deformidades óseas faciales en casos graves y no tratados.",
      "Necesidad de transfusiones sanguíneas recurrentes."
    ],
    causes: ["Mutaciones o deleciones genéticas en los genes responsables de la síntesis de cadenas alfa o beta de globina"],
    riskFactors: ["Antecedentes familiares de talasemia", "Ascendencia mediterránea, asiática o del Medio Oriente"],
    complications: ["Sobrecarga de hierro en el cuerpo (hemocromatosis) por transfusiones repetidas", "Problemas cardíacos y óseos", "Mayor riesgo de infecciones severas"],
    treatments: [
      "Transfusiones sanguíneas programadas en pacientes con formas graves.",
      "Terapia de quelación de hierro para prevenir la sobrecarga férrica secundaria a las transfusiones.",
      "Suplementación con ácido fólico cuando esté indicada.",
      "Monitoreo especializado de crecimiento, función cardíaca y niveles de hierro.",
      "Trasplante de progenitores hematopoyéticos en casos seleccionados.",
      "Seguimiento por un equipo multidisciplinario en pacientes con formas graves."
    ],
    faqs: [
      { question: "¿Cuál es la diferencia entre talasemia menor y mayor?", answer: "La talasemia menor (rasgo talasémico) suele producir una anemia leve o incluso no causar síntomas. Las personas con esta condición generalmente llevan una vida normal y muchas veces desconocen que son portadoras.\n\nLa talasemia mayor es una forma grave de la enfermedad que provoca anemia severa desde los primeros años de vida y suele requerir transfusiones sanguíneas periódicas y seguimiento especializado por hematología.\n\nLa diferencia principal radica en la gravedad de la anemia, los síntomas y la necesidad de tratamiento." },
      { question: "¿Qué es la terapia de quelación de hierro y por qué puede ser necesaria?", answer: "La terapia de quelación es un tratamiento que ayuda a eliminar el exceso de hierro acumulado en el organismo. Los pacientes con talasemia que reciben transfusiones sanguíneas frecuentes pueden desarrollar sobrecarga de hierro, ya que el cuerpo no cuenta con un mecanismo natural eficaz para eliminarlo.\n\nSi no se trata, el exceso de hierro puede afectar órganos como el corazón, el hígado y las glándulas endocrinas. Por ello, algunos pacientes requieren medicamentos quelantes para mantener niveles seguros de hierro y prevenir complicaciones a largo plazo.\n\nEl hematólogo determinará cuándo iniciar este tratamiento y qué medicamento es el más adecuado para cada paciente." },
      { question: "¿Un niño con talasemia menor necesita tomar hierro?", answer: "No necesariamente. Antes de administrar hierro es indispensable confirmar que exista deficiencia de hierro mediante estudios de laboratorio. Muchos pacientes con talasemia menor no presentan déficit de hierro y recibir suplementos sin indicación médica puede favorecer la sobrecarga férrica." },
      { question: "¿Cómo se diagnostica la talasemia?", answer: "El diagnóstico definitivo se establece mediante los siguientes estudios y valoraciones: biometría hemática, frotis de sangre periférica, electroforesis de hemoglobina, estudios moleculares o genéticos en casos seleccionados, y la valoración especializada por un hematólogo pediatra." },
      { question: "¿La talasemia puede heredarse?", answer: "Sí. La talasemia se transmite de padres a hijos mediante genes alterados que afectan la producción de hemoglobina. Por ello, en algunas familias puede recomendarse el estudio de otros familiares y la asesoría genética." }
    ],
    image: "/enfermedades/Talasemia.png",
    relatedServices: ["ser-003", "ser-006", "ser-007"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-008", "sym-012"],
    seo: {
      title: "Talasemia Infantil y Tratamiento de Sobrecarga de Hierro | CDMX",
      description: "Diagnóstico diferencial y control integral de la talasemia en niños. Dra. Lizbeth Hernández, Especialista en Hematología Pediátrica.",
      keywords: ["Talasemia en niños CDMX", "Terapia de quelación de hierro", "Electroforesis de hemoglobina niños"],
    },
    category: "anemias-globulos-rojos",
  },
  {
    id: "enf-007",
    slug: "esferocitosis-hereditaria",
    name: "Esferocitosis Hereditaria",
    description: "La esferocitosis hereditaria es una anemia hemolítica congénita causada por alteraciones genéticas en las proteínas de la membrana de los glóbulos rojos. Como consecuencia, los glóbulos rojos adquieren una forma esférica, son menos flexibles y se destruyen principalmente en el bazo. La mayoría de los casos se heredan de forma autosómica dominante, aunque existen formas recesivas menos frecuentes.",
    symptoms: [
      "Palidez en piel y mucosas",
      "Ictericia intermitente",
      "Crecimiento del bazo (esplenomegalia)",
      "Cansancio recurrente",
      "Desarrollo de piedras en la vesícula (colelitiasis)",
      "Orina oscura ocasional",
      "Ictericia neonatal prolongada o intensa",
      "Retraso en el crecimiento (en casos moderados o graves)",
      "Crisis aplásica, generalmente asociada a infección por parvovirus B19"
    ],
    causes: ["Mutación genética hereditaria (generalmente autosómica dominante) que altera las proteínas estructurales espectrina, anquirina o banda 3 del glóbulo rojo o proteína 4.2"],
    riskFactors: [
      "Antecedentes familiares de esferocitosis hereditaria",
      "Familiar con anemia hemolítica crónica",
      "Familiar sometido a esplenectomía por anemia hemolítica"
    ],
    complications: ["Crisis aplásicas causadas por infecciones virales (ej. parvovirus B19)", "Piedras en la vesícula biliar a edades muy tempranas", "Anemia severa"],
    treatments: [
      "Suplementación con ácido fólico",
      "Transfusiones de glóbulos rojos cuando existe anemia grave o crisis hemolítica",
      "Esplenectomía en pacientes seleccionados con enfermedad moderada o grave, generalmente después de los 5–6 años",
      "Colecistectomía cuando existen cálculos biliares sintomáticos"
    ],
    faqs: [
      { question: "¿Por qué el bazo destruye estos glóbulos rojos?", answer: "El bazo funciona como un filtro natural de la sangre. Los glóbulos rojos normales son flexibles y pueden atravesar espacios muy estrechos. En la esferocitosis hereditaria, los glóbulos rojos tienen forma esférica y son menos flexibles, por lo que quedan atrapados en el bazo y son destruidos antes de tiempo." },
      { question: "¿Siempre se debe retirar el bazo en estos niños?", answer: "No. La esplenectomía se reserva para algunos pacientes con enfermedad moderada o grave que presentan anemia significativa, necesidad frecuente de transfusiones, crecimiento afectado o síntomas importantes. Muchos niños con formas leves pueden manejarse únicamente con vigilancia médica y ácido fólico." },
      { question: "¿Cómo se realiza el diagnóstico?", answer: "El diagnóstico se realiza mediante biometría hemática, frotis de sangre periférica y pruebas especializadas como la citometría con eosina-5-maleimida (EMA), considerada actualmente una de las pruebas más sensibles para confirmar la enfermedad. En algunos casos también pueden solicitarse estudios genéticos para confirmar el diagnóstico o identificar la alteración responsable" },
      { question: "¿La esferocitosis hereditaria tiene cura?", answer: "Es una enfermedad genética que acompaña al paciente toda su vida. Sin embargo, con seguimiento adecuado, suplementación con ácido fólico y, en algunos casos, esplenectomía, la mayoría de los niños pueden llevar una vida normal." },
      { question: "¿Puede llevar una vida normal un niño con esferocitosis hereditaria?", answer: "En la mayoría de los casos sí. Con seguimiento médico adecuado, suplementación con ácido fólico y tratamiento oportuno de las complicaciones, la mayoría de los niños pueden realizar sus actividades habituales y tener una buena calidad de vida." }
    ],
    image: "/enfermedades/Esferocitosis_Hereditaria.png",
    relatedServices: ["ser-003", "ser-006", "ser-007"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-008", "sym-011"],
    seo: {
      title: "Esferocitosis Hereditaria en Niños | Hematología CDMX",
      description: "Diagnóstico y control de la esferocitosis hereditaria y esplenectomía en pacientes pediátricos. Dra. Lizbeth Hernández.",
      keywords: ["Esferocitosis hereditaria niños", "Fragilidad osmótica estudio", "Esplenectomía pediátrica CDMX"],
    },
    category: "anemias-globulos-rojos",
  },
  {
    id: "enf-008",
    slug: "hemofilia-infantil",
    name: "Hemofilia Infantil",
    description: "La hemofilia es un trastorno hereditario de la coagulación causado por la deficiencia o ausencia de un factor de coagulación. La hemofilia A se debe a la deficiencia del factor VIII y la hemofilia B a la deficiencia del factor IX, lo que dificulta la formación adecuada del coágulo y favorece los sangrados.",
    symptoms: [
      "Moretones fáciles o grandes.",
      "Sangrado prolongado después de heridas, procedimientos o extracciones dentales.",
      "Sangrado nasal frecuente.",
      "Hemorragias en articulaciones (hemartrosis) con dolor, inflamación y limitación del movimiento.",
      "Hemorragias musculares.",
      "Sangrado después de vacunas o inyecciones intramusculares."
    ],
    causes: [
      "Mutaciones en los genes F8 (hemofilia A) o F9 (hemofilia B), que producen niveles bajos o ausencia del factor VIII o IX.",
      "La mayoría de los casos se heredan con un patrón ligado al cromosoma X, aunque también pueden aparecer por una mutación nueva (de novo)."
    ],
    riskFactors: [
      "Antecedentes familiares de hemofilia u otros trastornos hemorrágicos hereditarios.",
      "Sexo masculino (la hemofilia clásica afecta principalmente a los niños debido a su herencia ligada al cromosoma X)."
    ],
    complications: ["Daño articular crónico por sangrados repetitivos (artropatía hemofílica)", "Hemorragias internas espontáneas de difícil control"],
    treatments: [
      "Tratamiento a demanda: se administra el factor cuando ocurre un sangrado.",
      "Profilaxis: administración regular de factor VIII o IX para prevenir hemorragias.",
      "La profilaxis es el estándar de cuidado en muchos niños con hemofilia grave porque disminuye sangrados y daño articular.",
      "Nuevas terapias preventivas, como emicizumab, en pacientes seleccionados."
    ],
    faqs: [
      { question: "¿La hemofilia se cura?", answer: "No tiene cura definitiva actualmente, pero los tratamientos de reemplazo profiláctico permiten que los niños lleven una vida normal y activa." },
      { question: "¿Se puede diagnosticar desde el nacimiento?", answer: "Sí, mediante pruebas especiales de coagulación que miden la actividad de los factores en sangre de cordón umbilical o periférica." },
      { question: "¿Qué tipo de ejercicio puede hacer un niño con hemofilia?", answer: "Se recomiendan actividades de bajo impacto, como natación, caminata o ciclismo con protección adecuada. Los deportes de contacto deben evitarse o valorarse individualmente con el hematólogo según la gravedad de la enfermedad y el tratamiento que reciba el niño" },
      { question: "¿Mi hijo puede vacunarse?", answer: "Sí. Los niños con hemofilia deben recibir su esquema completo de vacunación. En algunos casos se toman medidas especiales para disminuir el riesgo de sangrado después de la aplicación." },
      { question: "¿Qué hacer si mi hijo se golpea la cabeza?", answer: "Todo golpe importante en la cabeza requiere valoración médica inmediata, incluso si el niño parece encontrarse bien, debido al riesgo de hemorragia interna." }
    ],
    image: "/enfermedades/Hemofilia_Infantil.png",
    relatedServices: ["ser-005"],
    relatedSymptoms: ["sym-003", "sym-010", "sym-014", "sym-015"],
    seo: {
      title: "Tratamiento de Hemofilia en Niños | Hematología CDMX",
      description: "Control experto y profilaxis para niños con hemofilia A o B. Especialista en coagulación Dra. Lizbeth Hernández.",
      keywords: ["Hemofilia infantil tratamiento CDMX", "Sangrado en articulaciones niños", "Factores de coagulación pediatría"],
    },
    category: "coagulacion-hemostasia",
  },
  {
    id: "enf-009",
    slug: "deficiencia-g6pd",
    name: "Deficiencia de G6PD",
    technicalName: "Deficiencia de Glucosa-6-Fosfato Deshidrogenasa",
    description: "La deficiencia de glucosa-6-fosfato deshidrogenasa (G6PD) es un trastorno genético hereditario en el que los glóbulos rojos tienen una cantidad o actividad disminuida de esta enzima, lo que los hace más vulnerables a destruirse (hemólisis) ante ciertos medicamentos, infecciones, alimentos o sustancias oxidantes.",
    symptoms: [
      "Palidez repentina",
      "Color amarillo en piel y ojos (ictericia)",
      "Orina oscura (color té o coca-cola)",
      "Cansancio o debilidad",
      "Taquicardia",
      "Dificultad para respirar en casos graves",
      "Dolor abdominal o dolor de espalda durante una crisis hemolítica"
    ],
    causes: ["Mutación hereditaria ligada al cromosoma X que provoca una disminución de la actividad de la enzima glucosa-6-fosfato deshidrogenasa (G6PD), encargada de proteger a los glóbulos rojos del daño oxidativo"],
    riskFactors: [
      "Antecedentes familiares de deficiencia de G6PD",
      "Sexo masculino (más frecuente)",
      "Ascendencia africana, mediterránea, asiática o de Medio Oriente",
      "Exposición a medicamentos oxidantes",
      "Infecciones virales o bacterianas",
      "Consumo de habas (favismo)"
    ],
    complications: ["Anemia hemolítica aguda grave con riesgo de daño renal", "Necesidad de transfusiones de emergencia en crisis oxidativas"],
    treatments: [
      "Educación al paciente y su familia sobre los medicamentos y sustancias que deben evitarse",
      "Tratar oportunamente las infecciones",
      "Mantener una adecuada hidratación durante las crisis",
      "Vigilancia médica y estudios de laboratorio cuando aparezcan síntomas",
      "Transfusión de sangre en casos graves de anemia hemolítica"
    ],
    faqs: [
      { question: "¿Qué es el favismo?", answer: "Es la reacción hemolítica grave que sufren las personas con deficiencia de G6PD tras ingerir habas (o incluso inhalar el polen de la planta de habas), debido a sustancias químicas en ellas que provocan daño oxidativo en los glóbulos rojos." },
      { question: "¿Todas las personas con deficiencia de G6PD presentan síntomas?", answer: "No. Muchas personas nunca presentan síntomas y solo desarrollan hemólisis cuando se exponen a medicamentos, infecciones, habas u otros factores desencadenantes." },
      { question: "¿Qué medicamentos no debe tomar mi hijo?", answer: "Algunos medicamentos y sustancias pueden desencadenar una crisis hemolítica en personas con deficiencia de G6PD, como ciertas sulfonamidas, algunos antipalúdicos y la naftalina. Es importante no administrar medicamentos sin indicación médica e informar siempre que el niño tiene esta enfermedad. El hematólogo proporcionará una lista actualizada de los medicamentos y sustancias que deben evitarse según cada caso." },
      { question: "¿Esta enfermedad dura toda la vida?", answer: "Sí, es una condición genética que acompaña al paciente toda su vida. Sin embargo, con evitar los factores desencadenantes, el niño tendrá una expectativa y calidad de vida completamente normales." },
      { question: "¿Puede mi hijo llevar una vida normal?", answer: "Sí. La mayoría de los niños con deficiencia de G6PD tienen una vida completamente normal si evitan los factores que desencadenan la hemólisis y reciben atención médica cuando presentan síntomas" }
    ],
    image: "/enfermedades/Deficiencia_G6PD.png",
    relatedServices: ["ser-003", "ser-006", "ser-007"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-011"],
    seo: {
      title: "Deficiencia de G6PD en Niños | Favismo CDMX",
      description: "Diagnóstico y guía de prevención de crisis hemolíticas por deficiencia de G6PD. Consulta con la Dra. Lizbeth Hernández.",
      keywords: ["Deficiencia de G6PD infantil", "Favismo en niños síntomas", "Medicamentos prohibidos G6PD"],
    },
    category: "anemias-globulos-rojos",
  },
  {
    id: "enf-010",
    slug: "enfermedad-von-willebrand",
    name: "Enfermedad de Von Willebrand",
    description: "La enfermedad de von Willebrand es el trastorno hereditario de la coagulación más frecuente. Se produce por una disminución en la cantidad o una alteración en la función del factor von Willebrand, una proteína que ayuda a las plaquetas a adherirse al sitio de lesión y protege al factor VIII de su degradación",
    symptoms: [
      "Moretones frecuentes o excesivos",
      "Sangrados nasales repetidos o difíciles de detener",
      "Sangrado prolongado después de extracciones dentales o cirugías",
      "Sangrado de encías",
      "Menstruaciones abundantes en adolescentes",
      "En casos más graves, sangrado gastrointestinal o articular",
      "Sangrado prolongado después de heridas pequeñas"
    ],
    causes: [
      "La mayoría de los casos son hereditarios y se transmiten de padres a hijos, generalmente con herencia autosómica dominante. Con menor frecuencia existen formas autosómicas recesivas o adquiridas asociadas a otras enfermedades."
    ],
    riskFactors: [
      "Antecedentes familiares de enfermedad de von Willebrand.",
      "Familiares con sangrados frecuentes o menstruaciones abundantes.",
      "Historia personal de sangrado excesivo tras cirugías o procedimientos dentales."
    ],
    complications: ["Anemia crónica por pérdidas de sangre recurrentes", "Hemorragias graves tras procedimientos menores", "Dolor e inflamación articular (en tipos graves)"],
    treatments: [
      "Desmopresina (DDAVP) en pacientes seleccionados.",
      "Antifibrinolíticos (ácido tranexámico).",
      "Concentrados de factor von Willebrand/FVIII cuando están indicados.",
      "Tratamiento hormonal para menstruaciones abundantes en adolescentes, cuando sea necesario."
    ],
    faqs: [
      {
        question: "¿Es una enfermedad parecida a la hemofilia?",
        answer: "Tienen similitudes porque ambas son enfermedades que afectan la coagulación y pueden causar sangrados prolongados. Sin embargo, la enfermedad de von Willebrand suele ser más leve, afecta tanto a niños como a niñas y se debe a una alteración del factor von Willebrand, una proteína que ayuda a que las plaquetas se adhieran y formen el coágulo."
      },
      {
        question: "¿Una niña con esta condición puede llevar una vida normal al crecer?",
        answer: "Sí. La mayoría de las niñas con enfermedad de von Willebrand pueden llevar una vida completamente normal. Es importante informar a sus médicos sobre el diagnóstico y recibir orientación especial antes de cirugías, procedimientos dentales o si presenta menstruaciones abundantes."
      },
      {
        question: "¿La enfermedad de von Willebrand tiene cura?",
        answer: "Actualmente no tiene cura definitiva, pero existen tratamientos muy efectivos para prevenir y controlar los episodios de sangrado, permitiendo que la mayoría de los pacientes lleven una vida normal."
      },
      {
        question: "¿Cómo se diagnostica la enfermedad de von Willebrand?",
        answer: "Se diagnostica mediante una valoración por hematología pediátrica y estudios especializados que incluyen la actividad y el antígeno del factor von Willebrand, la actividad del factor VIII y, en algunos casos, pruebas adicionales para identificar el tipo de enfermedad."
      }
    ],
    image: "/enfermedades/Enfermedad_Von_Willebrand.png",
    relatedServices: ["ser-005"],
    relatedSymptoms: ["sym-003", "sym-010", "sym-014", "sym-015", "sym-016"],
    seo: {
      title: "Enfermedad de Von Willebrand Infantil | Hematología CDMX",
      description: "Diagnóstico y manejo de sangrados frecuentes y enfermedad de Von Willebrand en niños y adolescentes. Dra. Lizbeth Hernández.",
      keywords: ["Enfermedad de Von Willebrand niños", "Sangrado de nariz frecuente niños", "Hematólogo pediatra experto CDMX"],
    },
    category: "coagulacion-hemostasia",
  },
  {
    id: "enf-011",
    slug: "leucemia-infantil",
    name: "Leucemia Infantil",
    description: "La leucemia infantil es un tipo de cáncer que se origina en la médula ósea, el tejido encargado de producir las células de la sangre. Las células leucémicas se multiplican de forma descontrolada, desplazan a las células normales de la médula ósea y ocasionan anemia, infecciones y sangrados.",
    symptoms: [
      "Palidez y cansancio persistente",
      "Fiebre recurrente o prolongada",
      "Moretones o sangrados fáciles",
      "Petequias",
      "Dolor óseo o articular",
      "Ganglios inflamados",
      "Crecimiento del hígado o bazo",
      "Pérdida de peso o disminución del apetito",
      "Sudoración nocturna.",
      "Infecciones frecuentes o difíciles de controlar."
    ],
    causes: [
      "En la mayoría de los niños no existe una causa identificable. La leucemia se desarrolla por alteraciones genéticas adquiridas en las células de la médula ósea y, en la mayoría de los casos, no es una enfermedad hereditaria."
    ],
    riskFactors: [
      "Síndromes de predisposición genética (ej. síndrome de Down, anemia de Fanconi, síndrome de Li-Fraumeni).",
      "Exposición previa a quimioterapia o radioterapia."
    ],
    complications: ["Infecciones graves por deficiencia de glóbulos blancos sanos", "Hemorragias severas por falta de plaquetas", "Anemia grave que limita las actividades cotidianas"],
    treatments: [
      "Quimioterapia en varias fases.",
      "Terapias dirigidas en algunos tipos de leucemia.",
      "Inmunoterapia en pacientes seleccionados.",
      "Trasplante de células madre hematopoyéticas cuando esté indicado.",
      "Tratamiento de soporte, incluyendo transfusiones, prevención y tratamiento de infecciones, y manejo de los efectos secundarios."
    ],
    faqs: [
      {
        question: "¿Los niños con leucemia pueden curarse?",
        answer: "Sí. Actualmente, muchos niños con leucemia, especialmente con leucemia linfoblástica aguda (LLA), pueden curarse con un diagnóstico oportuno y tratamiento especializado. Las probabilidades de curación dependen del tipo de leucemia y de los factores de riesgo de cada paciente."
      },
      {
        question: "¿Cuánto dura el tratamiento de la leucemia infantil?",
        answer: "El tratamiento puede durar entre 2 y 3 años, dependiendo del tipo y riesgo de la leucemia. Incluye varias fases: inducción a la remisión, consolidación y mantenimiento. Durante este tiempo, el niño requiere seguimiento cercano y apoyo multidisciplinario."
      },
      {
        question: "¿La leucemia infantil es hereditaria?",
        answer: "En la gran mayoría de los casos, no. La leucemia se desarrolla por alteraciones genéticas adquiridas en las células de la médula ósea, no por mutaciones heredadas de los padres. Tener un familiar con leucemia no aumenta significativamente el riesgo."
      },
      {
        question: "¿Qué debo hacer si sospecho que mi hijo tiene leucemia?",
        answer: "Acudir a una consulta con un hematólogo pediatra para una evaluación clínica y solicitar una biometría hemática completa. No espere a que los síntomas empeoren: el diagnóstico oportuno marca la diferencia en el tratamiento."
      }
    ],
    image: "/enfermedades/Leucemia_Linfoblastica_Aguda.png",
    relatedServices: ["ser-001", "ser-002", "ser-004", "ser-007"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-003", "sym-004", "sym-006", "sym-007", "sym-014", "sym-015"],
    ctaQuestion: "¿Tu hijo presenta fiebre persistente, palidez, moretones frecuentes o dolor de huesos?",
    ctaAnswer: "Estos síntomas no siempre significan leucemia, pero sí requieren una valoración médica oportuna. Una evaluación por Hematología Pediátrica puede ayudar a establecer el diagnóstico e iniciar el tratamiento lo antes posible si es necesario.",
    seo: {
      title: "Leucemia Infantil | Hematóloga Pediatra CDMX",
      description: "Diagnóstico oportuno y tratamiento especializado para la leucemia infantil. Consulta experta con la Dra. Lizbeth Hernández.",
      keywords: ["Leucemia infantil síntomas", "Tipos de leucemia en niños", "Cáncer en la sangre infantil CDMX"],
    },
    category: "leucemias-linfomas",
  },
  {
    id: "enf-015",
    slug: "trombosis-infantil",
    name: "Trombosis en Niños",
    technicalName: "Trombosis Venosa o Arterial Pediátrica",
    description: "La trombosis en niños es la formación de un coágulo de sangre (trombo) dentro de una vena o arteria, que puede obstruir parcial o totalmente el flujo sanguíneo. Aunque es poco frecuente en la infancia, puede provocar complicaciones importantes si no se diagnostica y trata oportunamente.",
    symptoms: [
      "Hinchazón dolorosa en una extremidad (brazo o pierna)",
      "Piel de la zona afectada enrojecida, morada o pálida",
      "Sensación de calor en la extremidad inflamada",
      "Dolor de pecho o dificultad respiratoria súbita (sospecha de trombo en pulmón)",
      "Dolor o aumento de volumen alrededor de un catéter venoso central.",
      "Dolor de cabeza intenso, convulsiones o alteración del estado de alerta (en trombosis cerebral)."
    ],
    causes: [
      "Catéter venoso central (principal causa en pediatría).",
      "Infecciones graves, cirugías o traumatismos.",
      "Cáncer y tratamiento con quimioterapia.",
      "Trastornos hereditarios o adquiridos de la coagulación (trombofilias)."
    ],
    riskFactors: [
      "Hospitalización prolongada.",
      "Inmovilización.",
      "Cardiopatías congénitas.",
      "Síndrome nefrótico.",
      "Enfermedad inflamatoria intestinal.",
      "Obesidad en adolescentes."
    ],
    complications: ["Embolia pulmonar (el coágulo viaja al pulmón, siendo una emergencia vital)", "Síndrome postrombótico (daño crónico y dolor en la vena afectada)", "Pérdida de perfusión y daño de tejidos"],
    treatments: [
      "Anticoagulación bajo supervisión especializada.",
      "Tratamiento de la enfermedad desencadenante.",
      "Manejo o retiro del catéter cuando esté indicado.",
      "Seguimiento clínico y estudios de imagen para confirmar la resolución del trombo."
    ],
    faqs: [
      { question: "¿Por qué a los niños les da trombosis?", answer: "A diferencia de los adultos, la trombosis en niños suele asociarse a factores de riesgo específicos como catéteres venosos centrales, infecciones graves, cáncer, enfermedades inflamatorias o trastornos de la coagulación. En muchos pacientes intervienen varios factores al mismo tiempo." },
      { question: "¿Los anticoagulantes ponen en riesgo al niño?", answer: "Tienen un riesgo de causar sangrado, por lo que requieren una dosificación muy precisa, monitoreo constante de laboratorio e indicación rigurosa por un hematólogo pediatra." },
      { question: "¿Qué es una trombofilia?", answer: "Es una condición hereditaria o adquirida en la que la sangre tiene una mayor tendencia natural a formar coágulos de forma inapropiada." },
      { question: "¿Cómo se diagnostica una trombosis?", answer: "El diagnóstico se confirma mediante estudios de imagen, como ultrasonido Doppler, tomografía o resonancia magnética, dependiendo del sitio donde se sospeche el trombo. En algunos pacientes también se solicitan estudios para investigar trombofilias." },
      { question: "¿La trombosis puede volver a aparecer?", answer: "Sí. Algunos niños presentan riesgo de recurrencia, especialmente si persisten factores de riesgo o tienen una trombofilia. Por ello es importante el seguimiento por Hematología Pediátrica." }
    ],
    image: "/enfermedades/Trombosis_Niños.jpeg",
    relatedServices: ["ser-005", "ser-007"],
    relatedSymptoms: ["sym-007"],
    ctaQuestion: "¿Tu hijo presenta inflamación dolorosa de una extremidad, dificultad para respirar repentina o sospecha de trombosis?",
    ctaAnswer: "La trombosis en niños requiere diagnóstico y tratamiento oportunos para disminuir el riesgo de complicaciones. La Dra. Lizbeth Yamilet Hernández Verdugo, especialista en Hematología Pediátrica, puede realizar la valoración y orientar el tratamiento más adecuado.",
    seo: {
      title: "Trombosis en Niños y Trombofilias | Hematóloga CDMX",
      description: "Diagnóstico y tratamiento especializado de trombosis venosa y estudios de trombofilia en niños. Dra. Lizbeth Hernández.",
      keywords: ["Trombosis en niños causas", "Catéter venoso central complicaciones", "Trombofilia pediátrica CDMX"],
    },
    category: "coagulacion-hemostasia",
  },
  {
    id: "enf-016",
    slug: "interpretacion-resultados-laboratorio",
    name: "Interpretación de Resultados de Laboratorio",
    description: "La interpretación de una biometría hemática u otros estudios de laboratorio permite identificar alteraciones en los glóbulos rojos, glóbulos blancos o plaquetas. La Dra. Lizbeth Hernández evalúa estos resultados en conjunto con la historia clínica y la exploración física para establecer un diagnóstico y orientar el tratamiento más adecuado.",
    symptoms: [
      "Puntos rojos en la piel (petequias) o moretones sin explicación",
      "Palidez extrema o cansancio inusual",
      "Fiebre persistente o infecciones frecuentes",
      "Sangrados de nariz o encías recurrentes",
      "Ganglios aumentados de tamaño.",
      "Pérdida de peso o sudoración nocturna.",
      "Dolor óseo persistente."
    ],
    causes: [
      "Infecciones virales o bacterianas.",
      "Deficiencias nutricionales (hierro, vitamina B12 o ácido fólico).",
      "Enfermedades autoinmunes o inflamatorias.",
      "Trastornos hereditarios de la sangre.",
      "Enfermedades de la médula ósea (aplasia medular, leucemias o síndromes de falla medular)."
    ],
    riskFactors: [
      "Antecedentes familiares de enfermedades hematológicas.",
      "Tratamientos como quimioterapia o inmunosupresores.",
      "Enfermedades crónicas."
    ],
    complications: [
      "Retraso en la detección y tratamiento de enfermedades hematológicas graves",
      "Riesgo de hemorragias severas por recuentos plaquetarios muy bajos",
      "Mayor susceptibilidad a infecciones graves por neutropenia"
    ],
    treatments: [
      "Valoración clínica por Hematología Pediátrica.",
      "Interpretación de la biometría hemática y otros estudios de laboratorio.",
      "Frotis de sangre periférica.",
      "Estudios especializados (hierro, vitamina B12, pruebas de coagulación, inmunológicos, genéticos o moleculares, según el caso).",
      "Aspirado o biopsia de médula ósea cuando esté indicado."
    ],
    treatmentsTitle: "Evaluación especializada",
    faqs: [
      {
        question: "¿Qué significa tener los leucocitos (glóbulos blancos) alterados?",
        answer: "Los leucocitos pueden estar altos (leucocitosis) o bajos (leucopenia). Frecuentemente indican una respuesta a infecciones, pero niveles muy fuera de rango o con presencia de células anormales (blastos) requieren descartar problemas en la médula ósea."
      },
      {
        question: "¿Una biometría hemática alterada siempre significa algo grave?",
        answer: "No necesariamente. Muchas alteraciones son temporales y secundarias a infecciones virales comunes o deficiencias nutricionales como la falta de hierro. Sin embargo, siempre deben ser interpretadas por un especialista."
      },
      {
        question: "¿Cuándo es urgente consultar al hematólogo por una biometría alterada?",
        answer: "Es prioritario acudir a valoración si hay alteraciones en más de una línea celular (por ejemplo, anemia y plaquetas bajas simultáneamente), sospecha de células anormales (blastos) o si se acompaña de fiebre prolongada, pérdida de peso o sangrados."
      },
      {
        question: "¿Qué es una biometría hemática?",
        answer: "Es un estudio de sangre que evalúa los glóbulos rojos, los glóbulos blancos y las plaquetas. Permite detectar anemia, infecciones, alteraciones de la coagulación y otras enfermedades hematológicas."
      },
      {
        question: "¿Debo repetir el estudio si salió alterado?",
        answer: "En algunos casos sí. Dependiendo de la alteración encontrada, el hematólogo puede recomendar repetir la biometría hemática o solicitar estudios complementarios para confirmar el diagnóstico."
      }
    ],
    image: "/enfermedades/Alteraciones_Biometria_Hematica.png",
    relatedServices: ["ser-003", "ser-005", "ser-006"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-003", "sym-004", "sym-006", "sym-013"],
    ctaQuestion: "¿Tu hijo tiene una biometría hemática o un estudio de laboratorio alterado?",
    ctaAnswer: "La interpretación especializada de los resultados, junto con la historia clínica y la exploración física, permite identificar la causa de la alteración y orientar el tratamiento más adecuado para cada paciente.",
    seo: {
      title: "Interpretación de Resultados de Laboratorio Pediátrico | CDMX",
      description: "La Dra. Lizbeth Hernández evalúa biometrías hemáticas, estudios especializados y pruebas de laboratorio para identificar la causa de alteraciones en sangre en niños.",
      keywords: ["Interpretación de estudios de laboratorio CDMX", "Biometría hemática alterada niños", "Plaquetas altas o bajas niños", "Leucocitos elevados infantil"]
    },
    category: "celulas-medula-osea",
  },
  {
    id: "enf-017",
    slug: "neutropenia-infantil",
    name: "Neutropenia en Niños",
    description: "La neutropenia es la disminución anormal en la cantidad de neutrófilos, un tipo de glóbulo blanco fundamental para defender al organismo contra infecciones, especialmente bacterianas y fúngicas. Dependiendo de su gravedad y de la causa, puede aumentar el riesgo de infecciones recurrentes o graves.",
    symptoms: [
      "Fiebre persistente o inexplicable",
      "Infecciones de oído, garganta o piel recurrentes",
      "Úlceras o llagas dolorosas en la boca (aftas)",
      "Inflamación o sangrado de encías (gingivitis)",
      "Retraso en la cicatrización de heridas o infecciones cutáneas frecuentes",
      "Abscesos o infecciones recurrentes de la piel.",
      "Neumonías o infecciones respiratorias repetidas."
    ],
    causes: [
      "Infecciones virales recientes (la causa más frecuente en la infancia).",
      "Neutropenia autoinmune infantil.",
      "Medicamentos.",
      "Deficiencia de vitamina B12, ácido fólico o cobre.",
      "Neutropenias congénitas.",
      "Enfermedades de la médula ósea."
    ],
    riskFactors: [
      "Quimioterapia o inmunosupresores.",
      "Enfermedades autoinmunes.",
      "Antecedentes familiares de neutropenia.",
      "Prematuridad (en recién nacidos)."
    ],
    complications: [
      "Infecciones bacterianas graves o generalizadas (septicemia)",
      "Fiebre neutropénica (considerada una urgencia médica)",
      "Hospitalizaciones frecuentes por infecciones de difícil control"
    ],
    treatments: [
      "Observación y seguimiento cuando la neutropenia es transitoria y sin infecciones.",
      "Antibióticos o antimicóticos cuando existe infección.",
      "Factores estimulantes de colonias de granulocitos (G-CSF) en pacientes seleccionados.",
      "Suspensión o cambio del medicamento responsable cuando sea posible.",
      "Seguimiento con biometrías hemáticas y tratamiento de la causa."
    ],
    faqs: [
      {
        question: "¿Qué es la fiebre neutropénica y por qué es una urgencia?",
        answer: "La fiebre neutropénica ocurre cuando un niño con neutropenia presenta fiebre (generalmente 38°C o más). Debido a la falta de defensas, una infección bacteriana puede diseminarse muy rápido por el cuerpo. Se considera una emergencia médica y requiere atención hospitalaria inmediata para iniciar antibióticos intravenosos."
      },
      {
        question: "¿La neutropenia en niños es permanente?",
        answer: "En la gran mayoría de los niños es de origen infeccioso o autoinmune y suele resolverse por completo de forma espontánea en unas semanas o meses. Solo en casos muy raros, asociados a fallas congénitas o de la médula ósea, puede ser una condición a largo plazo que requiere tratamiento continuo."
      },
      {
        question: "¿Qué precauciones especiales se deben tomar en casa?",
        answer: "Es fundamental mantener una higiene estricta (lavado de manos frecuente), evitar el contacto con personas enfermas, mantener las vacunas al día, cuidar la higiene dental y tener un termómetro en casa para vigilar la temperatura de forma precisa."
      },
      {
        question: "¿Cómo se diagnostica la neutropenia?",
        answer: "El diagnóstico se realiza mediante una biometría hemática. Dependiendo de la edad del niño, la gravedad y el tiempo de evolución, pueden requerirse estudios adicionales para identificar la causa."
      },
      {
        question: "¿Todos los niños con neutropenia tienen infecciones graves?",
        answer: "No. Muchos niños presentan neutropenia leve o transitoria, especialmente después de infecciones virales, y nunca desarrollan complicaciones. El riesgo depende del número de neutrófilos, la duración de la neutropenia y la causa que la produce."
      }
    ],
    image: "/enfermedades/Neutropenia_Niños.png",
    relatedServices: ["ser-003", "ser-006", "ser-007"],
    relatedSymptoms: ["sym-006", "sym-013"],
    ctaQuestion: "¿Tu hijo presenta infecciones frecuentes o neutropenia?",
    ctaAnswer: "Una valoración oportuna por Hematología Pediátrica permite identificar la causa de la neutropenia, evaluar el riesgo de infecciones e indicar el tratamiento y seguimiento más adecuados. Si presenta fiebre y neutropenia grave, debe acudir de inmediato a un servicio de urgencias.",
    seo: {
      title: "Neutropenia en Niños | Defensas Bajas CDMX",
      description: "Diagnóstico y tratamiento de la neutropenia y fiebre neutropénica en niños con la Dra. Lizbeth Hernández, Hematóloga Pediatra.",
      keywords: ["Neutropenia infantil CDMX", "Glóbulos blancos bajos niños", "Fiebre neutropénica urgencia"]
    },
    category: "celulas-medula-osea",
  },
  {
    id: "enf-018",
    slug: "linfoma-infantil",
    name: "Linfoma Infantil",
    description: "El linfoma es un tipo de cáncer que afecta al sistema linfático, una parte del sistema de defensa del organismo. Se origina cuando los linfocitos (un tipo de glóbulo blanco) crecen de forma descontrolada y forman ganglios o masas. Los dos tipos principales son el linfoma de Hodgkin y el linfoma no Hodgkin, que requieren tratamientos diferentes.",
    symptoms: [
      "Ganglios inflamados en cuello, axilas o ingle que no duelen y no desaparecen",
      "Fiebre persistente sin causa aparente",
      "Pérdida de peso involuntaria",
      "Sudoración nocturna abundante",
      "Cansancio o fatiga",
      "Comezón generalizada en la piel",
      "Crecimiento del hígado o bazo",
      "Tos persistente o dificultad para respirar (cuando existen ganglios en el tórax)."
    ],
    causes: [
      "En la mayoría de los niños no se identifica una causa específica. El linfoma se desarrolla por alteraciones adquiridas en los linfocitos que hacen que crezcan y se multipliquen sin control."
    ],
    riskFactors: [
      "Inmunodeficiencias congénitas o adquiridas.",
      "Infección por virus de Epstein-Barr (EBV) en algunos tipos de linfoma.",
      "Antecedente de trasplante de órgano sólido o de células madre hematopoyéticas.",
      "Tratamiento previo con quimioterapia o radioterapia (menos frecuente)."
    ],
    complications: [
      "Compresión de estructuras vitales por ganglios aumentados de tamaño",
      "Infecciones graves por afectación del sistema inmune",
      "Efectos secundarios del tratamiento a largo plazo"
    ],
    treatments: [
      "Quimioterapia según el tipo y estadio del linfoma.",
      "Radioterapia en casos seleccionados.",
      "Inmunoterapia o terapias dirigidas en algunos pacientes.",
      "Trasplante de células madre hematopoyéticas cuando está indicado.",
      "Tratamiento de soporte para prevenir y tratar complicaciones."
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre linfoma de Hodgkin y no Hodgkin?",
        answer: "Son dos tipos diferentes de linfoma que se distinguen por las células que los originan y por su comportamiento clínico. Ambos pueden presentarse en niños y adolescentes, pero tienen características, tratamiento y pronóstico diferentes. Con el tratamiento adecuado, muchos pacientes logran curarse."
      },
      {
        question: "¿Un ganglio inflamado siempre es signo de linfoma?",
        answer: "No. La gran mayoría de los ganglios inflamados en los niños se relacionan con infecciones comunes. Sin embargo, es importante valorarlos cuando persisten varias semanas, aumentan progresivamente de tamaño o se acompañan de fiebre prolongada, pérdida de peso o sudoración nocturna."
      },
      {
        question: "¿Cómo se confirma el diagnóstico?",
        answer: "El diagnóstico se confirma mediante una biopsia del ganglio o tejido afectado. La muestra es analizada por especialistas en patología para identificar el tipo exacto de linfoma y planificar el tratamiento más adecuado."
      },
      {
        question: "¿El linfoma infantil tiene cura?",
        answer: "Sí. Actualmente muchos niños y adolescentes con linfoma pueden curarse gracias a los avances en el diagnóstico y tratamiento. El pronóstico depende del tipo de linfoma, la extensión de la enfermedad y la respuesta al tratamiento."
      },
      {
        question: "¿Todos los ganglios inflamados necesitan una biopsia?",
        answer: "No. La mayoría de los ganglios inflamados en niños son secundarios a infecciones y desaparecen con el tiempo. La biopsia solo se recomienda cuando existen características que hacen sospechar una enfermedad más importante o cuando los ganglios persisten sin una causa clara."
      },
      {
        question: "¿El linfoma es hereditario?",
        answer: "No. En la gran mayoría de los casos el linfoma no se hereda de padres a hijos. Solo algunos niños con enfermedades genéticas poco frecuentes o inmunodeficiencias tienen un mayor riesgo de desarrollarlo."
      }
    ],
    image: "/enfermedades/Leucemia_Linfoblastica_Aguda.png",
    relatedServices: ["ser-001", "ser-002", "ser-004", "ser-007"],
    relatedSymptoms: ["sym-004", "sym-006"],
    ctaQuestion: "¿Tu hijo presenta ganglios inflamados persistentes, fiebre prolongada o pérdida de peso sin explicación?",
    ctaAnswer: "La mayoría de estos síntomas pueden deberse a causas benignas, pero cuando persisten o se acompañan de otros signos de alarma es importante una valoración especializada para identificar su causa y brindar el tratamiento adecuado.",
    seo: {
      title: "Linfoma Infantil | Hematóloga Pediatra CDMX",
      description: "Diagnóstico y evaluación de linfoma de Hodgkin y no Hodgkin en niños. Consulta experta con la Dra. Lizbeth Hernández.",
      keywords: ["Linfoma infantil CDMX", "Ganglios inflamados niños", "Linfoma Hodgkin pediátrico"]
    },
    category: "leucemias-linfomas",
  }
];
