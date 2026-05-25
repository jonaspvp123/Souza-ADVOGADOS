import React, { useState } from "react";
import { practiceAreas } from "../data/legalData";
import { AreaDetail } from "../types";
import { Scale, HeartHandshake, FileCheck, Home, Briefcase, ShieldAlert, ArrowRight, X, Check, MessageCircle } from "lucide-react";

// Mapping of icons dynamically
const iconMap: { [key: string]: React.ReactNode } = {
  Scale: <Scale className="w-5 h-5 text-[#8a574d]" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#8a574d]" />,
  FileCheck: <FileCheck className="w-5 h-5 text-[#8a574d]" />,
  Home: <Home className="w-5 h-5 text-[#8a574d]" />,
  Briefcase: <Briefcase className="w-5 h-5 text-[#8a574d]" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-[#8a574d]" />,
};

export default function PracticeAreas() {
  const [selectedArea, setSelectedArea] = useState<(AreaDetail & { iconName: string; whatsappTemplate: string }) | null>(null);

  const handleWhatsAppArea = (template: string) => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(template)}`, "_blank");
  };

  return (
    <section id="areas" className="py-24 bg-nude-warm/15 relative overflow-hidden bg-dot-pattern">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-nude-deep/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] font-sans font-bold text-[#8a574d] tracking-[0.3em] uppercase block">
            Especialidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1f1b1a] tracking-tight">
            Nossas Áreas de Atuação
          </h2>
          <div className="w-16 h-1 rounded-full bg-rose-gold mx-auto mt-4" />
          <p className="text-sm sm:text-base text-[#554a48] font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Oferecemos uma advocacia focada na precisão e no acolhimento de cada caso, aliando profundo conhecimento legal a métodos eficientes e descomplicados.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => {
            const icon = iconMap[area.iconName] || <Scale className="w-5 h-5 text-[#8a574d]" />;
            
            return (
              <div
                key={area.id}
                className="bg-white rounded-2xl p-8 border border-nude-deep/15 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div>
                  {/* Icon Emblem */}
                  <div className="w-12 h-12 rounded-xl bg-nude-warm/30 flex items-center justify-center border border-[#d69f96]/20 mb-6 group-hover:bg-[#d69f96]/20 transition-all duration-300">
                    {icon}
                  </div>

                  {/* Area Title */}
                  <h3 className="text-lg font-serif font-semibold text-[#1f1b1a] mb-3 group-hover:text-gold-bronze transition-colors duration-200">
                    {area.title}
                  </h3>

                  {/* Area Description */}
                  <p className="text-xs sm:text-sm text-[#554a48] font-sans font-light leading-relaxed mb-6">
                    {area.shortDescription}
                  </p>
                </div>

                {/* Saiba mais button triggers modal */}
                <div>
                  <button
                    onClick={() => setSelectedArea(area)}
                    className="inline-flex items-center gap-2 text-xs font-sans font-bold text-[#8a574d] uppercase tracking-widest hover:text-[#1f1b1a] transition-colors duration-200"
                  >
                    Saiba mais
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Conversion Trust Banner for Google Ads */}
        <div className="mt-16 text-center bg-white p-6 rounded-2xl border border-nude-deep/20 max-w-4xl mx-auto shadow-premium flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-sm font-sans font-bold text-[#1f1b1a] uppercase tracking-wide">
              Não encontrou sua dúvida ou caso específico?
            </h4>
            <p className="text-xs text-[#705e5c] mt-1">
              Fale diretamente com nossa triagem para ter uma análise preliminar e agendar sua consulta.
            </p>
          </div>
          <button
            onClick={() => handleWhatsAppArea("Olá! Gostaria de conversar com uma especialista sobre uma área do Direito não descrita especificamente no site.")}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-[#8a574d] border border-gold-rose hover:bg-gold-light/20 transition-all duration-300 cursor-pointer text-center w-full md:w-auto justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            Consulte Nossa Equipe
          </button>
        </div>

      </div>

      {/* Dynamically Styled Slide-Over / Modal Detail Box */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <div
            className="absolute inset-0 bg-[#1f1b1a]/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedArea(null)}
          />

          {/* Modal Container */}
          <div className="relative bg-nude-soft max-w-lg w-full rounded-2xl shadow-2xl overflow-hidden border border-gold-light z-10 transition-all duration-300 transform scale-100 flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="relative p-6 bg-[#1f1b1a] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/15">
                  {iconMap[selectedArea.iconName]}
                </div>
                <div>
                  <span className="text-[9px] font-sans text-stone-300 uppercase tracking-widest">
                    ÁREA DE ATUAÇÃO
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-[#f9e6e3]">
                    {selectedArea.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedArea(null)}
                className="p-1.5 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors"
                aria-label="Fecar Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1">
              
              <div className="space-y-3">
                <h4 className="text-xs font-sans font-bold uppercase text-[#8a574d] tracking-wide">
                  Visão Geral do Serviço
                </h4>
                <p className="text-sm text-[#554a48] font-sans font-light leading-relaxed">
                  {selectedArea.longDescription}
                </p>
              </div>

              {/* Core Topics Checklist */}
              <div className="space-y-4">
                <h4 className="text-xs font-sans font-bold uppercase text-[#8a574d] tracking-wide">
                  Principais Demandas Atendidas:
                </h4>
                <div className="space-y-3">
                  {selectedArea.keyTopics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-gold/15 flex items-center justify-center border border-[#d69f96]/30 mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-[#8a574d]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#3d3534] font-sans font-light leading-relaxed">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Actions (Conversion Direct) */}
            <div className="p-6 bg-nude-warm/30 border-t border-nude-deep/30 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setSelectedArea(null)}
                className="px-5 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-[#705e5c] border border-[#d69f96]/30 hover:bg-white transition-all text-center"
              >
                Voltar
              </button>
              <button
                onClick={() => {
                  handleWhatsAppArea(selectedArea.whatsappTemplate);
                  setSelectedArea(null);
                }}
                className="flex items-center justify-center gap-2 flex-1 px-5 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-white bg-rose-gold hover:bg-rose-gold-hover shadow-lg transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar Consulta de {selectedArea.title}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
