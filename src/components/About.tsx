import React from "react";
import { ShieldAlert, Users, Award, Landmark, Scale } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Landmark className="w-5 h-5 text-[#8a574d]" />,
      title: "Tradição & Prestígio",
      description: "Uma atuação pautada pelo mais alto rigor ético e refinamento técnico, herdando e aprimorando as melhores tradições da ciência jurídica nacional com modernidade."
    },
    {
      icon: <Scale className="w-5 h-5 text-[#8a574d]" />,
      title: "Profissionalismo Singular",
      description: "Corpo jurídico altamente qualificado e em constante especialização acadêmica, focado na confecção de teses estratégicas de excelência em todas as instâncias judiciais."
    },
    {
      icon: <Users className="w-5 h-5 text-[#8a574d]" />,
      title: "Atendimento Personalizado",
      description: "Na Souza Advogados, cada cliente é único. Ouvimos sua história de forma humanizada, detalhada e empática, customizando canais, horários e soluções para sua rotina."
    },
    {
      icon: <Award className="w-5 h-5 text-[#8a574d]" />,
      title: "Segurança Técnica Absoluta",
      description: "Análise minuciosa e preventiva de riscos para resguardar o patrimônio tangível e intangível de sua família, evitando litígios demorados e promovendo decisões protegidas."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-nude-soft relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-nude-deep/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-[10px] font-sans font-bold text-[#8a574d] tracking-[0.3em] uppercase block">
            Institucional
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1f1b1a] tracking-tight">
            Compromisso com a Justiça, Ética e Resultados
          </h2>
          <div className="w-16 h-1 rounded-full bg-rose-gold mx-auto mt-4" />
          <p className="text-sm sm:text-base text-[#554a48] font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Edificamos um escritório que une a confiabilidade técnica clássica com a agilidade e inovação da tecnologia. Nossa missão é prover acolhimento prático e amparo robusto para as suas decisões de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive numbers panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#1f1b1a] to-[#2d2625] rounded-2xl p-8 text-white relative shadow-2xl border border-white/5 overflow-hidden group">
              
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#d69f96]/10 rounded-full blur-2xl group-hover:bg-[#d69f96]/15 transition-all duration-500" />
              
              <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#d69f96] font-bold block mb-2">
                Nossos Indicadores de Sucesso
              </span>
              <h3 className="text-2xl font-serif font-medium leading-snug mb-6">
                Fundamentação sólida para a segurança da sua causa
              </h3>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-serif text-[#d69f96] font-semibold">+1.2k</div>
                  <div className="text-[11px] font-sans font-medium text-white/70 uppercase tracking-widest leading-normal">
                    Famílias Resguardadas
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-serif text-[#d69f96] font-semibold">98.4%</div>
                  <div className="text-[11px] font-sans font-medium text-white/70 uppercase tracking-widest leading-normal">
                    Índice de Conciliação
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-serif text-[#d69f96] font-semibold">+12 Anos</div>
                  <div className="text-[11px] font-sans font-medium text-white/70 uppercase tracking-widest leading-normal">
                    Prestando Serviços
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-serif text-[#d69f96] font-semibold">100%</div>
                  <div className="text-[11px] font-sans font-medium text-white/70 uppercase tracking-widest leading-normal">
                    Atendimento Integrado
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-sans tracking-wide text-white/95">
                  Plantão OAB em operação para urgências e novos contatos.
                </span>
              </div>

            </div>

            {/* Micro value proposition */}
            <div className="bg-nude-warm/25 rounded-2xl p-6 border border-nude-deep/35 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#d69f96]/30 flex-shrink-0">
                <ShieldAlert className="w-5 h-5 text-[#8a574d]" />
              </div>
              <p className="text-xs sm:text-sm text-[#554a48] lg:leading-relaxed font-sans font-light">
                Com uma estrutura blindada, possuímos rígidos controles de governança e sigilo sob a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>, asseverando confidencialidade impecável aos nossos assessorados.
              </p>
            </div>
          </div>

          {/* Right: The 4 fundamental pillars grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white/75 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-nude-deep/20 shadow-premium hover:shadow-premium-hover transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="w-11 h-11 rounded-xl bg-nude-warm/40 flex items-center justify-center border border-[#d69f96]/20 mb-5 group-hover:bg-[#d69f96]/20 transition-colors duration-300">
                  {pillar.icon}
                </div>
                <h4 className="text-base font-sans font-bold text-[#1f1b1a] mb-2 uppercase tracking-wider text-[13px]">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#554a48] font-sans font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
