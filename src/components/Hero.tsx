import React from 'react';
import { SiteConfig } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { HeroParticles } from './HeroParticles';
import { MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  config: SiteConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const waUrl = createWhatsAppUrl(config.whatsappNumber, config.whatsappDefaultMessage);

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Slow-moving radial gradient animations */}
      <div 
        className="absolute top-0 left-1/2 w-[650px] sm:w-[850px] h-[450px] bg-gradient-to-tr from-purple-700/25 via-indigo-600/20 to-purple-900/10 rounded-full blur-[110px] pointer-events-none -z-10 animate-orb-slow-1"
        aria-hidden="true"
      />
      <div 
        className="absolute top-8 left-1/2 w-[550px] sm:w-[720px] h-[380px] bg-gradient-to-bl from-cyan-500/18 via-blue-600/15 to-transparent rounded-full blur-[100px] pointer-events-none -z-10 animate-orb-slow-2"
        aria-hidden="true"
      />

      {/* Floating subtle particle animation */}
      <HeroParticles />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header center copy */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Metadata Discipline: Clean, unboxed text */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold tracking-wide text-slate-300 mb-6">
            <span className="text-purple-400 font-bold">ZENA STUDIO</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{config.heroBadge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 [text-wrap:balance]">
            {config.heroHeadline}{' '}
            <span className="bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              {config.heroHeadlineGradient}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-9">
            {config.heroSubheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-950/40 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Konsultasi via WhatsApp</span>
            </a>

            <a
              href="#paket"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 transition-all hover:-translate-y-0.5"
            >
              <span>Lihat Paket & Biaya</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 mb-12">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Tanpa Biaya Tersembunyi
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Dukungan Konsultasi 1-on-1
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Laporan Kinerja Transparan
            </span>
          </div>
        </div>

        {/* Hero image showcase with subtle studio frame */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl">
          <div className="relative aspect-[16/9] w-full max-h-[460px] overflow-hidden bg-slate-950">
            <img
              src="/src/assets/images/hero_digital_agency_1792001154984.jpg"
              alt="Studio Ruang Kerja ZENA Digital Studio"
              referrerPolicy="no-referrer"
              style={{ backgroundColor: '#cb1313' }}
              className="w-full h-full object-cover object-center"
            />
            {/* Measured contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b17] via-transparent to-transparent opacity-90" />
            
            {/* Live indicator overlay info in corner */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-white">
              <div>
                <div className="text-xs uppercase tracking-wider text-cyan-300 font-bold mb-1">
                  Pusat Strategi Pertumbuhan Digital
                </div>
                <div className="text-lg sm:text-xl font-bold">
                  Pendampingan Terpadu: Meta Ads, Shopee, TikTok & Tokopedia
                </div>
              </div>
              <div className="text-xs text-slate-300 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800">
                Respon Cepat: {config.operatingHours}
              </div>
            </div>
          </div>
        </div>

        {/* 4-column metric strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
          <div className="bg-[#0e1527] border border-[#25304a] rounded-xl p-4 sm:p-5 text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tabular-nums">
              {config.stats.marketplaces}
            </div>
            <div className="text-xs text-slate-400 mt-1">Multi-Channel Toko Online</div>
          </div>

          <div className="bg-[#0e1527] border border-[#25304a] rounded-xl p-4 sm:p-5 text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tabular-nums">
              {config.stats.platforms}
            </div>
            <div className="text-xs text-slate-400 mt-1">Jangkauan Social Media</div>
          </div>

          <div className="bg-[#0e1527] border border-[#25304a] rounded-xl p-4 sm:p-5 text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tabular-nums">
              {config.stats.focus}
            </div>
            <div className="text-xs text-slate-400 mt-1">Solusi Ramah UMKM</div>
          </div>

          <div className="bg-[#0e1527] border border-[#25304a] rounded-xl p-4 sm:p-5 text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tabular-nums">
              {config.stats.optimization}
            </div>
            <div className="text-xs text-slate-400 mt-1">Orientasi Hasil Terukur</div>
          </div>
        </div>
      </div>
    </section>
  );
};
