import React from 'react';
import { SiteConfig } from '../types';
import { TrendingUp, MapPin } from 'lucide-react';

interface PortfolioProps {
  config: SiteConfig;
}

export const Portfolio: React.FC<PortfolioProps> = ({ config }) => {
  return (
    <section id="portofolio" className="py-20 bg-[#070b17] border-t border-[#1f293d]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Bukti Nyata Lapangan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hasil & Studi Kasus UMKM
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Berikut adalah beberapa pencapaian klien UMKM yang berhasil kami dampingi dari tahap awal hingga scaling penjualan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gradient-to-b from-[#10172a] to-[#0c1221] border border-[#25304a] hover:border-[#3f4f78] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group shadow-lg"
            >
              <div>
                {/* Clean unboxed metadata with separators */}
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 flex-wrap">
                  <span className="text-cyan-300 font-semibold">{study.category}</span>
                  <span className="text-slate-600">·</span>
                  <span className="inline-flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {study.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {study.clientName}
                </h3>

                {/* Quantitative Metric Callout */}
                <div className="p-3.5 rounded-xl bg-[#151d34] border border-[#2a3754] mb-5">
                  <div className="flex items-center gap-2 text-emerald-400 text-lg font-black font-mono tabular-nums">
                    <TrendingUp className="w-4 h-4" />
                    <span>{study.resultMetric}</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {study.resultDescription}
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300 mb-6">
                  <div>
                    <span className="font-semibold text-slate-400 block mb-0.5">Tantangan:</span>
                    <p className="text-slate-300 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400 block mb-0.5">Solusi yang Diterapkan:</span>
                    <p className="text-slate-300 leading-relaxed">{study.solution}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1f293d] flex items-center justify-between text-xs text-slate-400">
                <span>Platform:</span>
                <span className="font-semibold text-white">{study.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
