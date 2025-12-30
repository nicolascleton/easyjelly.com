"use client";

import { useState, useEffect } from "react";

const services = [
  {
    name: "Jellyfin",
    description: "Serveur multimédia open-source",
    icon: "🎬",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Radarr",
    description: "Automatisation des films",
    icon: "🎥",
    color: "from-yellow-500 to-orange-600",
  },
  {
    name: "Sonarr",
    description: "Automatisation des séries",
    icon: "📺",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Jellyseerr",
    description: "Gestion des demandes",
    icon: "📋",
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Prowlarr",
    description: "Gestion des indexeurs",
    icon: "🔍",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Bazarr",
    description: "Sous-titres automatiques",
    icon: "💬",
    color: "from-green-500 to-emerald-600",
  },
];

const steps = [
  {
    number: "1",
    title: "Téléchargez",
    description: "Récupérez l'application pour votre système",
  },
  {
    number: "2",
    title: "Configurez",
    description: "Insérez votre carte SD et configurez votre Raspberry Pi",
  },
  {
    number: "3",
    title: "Profitez",
    description: "L'assistant installe tout automatiquement",
  },
];

export default function Home() {
  const [platform, setPlatform] = useState<"mac" | "windows" | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("mac")) {
      setPlatform("mac");
    } else if (userAgent.includes("win")) {
      setPlatform("windows");
    }
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍇</span>
            <span className="text-xl font-bold gradient-text">EasyJelly</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition">
              Fonctionnalités
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition">
              Comment ça marche
            </a>
            <a href="#download" className="text-gray-300 hover:text-white transition">
              Télécharger
            </a>
          </div>
          <a
            href="#download"
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-medium transition"
          >
            Télécharger
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-float mb-8">
            <span className="text-8xl">🍇</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text glow-text">Votre Media Center</span>
            <br />
            <span className="text-white">en quelques clics</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
            Transformez votre Raspberry Pi en Media Center complet avec Jellyfin,
            Radarr, Sonarr et plus. <strong className="text-white">Sans ligne de commande.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-4 rounded-xl text-lg font-semibold transition transform hover:scale-105 animate-pulse-glow"
            >
              Télécharger gratuitement
            </a>
            <a
              href="https://github.com/nicolascleton/jellysetup"
              target="_blank"
              rel="noopener noreferrer"
              className="glass hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Voir sur GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Tout ce dont vous avez besoin</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            8 services installés et configurés automatiquement pour une expérience multimédia complète
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition transform hover:scale-105 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Simple comme 1, 2, 3</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Aucune connaissance technique requise. L&apos;assistant vous guide à chaque étape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
                )}
                <div className="glass rounded-2xl p-8 text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-2xl font-bold mx-auto mb-6 glow-purple">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 text-center glow-purple">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Prêt à commencer ?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Téléchargez EasyJelly gratuitement et configurez votre Media Center en moins de 10 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/nicolascleton/jellysetup/releases/latest/download/EasyJelly.dmg"
                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold transition transform hover:scale-105 ${
                  platform === "mac"
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    : "glass hover:bg-white/10"
                }`}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                macOS (Apple Silicon & Intel)
              </a>
              <a
                href="https://github.com/nicolascleton/jellysetup/releases/latest/download/EasyJelly.exe"
                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold transition transform hover:scale-105 ${
                  platform === "windows"
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    : "glass hover:bg-white/10"
                }`}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                </svg>
                Windows (64-bit)
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Version 1.0.0 • Licence MIT • Open Source
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍇</span>
              <span className="text-xl font-bold gradient-text">EasyJelly</span>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/nicolascleton/jellysetup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                GitHub
              </a>
              <a
                href="https://github.com/nicolascleton/jellysetup/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                Support
              </a>
              <a
                href="https://github.com/nicolascleton/jellysetup/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                Licence MIT
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 EasyJelly. Projet open-source.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
