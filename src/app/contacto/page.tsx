import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp, FaEnvelope, FaExclamationTriangle } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata = {
  title: "Contacto y Ubicación | Hematología Pediátrica CDMX",
  description: "Encuentra la ubicación del consultorio de la Dra. Lizbeth Yamileth Hernandez Verdugo en la Roma Norte, CDMX.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#fcfdfd] py-12 relative overflow-hidden text-slate-800">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
        
        <FadeUp className="text-center mb-16 mt-8">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-white border border-primary/20 px-4 py-1.5 rounded-full">
            Atención Inmediata
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-6 mb-4 uppercase tracking-tight">Contacto y Ubicación</h1>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Estamos ubicados en una zona accesible y de excelente conectividad en la Roma Norte, Ciudad de México. Agenda una consulta especializada.
          </p>
        </FadeUp>

        {/* 3-Column Avant-Garde Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Column 1: Urgencias & WhatsApp (Berenjena Profundo & Curves) */}
          <FadeUp delay={0.1} className="h-full flex">
            <div className="bg-gradient-to-br from-primary to-[#3b1c39] text-white p-8 rounded-[4rem_1rem_4rem_1rem] shadow-xl flex flex-col justify-between w-full group relative overflow-hidden border-t-8 border-accent">
              <div className="absolute top-[-10%] right-[-10%] w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
              
              <div>
                <h3 className="text-xl font-extrabold mb-6 uppercase tracking-tight">Atención y Urgencias</h3>
                <div className="w-10 h-1 bg-accent mb-8 rounded-full" />
                
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                      <FaWhatsapp size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase text-slate-300">WhatsApp de Citas</h4>
                      <p className="text-sm font-extrabold mt-1">{doctor.whatsapp}</p>
                    </div>
                  </div>

                  {/* Llamadas */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                      <FaPhone size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase text-slate-300">Llamadas / Urgencias</h4>
                      <p className="text-sm font-extrabold mt-1">{doctor.phone}</p>
                    </div>
                  </div>

                  {/* Email */}
                  {doctor.email && (
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                        <FaEnvelope size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs uppercase text-slate-300">Correo Electrónico</h4>
                        <p className="text-xs font-semibold mt-1 break-all">{doctor.email}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Botón Acción Rápida */}
              <a 
                href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full bg-accent text-white font-bold py-4 rounded-full text-center hover:bg-[#a6225f] transition-colors uppercase tracking-wider text-[10px] mt-10 block"
              >
                Enviar WhatsApp Inmediato
              </a>
            </div>
          </FadeUp>

          {/* Column 2: Large Elliptic Google Map */}
          <FadeUp delay={0.2} className="h-full flex">
            <div className="w-full bg-slate-100 min-h-[380px] lg:min-h-auto rounded-[150px_40px_150px_40px] overflow-hidden shadow-lg border border-slate-200 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661706785868!2d-99.16536642385157!3d19.415061981858547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff394142f1cf%3A0x6b4c1fcbcf54b1f4!2sSan%20Luis%20Potos%C3%AD%20143%2C%20Roma%20Nte.%2C%20Cuauht%C3%A9moc%2C%2006700%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1716100000000!5m2!1ses-419!2smx" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-700 w-full h-full"
              />
            </div>
          </FadeUp>

          {/* Column 3: Horarios, Ubicación & Costos */}
          <FadeUp delay={0.3} className="h-full flex">
            <div className="bg-white border border-slate-200 p-8 rounded-[1rem_4rem_1rem_4rem] shadow-xl flex flex-col justify-between w-full group relative overflow-hidden border-t-8 border-primary">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">Consultorio Roma Norte</h3>
                <div className="w-10 h-1 bg-primary mb-8 rounded-full" />
                
                <div className="space-y-6">
                  {/* Dirección */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <FaMapMarkerAlt size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase text-slate-400">Dirección</h4>
                      <p className="text-xs text-slate-650 leading-relaxed mt-1 font-semibold">
                        {doctor.address}, {doctor.city}, {doctor.state}
                      </p>
                    </div>
                  </div>

                  {/* Horarios */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <FaClock size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase text-slate-400">Horarios de Atención</h4>
                      <p className="text-xs text-slate-650 leading-relaxed mt-1 font-semibold whitespace-pre-line">
                        {doctor.schedule.replace(" | ", "\n")}
                      </p>
                    </div>
                  </div>

                  {/* Costos */}
                  <div className="flex gap-4 items-start bg-slate-50 p-4 border border-slate-100 rounded-2xl">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                      <FaExclamationTriangle size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase text-slate-400">Inversión en Consulta</h4>
                      <p className="text-sm font-extrabold text-slate-900 mt-1">${doctor.consultationPrice} MXN</p>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href={doctor.googleMapsUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full bg-primary text-white font-bold py-4 rounded-full text-center hover:bg-[#a6225f] transition-colors uppercase tracking-wider text-[10px] mt-10 block shadow-md"
              >
                Abrir en Google Maps
              </a>
            </div>
          </FadeUp>

        </div>

      </div>
    </div>
  );
}
