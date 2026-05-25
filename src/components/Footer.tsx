import React from "react";
import Logo from "./Logo";
import { MapPin, Mail, Phone, ShieldCheck, Landmark, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const defaultMsg = encodeURIComponent("Olá! Gostaria de conversar com o suporte do escritório Souza Advogados Associados.");
    window.open(`https://wa.me/5511999999999?text=${defaultMsg}`, "_blank");
  };

  return (
    <footer className="bg-charcoal-dark text-[#f5ebe0]/80 pt-16 pb-8 border-t border-white/5 relative bg-dot-pattern">
      
      {/* Absolute Decorative Linear Accent */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-rose-gold opacity-95" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Core Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Brand details and statement */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white/5 p-4 rounded-xl inline-block border border-white/10 backdrop-blur-md">
              {/* Force white-looking version of the logo */}
              <Logo className="[&>div>span]:text-[#fcfaf8] [&>div>div>svg>defs>linearGradient>stop]:stop-color-[#f9e6e3] text-white" />
            </div>

            <p className="text-xs sm:text-sm text-stone-300 font-sans font-light leading-relaxed max-w-sm">
              Escritório jurídico dedicado à advocacia premium de alta performance, unindo acolhimento individual de alto padrão com soluções técnicas rigorosas de segurança patrimonial e familiar.
            </p>

            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-[#d69f96] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-[#d69f96] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-[#d69f96] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Specialties list for Google Ads SEO authority */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-sans font-bold text-[#d69f96] uppercase tracking-[0.2em]">
              Áreas de Destaque
            </h4>
            
            <ul className="space-y-2.5 text-xs font-sans font-light text-stone-300">
              <li><a href="#areas" className="hover:text-white transition-colors">Direito Civil</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Direito de Família & Sucessões</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Direito Previdenciário (INSS)</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Direito Imobiliário & Usucapião</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Consultoria Patrimonial</a></li>
            </ul>
          </div>

          {/* Column 3: Contacts info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-sans font-bold text-[#d69f96] uppercase tracking-[0.2em] mb-4">
              Canais de Contato
            </h4>

            <ul className="space-y-4 text-xs font-sans font-light text-stone-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d69f96] mt-0.5 flex-shrink-0" />
                <span className="leading-normal">
                  Av. das Nações Unidas, 12.901, Torre Oeste, 20º Andar - Brooklin Paulista, São Paulo - SP, 04578-000
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d69f96] flex-shrink-0" />
                <button onClick={handleWhatsApp} className="hover:underline text-left">
                  (11) 99999-9999 (WhatsApp Direto)
                </button>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d69f96] flex-shrink-0" />
                <a href="mailto:contato@souzaadvogados.com.br" className="hover:underline">
                  contato@souzaadvogados.com.br
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Dynamic regulatory disclosures matching legal guidelines */}
        <div className="pt-8 border-t border-white/5 space-y-4 text-[10px] md:text-xs font-sans font-light text-stone-400">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#d69f96]" />
              <span>Garantia de conformidade com a Lei Geral de Proteção de Dados (LGPDR) e Termos de Uso.</span>
            </div>

            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-[#d69f96]" />
              <span>Inscrição sob registro OAB/SP nº 432.122 / Souza Advogados Sociedade Individual</span>
            </div>

          </div>

          <p className="leading-relaxed">
            O conteúdo disponibilizado neste site tem finalidade estritamente informativa e institucional, em consonância com as normas éticas e regulamentos de publicidade estabelecidos pelo Estatuto da Advocacia e da OAB. Nenhuma informação contida neste veículo constitui proposta formal ou prestação prévia de serviços, devendo a consulta preliminar ser realizada individualmente junto a uma advogada especialista.
          </p>

        </div>

        {/* Base Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-stone-500 font-sans tracking-wider uppercase">
          <div>
            &copy; {currentYear} SOUZA ADVOGADOS ASSOCIADOS. TODOS OS DIREITOS RESERVADOS.
          </div>
          <div className="flex gap-4">
            <a href="#privacidade" className="hover:text-stone-300">POLÍTICA DE PRIVACIDADE</a>
            <span className="text-white/10 select-none">|</span>
            <a href="#lgpd" className="hover:text-stone-300">CONFORMIDADE LGPD</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
