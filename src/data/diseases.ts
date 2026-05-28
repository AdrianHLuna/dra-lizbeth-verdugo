import { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "enf-001",
    slug: "anemia-ferropenica",
    name: "Anemia Ferropénica",
    description: "La anemia ferropénica es la disminución de los niveles de hemoglobina y glóbulos rojos en la sangre debido a la falta de hierro, el mineral necesario para producir hemoglobina en el cuerpo del niño.",
    symptoms: ["Fatiga y cansancio excesivo", "Palidez en piel y encías", "Irritabilidad", "Falta de apetito", "Uñas quebradizas"],
    causes: ["Bajo consumo de alimentos ricos en hierro", "Pérdidas de sangre crónicas", "Crecimiento rápido en lactantes y adolescentes"],
    riskFactors: ["Nacimiento prematuro o bajo peso al nacer", "Introducción tardía de alimentos sólidos", "Consumo excesivo de leche de vaca en menores de un año"],
    complications: ["Retraso en el desarrollo psicomotor", "Problemas de aprendizaje y concentración", "Debilidad del sistema inmunitario con propensión a infecciones"],
    treatments: ["Suplementación de hierro por vía oral", "Modificaciones dietéticas con alimentos ricos en hierro y vitamina C", "Identificación y tratamiento de la causa de pérdida de hierro"],
    faqs: [
      { question: "¿Cuánto tiempo dura el tratamiento con hierro?", answer: "Suele durar entre 3 y 6 meses. Es fundamental continuarlo incluso si el niño ya no se ve pálido, para rellenar las reservas de hierro del cuerpo." },
      { question: "¿La leche de vaca puede causar anemia?", answer: "Sí, el consumo excesivo de leche de vaca (más de 500 mililitros al día) interfiere con la absorción del hierro en el intestino de los niños pequeños." },
      { question: "¿Cómo se diagnostica de forma certera?", answer: "Se diagnostica mediante una biometría hemática completa, perfil de hierro y la interpretación experta de un hematólogo pediatra." }
    ],
    image: "/enfermedades/anemia_ferropenica.png",
    relatedServices: ["ser-003"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-005"],
    seo: {
      title: "Anemia Ferropénica en Niños | Hematóloga Pediatra CDMX",
      description: "Diagnóstico y tratamiento de la anemia ferropénica por falta de hierro en bebés y niños. Consulta con la Dra. Lizbeth Hernandez.",
      keywords: ["Anemia ferropénica infantil CDMX", "Falta de hierro en niños", "Tratamiento de anemia en lactantes"],
    }
  },
  {
    id: "enf-002",
    slug: "trombocitopenia-inmune-pti",
    name: "Trombocitopenia Inmune",
    technicalName: "Púrpura Trombocitopénica Inmune",
    description: "La trombocitopenia inmune es un trastorno sanguíneo caracterizado por una disminución anormal del número de plaquetas en la sangre debido a que el sistema inmunitario del propio niño las destruye.",
    symptoms: ["Aparición de moretones fáciles sin causa", "Petequias que son pequeños puntos rojos en la piel", "Sangrados nasales frecuentes", "Sangrado de encías"],
    causes: ["Reacción inmunitaria desencadenada por una infección viral previa", "Desregulación del sistema inmunitario del niño"],
    riskFactors: ["Infecciones virales recientes como gripe o varicela", "Predisposición genética a trastornos autoinmunes"],
    complications: ["Hemorragias graves espontáneas en órganos internos (poco frecuentes pero de alto riesgo)", "Ansiedad familiar por riesgo de sangrado"],
    treatments: ["Vigilancia clínica estrecha en casos leves", "Inmunoglobulina intravenosa", "Medicamentos corticoesteroides bajo estricto control médico"],
    faqs: [
      { question: "¿El niño puede realizar actividades físicas normales?", answer: "Se deben evitar los deportes de contacto o actividades con alto riesgo de caídas y golpes mientras las plaquetas estén bajas, para prevenir hemorragias." },
      { question: "¿Esta enfermedad se vuelve crónica?", answer: "En la mayoría de los niños, la trombocitopenia inmune se resuelve por completo en menos de seis meses. Solo una minoría desarrolla la forma crónica." },
      { question: "¿Requiere transfusión de plaquetas?", answer: "Generalmente no, ya que el sistema inmune destruiría rápidamente las plaquetas transfundidas. Se reserva solo para emergencias extremas." }
    ],
    image: "/enfermedades/Trombocitopenia_Inmune.png",
    relatedServices: ["ser-001", "ser-003", "ser-005"],
    relatedSymptoms: ["sym-003", "sym-005", "sym-010"],
    seo: {
      title: "Trombocitopenia Inmune en Niños | Púrpura Infantil CDMX",
      description: "Información y tratamiento especializado para la Púrpura Trombocitopénica Inmune (PTI) en niños con la Dra. Lizbeth Hernandez.",
      keywords: ["Trombocitopenia inmune niños", "Plaquetas bajas en niños causas", "Púrpura infantil tratamiento CDMX"],
    }
  },
  {
    id: "enf-003",
    slug: "anemia-aplasica",
    name: "Anemia Aplásica",
    description: "La anemia aplásica es un trastorno grave de la médula ósea en el cual esta deja de producir una cantidad suficiente de las tres clases de células sanguíneas: glóbulos rojos, glóbulos blancos y plaquetas.",
    symptoms: ["Fatiga extrema y palidez", "Moretones fáciles y sangrados espontáneos", "Infecciones frecuentes y fiebre", "Mareos y dificultad para respirar con esfuerzo"],
    causes: ["Destrucción autoinmune de las células madre de la médula ósea", "Exposición a toxinas químicas o ciertos medicamentos", "Infecciones virales graves"],
    riskFactors: ["Tratamientos previos con radiación o quimioterapia", "Predisposición genética", "Exposición a pesticidas o benceno"],
    complications: ["Hemorragias graves", "Infecciones severas generalizadas (septicemia)", "Insuficiencia cardíaca por anemia crónica"],
    treatments: ["Transfusiones de soporte de glóbulos rojos y plaquetas", "Terapia inmunosupresora", "Trasplante de médula ósea (trasplante de células progenitoras)"],
    faqs: [
      { question: "¿Es lo mismo que leucemia?", answer: "No, la leucemia es la producción descontrolada de células cancerosas anormales. La anemia aplásica es la falta de producción de todo tipo de células debido a una médula ósea vacía." },
      { question: "¿Se puede curar con trasplante de médula ósea?", answer: "Sí, el trasplante de médula ósea de un donante compatible (generalmente un hermano) es el tratamiento curativo de elección para niños con esta enfermedad." },
      { question: "¿Cuánto dura el tratamiento inmunosupresor?", answer: "La respuesta al tratamiento inmunosupresor puede tardar varios meses, y el seguimiento médico se prolonga durante años." }
    ],
    image: "/enfermedades/Anemia_Aplasica.png",
    relatedServices: ["ser-001", "ser-002", "ser-005"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-003", "sym-005", "sym-006", "sym-013"],
    seo: {
      title: "Anemia Aplásica Infantil | Falla Medular CDMX",
      description: "Diagnóstico y alternativas de tratamiento para la anemia aplásica en niños con la Dra. Lizbeth Hernandez, Hematóloga Pediatra.",
      keywords: ["Anemia aplásica en niños CDMX", "Falla de médula ósea infantil", "Hematólogo pediatra experto"],
    }
  },
  {
    id: "enf-004",
    slug: "anemia-hemolitica",
    name: "Anemia Hemolítica",
    description: "La anemia hemolítica es un grupo de trastornos sanguíneos en los cuales los glóbulos rojos se destruyen prematuramente (antes de cumplir su vida útil de 120 días), superando la capacidad de la médula ósea para reemplazarlos.",
    symptoms: ["Ictericia (color amarillo en piel y ojos)", "Orina de color oscuro (como té o refresco de cola)", "Fatiga y palidez intensa", "Esplenomegalia (crecimiento del bazo)", "Dificultad respiratoria con el esfuerzo"],
    causes: ["Destrucción inmunitaria por anticuerpos que atacan los glóbulos rojos", "Defectos en la membrana o enzimas celulares", "Infecciones, toxinas o medicamentos desencadenantes"],
    riskFactors: ["Antecedentes familiares de anemias hereditarias", "Enfermedades autoinmunes", "Infecciones virales recientes"],
    complications: ["Cálculos biliares a temprana edad", "Crisis aplásicas por infecciones virales", "Anemia grave que requiere transfusiones de urgencia"],
    treatments: ["Medicamentos inmunosupresores (en casos autoinmunes)", "Transfusión segura de glóbulos rojos", "Esplenectomía en casos específicos"],
    faqs: [
      { question: "¿Por qué se ponen amarillos los ojos del niño?", answer: "Al destruirse rápidamente los glóbulos rojos, se libera una gran cantidad de bilirrubina (un pigmento amarillo) en la sangre, acumulándose en los ojos y la piel." },
      { question: "¿Es una enfermedad hereditaria?", answer: "Puede ser tanto hereditaria (debido a defectos genéticos en el glóbulo rojo) como adquirida (cuando el sistema inmune los ataca tras una infección o por medicamentos)." },
      { question: "¿Cómo se diagnostica de forma precisa?", answer: "Se realiza a través de pruebas de laboratorio que incluyen la prueba de Coombs (para causas inmunes), frotis de sangre periférica, niveles de bilirrubinas y reticulocitos." }
    ],
    image: "/enfermedades/Anemia_Hemolitica.png",
    relatedServices: ["ser-003", "ser-005"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-005", "sym-008", "sym-011"],
    seo: {
      title: "Anemia Hemolítica en Niños | Hematóloga Pediatra CDMX",
      description: "Diagnóstico especializado y tratamiento de la anemia hemolítica e ictericia en niños y bebés. Dra. Lizbeth Hernandez.",
      keywords: ["Anemia hemolítica infantil", "Niño con ojos amarillos causas", "Destrucción de glóbulos rojos niños"],
    }
  },
  {
    id: "enf-005",
    slug: "drepanocitosis",
    name: "Drepanocitosis",
    technicalName: "Anemia Falciforme",
    description: "La drepanocitosis o anemia falciforme es un trastorno genético hereditario de los glóbulos rojos. Causa que la hemoglobina sea anormal, deformando los glóbulos rojos en forma de hoz o media luna, lo que obstruye los vasos sanguíneos pequeños.",
    symptoms: ["Crisis de dolor severo (huesos, abdomen y pecho)", "Fatiga y palidez constante", "Hinchazón dolorosa de manos y pies (dactilitis)", "Infecciones bacterianas recurrentes", "Retraso en el crecimiento"],
    causes: ["Mutación genética heredada de ambos padres que afecta la producción de las cadenas de beta-hemoglobina"],
    riskFactors: ["Ambos padres portadores del rasgo falciforme", "Ascendencia de regiones de África, el Mediterráneo, el Caribe o Centroamérica"],
    complications: ["Accidente cerebrovascular a temprana edad", "Síndrome torácico agudo (infiltrado pulmonar grave)", "Daño orgánico crónico en riñones, bazo y articulaciones"],
    treatments: ["Medicamentos para prevenir las crisis de dolor", "Vacunación completa y antibióticos profilácticos", "Transfusiones de sangre y trasplante de médula ósea"],
    faqs: [
      { question: "¿Por qué causa tanto dolor?", answer: "Los glóbulos rojos rígidos y con forma de hoz se atoran en los vasos sanguíneos pequeños, bloqueando el flujo de sangre y oxígeno a los tejidos, lo que provoca dolor agudo e inflamación." },
      { question: "¿Se puede curar definitivamente la drepanocitosis?", answer: "El único tratamiento curativo actual es el trasplante de médula ósea (células madre), el cual se valora de forma individual según el caso clínico del paciente." },
      { question: "¿Cómo se detecta esta enfermedad en bebés?", answer: "Se puede detectar mediante el tamiz neonatal metabólico ampliado y se confirma con una electroforesis de hemoglobina." }
    ],
    image: "/enfermedades/Drepanocitosis.png",
    relatedServices: ["ser-003", "ser-005"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-007", "sym-012"],
    seo: {
      title: "Drepanocitosis (Anemia Falciforme) en Niños | CDMX",
      description: "Manejo experto de la anemia falciforme y crisis de dolor en niños. Consulta con la Dra. Lizbeth Hernandez, Hematóloga Pediatra.",
      keywords: ["Anemia falciforme niños CDMX", "Drepanocitosis infantil tratamiento", "Crisis de dolor hematológicas"],
    }
  },
  {
    id: "enf-006",
    slug: "talasemia",
    name: "Talasemia",
    description: "Las talasemias son un grupo de trastornos sanguíneos hereditarios caracterizados por una producción deficiente o nula de una o más cadenas de globina de la hemoglobina, lo que causa anemia de intensidad variable.",
    symptoms: ["Palidez marcada y fatiga crónica", "Crecimiento del hígado y el bazo (visceromegalia)", "Deformidades óseas en el rostro", "Retraso en el crecimiento y desarrollo", "Orina oscura"],
    causes: ["Mutaciones o deleciones genéticas en los genes responsables de la síntesis de cadenas alfa o beta de globina"],
    riskFactors: ["Antecedentes familiares de talasemia", "Ascendencia mediterránea, asiática o del Medio Oriente"],
    complications: ["Sobrecarga de hierro en el cuerpo (hemocromatosis) por transfusiones repetidas", "Problemas cardíacos y óseos", "Mayor riesgo de infecciones severas"],
    treatments: ["Transfusiones de sangre programadas (en formas mayores)", "Terapia de quelación de hierro para evitar toxicidad", "Suplementación con ácido fólico"],
    faqs: [
      { question: "¿Cuál es la diferencia entre talasemia menor y mayor?", answer: "La talasemia menor es un rasgo portador generalmente asintomático. La talasemia mayor es la forma grave que requiere transfusiones periódicas de por vida para que el niño pueda sobrevivir." },
      { question: "¿Qué es la terapia de quelación?", answer: "Es un tratamiento con medicamentos que ayudan a eliminar el exceso de hierro del cuerpo del niño, acumulado principalmente a causa de las transfusiones frecuentes." },
      { question: "¿Un niño con talasemia menor necesita tomar hierro?", answer: "No, la talasemia menor suele confundirse con anemia por falta de hierro, pero darles hierro es un error grave ya que no les hace falta y puede provocar sobrecarga tóxica de este mineral." }
    ],
    image: "/enfermedades/Talasemia.png",
    relatedServices: ["ser-003", "ser-005"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-008", "sym-012"],
    seo: {
      title: "Talasemia Infantil y Tratamiento de Sobrecarga de Hierro | CDMX",
      description: "Diagnóstico diferencial y control integral de la talasemia en niños. Dra. Lizbeth Hernandez, Especialista en Hematología Pediátrica.",
      keywords: ["Talasemia en niños CDMX", "Terapia de quelación de hierro", "Electroforesis de hemoglobina niños"],
    }
  },
  {
    id: "enf-007",
    slug: "esferocitosis-hereditaria",
    name: "Esferocitosis Hereditaria",
    description: "La esferocitosis hereditaria es una anemia hemolítica congénita causada por un defecto genético en las proteínas de la membrana de los glóbulos rojos, haciendo que adopten una forma de esfera rígida (esferocito) y sean destruidos por el bazo.",
    symptoms: ["Palidez en piel y mucosas", "Ictericia intermitente", "Crecimiento del bazo (esplenomegalia)", "Cansancio recurrente", "Desarrollo de piedras en la vesícula (colelitiasis)"],
    causes: ["Mutación genética hereditaria (generalmente autosómica dominante) que altera las proteínas estructurales espectrina, anquirina o banda 3 del glóbulo rojo"],
    riskFactors: ["Padre o madre diagnosticados con esferocitosis hereditaria o con historia de extirpación del bazo"],
    complications: ["Crisis aplásicas causadas por infecciones virales (ej. parvovirus B19)", "Piedras en la vesícula biliar a edades muy tempranas", "Anemia severa"],
    treatments: ["Suplementación diaria con ácido fólico", "Transfusiones de glóbulos rojos en crisis anémicas", "Esplenectomía (extirpación del bazo) preferiblemente después de los 5 o 6 años"],
    faqs: [
      { question: "¿Por qué el bazo destruye estos glóbulos rojos?", answer: "El bazo actúa como un filtro. Los glóbulos rojos normales son flexibles y pueden pasar por conductos estrechos; los esferocitos son rígidos y esféricos, por lo que quedan atrapados en el bazo y son destruidos." },
      { question: "¿Siempre se debe retirar el bazo en estos niños?", answer: "No, la cirugía se reserva para casos moderados a graves con crisis anémicas frecuentes o retraso en el crecimiento. En casos leves, solo se mantiene vigilancia médica estrecha." },
      { question: "¿Cómo se confirma esta condición?", answer: "Se diagnostica observando los esferocitos en el frotis de sangre periférica, y mediante pruebas especializadas como la de fragilidad osmótica o la prueba de EMA por citometría." }
    ],
    image: "/enfermedades/Esferocitosis_Hereditaria.png",
    relatedServices: ["ser-003", "ser-005"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-008", "sym-011"],
    seo: {
      title: "Esferocitosis Hereditaria en Niños | Hematología CDMX",
      description: "Diagnóstico y control de la esferocitosis hereditaria y esplenectomía en pacientes pediátricos. Dra. Lizbeth Hernandez.",
      keywords: ["Esferocitosis hereditaria niños", "Fragilidad osmótica estudio", "Esplenectomía pediátrica CDMX"],
    }
  },
  {
    id: "enf-008",
    slug: "hemofilia-infantil",
    name: "Hemofilia Infantil",
    description: "La hemofilia es un trastorno hemorrágico hereditario en el cual la sangre del niño no coagula de manera adecuada debido a la deficiencia de una proteína de la coagulación (factor ocho o factor nueve).",
    symptoms: ["Sangrados prolongados ante cortes pequeños", "Hematomas grandes en brazos o piernas", "Sangrado o inflamación dolorosa en articulaciones", "Sangrado espontáneo de nariz"],
    causes: ["Alteración o mutación genética en los cromosomas sexuales ligada al cromosoma X, transmitida de padres a hijos"],
    riskFactors: ["Antecedentes familiares de hemofilia", "Sexo masculino (afecta casi exclusivamente a varones)"],
    complications: ["Daño articular crónico por sangrados repetitivos (artropatía hemofílica)", "Hemorragias internas espontáneas de difícil control"],
    treatments: ["Reemplazo intravenoso del factor de coagulación faltante", "Fisioterapia para proteger las articulaciones", "Cuidados odontológicos especializados"],
    faqs: [
      { question: "¿La hemofilia se cura?", answer: "No tiene cura definitiva actualmente, pero los tratamientos de reemplazo profiláctico permiten que los niños lleven una vida normal y activa." },
      { question: "¿Se puede diagnosticar desde el nacimiento?", answer: "Sí, mediante pruebas especiales de coagulación que miden la actividad de los factores en sangre de cordón umbilical o periférica." },
      { question: "¿Qué tipo de ejercicio puede hacer un niño con hemofilia?", answer: "Se recomiendan deportes de bajo impacto como la natación, y se desaconsejan totalmente los deportes de colisión o contacto." }
    ],
    image: "/enfermedades/Hemofilia_Infantil.png",
    relatedServices: ["ser-005"],
    relatedSymptoms: ["sym-003", "sym-005", "sym-010"],
    seo: {
      title: "Tratamiento de Hemofilia en Niños | Hematología CDMX",
      description: "Control experto y profilaxis para niños con hemofilia A o B. Especialista en coagulación Dra. Lizbeth Hernandez.",
      keywords: ["Hemofilia infantil tratamiento CDMX", "Sangrado en articulaciones niños", "Factores de coagulación pediatría"],
    }
  },
  {
    id: "enf-009",
    slug: "deficiencia-g6pd",
    name: "Deficiencia de G6PD",
    technicalName: "Deficiencia de Glucosa-6-Fosfato Deshidrogenasa",
    description: "La deficiencia de G6PD es un trastorno genético caracterizado por la escasez de la enzima glucosa-6-fosfato deshidrogenasa en los glóbulos rojos, lo que los hace vulnerables a romperse ante el estrés oxidativo provocado por ciertos medicamentos, infecciones o alimentos.",
    symptoms: ["Palidez súbita e ictericia", "Orina oscura de color rojizo o marrón", "Fiebre y cansancio rápido", "Ritmo cardíaco acelerado (taquicardia)", "Dificultad para respirar"],
    causes: ["Mutación genética hereditaria ligada al cromosoma X, que reduce la actividad o estabilidad de la enzima protectora G6PD"],
    riskFactors: ["Antecedentes familiares de la deficiencia", "Sexo masculino", "Consumo de habas (favismo) o ciertos fármacos oxidantes"],
    complications: ["Anemia hemolítica aguda grave con riesgo de daño renal", "Necesidad de transfusiones de emergencia en crisis oxidativas"],
    treatments: ["Evitar estrictamente alimentos (habas, colorantes azules) y fármacos que causen estrés oxidativo", "Tratamiento rápido de infecciones desencadenantes", "Transfusión de sangre en caso de crisis graves"],
    faqs: [
      { question: "¿Qué es el favismo?", answer: "Es la reacción hemolítica grave que sufren las personas con deficiencia de G6PD tras ingerir habas (o incluso inhalar el polen de la planta de habas), debido a sustancias químicas en ellas que oxidan la sangre." },
      { question: "¿Qué medicamentos no debe tomar mi hijo?", answer: "Debe evitar las sulfonamidas, ciertos antipalúdicos, algunos analgésicos y sustancias como la naftalina. Se le entregará a la familia una lista detallada y actualizada de medicamentos seguros y prohibidos." },
      { question: "¿Esta enfermedad dura toda la vida?", answer: "Sí, es una condición genética que acompaña al paciente toda su vida. Sin embargo, con evitar los factores desencadenantes, el niño tendrá una expectativa y calidad de vida completamente normales." }
    ],
    image: "/enfermedades/Deficiencia_G6PD.png",
    relatedServices: ["ser-003", "ser-005"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-005", "sym-011"],
    seo: {
      title: "Deficiencia de G6PD en Niños | Favismo CDMX",
      description: "Diagnóstico y guía de prevención de crisis hemolíticas por deficiencia de G6PD. Consulta con la Dra. Lizbeth Hernandez.",
      keywords: ["Deficiencia de G6PD infantil", "Favismo en niños síntomas", "Medicamentos prohibidos G6PD"],
    }
  },
  {
    id: "enf-010",
    slug: "enfermedad-von-willebrand",
    name: "Enfermedad de Von Willebrand",
    description: "La enfermedad de Von Willebrand es el trastorno hemorrágico hereditario más común en la población general. Se debe a la disminución o funcionamiento anormal del factor de Von Willebrand, una proteína necesaria para que las plaquetas se adhieran a los vasos y formen coágulos.",
    symptoms: ["Sangrados nasales frecuentes y difíciles de detener", "Moretones fáciles de gran tamaño", "Sangrado de encías abundante", "Flujo menstrual muy abundante en adolescentes (menorragia)", "Sangrado excesivo tras cirugías dentales"],
    causes: ["Alteraciones genéticas hereditarias (autosómicas, pueden afectar a hombres y mujeres por igual) en el gen del factor de Von Willebrand"],
    riskFactors: ["Padres con diagnóstico de la enfermedad o síntomas de sangrado anormal inexplicado"],
    complications: ["Anemia crónica por pérdidas de sangre recurrentes", "Hemorragias graves tras procedimientos menores", "Dolor e inflamación articular (en tipos graves)"],
    treatments: ["Medicamentos para elevar temporalmente los niveles del factor de coagulación", "Antifibrinolíticos para controlar sangrados locales en boca o nariz", "Concentrados purificados de factor Von Willebrand en casos severos o cirugías"],
    faqs: [
      { question: "¿Es una enfermedad parecida a la hemofilia?", answer: "Tienen similitudes porque ambas afectan la coagulación, pero la enfermedad de Von Willebrand suele ser más leve, afecta tanto a niños como a niñas, y se debe a un defecto en la adhesión de las plaquetas." },
      { question: "¿Cómo se diagnostica de manera certera?", answer: "Requiere pruebas específicas como la medición del antígeno del factor Von Willebrand, su actividad (cofactor de ristocetina) y niveles del factor VIII en sangre." },
      { question: "¿Una niña con esta condición puede llevar una vida normal al crecer?", answer: "Sí, aunque requiere un manejo especial y preventivo durante su periodo menstrual y en caso de intervenciones quirúrgicas o dentales." }
    ],
    image: "/enfermedades/Enfermedad_Von_Willebrand.png",
    relatedServices: ["ser-005"],
    relatedSymptoms: ["sym-003", "sym-005", "sym-010"],
    seo: {
      title: "Enfermedad de Von Willebrand Infantil | Hematología CDMX",
      description: "Diagnóstico y manejo de sangrados frecuentes y enfermedad de Von Willebrand en niños y adolescentes. Dra. Lizbeth Hernandez.",
      keywords: ["Enfermedad de Von Willebrand niños", "Sangrado de nariz frecuente niños", "Hematólogo pediatra experto CDMX"],
    }
  },
  {
    id: "enf-011",
    slug: "linfoma-infantil",
    name: "Linfoma Infantil",
    description: "El linfoma infantil es un tipo de cáncer que afecta el sistema linfático, encargado de defender al cuerpo de infecciones. Se clasifica principalmente en Linfoma de Hodgkin y Linfoma no Hodgkin, y se caracteriza por el crecimiento descontrolado de linfocitos anormales.",
    symptoms: ["Aumento de tamaño de ganglios linfáticos (cuello, axilas o ingle) que no duele", "Fiebre prolongada sin causa de infección", "Pérdida de peso inexplicable", "Sudoración nocturna abundante", "Tos persistente o dificultad para respirar"],
    causes: ["Mutaciones de ADN adquiridas en los linfocitos (no asociadas a causas hereditarias en su gran mayoría)"],
    riskFactors: ["Estados de inmunodeficiencia heredada o adquirida", "Exposición previa a ciertos virus como el de Epstein-Barr"],
    complications: ["Compresión de órganos vitales por el crecimiento del tumor", "Invasión a médula ósea y sistema nervioso central", "Infecciones graves recurrentes"],
    treatments: ["Quimioterapia combinada", "Inmunoterapia con anticuerpos monoclonales", "Radioterapia en casos seleccionados"],
    faqs: [
      { question: "¿Qué diferencia hay entre Linfoma de Hodgkin y No Hodgkin?", answer: "Se diferencian en el tipo de células cancerosas vistas bajo el microscopio. El de Hodgkin presenta unas células características llamadas de Reed-Sternberg y suele ser más curable. El No Hodgkin se disemina de forma más rápida." },
      { question: "¿Un ganglio inflamado siempre es signo de linfoma?", answer: "No, la gran mayoría de los ganglios inflamados en niños son benignos y se deben a infecciones comunes. Solo deben alarmar si son duros, no móviles, no duelen y siguen creciendo después de varias semanas." },
      { question: "¿Cómo se confirma el diagnóstico?", answer: "Se requiere realizar una biopsia del ganglio inflamado completo para su análisis histopatológico e inmunohistoquímica por un patólogo experto." }
    ],
    image: "/enfermedades/Linfoma_Infantil.png",
    relatedServices: ["ser-001", "ser-002", "ser-004"],
    relatedSymptoms: ["sym-001", "sym-004", "sym-006", "sym-009"],
    seo: {
      title: "Linfoma en Niños | Linfoma de Hodgkin Pediátrico CDMX",
      description: "Diagnóstico y tratamiento oportuno de linfomas infantiles (Hodgkin y No Hodgkin). Dra. Lizbeth Hernandez, Hematóloga Pediatra.",
      keywords: ["Linfoma infantil síntomas", "Ganglios inflamados duros niños", "Cáncer linfático en niños CDMX"],
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
      description: "Evaluación diagnóstica y tratamiento de ganglios inflamados en bebés y niños. Consulta con la Dra. Lizbeth Hernandez.",
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
    relatedServices: ["ser-003", "ser-005"],
    relatedSymptoms: ["sym-003", "sym-005", "sym-010"],
    seo: {
      title: "Petequias y Púrpura en Niños | Hematóloga CDMX",
      description: "Diagnóstico urgente y tratamiento de manchas moradas y puntos rojos en la piel de niños. Dra. Lizbeth Hernandez.",
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
    relatedServices: ["ser-001", "ser-002", "ser-004", "ser-005"],
    relatedSymptoms: ["sym-001", "sym-002", "sym-003", "sym-004", "sym-005", "sym-006", "sym-007"],
    seo: {
      title: "Leucemia Linfoblástica Aguda Infantil | Hematóloga CDMX",
      description: "Diagnóstico oportuno y manejo integral de la leucemia infantil. Consulta experta con la Dra. Lizbeth Hernandez, Hematóloga Pediatra.",
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
    relatedServices: ["ser-005"],
    relatedSymptoms: ["sym-005", "sym-007"],
    seo: {
      title: "Trombosis en Niños y Trombofilias | Hematóloga CDMX",
      description: "Diagnóstico y tratamiento especializado de trombosis venosa y estudios de trombofilia en niños. Dra. Lizbeth Hernandez.",
      keywords: ["Trombosis en niños causas", "Catéter venoso central complicaciones", "Trombofilia pediátrica CDMX"],
    }
  }
];
