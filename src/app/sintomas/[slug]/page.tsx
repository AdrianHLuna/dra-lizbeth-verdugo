import { symptoms } from "@/data/symptoms";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaExclamationTriangle, FaCalendarCheck } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const symptom = symptoms.find((s) => s.slug === resolvedParams.slug);
  if (!symptom) return {};
  
  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
  };
}

export default async function SymptomPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const symptom = symptoms.find((s) => s.slug === resolvedParams.slug);
  if (!symptom) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalSignOrSymptom",
    name: symptom.name,
    description: symptom.description,
    cause: symptom.causes.map(c => ({ "@type": "MedicalCause", name: c })),
  };

  return (
    <div className="min-h-screen bg-[#fcfdfd] py-12 text-[#705662] relative overflow-hidden">
      <StructuredData data={schema} />
      
      {/* Background watercolor blotches (Sinergia con el logo) */}
      <div className="absolute top-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(151,31,87,0.06)_0%,transparent_70%)] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] left-[-10%] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(87,45,85,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas", href: "/sintomas" }, { label: symptom.name }]} />
        
        {/* Hero Síntoma (Avant-Garde Circular Layout) */}
        <FadeUp className="flex flex-col lg:flex-row gap-12 mb-16 mt-8 bg-white border border-slate-100 shadow-sm p-8 sm:p-12 rounded-[4rem_1rem_4rem_1rem] overflow-hidden relative">
          <div className="lg:w-7/12 flex flex-col justify-center relative z-10">
            <span className="text-accent font-bold text-xs uppercase tracking-widest mb-3 block">Síntoma de Alarma</span>
            <h1 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight leading-tight uppercase">{symptom.name}</h1>
            <p className="text-xs lg:text-sm text-slate-500 leading-relaxed font-semibold">{symptom.description}</p>
          </div>
          
          <div className="lg:w-5/12 min-h-[300px] bg-slate-50 flex items-center justify-center relative overflow-hidden group rounded-full border-8 border-slate-100 shadow-lg">
             <div className="absolute inset-0 bg-slate-105 transition-transform duration-700 flex items-center justify-center">
                <img 
                  src={symptom.image} 
                  alt={symptom.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
             </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contenido Principal */}
          <StaggerContainer className="lg:col-span-2 space-y-12">
            
            {/* Por qué no debes ignorarlo */}
            <StaggerItem>
              <div className="bg-amber-50/50 border border-amber-200 p-8 rounded-[2rem_0.5rem_2rem_0.5rem] hover:shadow-md transition-shadow group">
                <h2 className="text-base lg:text-lg font-black text-amber-700 mb-4 flex items-center gap-2 uppercase">
                  <FaExclamationTriangle className="group-hover:scale-110 transition-transform animate-pulse" /> ¿Por qué no debes ignorarlo?
                </h2>
                <p className="text-xs lg:text-sm text-amber-900 font-semibold leading-relaxed">
                  {symptom.whyConsult}
                </p>
              </div>
            </StaggerItem>

            {/* Posibles Causas */}
            <StaggerItem>
              <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight flex items-center gap-3 border-l-4 border-primary pl-4 uppercase">Posibles Causas de Valoración</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {symptom.causes.map(cause => (
                  <li key={cause} className="bg-white p-6 border border-slate-100 rounded-[1.5rem_0.5rem_1.5rem_0.5rem] font-semibold text-slate-650 text-xs hover:border-primary/20 transition-all cursor-default leading-relaxed">
                    {cause}
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-slate-400 mt-6 italic leading-relaxed">* Estas son posibles causas asociadas de forma médica general. Un diagnóstico definitivo y preciso requiere de una consulta médica y estudios de laboratorio personalizados.</p>
            </StaggerItem>
          </StaggerContainer>

          {/* Sidebar CTA (Avant-Garde Luxury Float) */}
          <FadeUp delay={0.2} className="lg:col-span-1">
            <div className="sticky top-32 bg-gradient-to-br from-primary to-[#3b1c39] p-8 text-white shadow-xl rounded-[2.5rem_0.5rem_2.5rem_0.5rem] group border-t-8 border-accent relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
              <h3 className="text-lg font-extrabold mb-4 tracking-tight uppercase">La Dra. Lizbeth Hernandez evalúa este síntoma</h3>
              <div className="w-10 h-1 bg-accent mb-6 rounded-full" />
              <p className="text-slate-300 text-xs mb-8 leading-relaxed">
                La detección oportuna de anomalías sanguíneas previene complicaciones severas. Estamos listos para atender a tu hijo con el mayor cuidado y profesionalismo.
              </p>
              <a href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="block w-full flex items-center justify-center gap-2 bg-white text-primary font-bold py-4 rounded-full hover:bg-[#FEE5FD] hover:text-[#971F57] transition-all text-[9px] uppercase tracking-widest shadow-lg">
                <FaCalendarCheck size={12} /> Agendar Valoración Pediátrica
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
