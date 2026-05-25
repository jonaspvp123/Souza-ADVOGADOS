import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Elegant delayed entrance for high user attention
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const defaultMsg = encodeURIComponent("Olá! Estou no site da Souza Advogados Associados e gostaria de ter um atendimento pré-agendado com uma advogada especialista.");
    window.open(`https://wa.me/5511999999999?text=${defaultMsg}`, "_blank");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
      
      {/* Small interactive notification tooltip */}
      {showTooltip && (
        <div className="bg-white text-[#1f1b1a] p-3 rounded-xl border border-gold-light shadow-xl max-w-xs text-xs font-sans relative animate-bounce flex items-start gap-1.5">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-nude-deep text-[#8a574d] hover:bg-[#8a574d] hover:text-white flex items-center justify-center cursor-pointer text-[9px] font-bold"
          >
            <X className="w-2.5 h-2.5" />
          </button>
          
          <div className="flex flex-col gap-0.5 pr-2">
            <span className="font-bold text-[#8a574d] uppercase tracking-wider text-[10px]">Atendimento Online</span>
            <span className="text-[11px] text-[#705e5c] leading-relaxed">Olá! Tem dúvidas jurídicas? Converse diretamente com um especialista agora.</span>
          </div>
        </div>
      )}

      {/* Floating pulsing button */}
      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl relative transition-transform duration-300 hover:scale-115 active:scale-95 group whatsapp-pulse cursor-pointer outline-none focus:outline-none"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-emerald-500" />
        
        {/* Absolute Online indicator dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full flex items-center justify-center" />
      </button>

    </div>
  );
}
