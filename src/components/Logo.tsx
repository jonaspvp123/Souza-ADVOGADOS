import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Handcrafted Rose Gold Emblem */}
      <div className="relative w-12 h-12 flex-shrink-0 group">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(170,108,97,0.15)] transition-transform duration-500 group-hover:rotate-[15deg]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Real Rose Gold Metallic Linear Gradients */}
            <linearGradient id="roseGoldRefl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8a574d" />
              <stop offset="20%" stopColor="#d69f96" />
              <stop offset="40%" stopColor="#fdf0ed" />
              <stop offset="60%" stopColor="#d69f96" />
              <stop offset="80%" stopColor="#f4deda" />
              <stop offset="100%" stopColor="#8a574d" />
            </linearGradient>
            <linearGradient id="roseGoldSheen" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f9e6e3" />
              <stop offset="50%" stopColor="#d69f96" />
              <stop offset="100%" stopColor="#a86c61" />
            </linearGradient>
          </defs>

          {/* Elegant Outer Ring */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#roseGoldRefl)"
            strokeWidth="2"
            strokeDasharray="2 2"
            className="opacity-80"
          />

          {/* Premium Core Octagon/Shield Frame */}
          <circle
            cx="50"
            cy="50"
            r="41"
            stroke="url(#roseGoldSheen)"
            strokeWidth="3.5"
            className="opacity-95"
          />

          {/* Scale Axis (The Legal Balance Core) */}
          <path
            d="M50 25 V70"
            stroke="url(#roseGoldSheen)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M32 35 H68"
            stroke="url(#roseGoldSheen)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Floating Scale Plates */}
          <path
            d="M32 35 L26 52 H38 L32 35"
            stroke="url(#roseGoldRefl)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M68 35 L62 52 H74 L68 35"
            stroke="url(#roseGoldRefl)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* The Distinct Custom Monogram "S" Embossed in Front of the Scale */}
          <path
            d="M52 38 C43 36 40 43 45 47 C52 50 56 53 50 63 C45 68 38 64 38 60"
            stroke="url(#roseGoldSheen)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_1px_3px_rgba(31,27,26,0.2)]"
          />
          
          <path
            d="M50 20 L50 24"
            stroke="url(#roseGoldSheen)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <span className="text-xl font-serif font-semibold tracking-[0.12em] text-[#1f1b1a] leading-none uppercase">
            SOUZA
          </span>
          <span className="text-[9px] font-sans font-medium tracking-[0.3em] text-[#8a574d] mt-1 uppercase whitespace-nowrap">
            ADVOGADOS ASSOCIADOS
          </span>
        </div>
      )}
    </div>
  );
}
