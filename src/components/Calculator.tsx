import React, { useState, useMemo } from 'react';
import { SiteConfig } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { Calculator as CalcIcon, Send, Sparkles, TrendingUp, Clock, Target } from 'lucide-react';

interface CalculatorProps {
  config: SiteConfig;
}

export const Calculator: React.FC<CalculatorProps> = ({ config }) => {
  const [category, setCategory] = useState<string>('Fashion & Pakaian');
  const [goal, setGoal] = useState<'buka_toko' | 'tingkatkan_omset' | 'iklan_scaling'>('tingkatkan_omset');
  const [productCount, setProductCount] = useState<number>(15);
  const [platform, setPlatform] = useState<string>('Shopee & TikTok Shop');

  const recommendation = useMemo(() => {
    if (goal === 'buka_toko' && productCount <= 10) {
      return {
        plan: config.pricingPlans.find((p) => p.tier === 'starter') || config.pricingPlans[0],
        estimatedDays: '3 - 5 Hari Kerja',
        estimatedReach: '1.500 - 3.000 Target Audiens',
        actionLabel: 'Pilih Paket Starter',
        note: 'Sangat cocok untuk membangun pondasi toko pertama yang rapi dan terpercaya.',
      };
    } else if (goal === 'iklan_scaling') {
      return {
        plan: config.pricingPlans.find((p) => p.tier === 'pro') || config.pricingPlans[2],
        estimatedDays: 'Setup 3 Hari + Monitoring 30 Hari',
        estimatedReach: '35.000 - 120.000+ Tayangan Iklan Tertarget',
        actionLabel: 'Pilih Paket Ads Pro',
        note: 'Dirancang untuk bisnis yang sudah siap stok dan ingin meningkatkan pesanan harian lewat Meta & TikTok Ads.',
      };
    } else {
      return {
        plan: config.pricingPlans.find((p) => p.tier === 'popular') || config.pricingPlans[1],
        estimatedDays: '5 - 7 Hari Kerja',
        estimatedReach: '8.000 - 20.000 Calon Pembeli Organik & Promo',
        actionLabel: 'Pilih Paket Growth Marketing',
        note: 'Pilihan paling seimbang antara optimasi katalog marketplace dan strategi konten promosi.',
      };
    }
  }, [goal, productCount, config.pricingPlans]);

  const consultationMessage = `Halo Zena Digital Studio, saya mencoba Kalkulator UMKM di website Anda:
- Kategori Bisnis: ${category}
- Platform Target: ${platform}
- Target Utama: ${
    goal === 'buka_toko'
      ? 'Buka Toko Baru & Upload Katalog'
      : goal === 'tingkatkan_omset'
      ? 'Optimasi Toko Sepi & Konten'
      : 'Iklan Berbayar (Meta/TikTok Ads)'
  }
- Perkiraan Jumlah Produk: ${productCount} SKU
- Rekomendasi Paket: ${recommendation.plan.name} (${recommendation.plan.priceFormatted})

Mohon info untuk mulai konsultasi & audit toko saya.`;

  const waUrl = createWhatsAppUrl(config.whatsappNumber, consultationMessage);

  return (
    <section id="kalkulator" className="py-20 bg-[#090e1d] border-t border-[#1f293d]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>Alat Bantu Interaktif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kalkulator & Estimator Layanan UMKM
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Hitung perkiraan kebutuhan, estimasi pengerjaan, dan paket yang paling efektif untuk bisnis Anda dalam 1 menit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#10172a] border border-[#25304a] rounded-2xl p-6 sm:p-9 shadow-2xl">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Kategori Bisnis Anda
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  'Fashion & Pakaian',
                  'Kuliner / F&B',
                  'Skincare & Herbal',
                  'Home & Kerajinan',
                  'Elektronik / Gadget',
                  'Jasa / Lainnya',
                ].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all ${
                      category === cat
                        ? 'bg-purple-600 text-white font-bold border border-purple-500 shadow-sm'
                        : 'bg-[#151d34] text-slate-300 hover:bg-[#1b2644] border border-[#25304a]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                2. Target Utama yang Ingin Dicapai
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => setGoal('buka_toko')}
                  className={`w-full p-3 rounded-xl text-left text-xs transition-all flex items-center justify-between ${
                    goal === 'buka_toko'
                      ? 'bg-purple-950/60 border-2 border-purple-500 text-white'
                      : 'bg-[#151d34] border border-[#25304a] text-slate-300 hover:bg-[#1b2644]'
                  }`}
                >
                  <div>
                    <div className="font-bold">Buka Toko Baru dari Nol</div>
                    <div className="text-[11px] text-slate-400">Setup toko rapi, upload foto produk, dekorasi & siap jualan.</div>
                  </div>
                  <Target className="w-4 h-4 text-purple-400 shrink-0" />
                </button>

                <button
                  onClick={() => setGoal('tingkatkan_omset')}
                  className={`w-full p-3 rounded-xl text-left text-xs transition-all flex items-center justify-between ${
                    goal === 'tingkatkan_omset'
                      ? 'bg-purple-950/60 border-2 border-purple-500 text-white'
                      : 'bg-[#151d34] border border-[#25304a] text-slate-300 hover:bg-[#1b2644]'
                  }`}
                >
                  <div>
                    <div className="font-bold">Toko Sudah Ada tapi Sepi / Penjualan Macet</div>
                    <div className="text-[11px] text-slate-400">Optimasi ulang judul kata kunci, perbaiki visual, & strategi promosi.</div>
                  </div>
                  <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                </button>

                <button
                  onClick={() => setGoal('iklan_scaling')}
                  className={`w-full p-3 rounded-xl text-left text-xs transition-all flex items-center justify-between ${
                    goal === 'iklan_scaling'
                      ? 'bg-purple-950/60 border-2 border-purple-500 text-white'
                      : 'bg-[#151d34] border border-[#25304a] text-slate-300 hover:bg-[#1b2644]'
                  }`}
                >
                  <div>
                    <div className="font-bold">Scale Iklan Digital (Meta Ads & TikTok Ads)</div>
                    <div className="text-[11px] text-slate-400">Iklan tertarget ke ribuan calon pembeli dengan pemantauan ROAS harian.</div>
                  </div>
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  3. Perkiraan Jumlah Produk (SKU)
                </label>
                <span className="text-sm font-bold text-cyan-400 font-mono tabular-nums">
                  {productCount} Produk
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-[#25304a] rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>1 Produk</span>
                <span>25 Produk</span>
                <span>50+ Produk</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-[#070b17] border border-[#25304a] rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                Rekomendasi Terbaik
              </div>

              <div className="text-2xl font-black text-white mb-1">
                {recommendation.plan.name}
              </div>

              <div className="text-xl font-extrabold text-purple-400 font-mono tabular-nums mb-4">
                {recommendation.plan.priceFormatted}{' '}
                <span className="text-xs font-normal text-slate-400">/{recommendation.plan.period}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {recommendation.note}
              </p>

              <div className="space-y-3 py-4 border-t border-[#1f293d] mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    Waktu Pengerjaan:
                  </span>
                  <span className="font-semibold text-white">{recommendation.estimatedDays}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-slate-500" />
                    Potensi Jangkauan:
                  </span>
                  <span className="font-semibold text-emerald-400">{recommendation.estimatedReach}</span>
                </div>
              </div>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-950/40"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Hasil Estimasi ke WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
