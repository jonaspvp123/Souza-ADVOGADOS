import React from "react";
import { MessageCircle, Phone, Award, Shield, CheckCircle, ArrowDown } from "lucide-react";

export default function Hero() {
  const handleWhatsApp = () => {
    const defaultMsg = encodeURIComponent("Olá! Vim através do site e gostaria de agendar uma consulta inicial com um advogado titular.");
    window.open(`https://wa.me/5511999999999?text=${defaultMsg}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 bg-gradient-to-b from-nude-soft via-nude-warm/15 to-nude-soft overflow-hidden bg-dot-pattern">
      
      {/* Absolute Decorative Premium Blurs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-light/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/8 right-10 w-80 h-80 bg-gold-rose/10 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Decorative Gold Accents */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-gold-rose/15 rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-12 w-16 h-16 border border-gold-rose/20 rounded-full pointer-events-none border-dashed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Column (Copy and badges) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* OAB Compliance Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8a574d]/5 border border-[#8a574d]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d69f96]" />
              <span className="text-[10px] font-sans font-semibold tracking-widest text-[#8a574d] uppercase">
                OAB em conformidade ética e técnica
              </span>
            </div>

            {/* Headline and Subheadline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-serif text-[#1f1b1a] leading-[1.12] font-semibold tracking-tight">
                Excelência Jurídica <br />
                <span className="text-gradient font-serif font-normal italic text-transparent bg-clip-text bg-rose-gold block sm:inline">
                  com Atendimento
                </span>{" "}
                Humanizado
              </h1>
              
              <p className="text-base sm:text-lg text-[#554a48] font-sans font-light leading-relaxed max-w-2xl">
                Assessoria jurídica especializada com atendimento personalizado, segurança técnica e soluções eficazes para proteger seus direitos.
              </p>
            </div>

            {/* CTAs (Google Ads Optmized) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-white bg-rose-gold hover:bg-rose-gold-hover shadow-lg transition-all duration-300 cta-pulse"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                Agendar Atendimento
              </button>
              
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-charcoal-dark border border-[#d69f96] hover:bg-[#d69f96]/5 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-[#8a574d]" />
                Falar no WhatsApp
              </button>
            </div>

            {/* Authority Badges / Seals */}
            <div className="pt-6 border-t border-nude-deep/30">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Authority Badge 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#d69f96]/10 flex items-center justify-center border border-[#d69f96]/20">
                    <Award className="w-4 h-4 text-[#8a574d]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-sans font-bold text-[#1f1b1a] uppercase tracking-wider">Atendimento</span>
                    <span className="text-[11px] font-sans text-[#705e5c]">Especializado</span>
                  </div>
                </div>

                {/* Authority Badge 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#d69f96]/10 flex items-center justify-center border border-[#d69f96]/20">
                    <CheckCircle className="w-4 h-4 text-[#8a574d]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-sans font-bold text-[#1f1b1a] uppercase tracking-wider">Consultoria</span>
                    <span className="text-[11px] font-sans text-[#705e5c]">Personalizada</span>
                  </div>
                </div>

                {/* Authority Badge 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#d69f96]/10 flex items-center justify-center border border-[#d69f96]/20">
                    <Shield className="w-4 h-4 text-[#8a574d]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-sans font-bold text-[#1f1b1a] uppercase tracking-wider">Excelência</span>
                    <span className="text-[11px] font-sans text-[#705e5c]">Jurídica com Rigor</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Hero Right Column (Beautiful Frame with Subtle Details) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            
            {/* Background luxury border offset panel */}
            <div className="absolute -inset-4 border border-[#d69f96]/30 rounded-2xl transform rotate-2 pointer-events-none scale-95" />
            
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-nude-deep bg-nude-warm/10 group">
              
              {/* Image element with responsive and no referrer tag */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                alt="Souza Advogados Associados - Advocacia Feminina Premium"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Shimmer / light sweep of premium satin */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b1a]/95 via-[#1f1b1a]/30 to-transparent" />

              {/* Float Cards inside image overlay for extreme premium conversion rate */}
              <div className="absolute bottom-6 left-6 right-6 space-y-3 bg-nude-soft/95 backdrop-blur-md p-5 rounded-xl border border-gold-light shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#8a574d]">
                      SOUZA ADVOGADOS
                    </span>
                    <span className="text-[10px] text-[#705e5c]">
                      Soluções de Alto Padrão
                    </span>
                  </div>
                  <div className="px-2.5 py-1 bg-green-550 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[9px] font-sans font-bold uppercase text-emerald-800 tracking-wider">
                      Online Agora
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#554a48] font-sans leading-relaxed italic border-t border-nude-warm/40 pt-2 font-light">
                  &ldquo;A segurança do seu patrimônio e a harmonia da sua família sob planejamento estratégico de excelência jurídica.&rdquo;
                </p>
              </div>

              {/* Decorative subtle crest tag on the top of the image */}
              <div className="absolute top-4 right-4 bg-charcoal-dark/90 backdrop-blur-md text-white px-3 py-1.5 rounded-md text-[9px] font-sans uppercase tracking-[0.2em] border border-[#d69f96]/30 shadow-md">
                +12 ANOS DE COMPETÊNCIA
              </div>

            </div>
            
          </div>

        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 animate-bounce cursor-pointer">
        <span className="text-[10px] font-sans uppercase tracking-widest text-[#8a574d] font-bold">Descobrir</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#8a574d]" />
      </div>

    </section>
  );
}
