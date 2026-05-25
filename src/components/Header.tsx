import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const defaultMsg = encodeURIComponent("Olá! Vim através do site e gostaria de agendar uma consulta inicial com um advogado especialista.");
    window.open(`https://wa.me/5511999999999?text=${defaultMsg}`, "_blank");
  };

  const navLinks = [
    { label: "Áreas de Atuação", href: "#areas" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Avaliação", href: "#avaliacao" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nude-soft/90 backdrop-blur-md border-b border-nude-deep/30 py-3 shadow-premium"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo element with interactive glow */}
          <a href="#" className="flex-shrink-0 cursor-pointer">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-sans font-medium text-charcoal-light/85 hover:text-gold-bronze transition-colors duration-200 uppercase tracking-widest text-[12px]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call To Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-semibold uppercase tracking-widest border border-gold-rose text-gold-bronze bg-transparent hover:bg-gold-light/20 transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              Ligar para Escritório
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-sans font-semibold uppercase tracking-widest text-white bg-rose-gold hover:bg-rose-gold-hover transition-all duration-300 cursor-pointer shadow-md cta-pulse"
            >
              Agendar Atendimento
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-charcoal-light hover:text-gold-bronze hover:bg-nude-warm/30 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-nude-soft border-b border-nude-deep/30 px-4 pt-2 pb-6 space-y-3 shadow-lg absolute w-full top-full left-0 z-40 transition-all duration-300">
          <div className="flex flex-col gap-4 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm font-sans font-semibold text-charcoal-light uppercase tracking-wider text-[12px] block border-b border-nude-warm/50"
              >
                {link.label}
              </a>
            ))}
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleWhatsAppClick();
                }}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-xs font-sans font-semibold uppercase tracking-wider border border-gold-rose text-[#8a574d]"
              >
                <Phone className="w-4 h-4" />
                Ligar Agora
              </button>
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleWhatsAppClick();
                }}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-xs font-sans font-semibold uppercase tracking-wider text-white bg-rose-gold"
              >
                Falar com Advogada
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
