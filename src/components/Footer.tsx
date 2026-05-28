import Link from "next/link";
import { doctor } from "@/data/doctor";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;
  return (
    <footer className="bg-[#572D55] text-white/70 pt-20 pb-10 border-t border-[#4c244b]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Contacto y Métodos de pago */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col group">
              <span className="font-signature text-3xl text-white leading-none transition-colors group-hover:text-[#F8B0E4]">
                Dra. Lizbeth Yamilet
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/80 mt-0.5 leading-none">
                Hernández Verdugo
              </span>
              <span className="text-[8px] font-black text-[#F8B0E4] uppercase tracking-[0.2em] mt-1 leading-none">
                Hematología Pediátrica
              </span>
            </Link>

            <div className="flex flex-col gap-4">
              <a href={whatsappUrl} className="flex items-center gap-3 hover:text-white transition"><FaWhatsapp className="text-[#F8B0E4]"/> {doctor.whatsapp}</a>
              <a href={`tel:${doctor.phone}`} className="flex items-center gap-3 hover:text-white transition"><FaPhone className="text-[#F8B0E4]"/> 55 9686 8266</a>
              <p className="flex items-start gap-3"><FaMapMarkerAlt className="text-[#F8B0E4] mt-1 flex-shrink-0"/> <span>{doctor.address}, {doctor.city}, {doctor.state}</span></p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-3 text-sm">Métodos de Pago Aceptados</h4>
              <div className="flex flex-wrap gap-2">
                {doctor.paymentMethods.map(method => (
                  <span key={method} className="bg-white/10 text-[10px] px-3 py-1.5 rounded-md text-white/90 font-medium">{method}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Padecimientos */}
          <div>
            <h3 className="text-white text-base font-bold mb-6 uppercase tracking-wider">Padecimientos</h3>
            <ul className="flex flex-col gap-3">
              {diseases.slice(0, 6).map(d => (
                <li key={d.id}><Link href={`/enfermedades/${d.slug}`} className="hover:text-white transition">{d.name}</Link></li>
              ))}
              <li><Link href="/enfermedades" className="text-[#F8B0E4] hover:text-white font-bold text-sm">Ver todos &rarr;</Link></li>
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div>
            <h3 className="text-white text-base font-bold mb-6 uppercase tracking-wider">Servicios</h3>
            <ul className="flex flex-col gap-3">
              {services.map(s => (
                <li key={s.id}><Link href={`/servicios/${s.slug}`} className="hover:text-white transition">{s.name}</Link></li>
              ))}
              <li><Link href="/servicios" className="text-[#F8B0E4] hover:text-white font-bold text-sm">Ver todos &rarr;</Link></li>
            </ul>
          </div>

          {/* Col 4: Síntomas y Legales */}
          <div>
            <h3 className="text-white text-base font-bold mb-6 uppercase tracking-wider">Síntomas</h3>
            <ul className="flex flex-col gap-3 mb-8">
              {symptoms.slice(0, 5).map(sym => (
                <li key={sym.id}><Link href={`/sintomas/${sym.slug}`} className="hover:text-white transition">{sym.name}</Link></li>
              ))}
            </ul>
            <h3 className="text-white text-base font-bold mb-6 uppercase tracking-wider">Legal</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/aviso-de-privacidad" className="hover:text-white transition">Aviso de Privacidad</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs flex flex-col gap-3">
          <p className="text-white/80 leading-relaxed max-w-4xl mx-auto">
            ced. prof. {doctor.cedula} (UNACH) | ced. esp. {doctor.cedulaEspecialidad} (UNAM) | ced. subesp. 15486256 (UNAM) | COFEPRIS: {doctor.cofepris}
          </p>
          <p className="text-white/50">© {new Date().getFullYear()} Todos los derechos reservados. Desarrollado bajo Arquitectura AISO v2.0.</p>
        </div>
      </div>
    </footer>
  );
}
