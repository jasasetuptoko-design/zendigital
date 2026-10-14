import React from 'react';
import { SiteConfig } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { Check, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  config: SiteConfig;
}

export const Services: React.FC<ServicesProps> = ({ config }) => {
  return (
    <section id="layanan" className="py-20 border-t border-[#1f293d]/60 bg-[#070b17]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Solusi Menyeluruh untuk Penjualan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Layanan Unggulan Kami
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Dibuat untuk membantu bisnis UMKM tampil profesional, menjangkau ribuan calon pembeli tertarget, dan membangun kehadiran digital yang menghasilkan penjualan riil.
          </p>
        </div>

        {/* Bento grid layout: marquee service with visual showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {config.services.map((service, index) => {
            const isFeatured = index === 1; // Marketplace
            const isSocial = index === 2; // Social
            const waInquiry = createWhatsAppUrl(
              config.whatsappNumber,
              `Halo Zena Digital Studio, saya ingin menanyakan lebih detail tentang layanan ${service.title}.`
            );

            return (
              <div
                key={service.id}
                className="bg-gradient-to-b from-[#10172a] to-[#0c1221] border border-[#25304a] hover:border-[#42527b] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group shadow-lg"
              >
                <div>
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-[#1f293d]">
                    <span className="font-mono font-bold text-cyan-400">{service.number}</span>
                    <span className="text-slate-500">·</span>
                    <span className="font-medium">{service.tag}</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-emerald-400 font-semibold">{service.highlightMetric}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Optional contextual preview image inside card */}
                  {isFeatured && (
                    <div className="mb-6 rounded-xl overflow-hidden border border-[#25304a] bg-slate-950 aspect-[4/3] max-h-48">
                      <img
                        src="/src/assets/images/marketplace_showcase_1792001155289.jpg"
                        alt="Katalog Marketplace & Packaging Showcase"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {isSocial && (
                    <div className="mb-6 rounded-xl overflow-hidden border border-[#25304a] bg-slate-950 aspect-[4/3] max-h-48">
                      <img
                        src="/src/assets/images/social_growth_creative_1792001155865.jpg"
                        alt="Produksi Konten Social Media"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      Cakupan Pengerjaan:
                    </div>
                    {service.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-purple-950/80 border border-purple-700/60 flex items-center justify-center shrink-0 mt-0.5 text-purple-300">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={waInquiry}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#151d34] hover:bg-purple-900/40 border border-[#2e3b5b] hover:border-purple-600/60 text-xs font-bold text-slate-200 hover:text-white transition-all"
                >
                  <span>Tanya Layanan Ini</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
