import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "SalonJozi - Din Skønhedssalon",
  description: "Velkommen til SalonJozi - professionel skønhedsbehandling og frisør",
  keywords: ["SalonJozi", "skønhedssalon", "frisør", "hårklip", "farvning", "styling", "skønhedsbehandling", "Jozi hair style"],
  authors: [{ name: "Morten R. Winther" }],
  creator: "Morten R. Winther",
  icons: {
    icon: [
      { url: '/salonJozi.png' },
      { url: '/salonJozi.png', sizes: '32x32', type: 'image/png' },
      { url: '/salonJozi.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/salonJozi.png',
    shortcut: '/salonJozi.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={inter.variable}>
        <ScrollToTop />
        <Nav />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
