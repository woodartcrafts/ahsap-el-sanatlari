import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

// Ana font - Modern ve okunabilir
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Başlıklar için - Modern ve şık
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Özel başlıklar için - Elegant ve premium
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahşap El Sanatları - El Yapımı Ahşap Ürünler",
  description: "El yapımı ahşap ürünler, dekoratif ev eşyaları ve özel tasarım parçalar. Kaliteli ahşap işçiliği ve modern tasarım.",
  keywords: ["ahşap", "el sanatları", "dekoratif", "ev eşyaları", "ahşap ürünler"],
  authors: [{ name: "Ahşap El Sanatları" }],
  openGraph: {
    title: "Ahşap El Sanatları",
    description: "El yapımı ahşap ürünler ve dekoratif ev eşyaları",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${poppins.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
