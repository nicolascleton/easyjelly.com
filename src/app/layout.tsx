import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EasyJelly - Configurez votre Media Center en quelques clics",
  description: "Transformez votre Raspberry Pi en Media Center complet avec Jellyfin, Radarr, Sonarr et plus. Installation automatique, sans ligne de commande.",
  keywords: ["Jellyfin", "Raspberry Pi", "Media Center", "Radarr", "Sonarr", "Plex alternative"],
  openGraph: {
    title: "EasyJelly - Media Center Raspberry Pi",
    description: "Transformez votre Raspberry Pi en Media Center complet en quelques clics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
