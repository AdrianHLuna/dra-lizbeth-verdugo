import { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "enf-001",
    slug: "anemia-ferropenica",
    name: "Anemia Ferropénica",
    description: "La anemia ferropénica es la disminución de los niveles de hemoglobina y glóbulos rojos en la sangre debido a la falta de hierro, el mineral necesario para producir hemoglobina en el cuerpo del niño.",
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
      "Dieta pobre en hierro",
      "Consumo excesivo de leche de vaca",
      "Sangrado gastrointestinal",
      "Menstruaciones abundantes en adolescentes",
      "Problemas de absorción intestinal (por ejemplo, enfermedad celíaca)"
    ],
    riskFactors: ["Nacimiento prematuro o bajo peso al nacer", "Introducción tardía de alimentos sólidos", "Consumo excesivo de leche de vaca en menores de un año"],
    complications: ["Retraso en el desarrollo psicomotor", "Problemas de aprendizaje y concentración", "Debilidad del sistema inmunitario con propensión a infecciones"],
    treatments: [
      "Suplementación con hierro por vía oral.",
      "Ajustes en la alimentación para aumentar el consumo de hierro y vitamina C.",
      "Identificación y tratamiento de la causa que originó la deficiencia de hierro.",
      "Seguimiento con estudios de laboratorio para evaluar la respuesta al tratamiento."
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
      }
    ],
    image: "/enfermedades/anemia_ferropenica.png",
    relatedServices: ["ser-003", "ser-006"],
    relatedSymptoms: ["sym-001", "sym-002"],
    seo: {
      title: "Anemia Ferropénica en Niños | Hematóloga Pediatra CDMX",
      description: "Diagnóstico y tratamiento de la anemia ferropénica por falta de hierro en bebés y niños. Consulta con la Dra. Lizbeth Hernández.",
      keywords: ["Anemia ferropénica infantil CDMX", "Falta de hierro en niños", "Tratamiento de anemia en lactantes"],
    }
  },
  {
    id: "enf-002",
    slug: "trombocitopenia-inmune-pti",
    name: "Trombocitopenia Inmune",
    technicalName: "Púrpura Trombocitopénica Inmune",
    description: "La trombocitopenia inmune es un trastorno sanguíneo caracterizado por una disminución anormal del número de plaquetas en la sangre debido a que el sistema inmunitario del propio niño las destruye.",
    symptoms: [
      "Aparición de moretones fáciles sin causa",
      "Petequias que son pequeños puntos rojos en la piel",
      "Epistaxis de repetición",
      "Sangrado en encías",
      "Sangrado prolongado después de golpes o heridas menores.",
      "Sangrado menstrual abundante"
    ],
    causes: [
      "Reacción inmunitaria desencadenada por una infección viral o gastrointestinal previa",
      "Desregulación del sistema inmunitario del niño",
      "En raras ocasiones, puede presentarse después de administrarse algunas vacunas, aunque el beneficio de la vacunación supera ampliamente este riesgo."
    ],
    riskFactors: ["Infecciones virales o gastrointestinales recientes como gripe, varicela o gastroenteritis", "Predisposición genética a trastornos autoinmunes"],
    complications: ["Hemorragias graves espontáneas en órganos internos (poco frecuentes pero de alto riesgo)", "Ansiedad familiar por riesgo de sangrado"],
    treatments: [
      "Vigilancia clínica y seguimiento hematológico en casos leves.",
      "Inmunoglobulina intravenosa (IVIG).",
      "Corticosteroides para disminuir la destrucción de plaquetas y aumentar temporalmente su número."
    ],
    faqs: [
      { question: "¿El niño puede realizar actividades físicas normales?", answer: "La mayoría de los niños puede realizar actividades cotidianas. Sin embargo, cuando las plaquetas están muy bajas, se recomienda evitar deportes de contacto o actividades con alto riesgo de golpes hasta que el hematólogo indique que es seguro retomarlas." },
      { question: "¿Esta enfermedad se vuelve crónica?", answer: "La mayoría de los niños se recupera completamente en los primeros 6 a 12 meses. Aproximadamente entre 20 y 30% pueden desarrollar PTI persistente o crónica." },
      { question: "¿Requiere transfusión de plaquetas?", answer: "Generalmente no. Las transfusiones de plaquetas suelen reservarse para casos de sangrado grave o situaciones especiales, ya que las plaquetas transfundidas pueden ser destruidas rápidamente por el sistema inmunitario." },
      { question: "¿Cuánto tarda en resolverse con tratamiento?", answer: "La respuesta al tratamiento es variable. Algunos niños presentan aumento de plaquetas en los primeros 7 días, mientras que otros pueden tardar varias semanas. El objetivo principal del tratamiento es disminuir el riesgo de sangrado y permitir una vida segura mientras ocurre la recuperación." }
    ],
    image: "/enfermedades/Trombocitopenia_Inmune.png",
    relatedServices: ["ser-001", "ser-003", "ser-006"],
    relatedSymptoms: ["sym-003", "sym-010", "sym-014", "sym-015", "sym-016"],
    seo: {
      title: "Trombocitopenia Inmune en Niños | Púrpura Infantil CDMX",
      description: "Información y tratamiento especializado para la Púrpura Trombocitopénica Inmune (PTI) en niños con la Dra. Lizbeth Hernández.",
      keywords: ["Trombocitopenia inmune niños", "Plaquetas bajas en niños causas", "Púrpura infantil tratamiento CDMX"],
    }
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
      "En muchos niños no se identifica una causa específica",
      "Algunas enfermedades autoinmunes",
      "Infecciones virales",
      "Exposición a ciertos medicamentos o sustancias químicas",
      "Algunas enfermedades hereditarias, como la Anemia de Fanconi"
    ],
    riskFactors: [
      "Exposición a sustancias químicas nocivas (como benceno o pesticidas)",
      "Tratamientos previos con radiación o quimioterapia",
      "Antecedentes de infecciones virales graves",
      "Predisposición genética (enfermedades hereditarias)"
    ],
    complications: ["Hemorragias graves", "Infecciones severas generalizadas (septicemia)", "Insuficiencia cardíaca por anemia crónica"],
    treatments: [
      "Transfusiones de glóbulos rojos o plaquetas cuando son necesarias",
      "Medicamentos inmunosupresores para disminuir el ataque del sistema inmune a la médula ósea",
      "Medicamentos que estimulan la producción de células sanguíneas",
      "Antibióticos cuando existen infecciones",
      "Trasplante de médula ósea o de células madre hematopoyéticas, que puede ser el tratamiento curativo en muchos niños"
    ],
    faqs: [
      { question: "¿Es lo mismo que leucemia?", answer: "No. La leucemia es un cáncer de la sangre en el que se producen células anormales de manera descontrolada. En la anemia aplásica, la médula ósea deja de producir suficientes glóbulos rojos, glóbulos blancos y plaquetas." },
      { question: "¿Cómo se diagnostica la anemia aplásica?", answer: "Para que sea más claro para los padres, el diagnóstico se realiza mediante:\n\n• Biometría hemática completa.\n• Recuento de reticulocitos.\n• Aspirado y biopsia de médula ósea (estudio fundamental para confirmar el diagnóstico).\n• Estudios para investigar la causa." },
      { question: "¿Se puede curar con trasplante de médula ósea?", answer: "Sí. El trasplante de células madre hematopoyéticas (trasplante de médula ósea) puede curar la enfermedad en muchos pacientes, especialmente cuando existe un donante compatible." },
      { question: "¿La anemia aplásica es cáncer?", answer: "No. La anemia aplásica no es un cáncer. Es una enfermedad en la que la médula ósea produce muy pocas células sanguíneas. Sin embargo, requiere atención especializada porque puede ser grave." },
      { question: "¿La anemia aplásica es hereditaria?", answer: "En la mayoría de los casos no es hereditaria. Sin embargo, existen algunas enfermedades genéticas poco frecuentes, como la anemia de Fanconi, que pueden causar anemia aplásica y requieren estudios especializados." },
      { question: "¿Cuánto dura el tratamiento inmunosupresor?", answer: "La respuesta al tratamiento inmunosupresor suele observarse después de varios meses. El seguimiento médico es prolongado y puede continuar durante varios años para vigilar recaídas o complicaciones." }
    ],
    image: "/enfermedades/Anemia_Aplasica.png",
    relatedServices: ["ser-001", "ser-002", "ser-006", "ser-007"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-003", "sym-006", "sym-013", "sym-014", "sym-015"],
    seo: {
      title: "Anemia Aplásica Infantil | Falla Medular CDMX",
      description: "Diagnóstico y alternativas de tratamiento para la anemia aplásica en niños con la Dra. Lizbeth Hernández, Hematóloga Pediatra.",
      keywords: ["Anemia aplásica en niños CDMX", "Falla de médula ósea infantil", "Hematólogo pediatra experto"],
    }
  },
  {
    id: "enf-004",
    slug: "anemia-hemolitica",
    name: "Anemia Hemolítica",
    description: "La anemia hemolítica ocurre cuando los glóbulos rojos se destruyen más rápido de lo que la médula ósea puede producirlos. Esto provoca que disminuya la cantidad de glóbulos rojos en la sangre y aparezcan síntomas como palidez, cansancio e ictericia (color amarillo en piel y ojos).",
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
      { question: "¿Por qué se ponen amarillos los ojos del niño?", answer: "Cuando los glóbulos rojos se destruyen más rápido de lo normal, aumenta la cantidad de bilirrubina en la sangre. Esto puede hacer que los ojos y la piel se vean amarillos, una condición llamada ictericia." },
      { question: "¿Es una enfermedad hereditaria?", answer: "Algunas formas de anemia hemolítica son hereditarias y se transmiten de padres a hijos. Otras son adquiridas y pueden aparecer por enfermedades autoinmunes, infecciones o algunos medicamentos." },
      { question: "¿Cómo se realiza el diagnóstico?", answer: "El diagnóstico se realiza mediante estudios de sangre que permiten identificar la causa de la destrucción de los glóbulos rojos. Estos incluyen biometría hemática, recuento de reticulocitos, bilirrubinas, deshidrogenasa láctica (DHL), haptoglobina, frotis de sangre periférica y, en algunos casos, la prueba de Coombs. Dependiendo de la sospecha clínica, pueden requerirse estudios especializados adicionales." }
    ],
    image: "/enfermedades/Anemia_Hemolitica.png",
    relatedServices: ["ser-003", "ser-006"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-008", "sym-011"],
    seo: {
      title: "Anemia Hemolítica en Niños | Hematóloga Pediatra CDMX",
      description: "Diagnóstico especializado y tratamiento de la anemia hemolítica e ictericia en niños y bebés. Dra. Lizbeth Hernández.",
      keywords: ["Anemia hemolítica infantil", "Niño con ojos amarillos causas", "Destrucción de glóbulos rojos niños"],
    }
  },
  {
    id: "enf-005",
    slug: "drepanocitosis",
    name: "Drepanocitosis",
    technicalName: "Anemia Falciforme",
    description: "La drepanocitosis o anemia falciforme es un trastorno hereditario autosómico recesivo causado por una mutación puntual en el gen de la β-globina (HBB), que produce hemoglobina S (HbS), una hemoglobina anormal que altera la forma y función de los glóbulos rojos.",
    symptoms: ["Crisis de dolor severo (huesos, abdomen y pecho)", "Fatiga y palidez constante", "Hinchazón dolorosa de manos y pies (dactilitis)", "Infecciones bacterianas recurrentes", "Retraso en el crecimiento"],
    causes: ["Mutación puntual que produce una hemoglobina anormal, heredada de ambos padres y que afecta la producción de las cadenas de beta-hemoglobina"],
    riskFactors: [
      "Antecedentes familiares de rasgo falciforme o drepanocitosis.",
      "Ascendencia africana, caribeña, mediterránea, de Medio Oriente o de algunas regiones de América Latina."
    ],
    complications: ["Accidente cerebrovascular a temprana edad", "Síndrome torácico agudo (infiltrado pulmonar grave)", "Daño orgánico crónico en riñones, bazo y articulaciones"],
    treatments: ["Medicamentos para prevenir las crisis de dolor", "Vacunación completa y antibióticos profilácticos", "Transfusiones de sangre y trasplante de médula ósea"],
    faqs: [
      { question: "¿Por qué causa tanto dolor?", answer: "Los glóbulos rojos rígidos y con forma de hoz se atoran en los vasos sanguíneos pequeños, bloqueando el flujo de sangre y oxígeno a los tejidos, lo que provoca dolor agudo e inflamación." },
      { question: "¿Se puede curar definitivamente la drepanocitosis?", answer: "El único tratamiento curativo actual es el trasplante de médula ósea (células madre), el cual se valora de forma individual según el caso clínico del paciente." },
      { question: "¿Cómo se detecta esta enfermedad en bebés?", answer: "Se puede detectar mediante el tamiz neonatal metabólico ampliado y se confirma con una electroforesis de hemoglobina." }
    ],
    image: "/enfermedades/Drepanocitosis.png",
    relatedServices: ["ser-003", "ser-006", "ser-007"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-007", "sym-012"],
    ctaQuestion: "¿Tu hijo ha sido diagnosticado con drepanocitosis o presenta síntomas compatibles con esta enfermedad?",
    ctaAnswer: "La detección y el seguimiento tempranos son fundamentales para prevenir complicaciones y mejorar la calidad de vida de los niños con drepanocitosis. La Dra. Lizbeth Hernández Verdugo puede ayudarte a comprender el diagnóstico y establecer el mejor plan de tratamiento para tu hijo.",
    seo: {
      title: "Drepanocitosis (Anemia Falciforme) en Niños | CDMX",
      description: "Manejo experto de la anemia falciforme y crisis de dolor en niños. Consulta con la Dra. Lizbeth Hernández, Hematóloga Pediatra.",
      keywords: ["Anemia falciforme niños CDMX", "Drepanocitosis infantil tratamiento", "Crisis de dolor hematológicas"],
    }
  },
  {
    id: "enf-006",
    slug: "talasemia",
    name: "Talasemia",
    description: "Las talasemias son un grupo de trastornos sanguíneos hereditarios caracterizados por una producción deficiente o nula de una o más cadenas de globina de la hemoglobina, lo que causa anemia de intensidad variable.",
    symptoms: [
      "Palidez.",
      "Cansancio o fatiga fácil.",
      "Irritabilidad.",
      "Falta de apetito.",
      "Retraso en el crecimiento y desarrollo.",
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
      "Trasplante de progenitores hematopoyéticos en casos seleccionados"
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
    }
  },
  {
    id: "enf-007",
    slug: "esferocitosis-hereditaria",
    name: "Esferocitosis Hereditaria",
    description: "La esferocitosis hereditaria es una anemia hemolítica congénita causada por alteraciones genéticas en las proteínas de la membrana de los glóbulos rojos. Estas células adquieren una forma esférica, son menos flexibles y se destruyen principalmente en el bazo. La mayoría de los casos se heredan de forma autosómica dominante, aunque existen formas recesivas menos frecuentes.",
    symptoms: [
      "Palidez en piel y mucosas",
      "Ictericia intermitente",
      "Crecimiento del bazo (esplenomegalia)",
      "Cansancio recurrente",
      "Desarrollo de piedras en la vesícula (colelitiasis)",
      "Orina oscura ocasional",
      "Ictericia neonatal prolongada o intensa",
      "Retraso en el crecimiento (en casos moderados o graves)"
    ],
    causes: ["Mutación genética hereditaria (generalmente autosómica dominante) que altera las proteínas estructurales espectrina, anquirina o banda 3 del glóbulo rojo"],
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
      { question: "¿Cómo se realiza el diagnóstico?", answer: "El diagnóstico se realiza mediante biometría hemática, frotis de sangre periférica y pruebas especializadas como la citometría con eosina-5-maleimida (EMA), considerada actualmente una de las pruebas más sensibles para confirmar la enfermedad." },
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
    }
  },
  {
    id: "enf-008",
    slug: "hemofilia-infantil",
    name: "Hemofilia Infantil",
    description: "Es un trastorno hereditario de la coagulación causado por la deficiencia de un factor de coagulación: la Hemofilia A se debe al déficit de factor VIII y la Hemofilia B al déficit de factor IX.",
    symptoms: [
      "Moretones fáciles o grandes.",
      "Sangrado prolongado después de heridas, procedimientos o extracciones dentales.",
      "Sangrado nasal frecuente.",
      "Hemorragias en articulaciones (hemartrosis) con dolor, inflamación y limitación del movimiento.",
      "Hemorragias musculares."
    ],
    causes: [
      "Cambios genéticos que provocan niveles bajos de ciertos factores de coagulación (deficiencia de factor VIII en Hemofilia A, y deficiencia de factor IX en Hemofilia B).",
      "Herencia de genes alterados de uno o ambos padres, generalmente de forma ligada al cromosoma X.",
      "Aparición por una mutación genética nueva (de novo) sin antecedentes familiares previos."
    ],
    riskFactors: [
      "Antecedentes familiares de hemofilia u otros trastornos hemorrágicos hereditarios.",
      "Tener familiares portadores de la enfermedad.",
      "Sexo masculino (la hemofilia clásica afecta principalmente a los niños debido a su herencia ligada al cromosoma X)."
    ],
    complications: ["Daño articular crónico por sangrados repetitivos (artropatía hemofílica)", "Hemorragias internas espontáneas de difícil control"],
    treatments: [
      "Tratamiento a demanda: se administra el factor cuando ocurre un sangrado.",
      "Profilaxis: administración regular de factor VIII o IX para prevenir hemorragias.",
      "La profilaxis es el estándar de cuidado en muchos niños con hemofilia grave porque disminuye sangrados y daño articular."
    ],
    faqs: [
      { question: "¿La hemofilia se cura?", answer: "No tiene cura definitiva actualmente, pero los tratamientos de reemplazo profiláctico permiten que los niños lleven una vida normal y activa." },
      { question: "¿Se puede diagnosticar desde el nacimiento?", answer: "Sí, mediante pruebas especiales de coagulación que miden la actividad de los factores en sangre de cordón umbilical o periférica." },
      { question: "¿Qué tipo de ejercicio puede hacer un niño con hemofilia?", answer: "Se recomiendan deportes de bajo impacto como la natación, y se desaconsejan totalmente los deportes de colisión o contacto." }
    ],
    image: "/enfermedades/Hemofilia_Infantil.png",
    relatedServices: ["ser-005"],
    relatedSymptoms: ["sym-003", "sym-010", "sym-014", "sym-015"],
    seo: {
      title: "Tratamiento de Hemofilia en Niños | Hematología CDMX",
      description: "Control experto y profilaxis para niños con hemofilia A o B. Especialista en coagulación Dra. Lizbeth Hernández.",
      keywords: ["Hemofilia infantil tratamiento CDMX", "Sangrado en articulaciones niños", "Factores de coagulación pediatría"],
    }
  },
  {
    id: "enf-009",
    slug: "deficiencia-g6pd",
    name: "Deficiencia de G6PD",
    technicalName: "Deficiencia de Glucosa-6-Fosfato Deshidrogenasa",
    description: "La deficiencia de G6PD es un trastorno genético caracterizado por la escasez de la enzima glucosa-6-fosfato deshidrogenasa en los glóbulos rojos, lo que los hace vulnerables a romperse ante el estrés oxidativo provocado por ciertos medicamentos, infecciones o alimentos.",
    symptoms: [
      "Palidez repentina",
      "Color amarillo en piel y ojos (ictericia)",
      "Orina oscura (color té o coca-cola)",
      "Cansancio o debilidad",
      "Taquicardia",
      "Dificultad para respirar en casos graves",
      "Dolor abdominal o dolor de espalda durante una crisis hemolítica"
    ],
    causes: ["Mutación genética hereditaria ligada al cromosoma X, que reduce la actividad o estabilidad de la enzima protectora G6PD"],
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
      "Evitar medicamentos y alimentos que desencadenen hemólisis",
      "Tratar oportunamente las infecciones",
      "Mantener una adecuada hidratación durante las crisis",
      "Vigilancia médica y estudios de laboratorio cuando aparezcan síntomas",
      "Transfusión de sangre en casos graves de anemia hemolítica"
    ],
    faqs: [
      { question: "¿Qué es el favismo?", answer: "Es la reacción hemolítica grave que sufren las personas con deficiencia de G6PD tras ingerir habas (o incluso inhalar el polen de la planta de habas), debido a sustancias químicas en ellas que oxidan la sangre." },
      { question: "¿Qué medicamentos no debe tomar mi hijo?", answer: "Debe evitar las sulfonamidas, ciertos antipalúdicos, algunos analgésicos y sustancias como la naftalina. Se le entregará a la familia una lista detallada y actualizada de medicamentos seguros y prohibidos." },
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
    }
  },
  {
    id: "enf-010",
    slug: "enfermedad-von-willebrand",
    name: "Enfermedad de Von Willebrand",
    description: "La enfermedad de von Willebrand es el trastorno hereditario de la coagulación más frecuente. Ocurre cuando el factor von Willebrand está disminuido o no funciona correctamente, lo que dificulta que las plaquetas formen un coágulo adecuado y puede provocar sangrados más prolongados de lo normal",
    symptoms: [
      "Moretones frecuentes o excesivos",
      "Sangrados nasales repetidos o difíciles de detener",
      "Sangrado prolongado después de extracciones dentales o cirugías",
      "Sangrado de encías",
      "Menstruaciones abundantes en adolescentes",
      "En casos más graves, sangrado gastrointestinal o articular"
    ],
    causes: ["La mayoría de los casos son hereditarios y se transmiten de padres a hijos. En raras ocasiones puede aparecer sin antecedentes familiares o adquirirse posteriormente por otras enfermedades"],
    riskFactors: ["Padres con diagnóstico de la enfermedad o síntomas de sangrado anormal inexplicado"],
    complications: ["Anemia crónica por pérdidas de sangre recurrentes", "Hemorragias graves tras procedimientos menores", "Dolor e inflamación articular (en tipos graves)"],
    treatments: ["Medicamentos para elevar temporalmente los niveles del factor de coagulación", "Antifibrinolíticos para controlar sangrados locales en boca o nariz", "Concentrados purificados de factor Von Willebrand en casos severos o cirugías"],
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
      }
    ],
    image: "/enfermedades/Enfermedad_Von_Willebrand.png",
    relatedServices: ["ser-005"],
    relatedSymptoms: ["sym-003", "sym-010", "sym-014", "sym-015", "sym-016"],
    seo: {
      title: "Enfermedad de Von Willebrand Infantil | Hematología CDMX",
      description: "Diagnóstico y manejo de sangrados frecuentes y enfermedad de Von Willebrand en niños y adolescentes. Dra. Lizbeth Hernández.",
      keywords: ["Enfermedad de Von Willebrand niños", "Sangrado de nariz frecuente niños", "Hematólogo pediatra experto CDMX"],
    }
  },
  {
    id: "enf-011",
    slug: "leucemia-infantil",
    name: "Leucemia Infantil",
    description: "La leucemia infantil es el cáncer más común en la infancia. Se origina en la médula ósea, donde se producen glóbulos blancos anormales de manera descontrolada, afectando la producción de células sanas como glóbulos rojos y plaquetas.",
    symptoms: [
      "Fiebre prolongada o recurrente sin causa aparente",
      "Dolor constante en huesos o articulaciones",
      "Palidez extrema, cansancio y debilidad",
      "Aparición fácil de moretones o puntitos rojos en la piel (petequias)",
      "Sangrados frecuentes por la nariz o encías",
      "Ganglios inflamados en el cuello, axilas o ingle que no causan dolor"
    ],
    causes: ["Mutaciones o alteraciones en el ADN de las células de la médula ósea (no asociadas a causas hereditarias en su gran mayoría)"],
    riskFactors: ["Trastornos genéticos específicos (como el Síndrome de Down)", "Exposición previa a quimioterapia o radiaciones de alta intensidad"],
    complications: ["Infecciones graves por deficiencia de glóbulos blancos sanos", "Hemorragias severas por falta de plaquetas", "Anemia grave que limita las actividades cotidianas"],
    treatments: [
      "Quimioterapia combinada (intravenosa, oral e intratecal)",
      "Soporte transfusional con glóbulos rojos o plaquetas",
      "Antibióticos y antimicóticos para el control y prevención de infecciones",
      "Trasplante de médula ósea en casos de alto riesgo o recaída"
    ],
    faqs: [
      {
        question: "¿Qué es la leucemia infantil y cómo afecta al cuerpo?",
        answer: "Es un cáncer de la sangre que se origina en la médula ósea. Al producirse glóbulos blancos anormales (blastos) de manera descontrolada, estos desplazan a las células sanguíneas sanas. Esto causa anemia (por falta de glóbulos rojos), infecciones (por falta de defensas) y sangrados (por falta de plaquetas)."
      },
      {
        question: "¿Cuáles son los principales síntomas de alarma?",
        answer: "Los síntomas clave son fiebre inexplicable y prolongada, palidez persistente, dolor óseo o articular que puede despertar al niño por las noches, moretones espontáneos, petequias y sangrados de nariz o encías. Ante la presencia de estos síntomas, se requiere una biometría hemática inmediata."
      },
      {
        question: "¿La leucemia en niños se puede curar?",
        answer: "Sí. Actualmente, las tasas de curación de la leucemia infantil son muy elevadas, superando el 85-90% en el tipo más común (leucemia linfoblástica aguda). El diagnóstico oportuno y el inicio rápido del tratamiento son fundamentales para el éxito terapéutico."
      }
    ],
    image: "/enfermedades/Leucemia_Linfoblastica_Aguda.png",
    relatedServices: ["ser-001", "ser-002", "ser-004", "ser-007"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-003", "sym-004", "sym-006", "sym-007", "sym-014", "sym-015"],
    seo: {
      title: "Leucemia Infantil | Hematóloga Pediatra CDMX",
      description: "Diagnóstico oportuno y tratamiento especializado para la leucemia infantil. Consulta experta con la Dra. Lizbeth Hernández.",
      keywords: ["Leucemia infantil síntomas", "Tipos de leucemia en niños", "Cáncer en la sangre infantil CDMX"],
    }
  },
  {
    id: "enf-012",
    slug: "adenopatia-infantil",
    name: "Adenopatías Pediátricas",
    technicalName: "Linfadenopatía Infantil",
    description: "Las adenopatías pediátricas consisten en el aumento de tamaño, cambio de consistencia o número de los ganglios linfáticos en los niños. Aunque comúnmente son una respuesta benigna a infecciones, requieren evaluación médica experta para descartar patologías hematológicas graves.",
    symptoms: ["Bultos palpables o visibles en el cuello, nuca, axilas o ingle", "Dolor local en los ganglios afectados", "Enrojecimiento o calor en la piel sobre el ganglio", "Fiebre asociada a infecciones respiratorias o de oído"],
    causes: ["Infecciones virales frecuentes (faringitis, mononucleosis, etc.) o bacterianas", "Inflamación reactiva benigna", "Enfermedades hematológicas como leucemias o linfomas"],
    riskFactors: ["Contacto con personas enfermas de vías respiratorias", "Rasguños de gatos o picaduras de insectos infectadas"],
    complications: ["Formación de abscesos que requieren drenaje quirúrgico", "Retraso en el diagnóstico de procesos oncohematológicos si no se vigila correctamente"],
    treatments: ["Tratamiento antibiótico o antiviral si hay infección demostrada", "Vigilancia clínica periódica", "Biopsia de ganglio en casos de sospecha oncológica"],
    faqs: [
      { question: "¿Cuándo debo preocuparme por un ganglio inflamado?", answer: "Debe preocuparse y acudir a revisión si el ganglio mide más de 2 centímetros, es duro, no se mueve al palparlo, no causa dolor, se acompaña de pérdida de peso o fiebre prolongada, o no disminuye de tamaño en 4 a 6 semanas." },
      { question: "¿Por qué se inflaman los ganglios tan seguido en niños?", answer: "El sistema inmunitario de los niños está activo y en constante aprendizaje. Los ganglios son estaciones de defensa que se activan ante cualquier virus o bacteria común." },
      { question: "¿Se deben dar antibióticos de inmediato?", answer: "No, la mayoría son reactivas a infecciones virales que no requieren antibióticos. El uso indiscriminado de antibióticos automedicados puede ocultar infecciones bacterianas o retrasar diagnósticos." }
    ],
    image: "/enfermedades/Adenopatias_Pediatricas.png",
    relatedServices: ["ser-003"],
    relatedSymptoms: ["sym-004", "sym-006"],
    seo: {
      title: "Adenopatías en Niños (Ganglios Inflamados) | CDMX",
      description: "Evaluación diagnóstica y tratamiento de ganglios inflamados en bebés y niños. Consulta con la Dra. Lizbeth Hernández.",
      keywords: ["Adenopatías infantiles CDMX", "Ganglios inflamados en el cuello niños", "Cuándo preocuparse por un ganglio"],
    }
  },
  {
    id: "enf-013",
    slug: "petequias-purpura",
    name: "Petequias y Púrpura",
    description: "Las petequias (puntos rojos milimétricos) y la púrpura (manchas moradas más grandes) son manifestaciones en la piel causadas por la salida de glóbulos rojos de los vasos sanguíneos hacia el tejido subcutáneo, lo que suele indicar una alteración en la cantidad o función de las plaquetas o inflamación de los vasos.",
    symptoms: ["Puntos rojos pequeños que no desaparecen al presionarlos", "Manchas moradas de formas diversas en la piel", "Sangrados asociados en encías o nariz", "Molestias articulares en algunos casos"],
    causes: ["Plaquetas bajas (trombocitopenia)", "Vasculitis (inflamación de los vasos sanguíneos pequeños, como en la Púrpura de Henoch-Schönlein)", "Traumatismos o infecciones graves"],
    riskFactors: ["Infecciones virales previas", "Exposición a ciertos fármacos", "Defectos en la coagulación"],
    complications: ["Hemorragias internas espontáneas si las plaquetas son extremadamente bajas", "Afectación de órganos internos en vasculitis sistémicas (ej. riñones)"],
    treatments: ["Manejo del trastorno subyacente (como PTI o vasculitis)", "Reposo y control sintomático", "Tratamiento inmunosupresor o de soporte transfusional en casos severos"],
    faqs: [
      { question: "¿Cómo distingo una petequia de una picadura?", answer: "Una forma sencilla es presionar la mancha firmemente con un dedo o un vaso de vidrio transparente. Si la mancha se vuelve blanca o desaparece momentáneamente, no es petequia. Si permanece roja o morada sin cambiar, es una petequia (sangrado bajo la piel)." },
      { question: "¿Las petequias son una urgencia médica?", answer: "Sí, la aparición súbita de petequias en un niño sin golpe previo debe ser evaluada de inmediato por un especialista en hematología pediátrica para realizar una biometría hemática de urgencia." },
      { question: "¿Tiene que ver con la alimentación del niño?", answer: "Generalmente no se debe a la alimentación, sino a trastornos inmunitarios, plaquetarios o infecciosos que deben ser estudiados clínicamente." }
    ],
    image: "/enfermedades/Petequias_Purpura.png",
    relatedServices: ["ser-003", "ser-006"],
    relatedSymptoms: ["sym-003", "sym-010"],
    seo: {
      title: "Petequias y Púrpura en Niños | Hematóloga CDMX",
      description: "Diagnóstico urgente y tratamiento de manchas moradas y puntos rojos en la piel de niños. Dra. Lizbeth Hernández.",
      keywords: ["Petequias en niños causas", "Púrpura de Henoch-Schönlein CDMX", "Puntos rojos en la piel niños urgencia"],
    }
  },
  {
    id: "enf-014",
    slug: "leucemia-linfoblastica-aguda",
    name: "Leucemia Linfoblástica Aguda",
    description: "La leucemia linfoblástica aguda es el cáncer más común en la infancia. Se origina en la médula ósea, donde se producen demasiados glóbulos blancos inmaduros, afectando la producción de células sanas.",
    symptoms: ["Fiebre prolongada sin causa aparente", "Dolor en huesos o articulaciones", "Palidez intensa y fatiga", "Moretones fáciles o sangrados", "Ganglios inflamados en el cuello"],
    causes: ["Mutaciones genéticas en las células precursoras de la médula ósea (no son hereditarias en la mayoría de los casos)"],
    riskFactors: ["Factores genéticos específicos como el Síndrome de Down", "Exposición previa a radiaciones ionizantes"],
    complications: ["Infecciones severas por falta de defensas", "Anemia grave y sangrados", "Invasión al sistema nervioso central si no se recibe quimioterapia intratecal"],
    treatments: ["Quimioterapia intravenosa e intratecal", "Soporte transfusional de sangre y plaquetas", "Antibióticos para el control de infecciones"],
    faqs: [
      { question: "¿Cuál es la tasa de curación en niños?", answer: "Actualmente, gracias a los avances médicos, más del noventa por ciento de los niños con leucemia linfoblástica aguda logran curarse por completo." },
      { question: "¿Cómo se confirma el diagnóstico?", answer: "Se confirma de forma definitiva mediante un aspirado de médula ósea y estudios especializados como inmunofenotipo y genética celular." },
      { question: "¿El tratamiento requiere hospitalización?", answer: "Sí, requiere periodos de hospitalización para la administración de quimioterapia y el manejo de los efectos secundarios." }
    ],
    image: "/enfermedades/Leucemia_Linfoblastica_Aguda.png",
    relatedServices: ["ser-001", "ser-002", "ser-004", "ser-006", "ser-007"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-003", "sym-004", "sym-006", "sym-007", "sym-014", "sym-015"],
    seo: {
      title: "Leucemia Linfoblástica Aguda Infantil | Hematóloga CDMX",
      description: "Diagnóstico oportuno y manejo integral de la leucemia infantil. Consulta experta con la Dra. Lizbeth Hernández, Hematóloga Pediatra.",
      keywords: ["Leucemia infantil síntomas CDMX", "Aspirado de médula ósea leucemia", "Cáncer en la sangre niños"],
    }
  },
  {
    id: "enf-015",
    slug: "trombosis-infantil",
    name: "Trombosis en Niños",
    technicalName: "Trombosis Venosa o Arterial Pediátrica",
    description: "La trombosis en niños es un trastorno poco común pero grave, caracterizado por la formación de un coágulo de sangre (trombo) dentro de un vaso sanguíneo (vena o arteria), obstruyendo la circulación normal de la sangre.",
    symptoms: ["Hinchazón dolorosa en una extremidad (brazo o pierna)", "Piel de la zona afectada enrojecida, morada o pálida", "Sensación de calor en la extremidad inflamada", "Dolor de pecho o dificultad respiratoria súbita (sospecha de trombo en pulmón)"],
    causes: ["Presencia de catéteres venosos centrales (causa más frecuente en hospitales)", "Trastornos congénitos de la coagulación (trombofilias)", "Infecciones graves, cirugías o cáncer activo"],
    riskFactors: ["Uso prolongado de catéteres centrales", "Enfermedades inflamatorias crónicas", "Antecedentes familiares de trombosis a temprana edad"],
    complications: ["Embolia pulmonar (el coágulo viaja al pulmón, siendo una emergencia vital)", "Síndrome postrombótico (daño crónico y dolor en la vena afectada)", "Pérdida de perfusión y daño de tejidos"],
    treatments: ["Medicamentos anticoagulantes vigilados estrechamente", "Retiro guiado del catéter causante si es posible", "Medias de compresión y reposo controlado"],
    faqs: [
      { question: "¿Por qué a los niños les da trombosis?", answer: "A diferencia de los adultos, casi siempre ocurre como complicación de tener colocado un catéter venoso central para otros tratamientos médicos, o debido a una predisposición genética llamada trombofilia." },
      { question: "¿Los anticoagulantes ponen en riesgo al niño?", answer: "Tienen un riesgo de causar sangrado, por lo que requieren una dosificación muy precisa, monitoreo constante de laboratorio e indicación rigurosa por un hematólogo pediatra." },
      { question: "¿Qué es una trombofilia?", answer: "Es una condición hereditaria o adquirida en la que la sangre tiene una mayor tendencia natural a formar coágulos de forma inapropiada." }
    ],
    image: "/enfermedades/Trombosis_Niños.png",
    relatedServices: ["ser-005", "ser-007"],
    relatedSymptoms: ["sym-007"],
    seo: {
      title: "Trombosis en Niños y Trombofilias | Hematóloga CDMX",
      description: "Diagnóstico y tratamiento especializado de trombosis venosa y estudios de trombofilia en niños. Dra. Lizbeth Hernández.",
      keywords: ["Trombosis en niños causas", "Catéter venoso central complicaciones", "Trombofilia pediátrica CDMX"],
    }
  },
  {
    id: "enf-016",
    slug: "alteraciones-biometria-hematica",
    name: "Alteraciones en la Biometría Hemática",
    description: "Las alteraciones en la biometría hemática son hallazgos anormales en los análisis de laboratorio de sangre completa que indican desequilibrios en los glóbulos rojos, glóbulos blancos o plaquetas, requiriendo una evaluación hematológica para diagnosticar su causa origen.",
    symptoms: [
      "Puntos rojos en la piel (petequias) o moretones sin explicación",
      "Palidez extrema o cansancio inusual",
      "Fiebre persistente o infecciones frecuentes",
      "Sangrados de nariz o encías recurrentes"
    ],
    causes: [
      "Infecciones virales o bacterianas",
      "Deficiencias nutricionales (falta de hierro, vitamina B12 o ácido fólico)",
      "Enfermedades autoinmunes o destrucción celular acelerada",
      "Trastornos de la médula ósea (aplasia medular, leucemias o síndromes de falla medular)"
    ],
    riskFactors: [
      "Antecedentes familiares de anemias o trastornos hemorrágicos",
      "Uso reciente de ciertos medicamentos o tratamientos médicos",
      "Infecciones recientes o exposición a toxinas ambientales"
    ],
    complications: [
      "Retraso en la detección y tratamiento de enfermedades hematológicas graves",
      "Riesgo de hemorragias severas por recuentos plaquetarios muy bajos",
      "Mayor susceptibilidad a infecciones graves por neutropenia"
    ],
    treatments: [
      "Evaluación clínica completa por un hematólogo pediatra",
      "Frotis de sangre periférica para análisis morfológico de las células",
      "Estudios confirmatorios específicos de laboratorio o genéticos",
      "Aspirado o biopsia de médula ósea en caso de sospecha de falla medular"
    ],
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
      }
    ],
    image: "/enfermedades/Alteraciones_Biometria_Hematica.png",
    relatedServices: ["ser-003", "ser-005", "ser-006"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-003", "sym-004", "sym-006", "sym-013"],
    seo: {
      title: "Alteraciones en la Biometría Hemática Pediátrica | CDMX",
      description: "Diagnóstico y análisis experto de alteraciones en plaquetas, leucocitos o hemoglobina en niños. Consulta con la Dra. Lizbeth Hernández.",
      keywords: ["Biometría hemática alterada niños", "Plaquetas bajas pediatra CDMX", "Leucocitos altos infantil"]
    }
  },
  {
    id: "enf-017",
    slug: "neutropenia-infantil",
    name: "Neutropenia en Niños",
    description: "La neutropenia es la disminución anormal en la cantidad de neutrófilos, un tipo de glóbulo blanco esencial para combatir infecciones bacterianas y fúngicas. En los niños, esto aumenta el riesgo de contraer infecciones que pueden ser recurrentes o graves.",
    symptoms: [
      "Fiebre persistente o inexplicable",
      "Infecciones de oído, garganta o piel recurrentes",
      "Úlceras o llagas dolorosas en la boca (aftas)",
      "Inflamación o sangrado de encías (gingivitis)",
      "Retraso en la cicatrización de heridas o infecciones cutáneas frecuentes"
    ],
    causes: [
      "Infecciones virales previas o activas (causa más común y temporal)",
      "Neutropenia autoinmune (destrucción de neutrófilos por anticuerpos)",
      "Efectos secundarios de medicamentos (incluida la quimioterapia)",
      "Problemas en la médula ósea (como aplasia medular o leucemias)",
      "Trastornos genéticos o congénitos raros (como la neutropenia congénita severa)"
    ],
    riskFactors: [
      "Infecciones virales recientes (gripe, varicela, etc.)",
      "Tratamientos médicos activos como quimioterapia o ciertos anticonvulsivos",
      "Antecedentes de enfermedades autoinmunes",
      "Predisposición genética"
    ],
    complications: [
      "Infecciones bacterianas graves o generalizadas (septicemia)",
      "Fiebre neutropénica (considerada una urgencia médica)",
      "Hospitalizaciones frecuentes por infecciones de difícil control"
    ],
    treatments: [
      "Tratamiento antibiótico o antimicótico inmediato ante sospecha de infección",
      "Factores estimulantes de colonias de granulocitos (G-CSF) para elevar los neutrófilos",
      "Suspensión o cambio de medicamentos causantes",
      "Seguimiento estrecho con biometrías hemáticas periódicas"
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
      }
    ],
    image: "/enfermedades/Neutropenia_Niños.png",
    relatedServices: ["ser-003", "ser-006", "ser-007"],
    relatedSymptoms: ["sym-006", "sym-013"],
    seo: {
      title: "Neutropenia en Niños | Defensas Bajas CDMX",
      description: "Diagnóstico y tratamiento de la neutropenia y fiebre neutropénica en niños con la Dra. Lizbeth Hernández, Hematóloga Pediatra.",
      keywords: ["Neutropenia infantil CDMX", "Glóbulos blancos bajos niños", "Fiebre neutropénica urgencia"]
    }
  }
];
