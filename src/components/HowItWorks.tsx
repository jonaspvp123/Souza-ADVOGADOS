import React from "react";
import { MessageSquareCode, SearchCheck, BrainCircuit, ShieldCheck, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <MessageSquareCode className="w-5 h-5 text-[#8a574d]" />,
      title: "Primeiro Contato",
      description: "Você nos envia uma mensagem ágil via WhatsApp ou simulador. Nossa equipe acolhe seu relato de imediato de forma confidencial."
    },
    {
      number: "02",
      icon: <SearchCheck className="w-5 h-5 text-[#8a574d]" />,
      title: "Análise Jurídica",
      description: "Nossas advogadas titulares examinam detalhadamente a documentação básica e analisam a viabilidade legal prática da demanda."
    },
    {
      number: "03",
      icon: <BrainCircuit className="w-5 h-5 text-[#8a574d]" />,
      title: "Estratégia Personalizada",
      description: "Elaboramos um parecer claro e transparente mapeando o plano de ação adequado, custos envolvidos e probabilidade de êxito."
    },
    {
      number: "04",
      icon: <ShieldCheck className="w-5 h-5 text-[#8a574d]" />,
      title: "Solução Jurídica",
      description: "Iniciamos a propositura da ação ou negociação extrajudicial célere, agindo com empenho de ponta a ponta até a sua pacificação."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-nude-warm/15 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d69f96]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 animate-fade-in-up">
          <span className="text-[10px] font-sans font-bold text-[#8a574d] tracking-[0.3em] uppercase block">
            Metodologia
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1f1b1a] tracking-tight">
            Como Funciona Nosso Atendimento
          </h2>
          <div className="w-16 h-1 rounded-full bg-rose-gold mx-auto mt-4" />
          <p className="text-sm sm:text-base text-[#554a48] font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Garantimos um caminho pavimentado com diálogo claro, acompanhamento passo a passo e segurança absoluta desde a sua primeira conversa.
          </p>
        </div>

        {/* 4 Process steps visual timeline/blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Decorative connection wire across steps in desktop large view */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-px bg-gradient-to-r from-[#d69f96]/10 via-[#8a574d]/30 to-[#d69f96]/10 z-0" />

          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 md:p-8 border border-nude-deep/15 shadow-premium hover:shadow-premium-hover hover:border-gold-rose/40 transition-all duration-300 z-10 group flex flex-col justify-between"
              >
                <div>
                  {/* Step floating index and icon badge row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-nude-warm/40 flex items-center justify-center border border-[#d69f96]/20 group-hover:bg-[#d69f96]/20 transition-all duration-300">
                      {step.icon}
                    </div>
                    
                    <span className="text-xs sm:text-sm font-serif font-bold italic text-rose-gold select-none">
                      Etapa {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-sans font-bold text-[#1f1b1a] uppercase tracking-wider mb-2 group-hover:text-gold-bronze transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#554a48] font-sans font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector for next step indicator */}
                {!isLast && (
                  <div className="pt-4 flex justify-end md:hidden lg:flex">
                    <ArrowRight className="w-4 h-4 text-[#d69f96]/50 group-hover:text-gold-bronze group-hover:translate-x-1.5 transition-all duration-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
