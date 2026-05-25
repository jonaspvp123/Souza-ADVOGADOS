import React from "react";
import { MessageCircle, ShieldCheck, Clock, CheckCircle } from "lucide-react";

export default function CTA() {
  const handleWhatsApp = () => {
    const defaultMsg = encodeURIComponent("Olá! Gostaria de falar com uma advogada titular especialista no escritório de advogados para avaliar meu caso urgente.");
    window.open(`https://wa.me/5511999999999?text=${defaultMsg}`, "_blank");
  };

  return (
    <section className="py-24 bg-nude-soft relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d69f96]/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Luxury Glowing Box */}
        <div className="bg-gradient-to-br from-[#1f1b1a] to-[#2d2625] rounded-3xl p-8 md:p-14 text-white text-center relative overflow-hidden shadow-2xl border border-[#d69f96]/20">
          
          {/* Animated Glow Spotlights */}
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#d69f96]/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-bronze/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Core Content */}
          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
              <CheckCircle className="w-3.5 h-3.5 text-[#d69f96]" />
              <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#f9e6e3] uppercase whitespace-nowrap">
                FALE DIRETAMENTE COM UMA ADVOGADA TITULAR
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#f9e6e3] tracking-tight leading-tight">
              Seu caso merece atenção jurídica especializada
            </h2>

            <p className="text-sm sm:text-base text-stone-300 font-sans font-light leading-relaxed max-w-2xl mx-auto">
              Não postergue a proteção dos seus direitos e do seu patrimônio familiar. Nossas especialistas estão de prontidão para estudar seu relato de forma criteriosa e confidencial.
            </p>

            {/* Pulsing Core Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-white bg-rose-gold hover:bg-rose-gold-hover shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer text-center cta-pulse"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                Solicitar Atendimento Agora
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 text-stone-300 text-xs font-sans">
                <ShieldCheck className="w-4 h-4 text-[#d69f96]" />
                <span>Primeira conversa protegida por OAB e LGPD</span>
              </div>
              
              <div className="flex items-center gap-2 text-stone-300 text-xs font-sans">
                <Clock className="w-4 h-4 text-[#d69f96]" />
                <span>Retorno em menos de 10 minutos por WhatsApp</span>
              </div>
            </div>

          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-4 right-4 text-gold-rose/10 user-select-none select-none">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="absolute bottom-4 left-4 text-gold-rose/10 user-select-none select-none">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}
