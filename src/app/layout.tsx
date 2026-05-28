import type { Metadata } from "next";
import { Questrial, Great_Vibes } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { doctor } from "@/data/doctor";

const questrial = Questrial({
  subsets: ["latin"],
  variable: "--font-questrial",
  weight: ["400"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: `${doctor.title} ${doctor.name} | ${doctor.specialistTitle} en ${doctor.city}`,
  description: doctor.bio.substring(0, 150) + "...",
  keywords: [
    `Especialista en ${doctor.specialty} en ${doctor.city}`,
    `${doctor.specialistTitle} Roma Norte`,
    `Anemia infantil`,
    `Leucemia en niños`,
    `Plaquetas bajas niños`,
    `Hematólogo pediatra Ciudad de México`,
    `Aspirado de médula ósea`
  ],
  openGraph: {
    title: `${doctor.title} ${doctor.name} | ${doctor.specialistTitle} y ${doctor.subspecialty}`,
    description: doctor.bio.substring(0, 150) + "...",
    url: "https://dralizbethhematologa.com",
    siteName: `${doctor.title} ${doctor.name}`,
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${questrial.variable} ${greatVibes.variable} scroll-smooth`}>
      <body className="antialiased flex flex-col min-h-screen">
        <GoogleAnalytics />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
