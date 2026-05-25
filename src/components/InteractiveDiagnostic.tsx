import React, { useState } from "react";
import { ChevronRight, HelpCircle, Check, Sparkles, Send, Award } from "lucide-react";

export default function InteractiveDiagnostic() {
  const [step, setStep] = useState(1);
  const [area, setArea] = useState("");
  const [urgency, setUrgency] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const areasList = [
    { label: "Direito de Família ou Inventários", value: "Família/Herança" },
    { label: "Direito Civil ou Contratos de Negócios", value: "Civil/Contrato" },
    { label: "Aposentadoria ou Benefício INSS", value: "Previdenciário" },
    { label: "Regularização de Imóvel ou Usucapião", value: "Imobiliário" },
    { label: "Consultoria ou Blindagem Preventiva", value: "Consultoria/Prevenção" },
  ];

  const urgenciesList = [
    { label: "Urgência Imediata (Tenho intimação ou prazo correndo)", value: "Imediata" },
    { label: "Resolução em Curto Prazo (Prevenir perdas rápidas)", value: "Curto Prazo" },
    { label: "Apenas Consultando / Planejando", value: "Consultivo" },
  ];

  const handleNextStep = () => {
    if (step === 1 && !area) {
      setErrorMsg("Selecione uma categoria para prosseguir.");
      return;
    }
    if (step === 2 && !urgency) {
      setErrorMsg("Selecione o nível de urgência correspondente.");
      return;
    }
    setErrorMsg("");
    setStep(step + 1);
  };

  const handleBackStep = () => {
    setErrorMsg("");
    setStep(step - 1);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Por favor, informe seu nome.");
      return;
    }
    if (!whatsapp.trim() || whatsapp.length < 8) {
      setErrorMsg("Por favor, informe um número de telefone celular válido.");
      return;
    }

    // Build perfect target message for whatsapp redirect
    const formattedMessage = `Olá, Souza Advogados! Acabo de preencher a pré-avaliação do site.\n\n*Nome:* ${name}\n*Contato:* ${whatsapp}\n*Área de Interesse:* ${area}\n*Nível de Urgência:* ${urgency}\n\nGostaria de agendar a conversa com a advogada especialista para meu caso.`;
    
    const whatsappLink = `https://wa.me/5511999999999?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappLink, "_blank");
    setStep(4);
  };

  const resetDiagnostic = () => {
    setArea("");
    setUrgency("");
    setName("");
    setWhatsapp("");
    setStep(1);
  };

  return (
    <section id="avaliacao" className="py-24 bg-white relative overflow-hidden bg-dot-pattern">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-nude-deep/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="text-[10px] font-sans font-bold text-[#8a574d] tracking-[0.3em] uppercase block">
            Triagem Digital
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#1f1b1a] tracking-tight">
            Simulador de Pré-Avaliação Jurídica
          </h2>
          <div className="w-16 h-1 rounded-full bg-rose-gold mx-auto mt-4" />
          <p className="text-xs sm:text-sm text-[#705e5c] font-sans font-light leading-relaxed">
            Responda 3 perguntas básicas em menos de 1 minuto para que nossa equipe inicialize o diagnóstico prévio do seu caso antes mesmo do atendimento.
          </p>
        </div>

        {/* Dynamic Card Container */}
        <div className="bg-nude-soft rounded-2xl border border-nude-deep/20 shadow-premium-hover p-6 md:p-10 relative overflow-hidden">
          
          {/* Subtle gold decoration */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-rose-gold" />

          {/* Progress Indicators */}
          {step <= 3 && (
            <div className="flex items-center justify-between mb-8 max-w-md mx-auto">
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-sans font-bold ${step >= 1 ? "bg-rose-gold text-white" : "bg-nude-warm text-charcoal-light"}`}>
                  {step > 1 ? <Check className="w-3.5 h-3.5" /> : "1"}
                </div>
                <span className="text-xs font-sans text-[#705e5c] uppercase tracking-wider hidden sm:inline">Caso</span>
              </div>
              <div className="flex-1 h-px bg-nude-deep/30 mx-4" />
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-sans font-bold ${step >= 2 ? "bg-rose-gold text-white" : "bg-nude-warm text-charcoal-light"}`}>
                  {step > 2 ? <Check className="w-3.5 h-3.5" /> : "2"}
                </div>
                <span className="text-xs font-sans text-[#705e5c] uppercase tracking-wider hidden sm:inline">Urgência</span>
              </div>
              <div className="flex-1 h-px bg-nude-deep/30 mx-4" />
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-sans font-bold ${step >= 3 ? "bg-rose-gold text-white" : "bg-nude-warm text-charcoal-light"}`}>
                  3
                </div>
                <span className="text-xs font-sans text-[#705e5c] uppercase tracking-wider hidden sm:inline">Contato</span>
              </div>
            </div>
          )}

          {/* STEP 1: Area Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center sm:text-left space-y-1">
                <h3 className="text-base sm:text-lg font-serif font-semibold text-[#1f1b1a]">
                  Passo 1: Qual é o foco principal da sua necessidade hoje?
                </h3>
                <p className="text-xs text-[#705e5c] font-sans font-light">Selecione uma das especialidades abaixo de forma confidencial.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {areasList.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => {
                      setArea(item.value);
                      setErrorMsg("");
                    }}
                    className={`p-4 rounded-xl text-left font-sans text-xs sm:text-sm border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      area === item.value
                        ? "bg-rose-gold/10 border-gold-rose border-2 text-gold-bronze font-semibold"
                        : "bg-white border-nude-deep/15 text-[#3d3534] hover:bg-nude-warm/20"
                    }`}
                  >
                    <span>{item.label}</span>
                    {area === item.value && <Check className="w-4 h-4 text-[#8a574d]" />}
                  </button>
                ))}
              </div>

              {errorMsg && <p className="text-xs text-rose-500 font-sans">{errorMsg}</p>}

              <div className="flex justify-end pt-4 border-t border-nude-deep/20">
                <button
                  onClick={handleNextStep}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-white bg-rose-gold hover:bg-rose-gold-hover shadow-md transition-all cursor-pointer"
                >
                  Avançar
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Urgency Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center sm:text-left space-y-1">
                <h3 className="text-base sm:text-lg font-serif font-semibold text-[#1f1b1a]">
                  Passo 2: Qual é o nível de urgência associado a este caso?
                </h3>
                <p className="text-xs text-[#705e5c] font-sans font-light">Isso orienta a velocidade de escala de triagem interna de nossa governança.</p>
              </div>

              <div className="space-y-3 pt-2">
                {urgenciesList.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => {
                      setUrgency(item.value);
                      setErrorMsg("");
                    }}
                    className={`w-full p-4 rounded-xl text-left font-sans text-xs sm:text-sm border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      urgency === item.value
                        ? "bg-rose-gold/10 border-gold-rose border-2 text-gold-bronze font-semibold"
                        : "bg-white border-nude-deep/15 text-[#3d3534] hover:bg-nude-warm/20"
                    }`}
                  >
                    <span>{item.label}</span>
                    {urgency === item.value && <Check className="w-4 h-4 text-[#8a574d]" />}
                  </button>
                ))}
              </div>

              {errorMsg && <p className="text-xs text-rose-500 font-sans">{errorMsg}</p>}

              <div className="flex justify-between pt-4 border-t border-nude-deep/20">
                <button
                  onClick={handleBackStep}
                  className="px-5 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-[#705e5c] border border-nude-deep/30 hover:bg-white transition-all cursor-pointer"
                >
                  Voltar
                </button>
                
                <button
                  onClick={handleNextStep}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-white bg-rose-gold hover:bg-rose-gold-hover shadow-md transition-all cursor-pointer"
                >
                  Avançar
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Basic identification inputs */}
          {step === 3 && (
            <form onSubmit={handleFinalSubmit} className="space-y-6">
              <div className="text-center sm:text-left space-y-1">
                <h3 className="text-base sm:text-lg font-serif font-semibold text-[#1f1b1a]">
                  Passo 3: Insira seus dados para encaminhamento direto
                </h3>
                <p className="text-xs text-[#705e5c] font-sans font-light">Seus dados estão protegidos sob sigilo pela LGPD.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="diagnostic-name" className="text-xs font-sans font-bold text-[#1f1b1a] uppercase tracking-wider">
                    Seu Nome Completo
                  </label>
                  <input
                    id="diagnostic-name"
                    type="text"
                    required
                    placeholder="Ex: Ana Souza"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrorMsg("");
                    }}
                    className="w-full px-4 py-3 bg-white border border-nude-deep/30 rounded-xl font-sans text-xs sm:text-sm text-charcoal-dark focus:outline-none focus:ring-1 focus:ring-gold-rose"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="diagnostic-whatsapp" className="text-xs font-sans font-bold text-[#1f1b1a] uppercase tracking-wider">
                    Seu WhatsApp / Celular
                  </label>
                  <input
                    id="diagnostic-whatsapp"
                    type="tel"
                    required
                    placeholder="Ex: (11) 99999-9999"
                    value={whatsapp}
                    onChange={(e) => {
                      setWhatsapp(e.target.value);
                      setErrorMsg("");
                    }}
                    className="w-full px-4 py-3 bg-white border border-nude-deep/30 rounded-xl font-sans text-xs sm:text-sm text-charcoal-dark focus:outline-none focus:ring-1 focus:ring-gold-rose"
                  />
                </div>
              </div>

              {errorMsg && <p className="text-xs text-rose-500 font-sans">{errorMsg}</p>}

              <div className="flex justify-between pt-4 border-t border-nude-deep/20 mt-4">
                <button
                  type="button"
                  onClick={handleBackStep}
                  className="px-5 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-[#705e5c] border border-nude-deep/30 hover:bg-white transition-all cursor-pointer"
                >
                  Voltar
                </button>
                
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-white bg-rose-gold hover:bg-rose-gold-hover shadow-lg transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                  Ir para WhatsApp e Enviar
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Beautiful Completed State */}
          {step === 4 && (
            <div className="text-center space-y-6 py-6 max-w-lg mx-auto">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                <Check className="w-7 h-7 stroke-[2.5]" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-serif font-bold text-[#1f1b1a]">
                  Avaliação Gerada com Sucesso!
                </h3>
                <p className="text-xs sm:text-sm text-[#554a48] font-sans font-light leading-relaxed">
                  Os dados foram encapsulados em um modelo exclusivo e seu canal de WhatsApp foi redirecionado. Caso a janela de chat não tenha aberto de imediato, clique no botão para restabelecer o contato.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-nude-deep/10 p-4 font-mono text-[11px] text-[#705e5c] text-left leading-relaxed">
                <span className="font-sans font-bold text-xs text-[#1f1b1a] uppercase">DADOS TRANSMITIDOS:</span>
                <ul className="mt-2 space-y-1">
                  <li><strong>Nome:</strong> {name}</li>
                  <li><strong>Área:</strong> {area}</li>
                  <li><strong>Urgência:</strong> {urgency}</li>
                  <li><strong>Sistema:</strong> Souza Advogados Triagem Automatizada</li>
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={resetDiagnostic}
                  className="px-5 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-[#705e5c] border border-nude-deep/30 hover:bg-white transition-all cursor-pointer"
                >
                  Nova Avaliação
                </button>
                
                <button
                  onClick={() => {
                    const formattedMessage = `Olá, Souza Advogados! Acabo de preencher a pré-avaliação do site.\n\n*Nome:* ${name}\n*Contato:* ${whatsapp}\n*Área de Interesse:* ${area}\n*Nível de Urgência:* ${urgency}\n\nGostaria de agendar a conversa com a advogada especialista para meu caso.`;
                    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(formattedMessage)}`, "_blank");
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-white bg-rose-gold cursor-pointer hover:bg-rose-gold-hover transition-colors"
                >
                  Reabrir WhatsApp
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
