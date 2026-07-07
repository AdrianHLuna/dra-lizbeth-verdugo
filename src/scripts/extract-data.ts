import { doctor } from "../data/doctor";
import { services } from "../data/services";
import { symptoms } from "../data/symptoms";
import { diseases } from "../data/diseases";
import { topicsData } from "../app/medicina-transfusional/MedicinaTransfusionalClient";
import * as fs from "fs";
import * as path from "path";

// Limpiar el perfil del doctor
const cleanDoctor = {
  name: doctor.name,
  title: doctor.title,
  specialty: doctor.specialty,
  specialistTitle: doctor.specialistTitle || "",
  subspecialty: doctor.subspecialty || "",
  cedula: doctor.cedula,
  cedulaEspecialidad: doctor.cedulaEspecialidad || "",
  cedulaSubespecialidad: doctor.cedulaSubespecialidad || "",
  cofepris: doctor.cofepris || "",
  phone: doctor.phone,
  whatsapp: doctor.whatsapp,
  email: doctor.email,
  address: doctor.address,
  city: doctor.city,
  state: doctor.state,
  country: doctor.country,
  googleMapsUrl: doctor.googleMapsUrl,
  consultationPrice: doctor.consultationPrice,
  paymentMethods: doctor.paymentMethods,
  schedule: doctor.schedule,
  bio: doctor.bio,
  philosophy: doctor.philosophy,
  experience: doctor.experience || [],
  certifications: doctor.certifications || [],
  education: doctor.education || [],
};

// Limpiar los servicios (remover campos complejos o de SEO si no son de contenido directo)
const cleanServices = services.map(s => ({
  id: s.id,
  slug: s.slug,
  name: s.name,
  description: s.description,
  longDescription: s.longDescription,
  type: s.type,
  anesthesiaType: s.anesthesiaType || "No especificado",
  duration: s.duration || "No especificado",
  recoveryTime: s.recoveryTime || "No especificado",
  isPainful: s.isPainful,
  painDescription: s.painDescription || "",
  benefitsTitle: s.benefitsTitle || "¿Cuáles son los beneficios?",
  benefitsIntro: s.benefitsIntro || "",
  benefits: s.benefits || [],
  postOpRecommendations: s.postOpRecommendations || [],
  recommendationsTitle: s.recommendationsTitle || "Recomendaciones",
  priceRange: s.priceRange || "Según valoración médica",
  technicalSpecs: s.technicalSpecs || {},
  risksTitle: s.risksTitle || "Riesgos del procedimiento",
  risks: s.risks || [],
  ctaQuestion: s.ctaQuestion || "",
  ctaAnswer: s.ctaAnswer || "",
  differenceTitle: s.differenceTitle || "",
  differenceContent: s.differenceContent || "",
  comfortTitle: s.comfortTitle || "",
  comfortDescription: s.comfortDescription || "",
  additionalQuestions: s.additionalQuestions || [],
}));

// Limpiar los síntomas
const cleanSymptoms = symptoms.map(s => ({
  id: s.id,
  slug: s.slug,
  name: s.name,
  description: s.description,
  causes: s.causes || [],
  causesTitle: s.causesTitle || "Causas comunes",
  causesIntro: s.causesIntro || "",
  whyConsult: s.whyConsult,
  manifestaciones: s.manifestaciones || [],
  manifestacionesTitle: s.manifestacionesTitle || "Manifestaciones clínicas",
  preguntaPrincipal: s.preguntaPrincipal || "",
  preguntaPrincipalResponse: s.preguntaPrincipalResponse || "",
  signosAlarma: s.signosAlarma || [],
  signosAlarmaTitle: s.signosAlarmaTitle || "Signos de alarma",
}));

// Limpiar las enfermedades
const cleanDiseases = diseases.map(d => ({
  id: d.id,
  slug: d.slug,
  name: d.name,
  technicalName: d.technicalName || "",
  description: d.description,
  symptoms: d.symptoms || [],
  causes: d.causes || [],
  riskFactors: d.riskFactors || [],
  mexicoStats: d.mexicoStats || "",
  complications: d.complications || [],
  treatments: d.treatments || [],
  faqs: d.faqs || [],
  sources: d.sources || [],
  whenToConsult: d.whenToConsult || [],
  diseasesToRuleOut: d.diseasesToRuleOut || [],
  category: d.category || "General",
}));

// Limpiar los temas de Medicina Transfusional (removiendo el componente Icon de React)
const cleanTransfusion = topicsData.map(topic => {
  const { icon, ...rest } = topic;
  return {
    ...rest,
    iconName: icon ? (icon.name || "FaInfoCircle") : "FaInfoCircle",
  };
});

// Aviso de Privacidad
const privacyPolicy = {
  title: "Aviso de Privacidad",
  intro: `Con fundamento en los artículos 15 y 16 de la Ley Federal de Protección de Datos Personales en Posesión de Particulares hacemos de su conocimiento que la ${cleanDoctor.title} ${cleanDoctor.name}, con domicilio en ${cleanDoctor.address} es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.`,
  sections: [
    {
      title: "Fines del tratamiento de datos personales",
      content: "Su información personal será utilizada para las siguientes finalidades: proveer los servicios y productos que ha solicitado; notificarle sobre nuevos servicios o productos que tengan relación con los ya contratados o adquiridos; comunicarle sobre cambios en los mismos; elaborar estudios y programas que son necesarios para determinar hábitos de consumo; realizar evaluaciones periódicas de nuestros productos y servicios a efecto de mejorar la calidad de los mismos; evaluar la calidad del servicio que brindamos, y en general, para dar cumplimiento a las obligaciones que hemos contraído con usted."
    },
    {
      title: "Datos recabados",
      content: "Para las finalidades antes mencionadas, requerimos obtener los siguientes datos personales:\n• Nombre completo\n• Teléfono fijo y/o celular\n• Correo electrónico\n• Antecedentes médicos (exclusivamente para la apertura de expediente clínico)"
    },
    {
      title: "Derechos ARCO",
      content: `Es importante informarle que usted tiene derecho al Acceso, Rectificación y Cancelación de sus datos personales, a Oponerse al tratamiento de los mismos o a revocar el consentimiento que para dicho fin nos haya otorgado. Para ello, es necesario que envíe la solicitud en los términos que marca la Ley en su Art. 29 a nuestro Departamento de Protección de Datos Personales, o bien, se comunique al teléfono ${cleanDoctor.phone}.`
    }
  ],
  lastUpdate: new Date().toLocaleDateString('es-MX')
};

// Compilar toda la información
const fullData = {
  doctor: cleanDoctor,
  services: cleanServices,
  symptoms: cleanSymptoms,
  diseases: cleanDiseases,
  transfusion: cleanTransfusion,
  privacyPolicy: privacyPolicy
};

// Escribir el archivo final data.json
const outputPath = path.resolve(__dirname, "../../data.json");
fs.writeFileSync(outputPath, JSON.stringify(fullData, null, 2), "utf8");

console.log(`Datos consolidados correctamente en: ${outputPath}`);
console.log(`- Doctor: 1`);
console.log(`- Servicios: ${cleanServices.length}`);
console.log(`- Síntomas: ${cleanSymptoms.length}`);
console.log(`- Enfermedades: ${cleanDiseases.length}`);
console.log(`- Medicina Transfusional: ${cleanTransfusion.length}`);
