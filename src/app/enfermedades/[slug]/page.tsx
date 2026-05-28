import { diseases } from "@/data/diseases";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaCheckCircle, FaExclamationTriangle, FaStethoscope } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return diseases.map((disease) => ({
    slug: disease.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const disease = diseases.find((d) => d.slug === resolvedParams.slug);
  if (!disease) return {};
  
  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
  };
}

export default async function DiseasePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const disease = diseases.find((d) => d.slug === resolvedParams.slug);
  if (!disease) notFound();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      name: disease.name,
      description: disease.description,
      signOrSymptom: disease.symptoms.map(s => ({ "@type": "MedicalSignOrSymptom", name: s })),
      riskFactor: disease.riskFactors.map(r => ({ "@type": "MedicalRiskFactor", name: r })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: disease.faqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] py-12 text-[#705662] relative overflow-hidden">
      <StructuredData data={schemas} />
      
      {/* Background watercolor blotches (Sinergia con el logo) */}
      <div className="absolute top-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(151,31,87,0.06)_0%,transparent_70%)] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] left-[-10%] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(87,45,85,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades", href: "/enfermedades" }, { label: disease.name }]} />
        
        {/* Hero Enfermedad (Avant-Garde Circular Layout) */}
        <FadeUp className="flex flex-col lg:flex-row gap-12 mb-16 mt-8 bg-white border border-slate-100 shadow-sm p-8 sm:p-12 rounded-[4rem_1rem_4rem_1rem] overflow-hidden relative">
          <div className="lg:w-7/12 flex flex-col justify-center relative z-10">
            <span className="text-accent font-bold text-xs uppercase tracking-widest mb-3 block">Información Médica</span>
            <h1 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight leading-tight uppercase">{disease.name}</h1>
            <p className="text-xs lg:text-sm text-slate-500 leading-relaxed font-semibold">{disease.description}</p>
          </div>
          
          <div className="lg:w-5/12 min-h-[300px] bg-slate-50 flex items-center justify-center relative overflow-hidden group rounded-full border-8 border-slate-100 shadow-lg">
             <div className="absolute inset-0 bg-slate-105 transition-transform duration-700 flex items-center justify-center">
                <img 
                  src={disease.image} 
                  alt={disease.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
             </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contenido Principal */}
          <StaggerContainer className="lg:col-span-2 space-y-12">
            
            {/* Síntomas */}
            <StaggerItem>
              <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight flex items-center gap-3 border-l-4 border-accent pl-4 uppercase"><FaExclamationTriangle className="text-accent" /> Síntomas y Signos</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {disease.symptoms.map(sym => (
                  <li key={sym} className="bg-white p-5 border border-slate-100 rounded-[1.5rem_0.5rem_1.5rem_0.5rem] shadow-sm flex items-start gap-4 hover:border-primary/20 transition-all group">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="font-semibold text-slate-650 text-xs leading-relaxed">{sym}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            {/* Causas y Riesgos */}
            <StaggerItem>
              <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight flex items-center gap-3 border-l-4 border-primary pl-4 uppercase"><FaStethoscope className="text-primary" /> Causas y Factores de Riesgo</h2>
              <div className="bg-slate-50 p-8 rounded-[2rem_0.5rem_2rem_0.5rem] border border-slate-150 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-extrabold mb-4 text-slate-800 border-b border-slate-200 pb-2 uppercase">Causas Principales</h3>
                  <ul className="list-disc list-inside text-slate-500 text-[11px] space-y-2.5 leading-relaxed">
                    {disease.causes.map(cause => <li key={cause} className="hover:text-slate-900 transition-colors leading-relaxed">{cause}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-extrabold mb-4 text-slate-800 border-b border-slate-200 pb-2 uppercase">Factores de Riesgo</h3>
                  <ul className="list-disc list-inside text-slate-500 text-[11px] space-y-2.5 leading-relaxed">
                    {disease.riskFactors.map(factor => <li key={factor} className="hover:text-slate-900 transition-colors leading-relaxed">{factor}</li>)}
                  </ul>
                </div>
              </div>
            </StaggerItem>

            {/* Tratamientos */}
            <StaggerItem>
              <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight flex items-center gap-3 border-l-4 border-slate-900 pl-4 uppercase">Opciones de Tratamiento</h2>
              <div className="flex flex-wrap gap-2">
                {disease.treatments.map(treatment => (
                  <span key={treatment} className="bg-white text-slate-800 px-5 py-3 font-semibold text-[10px] uppercase border border-slate-100 rounded-full hover:bg-slate-50 transition-all cursor-default shadow-sm">
                    {treatment}
                  </span>
                ))}
              </div>
            </StaggerItem>

            {/* FAQs */}
            <StaggerItem>
              <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight border-l-4 border-primary pl-4 uppercase">Preguntas Frecuentes</h2>
              <div className="space-y-3">
                {disease.faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 border border-slate-100 rounded-[2rem_0.5rem_2rem_0.5rem] shadow-sm hover:border-slate-250 transition-all">
                    <h3 className="font-extrabold text-xs lg:text-sm text-slate-900 mb-2 uppercase">{faq.question}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Sidebar CTA (Avant-Garde Luxury Float) */}
          <FadeUp delay={0.2} className="lg:col-span-1">
            <div className="sticky top-32 bg-gradient-to-br from-primary to-[#3b1c39] p-8 text-white shadow-xl rounded-[2.5rem_0.5rem_2.5rem_0.5rem] group border-t-8 border-accent relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
              <h3 className="text-lg font-extrabold mb-4 tracking-tight uppercase">¿Tu hijo presenta síntomas de {disease.name}?</h3>
              <div className="w-10 h-1 bg-accent mb-6 rounded-full" />
              <p className="text-slate-300 text-xs mb-8 leading-relaxed">
                El diagnóstico temprano y correcto cambia el pronóstico. La {doctor.title} {doctor.name} es subespecialista en Hematología Pediátrica y puede ayudar a tu familia.
              </p>
              <a href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="block w-full text-center bg-white text-primary font-bold py-4 rounded-full hover:bg-[#FEE5FD] hover:text-[#971F57] transition-all shadow-lg text-[9px] uppercase tracking-widest">
                Agendar Consulta de Especialidad
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
