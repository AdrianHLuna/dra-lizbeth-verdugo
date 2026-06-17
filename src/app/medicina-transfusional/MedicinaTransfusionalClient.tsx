"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { doctor } from "@/data/doctor";
import { 
  FaSyringe, 
  FaShieldAlt, 
  FaDna, 
  FaHandHoldingHeart, 
  FaWeightHanging, 
  FaCheckCircle, 
  FaInfoCircle, 
  FaCalendarCheck, 
  FaChevronDown, 
  FaBookOpen 
} from "react-icons/fa";

type Section = {
  q: string;
  a: string;
};

type Topic = {
  id: string;
  title: string;
  icon: any;
  intro?: string;
  sections: Section[];
  alertQuestion?: {
    q: string;
    a: string;
  };
  posiblesCausas?: string[];
  sources: string[];
};

const topicsData: Topic[] = [
  {
    id: "indicaciones",
    title: "Indicaciones de Transfusión",
    icon: FaSyringe,
    sections: [
      {
        q: "¿Qué son las transfusiones sanguíneas en niños?",
        a: "Las transfusiones son tratamientos que permiten administrar componentes de la sangre cuando el organismo no puede producirlos en cantidad suficiente o cuando existe una pérdida importante de sangre. Dependiendo de la situación clínica, un niño puede requerir glóbulos rojos, plaquetas, plasma o crioprecipitado."
      },
      {
        q: "¿Cuándo puede necesitar una transfusión un niño?",
        a: "Una transfusión puede ser necesaria en diversas situaciones, entre ellas:\n\n• Anemia moderada o severa que provoca síntomas importantes.\n• Sangrado agudo por accidentes, cirugías o enfermedades.\n• Plaquetas bajas con riesgo de sangrado.\n• Trastornos de la coagulación.\n• Enfermedades hematológicas como talasemia o drepanocitosis.\n• Cáncer y tratamientos como la quimioterapia.\n• Algunas condiciones del recién nacido.\n• Procedimientos médicos o quirúrgicos que requieren apoyo transfusional.\n\nLa decisión de transfundir siempre se basa en la condición clínica del paciente, sus síntomas y los resultados de laboratorio."
      },
      {
        q: "¿Qué componentes de la sangre pueden transfundirse?",
        a: "• **Glóbulos rojos:** Ayudan a transportar oxígeno y suelen utilizarse para tratar distintos tipos de anemia o pérdidas importantes de sangre.\n• **Plaquetas:** Se administran cuando existe trombocitopenia o alteraciones que aumentan el riesgo de sangrado.\n• **Plasma:** Contiene factores de coagulación y puede utilizarse en ciertas enfermedades hemorrágicas o alteraciones de la coagulación.\n• **Crioprecipitado:** Es un componente rico en fibrinógeno y otros factores de coagulación que se utiliza en situaciones específicas."
      },
      {
        q: "¿Son seguras las transfusiones?",
        a: "Las transfusiones actuales son procedimientos seguros que siguen estrictos controles de calidad y compatibilidad. Antes de administrar cualquier componente sanguíneo se realizan estudios para disminuir al máximo los riesgos y garantizar que el producto sea adecuado para cada paciente."
      },
      {
        q: "¿Por qué es importante una valoración especializada?",
        a: "No todos los niños con anemia, plaquetas bajas o alteraciones de laboratorio necesitan una transfusión. Una valoración por Hematología Pediátrica y Medicina Transfusional permite determinar cuándo está indicada, cuál es el componente más adecuado y cómo realizar un seguimiento seguro."
      }
    ],
    alertQuestion: {
      q: "¿Mi hijo necesita una transfusión?",
      a: "Si tu hijo presenta anemia importante, sangrado, plaquetas bajas o una enfermedad hematológica que requiere apoyo transfusional, una valoración especializada puede ayudar a determinar si realmente necesita una transfusión y cuál es la opción más segura para su situación clínica."
    },
    sources: [
      "AABB. Red Blood Cell Transfusion: 2023 International Guidelines.",
      "AABB Technical Manual.",
      "Wintrobe's Clinical Hematology.",
      "Lanzkowsky's Manual of Pediatric Hematology and Oncology.",
      "British Society for Haematology. Guidelines on Transfusion for Fetuses, Neonates and Older Children."
    ]
  },
  {
    id: "seguridad",
    title: "Seguridad y Reacciones",
    icon: FaShieldAlt,
    intro: "Las transfusiones son procedimientos médicos que se realizan diariamente en hospitales de todo el mundo y han ayudado a salvar millones de vidas. Antes de administrar cualquier componente sanguíneo, se realizan estrictos controles de calidad, pruebas de compatibilidad y múltiples verificaciones de seguridad para garantizar que el tratamiento sea adecuado para cada paciente. La gran mayoría de los niños reciben sus transfusiones sin presentar complicaciones importantes.",
    sections: [
      {
        q: "¿Pueden ocurrir reacciones durante una transfusión?",
        a: "Como sucede con cualquier tratamiento médico, pueden presentarse efectos secundarios o reacciones. Sin embargo, la mayoría son leves, temporales y pueden identificarse y tratarse oportunamente. Durante la transfusión, el personal médico y de enfermería vigila de forma continua al paciente para detectar cualquier cambio y actuar de inmediato si es necesario."
      },
      {
        q: "¿Qué síntomas pueden presentarse?",
        a: "Algunos niños pueden presentar:\n\n• Fiebre o escalofríos.\n• Enrojecimiento de la piel.\n• Comezón o ronchas.\n• Molestia leve durante la transfusión.\n\nEn la mayoría de los casos, estos síntomas son transitorios y responden adecuadamente al tratamiento indicado por el equipo médico."
      },
      {
        q: "¿Existen reacciones más importantes?",
        a: "Aunque son poco frecuentes, algunas reacciones pueden requerir valoración médica inmediata. Por este motivo, las transfusiones siempre se realizan bajo supervisión y siguiendo protocolos de seguridad establecidos. La detección temprana y el manejo oportuno permiten reducir significativamente el riesgo de complicaciones."
      },
      {
        q: "¿Por qué los beneficios suelen ser mayores que los riesgos?",
        a: "Cuando un médico indica una transfusión, es porque considera que los beneficios para la salud del niño superan ampliamente los posibles riesgos. Las transfusiones pueden:\n\n• Corregir una anemia importante.\n• Mejorar el transporte de oxígeno a los tejidos.\n• Disminuir el riesgo de sangrado.\n• Reponer factores de coagulación.\n• Permitir tratamientos médicos o quirúrgicos de forma más segura.\n• Salvar la vida en situaciones de emergencia."
      },
      {
        q: "¿Las transfusiones pueden transmitir enfermedades?",
        a: "Actualmente el riesgo es extremadamente bajo gracias a los estudios de selección de donadores, pruebas de tamizaje para enfermedades infecciosas y estrictos controles de calidad realizados en los bancos de sangre."
      },
      {
        q: "¿Cómo se protege la seguridad de mi hijo?",
        a: "La sangre donada pasa por rigurosos procesos de selección, análisis y control de calidad antes de ser utilizada. Además, antes de cada transfusión se realizan estudios de compatibilidad y verificaciones de identidad para asegurar que el componente administrado sea el correcto. Gracias a estas medidas, las complicaciones graves son poco frecuentes."
      },
      {
        q: "¿Cuándo debo informar al personal médico?",
        a: "Es importante avisar inmediatamente si durante o después de la transfusión tu hijo presenta:\n\n• Fiebre.\n• Escalofríos.\n• Dificultad para respirar.\n• Ronchas o comezón.\n• Dolor intenso.\n• Cualquier síntoma que parezca fuera de lo habitual.\n\nLa mayoría de estos eventos pueden evaluarse y tratarse rápidamente cuando se detectan a tiempo."
      },
      {
        q: "¿Por qué es importante una valoración especializada?",
        a: "No todos los pacientes tienen el mismo riesgo ni requieren las mismas medidas de seguridad. La valoración por Hematología Pediátrica y Medicina Transfusional permite seleccionar el componente más adecuado, vigilar posibles complicaciones y ofrecer un seguimiento individualizado cuando sea necesario."
      }
    ],
    alertQuestion: {
      q: "¿Debo preocuparme si mi hijo necesita una transfusión?",
      a: "Es normal tener dudas o sentir preocupación. Sin embargo, las transfusiones actuales son procedimientos seguros y cuidadosamente supervisados. Si tu hijo necesita una transfusión, significa que su equipo médico considera que este tratamiento puede mejorar su estado de salud o prevenir complicaciones importantes. Una adecuada valoración médica permite ofrecer el mayor beneficio con el menor riesgo posible."
    },
    sources: [
      "AABB Technical Manual.",
      "Mollison's Blood Transfusion in Clinical Medicine.",
      "ISBT. Educational Resources.",
      "British Society for Haematology. Transfusion Guidelines.",
      "Rossi's Principles of Transfusion Medicine."
    ]
  },
  {
    id: "compatibilidad",
    title: "Compatibilidad Sanguínea",
    icon: FaDna,
    sections: [
      {
        q: "¿Qué es la compatibilidad sanguínea?",
        a: "La compatibilidad sanguínea es el proceso mediante el cual se verifica que la sangre que recibirá un paciente sea adecuada y segura para él. Antes de cualquier transfusión, se realizan estudios especiales para identificar el grupo sanguíneo y comprobar que exista compatibilidad entre el paciente y el componente que va a recibir. Estas medidas ayudan a disminuir riesgos y permiten que la transfusión se realice de forma segura."
      },
      {
        q: "¿Por qué no cualquier persona puede recibir cualquier sangre?",
        a: "Cada persona tiene características específicas en sus glóbulos rojos, conocidas como grupo sanguíneo. Las más importantes son el sistema ABO y el factor Rh. Cuando una persona recibe sangre incompatible, su sistema inmunológico puede reconocerla como extraña y reaccionar contra ella. Por esta razón, siempre se realizan pruebas antes de administrar una transfusión."
      },
      {
        q: "¿Qué es el grupo sanguíneo ABO?",
        a: "Los grupos sanguíneos más conocidos son:\n\n• **Grupo A**\n• **Grupo B**\n• **Grupo AB**\n• **Grupo O**\n\nCada uno presenta características diferentes que deben considerarse al momento de una transfusión."
      },
      {
        q: "¿Qué es el factor Rh?",
        a: "Además del grupo ABO, las personas pueden ser:\n\n• **Rh positivo (+)**\n• **Rh negativo (-)**\n\nEl factor Rh también se toma en cuenta para seleccionar el componente sanguíneo más adecuado."
      },
      {
        q: "¿Qué estudios se realizan antes de una transfusión?",
        a: "Antes de transfundir, pueden realizarse estudios como:\n\n• Determinación del grupo sanguíneo ABO.\n• Determinación del factor Rh.\n• Pruebas de compatibilidad.\n• Búsqueda de anticuerpos que puedan reaccionar contra la sangre transfundida.\n\nEstas pruebas forman parte de los protocolos de seguridad transfusional."
      },
      {
        q: "¿Por qué algunos pacientes necesitan estudios adicionales?",
        a: "Algunos niños requieren transfusiones repetidas debido a enfermedades hematológicas o tratamientos prolongados. En estos casos, pueden necesitar estudios más específicos para identificar características adicionales de sus glóbulos rojos y seleccionar componentes con una compatibilidad más amplia. Esto ayuda a reducir el riesgo de desarrollar anticuerpos y facilita futuras transfusiones."
      },
      {
        q: "¿La compatibilidad es importante en recién nacidos?",
        a: "Sí. En los recién nacidos, la compatibilidad sanguínea puede ser especialmente importante en situaciones como la incompatibilidad ABO o Rh entre la madre y el bebé. Estas condiciones pueden ocasionar anemia o ictericia y requieren valoración médica especializada."
      },
      {
        q: "¿Cómo se garantiza la seguridad de una transfusión?",
        a: "Antes de cada transfusión se siguen múltiples pasos de verificación:\n\n• Confirmación de la identidad del paciente.\n• Revisión del grupo sanguíneo.\n• Estudios de compatibilidad.\n• Selección adecuada del componente sanguíneo.\n• Vigilancia durante la administración.\n\nGracias a estos procedimientos, las transfusiones son actualmente más seguras que nunca."
      },
      {
        q: "¿Por qué es importante una valoración especializada?",
        a: "Algunos pacientes requieren componentes especiales, como sangre irradiada, leucorreducida o compatible con características específicas. La participación de especialistas en Hematología Pediátrica y Medicina Transfusional ayuda a seleccionar la mejor opción para cada niño."
      }
    ],
    alertQuestion: {
      q: "¿Mi hijo puede recibir sangre de cualquier donador?",
      a: "No. Antes de una transfusión es necesario verificar que exista compatibilidad entre el paciente y la sangre que recibirá. Para ello se realizan estudios específicos que permiten seleccionar el componente más seguro y adecuado para cada caso. Gracias a estos controles, las transfusiones pueden realizarse con un alto nivel de seguridad."
    },
    sources: [
      "Mollison's Blood Transfusion in Clinical Medicine.",
      "AABB Technical Manual.",
      "ISBT.",
      "Wintrobe's Clinical Hematology.",
      "Practical Transfusion Medicine"
    ]
  },
  {
    id: "aferesis",
    title: "Aféresis Terapéutica",
    icon: FaHandHoldingHeart,
    sections: [
      {
        q: "¿Qué es la aféresis terapéutica?",
        a: "La aféresis terapéutica es un procedimiento especializado que permite separar y retirar de la sangre ciertos componentes que están causando una enfermedad o que necesitan ser reemplazados como parte del tratamiento. Durante el procedimiento, la sangre circula a través de un equipo especializado que selecciona el componente que debe retirarse o intercambiarse, mientras el resto de la sangre regresa al paciente. Es una técnica utilizada en diversas enfermedades pediátricas y puede formar parte del tratamiento de situaciones graves o complejas."
      },
      {
        q: "¿En qué enfermedades puede utilizarse?",
        a: "La aféresis terapéutica puede emplearse en algunas enfermedades hematológicas, inmunológicas, neurológicas y metabólicas. Algunos ejemplos incluyen:\n\n• Púrpura trombocitopénica trombótica.\n• Síndrome urémico hemolítico en situaciones específicas.\n• Enfermedades autoinmunes.\n• Algunas complicaciones neurológicas.\n• Drepanocitosis.\n• Hiperleucocitosis asociada a leucemias.\n• Determinadas enfermedades metabólicas o hereditarias.\n\nLa indicación siempre depende de la enfermedad y de la valoración individual de cada paciente."
      },
      {
        q: "¿Qué tipos de aféresis existen?",
        a: "• **Plasmaféresis terapéutica:** Permite retirar el plasma del paciente y reemplazarlo por soluciones o componentes sanguíneos específicos. Se utiliza en algunas enfermedades autoinmunes y hematológicas.\n• **Recambio eritrocitario:** Consiste en retirar parte de los glóbulos rojos del paciente y sustituirlos por glóbulos rojos compatibles. Es una estrategia utilizada en determinadas complicaciones de la drepanocitosis.\n• **Leucaféresis:** Permite disminuir temporalmente cantidades muy elevadas de glóbulos blancos en algunas enfermedades hematológicas.\n• **Plaquetaféresis terapéutica:** Puede utilizarse en situaciones especiales cuando existe un aumento extremo de plaquetas y riesgo de complicaciones."
      },
      {
        q: "¿Cómo se realiza el procedimiento?",
        a: "La aféresis se lleva a cabo mediante un equipo especializado que procesa la sangre de manera continua. Dependiendo de la edad, peso y condición clínica del paciente, puede realizarse a través de accesos venosos periféricos o mediante un catéter venoso central. Durante todo el procedimiento, el paciente permanece bajo vigilancia médica y de enfermería especializada."
      },
      {
        q: "¿Es un procedimiento seguro?",
        a: "La aféresis terapéutica es un procedimiento seguro cuando se realiza por personal capacitado y con monitorización adecuada. Como cualquier procedimiento médico, pueden presentarse efectos secundarios o complicaciones, pero la mayoría son temporales y pueden tratarse oportunamente. El equipo médico vigila continuamente signos vitales, niveles de calcio y otros parámetros importantes para garantizar la seguridad del paciente."
      },
      {
        q: "¿Qué beneficios puede ofrecer?",
        a: "Dependiendo de la enfermedad, la aféresis terapéutica puede:\n\n• Eliminar sustancias dañinas presentes en la sangre.\n• Disminuir células sanguíneas elevadas de forma rápida.\n• Mejorar síntomas graves.\n• Reducir el riesgo de complicaciones.\n• Servir como tratamiento puente mientras otros medicamentos comienzan a hacer efecto."
      },
      {
        q: "¿Por qué es importante la valoración especializada?",
        a: "No todos los pacientes requieren aféresis terapéutica. La decisión debe basarse en la enfermedad, la gravedad del cuadro clínico y las recomendaciones médicas actuales. La valoración por especialistas en Hematología Pediátrica y Medicina Transfusional permite determinar si este procedimiento está indicado, cuál es la técnica más adecuada y cómo realizarlo de manera segura."
      },
      {
        q: "¿La aféresis es una cirugía?",
        a: "No. La aféresis terapéutica no es una cirugía. Es un procedimiento especializado que utiliza equipos médicos para procesar temporalmente la sangre del paciente y retirar o intercambiar determinados componentes según la enfermedad que se esté tratando."
      }
    ],
    posiblesCausas: [
      "Drepanocitosis con complicaciones.",
      "Leucocitos extremadamente elevados.",
      "Enfermedades autoinmunes.",
      "Púrpura trombocitopénica trombótica.",
      "Síndromes neurológicos con indicación de plasmaféresis.",
      "Algunas enfermedades metabólicas o hereditarias.",
      "Pacientes que requieren recambio eritrocitario terapéutico."
    ],
    sources: [
      "American Society for Apheresis. Guidelines on the Use of Therapeutic Apheresis in Clinical Practice (2023).",
      "Principles of Apheresis Technology.",
      "Therapeutic Apheresis: A Physician's Handbook.",
      "AABB Technical Manual.",
      "Wintrobe's Clinical Hematology."
    ]
  },
  {
    id: "sobrecarga",
    title: "Sobrecarga de Hierro",
    icon: FaWeightHanging,
    sections: [
      {
        q: "¿Qué es la sobrecarga de hierro?",
        a: "La sobrecarga de hierro ocurre cuando el organismo acumula más hierro del que puede eliminar. Esto puede suceder en niños que necesitan recibir transfusiones de sangre de manera repetida durante meses o años. Cada transfusión aporta hierro que el cuerpo no puede eliminar fácilmente. Con el tiempo, este hierro puede depositarse en diferentes órganos y afectar su funcionamiento."
      },
      {
        q: "¿Qué niños tienen mayor riesgo?",
        a: "La sobrecarga de hierro puede presentarse en pacientes que requieren transfusiones frecuentes, como aquellos con:\n\n• Talasemia.\n• Drepanocitosis.\n• Anemia aplásica.\n• Algunas enfermedades de la médula ósea.\n• Ciertos tipos de cáncer.\n• Otros trastornos hematológicos que requieren apoyo transfusional prolongado.\n\nNo todos los niños que reciben una transfusión desarrollarán sobrecarga de hierro. El riesgo aumenta principalmente cuando las transfusiones son repetidas."
      },
      {
        q: "¿Por qué es importante detectarla?",
        a: "Cuando el hierro se acumula durante largos periodos puede depositarse en órganos como:\n\n• Hígado.\n• Corazón.\n• Glándulas endocrinas.\n• Páncreas.\n\nLa detección temprana permite iniciar medidas para prevenir complicaciones a largo plazo."
      },
      {
        q: "¿Cuáles son los síntomas?",
        a: "En etapas iniciales, la sobrecarga de hierro generalmente no produce síntomas. Por esta razón, el seguimiento médico y los estudios de control son fundamentales en niños que reciben transfusiones frecuentes."
      },
      {
        q: "¿Cómo se diagnostica?",
        a: "El seguimiento puede incluir:\n\n• Estudios de laboratorio.\n• Ferritina sérica.\n• Evaluación clínica periódica.\n• Estudios de imagen especializados en determinados pacientes.\n\nLa interpretación de estos resultados debe realizarse dentro del contexto clínico de cada niño."
      },
      {
        q: "¿Tiene tratamiento?",
        a: "Sí. Existen medicamentos llamados quelantes de hierro que ayudan al organismo a eliminar el exceso de hierro acumulado. La necesidad de tratamiento depende de la cantidad de hierro acumulado, la enfermedad de base y la frecuencia de las transfusiones."
      },
      {
        q: "¿Las transfusiones deben suspenderse?",
        a: "No. Cuando una transfusión es necesaria, los beneficios suelen ser mucho mayores que los riesgos asociados a la acumulación de hierro. El objetivo del seguimiento médico es permitir que el niño continúe recibiendo el tratamiento que necesita mientras se vigila y controla adecuadamente el hierro acumulado."
      },
      {
        q: "¿Cómo se realiza el seguimiento?",
        a: "Los niños que reciben transfusiones repetidas requieren vigilancia periódica para detectar de forma temprana la acumulación de hierro. Dependiendo de la enfermedad y de la cantidad de transfusiones recibidas, el médico puede solicitar estudios de laboratorio y pruebas de imagen específicas para evaluar el estado de diferentes órganos."
      },
      {
        q: "¿Por qué es importante una valoración especializada?",
        a: "La prevención, detección y tratamiento de la sobrecarga de hierro forman parte del seguimiento integral de many pacientes hematológicos. La valoración por Hematología Pediátrica permite identificar a los niños con mayor riesgo, interpretar correctamente los estudios y decidir el momento adecuado para iniciar tratamiento cuando sea necesario."
      }
    ],
    alertQuestion: {
      q: "¿Las transfusiones pueden hacer daño por el hierro acumulado?",
      a: "Las transfusiones son tratamientos esenciales para muchas enfermedades y, en la mayoría de los casos, sus beneficios superan ampliamente los riesgos. Cuando un niño requiere transfusiones frecuentes durante largos periodos, se realiza un seguimiento especializado para detectar y tratar oportunamente la acumulación de hierro, permitiendo que continúe recibiendo la atención que necesita de forma segura."
    },
    posiblesCausas: [
      "Talasemia dependiente de transfusión.",
      "Drepanocitosis con programa transfusional crónico.",
      "Anemia aplásica.",
      "Síndromes de falla medular.",
      "Pacientes oncológicos con múltiples transfusiones.",
      "Ferritina elevada.",
      "Sospecha de acumulación de hierro secundaria a transfusiones."
    ],
    sources: [
      "American Society of Hematology. Guidelines for Sickle Cell Disease: Transfusion Support.",
      "Wintrobe's Clinical Hematology.",
      "Lanzkowsky's Manual of Pediatric Hematology and Oncology.",
      "Nathan and Oski's Hematology and Oncology of Infancy and Childhood.",
      "AABB Technical Manual"
    ]
  }
];

export default function MedicinaTransfusionalClient() {
  const [activeTab, setActiveTab] = useState(topicsData[0].id);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const activeTopic = topicsData.find(t => t.id === activeTab) || topicsData[0];
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-12">
      {/* 1. INTERACTIVE TABS */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 p-2 bg-[#572D55]/5 rounded-3xl border border-[#572D55]/10 max-w-5xl mx-auto">
        {topicsData.map(topic => {
          const Icon = topic.icon;
          const isActive = activeTab === topic.id;
          return (
            <button
              key={topic.id}
              onClick={() => {
                setActiveTab(topic.id);
                setExpandedIndex(null); // Reset accordion
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wide transition-all duration-300 ${
                isActive 
                  ? "bg-[#572D55] text-white shadow-lg shadow-[#572D55]/20 scale-105" 
                  : "bg-white hover:bg-[#572D55]/5 text-[#705662] border border-slate-100"
              }`}
            >
              <Icon className={isActive ? "text-accent" : "text-[#572D55]"} size={14} />
              <span>{topic.title}</span>
            </button>
          );
        })}
      </div>

      {/* 2. DYNAMIC CONTENT AREA */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Main Info Columns */}
          <div className="lg:col-span-2 space-y-8">
            {activeTopic.intro && (
              <div className="bg-white p-8 border border-slate-100 rounded-[2rem_0.5rem_2rem_0.5rem] shadow-sm">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                  {activeTopic.intro}
                </p>
              </div>
            )}

            {/* Q&A Accordion */}
            <div className="space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight flex items-center gap-2 border-l-4 border-primary pl-3">
                <FaInfoCircle className="text-primary" /> Preguntas Frecuentes
              </h3>
              <div className="space-y-3">
                {activeTopic.sections.map((section, idx) => {
                  const isExpanded = expandedIndex === idx;
                  return (
                    <div 
                      key={idx} 
                      className="bg-white border border-slate-150/70 rounded-[1.5rem_0.5rem_1.5rem_0.5rem] shadow-sm overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleAccordion(idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-extrabold text-slate-800 hover:text-primary transition-colors text-xs sm:text-sm uppercase tracking-tight"
                      >
                        <span>{section.q}</span>
                        <FaChevronDown 
                          className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ml-4 ${isExpanded ? "rotate-180 text-primary" : ""}`}
                          size={14}
                        />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-5 pb-6 pt-1 border-t border-slate-50 text-slate-600 text-xs leading-relaxed whitespace-pre-line font-medium">
                              {section.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Critical Alert Question (Always visible at the bottom of Q&As) */}
            {activeTopic.alertQuestion && (
              <div className="bg-gradient-to-br from-[#971F57]/5 to-[#572D55]/5 border-2 border-accent/20 p-8 rounded-[2rem_0.5rem_2rem_0.5rem] shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl pointer-events-none" />
                <h4 className="text-sm sm:text-base font-black text-slate-900 mb-3 uppercase tracking-tight flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
                  {activeTopic.alertQuestion.q}
                </h4>
                <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-semibold">
                  {activeTopic.alertQuestion.a}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar Area: Posibles causas + Fuentes */}
          <div className="lg:col-span-1 space-y-8">
            {/* Posibles Causas de Valoración */}
            {activeTopic.posiblesCausas && (
              <div className="bg-white border border-slate-100 p-8 shadow-sm rounded-[2.5rem_0.5rem_2.5rem_0.5rem]">
                <h3 className="text-sm font-extrabold text-slate-900 mb-6 tracking-tight uppercase border-b border-slate-100 pb-4">
                  Causas Comunes de Valoración
                </h3>
                <ul className="space-y-3">
                  {activeTopic.posiblesCausas.map((causa, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-semibold text-slate-650 leading-relaxed">{causa}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sidebar CTA */}
            <div className="bg-gradient-to-br from-primary to-[#3b1c39] p-8 text-white shadow-xl rounded-[2.5rem_0.5rem_2.5rem_0.5rem] group border-t-8 border-accent relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
              <h3 className="text-lg font-extrabold mb-4 tracking-tight uppercase">
                ¿Tu hijo requiere una transfusión, aféresis terapéutica o una valoración especializada en Medicina Transfusional?
              </h3>
              <div className="w-10 h-1 bg-accent mb-6 rounded-full" />
              <p className="text-slate-300 text-xs mb-8 leading-relaxed font-medium">
                La evaluación por una especialista en Hematología Pediátrica y Medicina Transfusional permite determinar la indicación más adecuada, optimizar el tratamiento y garantizar la mayor seguridad posible para cada paciente.
              </p>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="block w-full flex items-center justify-center gap-2 bg-white text-primary font-bold py-4 rounded-full hover:bg-[#FEE5FD] hover:text-[#971F57] transition-all text-[9px] uppercase tracking-widest shadow-lg text-center"
              >
                <FaCalendarCheck size={12} /> Agendar Valoración Médica
              </a>
            </div>

            {/* Fuentes Consultadas */}
            <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <FaBookOpen className="text-slate-400" /> Fuentes Consultadas
              </h4>
              <ul className="space-y-2">
                {activeTopic.sources.map((source, idx) => (
                  <li key={idx} className="text-[10px] font-semibold text-slate-500 leading-relaxed list-disc list-inside hover:text-slate-800 transition-colors">
                    {source}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
