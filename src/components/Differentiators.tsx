import React from "react";
import { Check, ShieldCheck, HelpCircle, Star, Sparkles } from "lucide-react";

export default function Differentiators() {
  const differentiatorsList = [
    {
      title: "Atendimento Humanizado",
      description: "Escuta atenta e empática, entendendo que por trás de cada processo existe uma vida de sonhos, responsabilidades e expectativas."
    },
    {
      title: "Estratégia Jurídica Personalizada",
      description: "Não utilizamos soluções genéricas. Seu caso é analisado detalhadamente, desenhando caminhos táticos customizados para seu objetivo."
    },
    {
      title: "Transparência Absoluta",
      description: "Atualizações constantes em linguagem simples e acessível. Você entende cada fase processual sem termos complexos ou surpresas."
    },
    {
      title: "Agilidade Resolutiva",
      description: "Processamento ultra ágil de petições e contatos rápidos para reduzir os impactos psicológicos e financeiros do litígio."
    },
    {
      title: "Segurança Técnica",
      description: "Rigor técnico extremo embasado nas decisões e súmulas mais atuais dos tribunais superiores (STJ e STF)."
    },
    {
      title: "Excelência Profissional",
      description: "Compromisso integral em entregar um trabalho impecável, com redações elegantes, teses fundamentadas e zelo absoluto."
    }
  ];

  const handleWhatsApp = () => {
    const defaultMsg = encodeURIComponent("Olá! Gostaria de conversar com uma especialista sobre como o Souza Advogados pode me auxiliar de forma personalizada.");
    window.open(`https://wa.me/5511999999999?text=${defaultMsg}`, "_blank");
  };

  return (
    <section id="diferenciais" className="py-24 bg-white relative overflow-hidden bg-dot-pattern">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d69f96]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Bold Copy and CTA */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-sans font-bold text-[#8a574d] tracking-[0.3em] uppercase block">
              Diferenciais
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1f1b1a] tracking-tight leading-snug">
              Por que escolher o Souza Advogados?
            </h2>
            <p className="text-[#554a48] font-sans font-light leading-relaxed text-sm sm:text-base">
              Acreditamos que o exercício ético da advocacia exige a combinação equilibrada de sensibilidade humana, absoluto rigor metodológico e dedicação incansável ao sucesso do cliente.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#8a574d]" />
                <span className="text-xs sm:text-sm font-sans text-[#1f1b1a] font-semibold">Garantia OAB de Proteção Ética</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#8a574d]" />
                <span className="text-xs sm:text-sm font-sans text-[#1f1b1a] font-semibold">Análise de Passivo de Alta Performance</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-white bg-rose-gold hover:bg-rose-gold-hover shadow-lg transition-all duration-300 cursor-pointer"
              >
                Garantir Atendimento Exclusivo
              </button>
            </div>
          </div>

          {/* Right Block: Elegant Differentiators Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiatorsList.map((diff, index) => (
              <div
                key={index}
                className="bg-nude-soft hover:bg-white rounded-2xl p-6 border border-nude-deep/15 transition-all duration-300 hover:shadow-premium group"
              >
                <div className="flex items-start gap-4">
                  {/* Glowing gold check circle */}
                  <div className="w-8 h-8 rounded-full bg-rose-gold/15 flex items-center justify-center border border-[#d69f96]/30 mt-0.5 flex-shrink-0 group-hover:bg-[#d69f96]/20 transition-all duration-300">
                    <Check className="w-4 h-4 text-[#8a574d] stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-sans font-bold text-[#1f1b1a] uppercase tracking-wider mb-2 group-hover:text-gold-bronze transition-colors duration-200">
                      {diff.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#554a48] font-sans font-light leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
