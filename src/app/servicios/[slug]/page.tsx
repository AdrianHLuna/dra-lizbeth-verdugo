import { services } from "@/data/services";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaCheckCircle, FaInfoCircle, FaCalendarCheck } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};
  
  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.longDescription,
    procedureType: service.type === "ambulatorio" ? "NoninvasiveProcedure" : "SurgicalProcedure",
    howPerformed: service.description,
    preparation: service.anesthesiaType ? `Anestesia: ${service.anesthesiaType}` : undefined,
    performer: {
      "@type": "Physician",
      name: `${doctor.title} ${doctor.name}`,
    },
  };

  return (
    <div className="min-h-screen bg-[#fcfdfd] py-12 text-[#705662] relative overflow-hidden">
      <StructuredData data={schema} />
      
      {/* Background watercolor blotches (Sinergia con el logo) */}
      <div className="absolute top-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(151,31,87,0.06)_0%,transparent_70%)] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] left-[-10%] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(87,45,85,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/servicios" }, { label: service.name }]} />
        
        {/* Hero Servicio (Avant-Garde Circular Layout) */}
        <FadeUp className="flex flex-col lg:flex-row gap-12 mb-16 mt-8 bg-white border border-slate-100 shadow-sm p-8 sm:p-12 rounded-[4rem_1rem_4rem_1rem] overflow-hidden relative">
          <div className="lg:w-7/12 flex flex-col justify-center relative z-10">
            <div>
              <span className="inline-block px-5 py-2 bg-primary/5 text-primary font-bold text-xs mb-6 rounded-full border border-primary/10 tracking-wide uppercase">
                {service.type}
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight leading-tight uppercase">{service.name}</h1>
            <p className="text-xs lg:text-sm text-slate-500 leading-relaxed font-semibold">{service.longDescription}</p>
          </div>
          
          <div className="lg:w-5/12 min-h-[300px] bg-slate-50 flex items-center justify-center relative overflow-hidden group rounded-full border-8 border-slate-100 shadow-lg">
             <div className="absolute inset-0 bg-slate-100 transition-transform duration-700 flex items-center justify-center">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
             </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contenido Principal */}
          <StaggerContainer className="lg:col-span-2 space-y-12">
            
            {/* Ficha técnica */}
            <StaggerItem>
              <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight flex items-center gap-3 border-l-4 border-primary pl-4 uppercase"><FaInfoCircle className="text-primary" /> Ficha Técnica</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-100 p-6 rounded-[2rem_0.5rem_2rem_0.5rem] shadow-sm hover:shadow-md transition-shadow">
                  <dt className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Duración del procedimiento</dt>
                  <dd className="text-sm font-black text-slate-900 uppercase">{service.duration || "Variable"}</dd>
                </div>
                <div className="bg-white border border-slate-100 p-6 rounded-[0.5rem_2rem_0.5rem_2rem] shadow-sm hover:shadow-md transition-shadow">
                  <dt className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Recuperación estimada</dt>
                  <dd className="text-sm font-black text-slate-900 uppercase">{service.recoveryTime || "Inmediata"}</dd>
                </div>
                <div className="bg-white border border-slate-100 p-6 rounded-[0.5rem_2rem_0.5rem_2rem] shadow-sm hover:shadow-md transition-shadow">
                  <dt className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Nivel de molestia / Dolor</dt>
                  <dd className="text-xs font-bold text-slate-900 uppercase">{service.isPainful ? "Sí, requiere analgésico infantil" : "Mínimo / Indoloro"}</dd>
                </div>
                <div className="bg-white border border-slate-100 p-6 rounded-[2rem_0.5rem_2rem_0.5rem] shadow-sm hover:shadow-md transition-shadow">
                  <dt className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Inversión Aproximada</dt>
                  <dd className="text-sm font-black text-primary uppercase">{service.priceRange || "Cotización Personalizada"}</dd>
                </div>
                
                {/* Custom Specs */}
                {service.technicalSpecs && Object.entries(service.technicalSpecs).map(([key, value]) => (
                  <div key={key} className="col-span-1 sm:col-span-2 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <dt className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">{key}</dt>
                    <dd className="text-xs font-semibold text-slate-650 leading-relaxed">{value}</dd>
                  </div>
                ))}
              </dl>
            </StaggerItem>

            {/* Beneficios */}
            <StaggerItem>
              <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight flex items-center gap-3 border-l-4 border-accent pl-4 uppercase"><FaCheckCircle className="text-accent" /> Beneficios Diagnósticos</h2>
              <ul className="grid grid-cols-1 gap-3">
                {service.benefits.map(benefit => (
                  <li key={benefit} className="bg-white p-6 border border-slate-100 rounded-[1.5rem_0.5rem_1.5rem_0.5rem] shadow-sm flex items-start gap-4 hover:border-primary/20 transition-all group">
                    <FaCheckCircle className="text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-slate-650 text-xs leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            {/* Recomendaciones */}
            <StaggerItem>
              <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight flex items-center gap-3 border-l-4 border-slate-900 pl-4 uppercase">Recomendaciones e Instrucciones</h2>
              <div className="bg-slate-50 p-8 rounded-[2rem_0.5rem_2rem_0.5rem] border border-slate-150">
                <ul className="list-disc list-inside text-slate-500 text-[11px] space-y-3 leading-relaxed">
                  {service.postOpRecommendations.map(rec => <li key={rec} className="hover:text-slate-900 transition-colors leading-relaxed">{rec}</li>)}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Sidebar CTA (Avant-Garde Luxury Float) */}
          <FadeUp delay={0.2} className="lg:col-span-1">
            <div className="sticky top-32 bg-gradient-to-br from-primary to-[#3b1c39] p-8 text-white shadow-xl rounded-[2.5rem_0.5rem_2.5rem_0.5rem] group border-t-8 border-accent relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
              <h3 className="text-lg font-extrabold mb-4 tracking-tight uppercase">¿Tu hijo requiere este estudio?</h3>
              <div className="w-10 h-1 bg-accent mb-6 rounded-full" />
              <p className="text-slate-300 text-xs mb-8 leading-relaxed">
                La Dra. Lizbeth realiza y supervisa personalmente los procedimientos bajo estrictos protocolos de bioseguridad y control analgésico infantil.
              </p>
              <a href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="block w-full flex items-center justify-center gap-2 bg-white text-primary font-bold py-4 rounded-full hover:bg-[#FEE5FD] hover:text-[#971F57] transition-all text-[9px] uppercase tracking-widest shadow-lg">
                <FaCalendarCheck size={12} /> Agendar Valoración Médica
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
