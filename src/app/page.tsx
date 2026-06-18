"use client";

import { doctor } from "@/data/doctor";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { diseases } from "@/data/diseases";
import Image from "next/image";
import { FaCalendarCheck, FaAward, FaUniversity, FaCertificate, FaHospitalSymbol, FaMoneyBillWave, FaExchangeAlt, FaCreditCard, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";

export default function Home() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { src: "/doctor_hero.jpeg", align: "object-[center_35%]" },
    { src: "/doctor_1.jpeg", align: "object-[center_35%]" },
    { src: "/doctor_3.jpeg", align: "object-[center_35%]" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Clean up any global state set by the Doctoralia widget script
    delete (window as any).DpWidget;

    // Delay script injection to guarantee Next.js hydration is fully completed
    const timer = setTimeout(() => {
      const existingScript = document.getElementById("zl-widget-s");
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.id = "zl-widget-s";
      script.src = `https://platform.docplanner.com/js/widget.js?t=${Date.now()}`;
      script.async = true;
      document.body.appendChild(script);
    }, 1000);

    return () => {
      clearTimeout(timer);
      const scriptToRemove = document.getElementById("zl-widget-s");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      delete (window as any).DpWidget;
    };
  }, []);

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

              <motion.h1 variants={softBlurIn} className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.6rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight uppercase">
                Expertos en la salud <br /> de la sangre <br className="hidden xl:inline" />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">y el sistema inmune</span>
              </motion.h1>

              <motion.p variants={softBlurIn} className="text-slate-600 text-sm sm:text-base md:text-lg mb-8 leading-relaxed font-semibold max-w-xl self-center lg:self-start text-center lg:text-left">
                Diagnóstico y tratamiento especializado de enfermedades hematológicas en niños y adolescentes
              </motion.p>

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
              <div className="relative w-80 h-80 sm:w-[460px] sm:h-[460px] lg:w-[520px] lg:h-[520px] xl:w-[600px] xl:h-[600px] flex items-center justify-center">

                {/* Concentric rings behind the image (Using scale for perfect alignment) */}
                <div className="absolute inset-0 w-full h-full rounded-full border border-primary/10 scale-[1.12] animate-spin-slow pointer-events-none" />
                <div className="absolute inset-0 w-full h-full rounded-full border border-accent/10 scale-[1.06] pointer-events-none" />

                {/* Main Doctor Image Circle - Con fondo degradado de acuarela y Slider */}
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-primary via-[#971F57] to-[#F8B0E4] shadow-2xl relative overflow-hidden rounded-full border-[10px] border-white z-10 flex items-center justify-center"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      className="absolute inset-0 w-full h-full"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <Image
                        src={heroSlides[currentSlide].src}
                        alt={`Dra. ${doctor.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority
                        className={`object-cover ${heroSlides[currentSlide].align}`}
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* Float Certification Badge */}
                <motion.div
                  className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 xl:bottom-10 xl:right-10 bg-accent px-5 py-4 shadow-2xl rounded-2xl text-white max-w-[160px] sm:max-w-[200px] flex flex-col items-center justify-center text-center z-20 border border-white/20"
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: "spring" }}
                >
                  <span className="font-bold text-[8px] sm:text-[9px] uppercase tracking-wider leading-tight text-white/90">Certificada por el</span>
                  <span className="font-extrabold text-[9px] sm:text-[10px] uppercase tracking-widest mt-0.5 leading-tight text-[#fecdf1]">Consejo Mexicano de Hematología</span>
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
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">Dra. Lizbeth Hernández</h2>
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
              <div className="w-full h-[450px] lg:h-[500px] bg-slate-100 rounded-[2rem_0.5rem_2rem_0.5rem] relative overflow-hidden flex items-center justify-center border border-slate-150 shadow-sm">
                <Image
                  src="/doctor_aboutme.jpeg"
                  alt={`Dra. ${doctor.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover object-[center_43%] transition-transform duration-700 hover:scale-[1.02]"
                />
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

                <div className="bg-white p-6 border border-slate-100 rounded-[1rem_3rem_1rem_3rem] shadow-sm flex flex-col justify-between">
                  <FaCertificate className="text-accent text-2xl mb-4" />
                  <div>
                    <h4 className="font-bold text-xs uppercase text-slate-400">Subespecialidad</h4>
                    <p className="text-xs text-slate-650 mt-1 font-semibold">Hematología Pediátrica (UNAM)</p>
                    {doctor.cedulaSubespecialidad && (
                      <p className="text-[10px] text-slate-500 mt-1 font-medium">ced. subesp. {doctor.cedulaSubespecialidad}</p>
                    )}
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-6 rounded-[3rem_1rem_3rem_1rem] shadow-sm flex flex-col justify-between">
                  <FaCertificate className="text-accent text-2xl mb-4 animate-pulse" />
                  <div>
                    <h4 className="font-bold text-xs uppercase text-slate-400">Alta Especialidad</h4>
                    <p className="text-xs text-slate-300 mt-1 font-semibold">Medicina Transfusional (UNAM)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PEDIATRIC CARE COMMITMENT BLOCK WITH PHOTO 4 */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: doctor_4.jpeg */}
            <motion.div
              className="lg:col-span-5 h-[350px] lg:h-[450px] rounded-[1rem_3rem_1rem_3rem] overflow-hidden border border-slate-150 shadow-sm relative group"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={softBlurIn}
            >
              <Image
                src="/doctor_4.jpeg"
                alt="Compromiso Hematología Pediátrica"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 hover:scale-[1.02]"
              />
            </motion.div>

            {/* Right Column: Text content */}
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={softBlurIn}
            >
              <span className="text-primary font-extrabold text-xs uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
                Atención especializada con empatía y calidez.
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight uppercase">
                Detectar a tiempo las enfermedades de la sangre puede marcar la diferencia.
              </h2>
              <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-semibold">
                La Dra. Lizbeth Hernández brinda atención especializada a niños y adolescentes con anemia, alteraciones de las plaquetas, trastornos de la coagulación, leucemias y otras enfermedades hematológicas. Cada paciente recibe una evaluación integral, explicaciones claras y un plan de tratamiento personalizado.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" /> Explicaciones claras para padres y cuidadores.
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" /> Procedimientos adaptados a la edad pediátrica.
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" /> Acompañamiento durante el diagnóstico y tratamiento.
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" /> Atención centrada en el bienestar del paciente y su familia.
                </div>
              </div>
            </motion.div>
          </div>
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
                  <div className="w-full h-44 bg-slate-100 rounded-[2rem_0.5rem_2rem_0.5rem] mb-6 relative overflow-hidden flex items-center justify-center text-slate-400 group-hover:bg-[#1a2d4a] transition-colors duration-300">
                    <Image
                      src={sym.image}
                      alt={sym.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-105"
                    />
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
                  <div className="w-full md:w-60 h-40 bg-slate-100 rounded-2xl relative overflow-hidden flex items-center justify-center text-slate-400 transition-colors flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 240px"
                      className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-105"
                    />
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

      {/* NEW CALL TO ACTION SECTION WITH DOCTOR PHOTO 2 */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden rounded-[0px_5rem_0px_5rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(151,31,87,0.15),transparent)] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Col Left: Text content */}
            <motion.div
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={softBlurIn}
            >
              <span className="text-accent font-extrabold text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                Atención Humana y Científica
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-tight">
                ¿Tu hijo tiene algún estudio sanguíneo alterado?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-semibold max-w-xl">
                La Dra. Lizbeth Hernández realiza una interpretación experta de biometrías hemáticas y estudios especializados para ofrecer un diagnóstico certero y oportuno.
              </p>
              <div className="flex justify-center lg:justify-start pt-4">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="px-10 py-4.5 bg-primary hover:bg-[#971F57] text-white font-bold rounded-full transition-all duration-300 text-[10px] uppercase tracking-widest shadow-lg">
                  Agendar Consulta de Especialidad &rarr;
                </a>
              </div>
            </motion.div>

            {/* Col Right: Doctor photo 2 */}
            <motion.div
              className="lg:col-span-5 h-[320px] sm:h-[400px] rounded-[3rem_1rem_3rem_1rem] overflow-hidden border border-white/10 relative group"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={softBlurIn}
            >
              <Image
                src="/doctor_2.jpeg"
                alt="Consulta Médica Especializada"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 hover:scale-[1.02]"
              />
            </motion.div>
          </div>
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
                  <div className="w-full h-40 bg-white/5 rounded-[80px_0px_80px_0px] mb-6 relative overflow-hidden flex items-center justify-center text-white/30 group-hover:bg-white/10 transition-colors">
                    <Image
                      src={disease.image}
                      alt={disease.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-105"
                    />
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
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Costos de Valoración</h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={softBlurIn}
            className="bg-white border border-slate-150 shadow-sm rounded-[3rem_1rem_3rem_1rem] overflow-hidden flex flex-col justify-between"
          >
            {/* Descripción */}
            <div className="px-8 lg:px-12 py-8 border-b border-slate-100">
              <p className="text-slate-500 text-xs leading-relaxed max-w-2xl">
                La valoración comprende la revisión clínica infantil completa, análisis de estudios sanguíneos previos y prescripción/orientación diagnóstica especializada.
              </p>
            </div>

            {/* Grid de 3 columnas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 border-b border-slate-100">
              {/* Precio de Consulta */}
              <div className="px-8 py-8 text-center sm:text-left">
                <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-5">Precio</h3>
                <span className="text-2xl font-black text-primary block">
                  {doctor.consultationPrice ? `$${doctor.consultationPrice}` : 'Sin datos'}
                </span>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Pesos Mexicanos</span>
              </div>

              {/* Métodos de Pago */}
              <div className="px-8 py-8">
                <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-5">Métodos de Pago</h3>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
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
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Reembolso</span>
                <span className="text-sm font-extrabold text-slate-700 mt-1 block">
                  Acepta todos para reembolso
                </span>
              </div>
            </div>

            {/* CTA inferior */}
            <div className="px-8 lg:px-12 py-6 bg-primary/3 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 font-semibold">
                Agenda tu consulta por WhatsApp.
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

      {/* FINAL APPOINTMENT CTA BANNER WITH DOCTOR PHOTO 5 */}
      <section className="py-24 bg-[#3b1c39] text-white relative overflow-hidden rounded-[5rem_5rem_0px_0px] shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(151,31,87,0.2),transparent)] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text details */}
            <motion.div
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={softBlurIn}
            >
              <span className="text-accent font-extrabold text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                Consulta en la Roma Norte
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight uppercase">
                Bríndale a tu hijo la atención médica que merece
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Agenda hoy mismo una valoración de hematología pediátrica. Consultorio equipado para el confort infantil y la tranquilidad familiar.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-xs text-slate-300 font-semibold">
                <div>📍 Roma Norte, CDMX</div>
                <div>📞 55 9686 8266</div>
                <div>💬 WhatsApp: 52 56 1123 2970</div>
              </div>
              <div className="flex justify-center lg:justify-start pt-4">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="px-10 py-4.5 bg-white text-primary hover:bg-[#FEE5FD] hover:text-[#971F57] font-bold rounded-full transition-all duration-300 text-[10px] uppercase tracking-widest shadow-lg">
                  Agendar por WhatsApp &rarr;
                </a>
              </div>
            </motion.div>

            {/* Doctor photo 5 */}
            <motion.div
              className="lg:col-span-5 h-[350px] lg:h-[400px] rounded-[3rem_1rem_3rem_1rem] overflow-hidden border border-white/10 relative group"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={softBlurIn}
            >
              <Image
                src="/doctor_5.jpeg"
                alt="Hematóloga Pediatra Dra. Lizbeth"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full h-full object-cover object-[center_28%] transition-transform duration-700 hover:scale-[1.02]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctoralia Booking Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100 relative">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <span className="text-[9px] font-bold text-accent uppercase tracking-widest block mb-2">Reserva Inmediata</span>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Agenda tu Cita en Línea</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />

          <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden min-h-[500px] p-2 text-center">
            <div className="w-full h-full min-h-[500px]">
              <a
                id="zl-url"
                className="zl-url"
                href="https://www.doctoralia.com.mx/lizbeth-yamilet-hernandez-verdugo/hematologo-pediatra/cuauhtemoc2"
                rel="nofollow"
                data-zlw-doctor="lizbeth-yamilet-hernandez-verdugo"
                data-zlw-type="big_with_calendar"
                data-zlw-opinion="false"
                data-zlw-hide-branding="true"
                data-zlw-saas-only="true"
                data-zlw-a11y-title="Widget de reserva de citas médicas"
              >
                <div className="flex flex-col items-center justify-center min-h-[480px] p-6 text-slate-800 hover:bg-slate-50/50 transition-colors cursor-pointer group">
                  <p className="text-xs sm:text-sm font-semibold mb-6 text-slate-500 max-w-md">
                    Cargando calendario de Doctoralia... Si no visualizas el calendario interactivo, haz clic en el botón de abajo para reservar tu cita directamente:
                  </p>
                  <span className="inline-block bg-primary text-white font-bold px-8 py-3.5 rounded-full group-hover:bg-[#971F57] transition-all text-xs uppercase tracking-widest shadow-md">
                    Reservar Cita en Doctoralia
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
