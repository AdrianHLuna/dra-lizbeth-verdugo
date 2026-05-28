import Link from "next/link";
import { services } from "@/data/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata = {
  title: "Procedimientos y Estudios Especializados | Hematología Pediátrica",
  description: "Conoce los procedimientos y estudios especializados de hematología infantil y medicina transfusional que realizamos en la CDMX.",
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-[#fcfdfd] py-12 relative overflow-hidden text-[#705662]">
      {/* Background watercolor blotches (Sinergia con el logo) */}
      <div className="absolute top-[5%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(151,31,87,0.06)_0%,transparent_70%)] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-[35%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(87,45,85,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
        
        <FadeUp className="mb-16 mt-8 border-l-4 border-accent pl-5">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase">
            Procedimientos y Estudios
          </h1>
          <p className="text-sm text-slate-650 max-w-3xl leading-relaxed">
            Realizamos estudios de alta especialidad para diagnosticar y dar seguimiento preciso a los trastornos de la sangre en niños y adolescentes, garantizando su seguridad y bienestar.
          </p>
        </FadeUp>

        <StaggerContainer className="flex flex-col gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <StaggerItem key={service.id} className="w-full">
              <Link href={`/servicios/${service.slug}`} className="bg-white border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row justify-between items-center p-8 rounded-[2rem_0.5rem_2rem_0.5rem] group relative overflow-hidden">
                {/* Space for Image */}
                <div className="w-full md:w-60 h-40 bg-slate-100 rounded-2xl relative overflow-hidden flex items-center justify-center text-slate-400 group-hover:bg-slate-200 transition-colors flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Espacio para Imagen</span>
                </div>

                <div className="flex-1 md:pr-8 text-center md:text-left">
                  <span className="text-[9px] font-bold text-accent uppercase tracking-widest block mb-2">Procedimiento {index + 1}</span>
                  <h2 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-primary transition-colors uppercase">{service.name}</h2>
                  <p className="text-slate-500 text-xs leading-relaxed">{service.description}</p>
                </div>
                
                <div className="mt-6 md:mt-0 flex-shrink-0">
                  <span className="px-6 py-3.5 bg-slate-900 text-white font-bold group-hover:bg-primary transition-colors text-[9px] uppercase tracking-widest block rounded-full">
                    Ver Ficha &rarr;
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
