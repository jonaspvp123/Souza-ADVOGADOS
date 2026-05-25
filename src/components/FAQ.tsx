import React, { useState } from "react";
import { faqItems } from "../data/legalData";
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from "lucide-react";

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleWhatsApp = () => {
    const defaultMsg = encodeURIComponent("Olá! Estou com uma dúvida jurídica que não consta no FAQ e gostaria de conversar com o suporte do Souza Advogados.");
    window.open(`https://wa.me/5511999999999?text=${defaultMsg}`, "_blank");
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden bg-dot-pattern">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d69f96]/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] font-sans font-bold text-[#8a574d] tracking-[0.3em] uppercase block">
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#1f1b1a] tracking-tight">
            Perguntas & Respostas Frequentes
          </h2>
          <div className="w-16 h-1 rounded-full bg-rose-gold mx-auto mt-4" />
          <p className="text-xs sm:text-sm text-[#705e5c] font-sans font-light leading-relaxed">
            Esclarecemos os principais questionamentos operacionais e procedimentais do escritório para que você se sinta seguro antes da primeira consulta.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqItems.map((item) => {
            const isOpen = activeId === item.id;
            
            return (
              <div
                key={item.id}
                className="bg-nude-soft rounded-xl border border-nude-deep/15 overflow-hidden transition-all duration-300"
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  type="button"
                  className="w-full flex items-center justify-between p-5 text-left font-sans font-bold text-xs sm:text-sm text-[#1f1b1a] uppercase tracking-wide hover:bg-nude-warm/25 transition-all outline-none focus:outline-none cursor-pointer"
                >
                  <span className="pr-4 leading-normal">{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#8a574d] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8a574d] flex-shrink-0" />
                  )}
                </button>

                {/* Collapsible Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-nude-deep/10" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-xs sm:text-sm text-[#554a48] font-sans font-light leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA below accordions */}
        <div className="mt-16 text-center animate-pulse">
          <p className="text-xs sm:text-sm text-[#705e5c] font-sans mb-4">
            Ainda possui alguma questão particular ou dúvida de prazo?
          </p>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-[#8a574d] border border-[#d69f96] hover:bg-gold-light/20 transition-all duration-300 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            Tire Suas Dúvidas no WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}
