import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SalonJozi - Din Skønhedssalon",
  description: "Velkommen til SalonJozi - professionel skønhedsbehandling og frisør",
  icons: {
    icon: '/salonJozi.png',
    apple: '/salonJozi.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
