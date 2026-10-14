import React from 'react';
import { SiteConfig, PricingPlan } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { Check, Star, ArrowRight } from 'lucide-react';

interface PricingProps {
  config: SiteConfig;
}

export const Pricing: React.FC<PricingProps> = ({ config }) => {
  return (
    <section id="paket" className="py-20 bg-[#070b17] border-t border-[#1f293d]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Investasi Jelas & Transparan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pilihan Paket Layanan
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Disesuaikan dengan tahap pertumbuhan usaha Anda. Tanpa kontrak kaku, pengerjaan cepat, dan hasil langsung bisa digunakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {config.pricingPlans.map((plan: PricingPlan) => {
            const isPop = plan.isPopular;
            const waUrl = createWhatsAppUrl(
              config.whatsappNumber,
              `Halo Zena Digital Studio, saya ingin memesan Paket ${plan.name} (${plan.priceFormatted}). Mohon informasi proses pengerjaannya.`
            );

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-200 p-6 sm:p-8 ${
                  isPop
                    ? 'bg-gradient-to-b from-[#181a38] to-[#0e1327] border-2 border-purple-500 shadow-2xl shadow-purple-950/50 -translate-y-1'
                    : 'bg-gradient-to-b from-[#10172a] to-[#0c1221] border border-[#25304a] hover:border-[#3d4d73]'
                }`}
              >
                {/* Popular badge header */}
                {isPop && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[11px] font-extrabold tracking-wider uppercase rounded-full shadow-md flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Paling Diminati UMKM
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-purple-300">{plan.badge}</span>
                    <span className="text-[11px] text-slate-500">{plan.recommendedFor}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6 min-h-[36px]">
                    {plan.description}
                  </p>

                  <div className="py-4 border-y border-[#1f293d] mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                        {plan.priceFormatted}
                      </span>
                      <span className="text-xs text-slate-400">/{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                      Fasilitas yang Anda Dapatkan:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-950/80 border border-emerald-600/70 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all ${
                    isPop
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-900/40'
                      : 'bg-[#151d34] hover:bg-[#1e2a4a] text-white border border-[#2e3b5b]'
                  }`}
                >
                  <span>Pilih Paket {plan.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Custom custom package note */}
        <div className="mt-12 bg-[#0c1221] border border-[#25304a] rounded-xl p-5 sm:p-6 text-center max-w-2xl mx-auto">
          <div className="text-sm font-bold text-white mb-1">
            Butuh Paket Khusus atau Jumlah Produk Lebih Banyak?
          </div>
          <p className="text-xs text-slate-400 mb-4">
            Kami siap membuatkan paket kustom untuk brand, distributor, atau bisnis dengan ratusan SKU produk.
          </p>
          <a
            href={createWhatsAppUrl(
              config.whatsappNumber,
              'Halo Zena Digital Studio, saya ingin konsultasi paket kustom untuk kebutuhan bisnis skala besar.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
          >
            Diskusikan Kebutuhan Kustom via WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
