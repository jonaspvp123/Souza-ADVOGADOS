import React from "react";
import { testimonials } from "../data/legalData";
import { Star, Quote, Shield } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-nude-soft relative overflow-hidden bg-dot-pattern">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d69f96]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-[10px] font-sans font-bold text-[#8a574d] tracking-[0.3em] uppercase block">
            Reconhecimento
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1f1b1a] tracking-tight">
            A Opinião de Quem Confia em Nosso Trabalho
          </h2>
          <div className="w-16 h-1 rounded-full bg-rose-gold mx-auto mt-4" />
          <p className="text-sm sm:text-base text-[#554a48] font-sans font-light leading-relaxed max-w-2xl mx-auto">
            A proteção jurídica eficaz resulta na construção de laços profundos de união e gratidão. Veja relatos espontâneos e reais de nossos assessorados de alto padrão.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((test) => {
            // Pick initials of client name for monogram representation
            const initials = test.name
              .split(" ")
              .filter((n) => !n.startsWith("Dr") && !n.startsWith("Dra"))
              .map((n) => n[0])
              .join("")
              .slice(0, 2);

            return (
              <div
                key={test.id}
                className="bg-white rounded-2xl p-8 border border-nude-deep/15 shadow-premium hover:shadow-premium-hover transition-all duration-300 relative group flex flex-col justify-between"
              >
                
                {/* Floating quote visual element representing craftsmanship */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-nude-warm/30 flex items-center justify-center opacity-70 group-hover:bg-[#d69f96]/20 transition-all duration-300">
                  <Quote className="w-4 h-4 text-[#8a574d]" />
                </div>

                <div className="space-y-4">
                  {/* Category/Area Badge and Stars */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-sans font-bold text-[#8a574d] bg-[#8a574d]/5 border border-[#8a574d]/10 px-2.5 py-1 rounded-full uppercase tracking-widest text-[#8a574d]">
                      {test.area}
                    </span>
                    
                    <div className="flex gap-0.5">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-[#554a48] font-sans font-light leading-relaxed italic">
                    &ldquo;{test.content}&rdquo;
                  </p>
                </div>

                {/* Profile Meta Row */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-nude-warm/40">
                  
                  {/* Monogram placeholder representing female-centric/elegant look */}
                  <div className="w-10 h-10 rounded-full bg-rose-gold text-white flex items-center justify-center font-sans font-semibold text-xs uppercase shadow-md select-none">
                    {initials || "C"}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm font-serif font-bold text-[#1f1b1a]">
                      {test.name}
                    </span>
                    <span className="text-[10px] sm:text-xs text-[#705e5c] font-sans font-light">
                      {test.role}
                    </span>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Global OAB Trust Badge */}
        <div className="mt-16 flex items-center justify-center gap-2 text-[#8a574d]">
          <Shield className="w-4 h-4" />
          <span className="text-[10px] font-sans tracking-[0.2em] font-bold uppercase">
            Depoimentos reais em estrita conformidade técnica da publicidade OAB
          </span>
        </div>

      </div>
    </section>
  );
}
