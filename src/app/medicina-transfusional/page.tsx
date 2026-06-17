import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FadeUp } from "@/components/Animations";
import { doctor } from "@/data/doctor";
import MedicinaTransfusionalClient from "./MedicinaTransfusionalClient";

export const metadata = {
  title: "Medicina Transfusional Pediátrica y Aféresis | Dra. Lizbeth Hernández",
  description: "Información especializada sobre transfusiones en niños, aféresis terapéutica y sobrecarga de hierro. Consulta con la Dra. Lizbeth Hernández en CDMX.",
  keywords: [
    "Medicina Transfusional Pediátrica",
    "Aféresis terapéutica niños",
    "Sobrecarga de hierro transfusional",
    "Compatibilidad sanguínea infantil",
    "Hematóloga pediatra Ciudad de México",
    "Transfusión de sangre niños"
  ],
};

export default function MedicinaTransfusionalPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Medicina Transfusional Pediátrica",
    "description": "Uso seguro y adecuado de componentes sanguíneos y procedimientos avanzados como la aféresis terapéutica en niños.",
    "lastReviewed": "2026-06-17",
    "reviewedBy": {
      "@type": "Physician",
      "name": `${doctor.title} ${doctor.name}`,
      "medicalSpecialty": "Pediatric Hematology",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Universidad Nacional Autónoma de México"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdfd] py-12 relative overflow-hidden text-[#705662]">
      <StructuredData data={schema} />
      
      {/* Background watercolor blotches (Branding synergy) */}
      <div className="absolute top-[8%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(151,31,87,0.06)_0%,transparent_70%)] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-[40%] left-[-10%] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(87,45,85,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Medicina Transfusional" }]} />
        
        {/* Hero Section */}
        <FadeUp className="mb-16 mt-8 border-l-4 border-accent pl-5">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase">
            Medicina Transfusional Pediátrica
          </h1>
          <p className="text-sm text-slate-600 max-w-4xl leading-relaxed font-semibold">
            La Medicina Transfusional es una especialidad médica dedicada al uso seguro y adecuado de los componentes sanguíneos, así como a procedimientos especializados como la aféresis terapéutica. Su objetivo es optimizar el tratamiento de los pacientes, minimizar riesgos y garantizar la máxima seguridad posible.
          </p>
        </FadeUp>

        {/* Client Interactive Section */}
        <MedicinaTransfusionalClient />

        {/* Medical Sign-off Disclaimer */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 text-center max-w-3xl mx-auto space-y-4">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
            Contenido revisado por la Dra. Lizbeth Yamilet Hernández Verdugo, Médico Subespecialista en Hematología Pediátrica y Alta Especialidad en Medicina Transfusional.
          </p>
          <p className="text-[10px] text-slate-400 font-semibold italic">
            La información presentada tiene fines educativos y no sustituye la valoración médica individual.
          </p>
        </div>
      </div>
    </div>
  );
}
