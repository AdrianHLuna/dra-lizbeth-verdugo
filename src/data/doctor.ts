import { DoctorProfile } from "@/types/schema";

export const doctor: DoctorProfile = {
  name: "Lizbeth Yamilet Hernández Verdugo",
  title: "Dra.",
  specialty: "Pediatría, Hematología Pediátrica y Medicina Transfusional",
  specialistTitle: "Hematóloga Pediatra",
  subspecialty: "Medicina Transfusional",
  cedula: "10807063",
  cedulaEspecialidad: "13914389",
  cedulaSubespecialidad: "15486256",
  cofepris: "En trámite",
  phone: "5596868266",
  whatsapp: "525611232970",
  email: "dra.lizbethyamilet.hp@gmail.com",
  address: "Calle San Luis Potosí #143, Interior 207, entre Calle Tonalá y Calle Jalapa, Colonia Roma Norte, C.P. 06700, Delegación Cuauhtémoc, Ciudad de México",
  city: "Ciudad de México",
  state: "Ciudad de México",
  country: "México",
  googleMapsUrl: "https://maps.google.com/?q=Calle+San+Luis+Potosi+143+Roma+Norte+Cuauhtemoc+Ciudad+de+Mexico",
  consultationPrice: 1500,
  paymentMethods: ["Efectivo", "Transferencia", "Tarjeta de débito", "Tarjeta de crédito"],
  insurances: [],
  schedule: "Lunes a viernes de 10:00 a 19:00. Sábados de 9:00 a 14:00",
  photo: "/doctor.png",
  bio: "Soy la Dra. Lizbeth Yamilet Hernández Verdugo, médica especialista en Pediatría con subespecialidad en Hematología Pediátrica y formación de alta especialidad en Medicina Transfusional. Mi práctica profesional se enfoca en el diagnóstico, tratamiento y seguimiento integral de niños y adolescentes con enfermedades hematológicas, trastornos de la coagulación y alteraciones plaquetarias (altas y bajas), incluyendo anemias, leucemias, hemofilia y otros padecimientos de la sangre. Mi compromiso es brindar una atención médica cálida, ética y altamente especializada, orientada al bienestar de mis pacientes y la tranquilidad de sus familias.",
  philosophy: "Atención médica pediátrica especializada y humana, con enfoque científico para el diagnóstico y tratamiento integral de los trastornos de la sangre.",
  experience: [
    {
      year: "Actualidad",
      title: "Hematóloga Pediatra y Especialista en Medicina Transfusional",
      description: "Más de 1 año de experiencia profesional y más de 1,200 pacientes pediátricos atendidos integralmente."
    }
  ],
  certifications: [
    {
      name: "Certificación en Hematología",
      institution: "Consejo Mexicano de Hematología"
    },
    {
      name: "Certificación en Pediatría",
      institution: "Consejo Mexicano de Pediatría"
    }
  ],
  education: [
    {
      degree: "Médico Cirujano",
      institution: "Universidad Autónoma de Chiapas",
      year: ""
    },
    {
      degree: "Especialidad en Pediatría",
      institution: "Universidad Nacional Autónoma de México",
      year: ""
    },
    {
      degree: "Subespecialidad en Hematología Pediátrica",
      institution: "Universidad Nacional Autónoma de México",
      year: ""
    }
  ],
  sameAs: []
};
