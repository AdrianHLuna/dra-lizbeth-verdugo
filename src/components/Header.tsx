"use client";

import Link from "next/link";
import { doctor } from "@/data/doctor";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Bar (Siempre visible por Ley de Cédulas en móviles y escritorio) */}
      <div className="bg-[#572D55] text-white/90 text-[10px] md:text-xs py-2.5 border-b border-[#431f41]">
        <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-2 md:gap-x-3 gap-y-0.5 font-medium tracking-wide">
            <span>COFEPRIS: {doctor.cofepris}</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span>ced. prof. {doctor.cedula} (UNACH)</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span>ced. esp. {doctor.cedulaEspecialidad} (UNAM)</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            {doctor.cedulaSubespecialidad && (
              <>
                <span>ced. subesp. {doctor.cedulaSubespecialidad} (UNAM)</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-4 text-[10px] md:text-xs">
            <a href={`tel:${doctor.phone}`} className="flex items-center gap-1.5 hover:text-white transition">
              <FaPhone className="text-white animate-pulse" /> Urgencias: <strong className="text-white">55 9686 8266</strong>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Nav */}
      <div className="container mx-auto px-4 lg:px-6 py-2.5 lg:py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group py-1 flex-shrink-0">
          <div className="relative h-16 w-16 sm:h-20 sm:w-20 lg:h-22 lg:w-22 xl:h-24 xl:w-24 flex-shrink-0 flex items-center justify-center">
            <Image 
              src="/LOGO DRA LIZBETH-02.png" 
              alt="Dra. Lizbeth Verdugo - Hematología Pediátrica" 
              width={220}
              height={220}
              priority
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col text-left justify-center">
            <span className="font-signature text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-[#971F57] leading-none transition-colors duration-200 group-hover:text-[#572D55]">
              Dra. Lizbeth Verdugo
            </span>
            <span className="text-[8px] sm:text-[9px] lg:text-[10px] xl:text-[11px] font-extrabold text-[#705662] tracking-[0.2em] sm:tracking-[0.22em] uppercase mt-1">
              Hematología Pediátrica
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-7 font-bold text-[#705662] text-xs xl:text-sm whitespace-nowrap">
          <Link href="/" className="hover:text-primary transition">Inicio</Link>
          <Link href="/enfermedades" className="hover:text-primary transition">Enfermedades</Link>
          <Link href="/sintomas" className="hover:text-primary transition">Síntomas</Link>
          <Link href="/medicina-transfusional" className="hover:text-primary transition">Medicina Transfusional</Link>
          <Link href="/servicios" className="hover:text-primary transition">Servicios</Link>
          <Link href="/contacto" className="hover:text-primary transition">Contacto</Link>
        </nav>

        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden lg:flex items-center gap-2 bg-primary text-white px-5 xl:px-6 py-2.5 rounded-full font-bold hover:bg-accent transition shadow-lg shadow-primary/20 text-xs xl:text-sm whitespace-nowrap flex-shrink-0">
          <FaWhatsapp size={18} /> Agendar Cita
        </a>

        {/* Mobile Toggle */}
        <button aria-label="Menu" className="lg:hidden text-[#572D55] p-2 hover:text-[#971F57]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 p-6 flex flex-col gap-4 font-bold text-lg text-slate-800 shadow-xl absolute w-full left-0 z-50">
          <Link href="/" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50">Inicio</Link>
          <Link href="/enfermedades" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50">Enfermedades</Link>
          <Link href="/sintomas" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50">Síntomas</Link>
          <Link href="/medicina-transfusional" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50">Medicina Transfusional</Link>
          <Link href="/servicios" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50">Servicios</Link>
          <Link href="/contacto" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-50">Contacto</Link>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold">
            <FaWhatsapp size={20} /> Agendar Cita
          </a>
        </div>
      )}
    </header>
  );
}
