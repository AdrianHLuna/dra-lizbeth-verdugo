"use client";

import { doctor } from "@/data/doctor";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { diseases } from "@/data/diseases";
import { FaCalendarCheck, FaAward, FaUniversity, FaCertificate, FaHospitalSymbol, FaMoneyBillWave, FaExchangeAlt, FaCreditCard, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: `${doctor.title} ${doctor.name}`,
    description: doctor.bio,
    medicalSpecialty: "Pediatric Hematology",
    telephone: doctor.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
    },
    priceRange: `$${doctor.consultationPrice} MXN`,
  };

  // Organic Blur-In & Fade-In Animations
  const softBlurIn = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  } as const;

  return (
    <div className="min-h-screen bg-[#fcfdfd] font-sans selection:bg-primary/20 text-[#705662] relative overflow-hidden">
      <StructuredData data={homeSchema} />
      
      {/* Background watercolor blotches (Sinergia con el logo) */}
      <div className="absolute top-[3%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(87,45,85,0.06)_0%,transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(151,31,87,0.05)_0%,transparent_70%)] pointer-events-none -z-10" />

      {/* 1. HERO SECTION (AVANT-GARDE LAYERED ASYMMETRY - MASSIVE 50/50 LAYOUT) */}
      <section className="relative min-h-[calc(100vh-80px)] lg:min-h-screen flex items-center py-16 lg:py-24 bg-white">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
            
            {/* Left Column: Content (Spans 6 cols) */}
            <motion.div 
              className="lg:col-span-6 text-center lg:text-left flex flex-col justify-center" 
              initial="hidden" animate="visible" variants={staggerContainer}
            >
              <motion.div variants={softBlurIn} className="inline-flex items-center gap-2 px-5 py-2 bg-primary/5 text-primary font-bold text-xs mb-6 rounded-full border border-primary/10 tracking-wide uppercase self-center lg:self-start">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> {doctor.specialistTitle}
              </motion.div>
              
              <motion.h1 variants={softBlurIn} className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-extrabold text-slate-900 leading-[1.05] mb-8 tracking-tight uppercase">
                Cuidando la <br className="hidden xl:inline" />
                salud de <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">la sangre de tu hijo</span>
              </motion.h1>
              
              <motion.div variants={softBlurIn} className="flex justify-center lg:justify-start">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group px-12 py-5.5 bg-primary text-white font-bold rounded-full flex items-center justify-center gap-3 hover:bg-[#971F57] transition-colors duration-300 shadow-xl shadow-primary/10 hover:shadow-2xl uppercase tracking-wider text-xs">
                   Agendar Valoración Médica <FaCalendarCheck size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column: Giant Sized Circle Image (Spans 6 cols) */}
            <motion.div 
              className="lg:col-span-6 flex justify-center items-center" 
              initial="hidden" animate="visible" variants={softBlurIn}
            >
              {/* Inner Relative Container representing the exact photo box */}
              <div className="relative w-72 h-72 sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] xl:w-[540px] xl:h-[540px] flex items-center justify-center">
                
                {/* Concentric rings behind the image (Using scale for perfect alignment) */}
                <div className="absolute inset-0 w-full h-full rounded-full border border-primary/10 scale-[1.12] animate-spin-slow pointer-events-none" />
                <div className="absolute inset-0 w-full h-full rounded-full border border-accent/10 scale-[1.06] pointer-events-none" />

                {/* Main Doctor Image Circle - Con fondo degradado de acuarela */}
                <motion.div 
                  className="w-full h-full bg-gradient-to-br from-primary via-[#971F57] to-[#F8B0E4] shadow-2xl relative overflow-hidden rounded-full border-[10px] border-white z-10"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                >
                   <div className="absolute inset-0 bg-[#572D55]/85 flex flex-col items-center justify-center transition-transform duration-1000 hover:scale-105">
                      <p className="text-white/80 font-extrabold text-base lg:text-lg xl:text-xl uppercase tracking-widest text-center px-8 leading-snug">
                        Dra. Lizbeth <br/> Hernandez
                      </p>
                   </div>
                </motion.div>

                {/* Float Experience Badge */}
                <motion.div 
                  className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 xl:bottom-10 xl:right-10 bg-accent p-5 shadow-2xl rounded-full text-white w-20 h-20 flex flex-col items-center justify-center z-20"
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: "spring" }}
                >
                  <span className="font-black text-base leading-none">+10</span>
                  <span className="text-[7px] uppercase font-bold text-center mt-1">Años Exp</span>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION (SOBRE MÍ - INDEPENDENT ELEVATED BLOCK) */}
      <section className="py-24 bg-slate-50/50 border-t border-slate-100 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {/* Col Left: Quote and Presentation (Spans 5 cols) */}
            <motion.div variants={softBlurIn} className="lg:col-span-5 bg-white p-10 border border-slate-150 rounded-[3rem_1rem_3rem_1rem] shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />
              <span className="text-accent font-extrabold text-xs uppercase tracking-widest block mb-4">Hematóloga Pediatra</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">Dra. Lizbeth Hernandez</h2>
              <div className="w-10 h-1 bg-accent mb-6 rounded-full" />
              <p className="text-base lg:text-lg leading-relaxed text-slate-600 mb-6 font-medium italic">
                "{doctor.bio}"
              </p>
              <span className="text-[10px] font-black text-primary uppercase tracking-widest block">
                Universidad Nacional Autónoma de México
              </span>
            </motion.div>

            {/* Col Right: Foto About Me + Bento Box (Spans 7 cols) */}
            <motion.div variants={softBlurIn} className="lg:col-span-7 space-y-8">
              {/* Foto About Me */}
              <div className="w-full h-72 lg:h-80 bg-slate-100 rounded-[2rem_0.5rem_2rem_0.5rem] relative overflow-hidden flex items-center justify-center text-slate-400 border border-slate-150 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-widest">Foto About Me — Dra. Lizbeth</span>
              </div>

              {/* Mini Bento Grid of Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 border border-slate-100 rounded-[1rem_3rem_1rem_3rem] shadow-sm flex flex-col justify-between">
                  <FaUniversity className="text-accent text-2xl mb-4" />
                  <div>
                    <h4 className="font-bold text-xs uppercase text-slate-400">Médico Cirujano</h4>
                    <p className="text-xs text-slate-650 mt-1 font-semibold">ced. prof. {doctor.cedula} (UNACH)</p>
                  </div>
                </div>

                <div className="bg-white p-6 border border-slate-100 rounded-[3rem_1rem_3rem_1rem] shadow-sm flex flex-col justify-between">
                  <FaHospitalSymbol className="text-primary text-2xl mb-4" />
                  <div>
                    <h4 className="font-bold text-xs uppercase text-slate-400">Pediatría Médica</h4>
                    <p className="text-xs text-slate-650 mt-1 font-semibold">ced. esp. {doctor.cedulaEspecialidad} (UNAM)</p>
                  </div>
                </div>

                <div className="col-span-1 sm:col-span-2 bg-slate-900 text-white p-6 rounded-2xl flex items-center gap-5">
                  <FaCertificate className="text-accent text-3xl flex-shrink-0 animate-pulse" />
                  <div>
                    <h4 className="font-bold text-xs uppercase text-slate-400">Subespecialidad e Inmunología</h4>
                    <p className="text-xs text-slate-300 mt-1 font-semibold">Hematología Pediátrica | ced. subesp. 15486256 (UNAM)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. SYMPTOMS OF ALARM (SECCIÓN 3 - MASONRY SECTIONS) */}
      <section className="py-24 bg-white border-t border-b border-slate-100 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={softBlurIn}>
            <span className="text-accent font-extrabold text-xs uppercase tracking-widest bg-slate-50 border border-accent/20 px-4 py-1.5 rounded-full">
              Señales Físicas de Alerta
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight mt-6">Síntomas de Alarma en Niños</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-sm text-slate-500 max-w-xl mx-auto mt-4">Identifica a tiempo anomalías en el sistema circulatorio e inmunológico de tu hijo.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-start"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            {symptoms.slice(0, 3).map((sym, index) => (
              <motion.div 
                key={sym.id} 
                variants={softBlurIn} 
                className={`h-full ${index % 3 === 1 ? 'lg:mt-8' : index % 3 === 2 ? 'lg:mt-4' : ''}`}
              >
                <Link href={`/sintomas/${sym.slug}`} className="bg-white p-8 border border-slate-150 hover:border-slate-355 hover:bg-[#0f1e36] hover:text-white transition-all duration-300 flex flex-col h-full rounded-[2.5rem_0.5rem_2.5rem_0.5rem] shadow-sm hover:shadow-xl hover:scale-[1.03] group">
                  {/* Space for Image */}
                  <div className="w-full h-44 bg-slate-100 rounded-[2rem_0.5rem_2rem_0.5rem] mb-6 relative overflow-hidden flex items-center justify-center text-slate-400 group-hover:bg-[#1a2d4a] group-hover:text-white/80 transition-colors duration-300">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Espacio para Imagen</span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-4 tracking-tight group-hover:text-accent transition-colors uppercase">{sym.name}</h3>
                  <p className="text-slate-500 text-xs mb-8 flex-grow leading-relaxed group-hover:text-slate-300">{sym.description}</p>
                  <span className="text-primary font-bold flex items-center gap-2 uppercase text-[9px] tracking-wider group-hover:text-white transition-colors">
                    Detalles Síntoma <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Botón Ver Todos los Síntomas */}
          <motion.div 
            className="text-center mt-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={softBlurIn}
          >
            <Link 
              href="/sintomas" 
              className="inline-block bg-[#0f1e36] text-white hover:bg-accent hover:text-[#0f1e36] font-bold px-10 py-4.5 rounded-full transition-all duration-300 text-[10px] uppercase tracking-widest shadow-md hover:shadow-xl hover:scale-105"
            >
              Ver Todos los Síntomas &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. PROCEDURES & SERVICES (SECCIÓN 4 - STACKED CARDS LAYOUT) */}
      <section className="py-24 bg-slate-50/30 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div className="flex flex-col lg:flex-row justify-between items-end mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={softBlurIn}>
            <div>
              <span className="text-primary font-extrabold text-xs uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
                Estudios Especializados
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight mt-6">Procedimientos Clínicos</h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm mt-4 lg:mt-0 leading-relaxed font-semibold">Realizados y supervisados por la Dra. Lizbeth bajo estrictos estándares analíticos infantiles.</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-6 max-w-5xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            {services.slice(0, 3).map((service, index) => (
              <motion.div key={service.id} variants={softBlurIn} className="w-full">
                <Link href={`/servicios/${service.slug}`} className="bg-white border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row justify-between items-center p-8 rounded-[2rem_0.5rem_2rem_0.5rem] group relative overflow-hidden">
                  {/* Space for Image */}
                  <div className="w-full md:w-60 h-40 bg-slate-100 rounded-2xl relative overflow-hidden flex items-center justify-center text-slate-400 group-hover:bg-slate-200 transition-colors flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Espacio para Imagen</span>
                  </div>
                  
                  <div className="flex-1 md:pr-8 text-center md:text-left">
                    <span className="text-[9px] font-bold text-accent uppercase tracking-widest block mb-2">Procedimiento {index + 1}</span>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-primary transition-colors uppercase">{service.name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-2xl">{service.description}</p>
                  </div>
                  
                  <div className="mt-6 md:mt-0 flex-shrink-0">
                    <span className="px-6 py-3.5 bg-slate-900 text-white font-bold group-hover:bg-primary transition-colors text-[9px] uppercase tracking-widest block rounded-full">
                      Ver Ficha &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Botón Ver Todos los Servicios */}
          <motion.div 
            className="text-center mt-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={softBlurIn}
          >
            <Link 
              href="/servicios" 
              className="inline-block bg-slate-900 text-white hover:bg-primary font-bold px-10 py-4.5 rounded-full transition-all duration-300 text-[10px] uppercase tracking-widest shadow-md hover:shadow-xl hover:scale-105"
            >
              Ver Todos los Procedimientos &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 5. DISEASES LIST (SECCIÓN 5 - ORGANIC DARK CIRCULAR ONCO-HEMATOLOGY - TEMÁTICA BERENJENA) */}
      <section className="py-24 bg-[#3b1c39] text-white border-t border-b border-white/5 relative overflow-hidden rounded-[5rem_0px_5rem_0px] shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(151,31,87,0.3),transparent)] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div className="mb-20 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={softBlurIn}>
            <span className="text-accent font-extrabold text-xs uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              Especialidades Clínicas
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight mt-6">Enfermedades Tratadas</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            {diseases.slice(0, 3).map((disease) => (
              <motion.div key={disease.id} variants={softBlurIn} className="h-full">
                <Link href={`/enfermedades/${disease.slug}`} className="bg-white/5 border border-white/10 hover:border-accent/40 shadow-sm hover:shadow-accent/5 hover:bg-white/10 transition-all duration-300 flex flex-col h-full p-8 rounded-[100px_0px_100px_0px] overflow-hidden group">
                  {/* Space for Image */}
                  <div className="w-full h-40 bg-white/5 rounded-[80px_0px_80px_0px] mb-6 relative overflow-hidden flex items-center justify-center text-white/30 group-hover:bg-white/10 group-hover:text-white/60 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Espacio para Imagen</span>
                  </div>
                  <h3 className="text-base font-extrabold text-white mb-4 tracking-tight group-hover:text-accent transition-colors uppercase">{disease.name}</h3>
                  <p className="text-slate-400 text-xs mb-8 flex-grow leading-relaxed line-clamp-3">{disease.description}</p>
                  
                  <span className="mt-auto text-white font-bold flex items-center gap-2 uppercase text-[9px] tracking-wider group-hover:text-accent transition-colors">
                    Saber más <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Botón Ver Todas las Enfermedades */}
          <motion.div 
            className="text-center mt-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={softBlurIn}
          >
            <Link 
              href="/enfermedades" 
              className="inline-block bg-white text-[#3b1c39] hover:bg-accent hover:text-[#3b1c39] font-bold px-10 py-4.5 rounded-full transition-all duration-300 text-[10px] uppercase tracking-widest shadow-md hover:shadow-xl hover:scale-105"
            >
              Ver Todas las Enfermedades &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. COSTOS DE VALORACIÓN (SECCIÓN 6 - ORGANIC CARD) */}
      <section className="py-24 bg-slate-50/50 border-t border-slate-100 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={softBlurIn}
            className="text-center mb-12"
          >
            <span className="text-[9px] font-bold text-accent uppercase tracking-widest block mb-2">Transparencia en Consulta</span>
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Cobro</h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={softBlurIn}
            className="bg-white border border-slate-150 shadow-sm rounded-[3rem_1rem_3rem_1rem] overflow-hidden"
          >
            {/* Descripción */}
            <div className="px-8 lg:px-12 py-8 border-b border-slate-100">
              <p className="text-slate-500 text-xs leading-relaxed max-w-2xl">
                La valoración comprende la revisión clínica infantil completa, análisis de estudios sanguíneos previos y prescripción/orientación diagnóstica especializada.
              </p>
            </div>

            {/* Grid de 4 columnas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">

              {/* Precio de Consulta */}
              <div className="px-8 py-8">
                <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-5">Precio de Consulta</h3>
                <div className="space-y-4">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-black text-primary mt-1">
                      {doctor.consultationPrice ? `$${doctor.consultationPrice}` : 'Sin datos'}
                    </span>
                    {doctor.consultationPrice && (
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Pesos Mexicanos</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Métodos de Pago */}
              <div className="px-8 py-8">
                <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-5">Métodos de Pago</h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.paymentMethods.map(method => (
                    <span key={method} className="px-3 py-1.5 bg-primary/5 border border-primary/15 text-primary text-[10px] font-bold rounded-full uppercase tracking-wide">
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              {/* Seguros */}
              <div className="px-8 py-8">
                <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-5">Seguros</h3>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Acepta seguros</span>
                    <span className="text-sm font-extrabold text-slate-700 mt-1">
                      {doctor.insurances && doctor.insurances.length > 0 ? doctor.insurances.join(', ') : 'No'}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Método de cobro del seguro</span>
                    <span className="text-sm font-extrabold text-slate-700 mt-1">No</span>
                  </div>
                </div>
              </div>

            </div>

            {/* CTA inferior */}
            <div className="px-8 lg:px-12 py-6 bg-primary/3 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 font-semibold">
                Agenda tu consulta por WhatsApp o llámanos directamente para más información.
              </p>
              <a
                href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
                target="_blank" rel="noreferrer"
                className="flex-shrink-0 px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-accent transition-colors text-[10px] uppercase tracking-widest shadow-md"
              >
                Agendar Consulta →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
