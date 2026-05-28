import Link from "next/link";
import { symptoms } from "@/data/symptoms";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata = {
  title: "Síntomas de Alarma Hematológica | Hematóloga Pediatra CDMX",
  description: "Conoce los síntomas físicos y hallazgos de laboratorio en niños que requieren valoración hematológica especializada.",
};

export default function SintomasPage() {
  return (
    <div className="min-h-screen bg-[#fcfdfd] py-12 relative overflow-hidden text-[#705662]">
      {/* Background watercolor blotches (Sinergia con el logo) */}
      <div className="absolute top-[15%] right-[-10%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(151,31,87,0.06)_0%,transparent_70%)] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[5%] left-[-10%] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(87,45,85,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />
        
        <FadeUp className="mb-16 mt-8 border-l-4 border-accent pl-5">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase">
            Síntomas de Alarma
          </h1>
          <p className="text-sm text-slate-650 max-w-3xl leading-relaxed">
            Identificar a tiempo señales inusuales en tus hijos como palidez extrema, sangrados inexplicables o fatiga constante puede cambiar radicalmente su salud y bienestar.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-start">
          {symptoms.map((sym, index) => (
            <StaggerItem 
              key={sym.id} 
              className={`h-full ${index % 3 === 1 ? 'lg:mt-8' : index % 3 === 2 ? 'lg:mt-4' : ''}`}
            >
              <Link href={`/sintomas/${sym.slug}`} className="bg-white p-8 border border-slate-150 hover:border-slate-355 hover:bg-[#0f1e36] hover:text-white transition-all duration-300 flex flex-col h-full rounded-[2.5rem_0.5rem_2.5rem_0.5rem] shadow-sm hover:shadow-xl hover:scale-[1.03] group">
                <div className="w-full h-44 bg-slate-100 rounded-[2rem_0.5rem_2rem_0.5rem] mb-6 relative overflow-hidden flex items-center justify-center text-slate-400 group-hover:bg-[#1a2d4a] transition-colors duration-300">
                  <img 
                    src={sym.image} 
                    alt={sym.name} 
                    className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <h2 className="text-base font-extrabold text-slate-900 mb-4 tracking-tight group-hover:text-accent transition-colors uppercase">{sym.name}</h2>
                    <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-3 group-hover:text-slate-300">{sym.description}</p>
                  </div>
                  <span className="text-primary font-bold flex items-center gap-2 uppercase text-[9px] tracking-wider group-hover:text-white transition-colors mt-auto">
                    Detalles Síntoma <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
