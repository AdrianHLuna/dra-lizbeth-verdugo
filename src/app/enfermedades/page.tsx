import Link from "next/link";
import { diseases } from "@/data/diseases";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata = {
  title: "Enfermedades y Trastornos de la Sangre | Hematología Pediátrica",
  description: "Conoce los trastornos sanguíneos e inmunológicos que diagnosticamos y tratamos con enfoque científico y calidez humana.",
};

export default function EnfermedadesPage() {
  return (
    <div className="min-h-screen bg-[#fcfdfd] py-12 relative overflow-hidden text-[#705662]">
      {/* Background watercolor blotches (Sinergia con el logo) */}
      <div className="absolute top-[10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(87,45,85,0.06)_0%,transparent_70%)] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-[45%] right-[-10%] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(151,31,87,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} />
        
        <FadeUp className="mb-16 mt-8 border-l-4 border-primary pl-5">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase">
            Padecimientos y Trastornos
          </h1>
          <p className="text-sm text-slate-650 max-w-3xl leading-relaxed">
            Brindamos diagnósticos oportunos y opciones terapéuticas basadas en la mejor evidencia científica internacional para el tratamiento de trastornos de la sangre y el sistema linfático en niños.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diseases.map(disease => (
            <StaggerItem key={disease.id} className="h-full">
              <Link href={`/enfermedades/${disease.slug}`} className="bg-white border border-slate-100 hover:border-accent/40 shadow-sm hover:shadow-accent/5 hover:bg-slate-50 transition-all duration-300 flex flex-col h-full p-8 rounded-[100px_0px_100px_0px] overflow-hidden group">
                <div className="w-full h-40 bg-slate-100 rounded-[80px_0px_80px_0px] mb-6 relative overflow-hidden flex items-center justify-center text-slate-400 group-hover:bg-slate-200 transition-colors">
                  <img 
                    src={disease.image} 
                    alt={disease.name} 
                    className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-105"
                  />
                </div>

                <div className="p-2 flex flex-col flex-grow justify-between">
                  <div>
                    <h2 className="text-base font-extrabold text-slate-900 mb-4 tracking-tight group-hover:text-primary transition-colors uppercase">{disease.name}</h2>
                    <p className="text-slate-500 text-xs leading-relaxed mb-8 line-clamp-3">{disease.description}</p>
                  </div>
                  <span className="text-accent font-bold group-hover:text-primary transition-colors flex items-center gap-2 uppercase text-[9px] tracking-wider mt-auto">
                    Saber más <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
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
