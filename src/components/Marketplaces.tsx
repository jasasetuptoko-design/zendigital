import React, { useState } from 'react';
import { SiteConfig } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { Store, ShoppingBag, Flame, Sparkles, ShieldCheck, Tag } from 'lucide-react';

interface MarketplacesProps {
  config: SiteConfig;
}

interface PlatformDetail {
  id: string;
  name: string;
  badge: string;
  color: string;
  features: string[];
  bestFor: string;
  iconName: string;
}

const PLATFORM_DETAILS: PlatformDetail[] = [
  {
    id: 'shopee',
    name: 'Shopee Indonesia',
    badge: 'Penjualan Tertinggi',
    color: 'from-orange-500/20 to-orange-950/40 border-orange-600/40 text-orange-400',
    features: [
      'Setup Toko Baru & Verifikasi Identitas Penjual',
      'Optimasi Judul Produk berbasis Keyword Shopee Terlaris',
      'Desain Dekorasi Banner Toko Desktop & Mobile',
      'Setup Program Gratis Ongkir XTRA & Voucher Cashback',
      'Iklan Shopee Ads (Iklan Pencarian & Produk Serupa)',
    ],
    bestFor: 'Fashion, Skincare, Perlengkapan Bayi, F&B Kering, Aksesoris',
    iconName: 'Shopee',
  },
  {
    id: 'tokopedia',
    name: 'Tokopedia (ShopTokopedia)',
    badge: 'Kredibilitas Tinggi',
    color: 'from-emerald-500/20 to-emerald-950/40 border-emerald-600/40 text-emerald-400',
    features: [
      'Setup Official Store / Power Merchant Pro',
      'Upload & Kelola Varian Produk Terstruktur',
      'Optimasi Etalase Toko & Banner Promosi',
      'Integrasi TopAds & Optimasi Penawaran Kata Kunci',
      'Setup Bundling Produk & Flash Sale Toko',
    ],
    bestFor: 'Elektronik, Gadget, Home Living, Otomotif, Hobi & Kerajinan',
    iconName: 'Tokopedia',
  },
  {
    id: 'tiktok',
    name: 'TikTok Shop',
    badge: 'Pertumbuhan Tercepat',
    color: 'from-cyan-500/20 to-cyan-950/40 border-cyan-600/40 text-cyan-400',
    features: [
      'Pendaftaran TikTok Shop & Pembuatan Showcase Akun',
      'Sinkronisasi Katalog Produk dengan Live & Video Pendek',
      'Penyusunan Strategi Afiliasi Kreator (Katalog Sample)',
      'Optimasi Judul & Cover Produk Menarik untuk Impuls Buy',
      'Setup Iklan TikTok Shopping Ads (VSA & LSA)',
    ],
    bestFor: 'Fashion Viral, Cemilan/Snack, Kecantikan, Produk Unik & Tren',
    iconName: 'TikTok',
  },
  {
    id: 'lazada',
    name: 'Lazada Indonesia',
    badge: 'Jangkauan Luas',
    color: 'from-blue-500/20 to-blue-950/40 border-blue-600/40 text-blue-400',
    features: [
      'Setup Lazada Seller Center & Dokumen Legalitas',
      'Desain Lorikeet Rich Content (Deskripsi Bergambar Premium)',
      'Aktivasi Kampanye Mega Sale (11.11, 12.12, Gajian)',
      'Setup Sponsor Solution & Iklan Berbayar',
    ],
    bestFor: 'Peralatan Rumah Tangga, Sepatu, Tas, Produk Grosir',
    iconName: 'Lazada',
  },
  {
    id: 'blibli',
    name: 'Blibli & Bukalapak',
    badge: 'Pasar Spesifik & B2B',
    color: 'from-indigo-500/20 to-indigo-950/40 border-indigo-600/40 text-indigo-400',
    features: [
      'Setup Merchant Resmi dengan Jaminan Keaslian Produk',
      'Optimasi SKU untuk Kebutuhan B2B & Korporat',
      'Pengaturan Logistik Terpadu',
    ],
    bestFor: 'Barang Elektronik Orisinil, Kebutuhan Kantor, Suplemen Resmi',
    iconName: 'Blibli',
  },
];

export const Marketplaces: React.FC<MarketplacesProps> = ({ config }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('shopee');
  const activeDetail = PLATFORM_DETAILS.find((p) => p.id === selectedPlatform) || PLATFORM_DETAILS[0];

  const waUrl = createWhatsAppUrl(
    config.whatsappNumber,
    `Halo Zena Digital Studio, saya ingin bantuan untuk toko saya di ${activeDetail.name}. Bisa infokan rekomendasinya?`
  );

  return (
    <section id="marketplace" className="py-20 bg-[#0b1020] border-t border-[#1f293d]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Multi-Platform Integration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Marketplace yang Kami Kelola
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Dari pembuatan toko baru sampai optimasi tampilan, katalog, dan performa penjualan di seluruh platform marketplace terdepan.
          </p>
        </div>

        {/* Platform selection tabs (functional filter controls) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {PLATFORM_DETAILS.map((p) => {
            const isActive = selectedPlatform === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPlatform(p.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-900/40 border border-purple-500'
                    : 'bg-[#10172a] hover:bg-[#16203a] text-slate-300 border border-[#25304a]'
                }`}
              >
                <span>{p.name.split(' ')[0]}</span>
                <span className="text-[10px] opacity-75 font-normal hidden sm:inline">({p.badge})</span>
              </button>
            );
          })}
        </div>

        {/* Active platform detail showcase card */}
        <div className="bg-gradient-to-br from-[#10172a] to-[#0c1221] border border-[#25304a] rounded-2xl p-6 sm:p-9 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 text-xs text-slate-400 mb-3">
                <span className="font-semibold text-cyan-300">{activeDetail.name}</span>
                <span className="text-slate-600">·</span>
                <span>{activeDetail.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Optimasi Menyeluruh {activeDetail.name}
              </h3>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Kategori ideal:{' '}
                <span className="text-white font-medium">{activeDetail.bestFor}</span>
              </p>

              <div className="space-y-3 mb-8">
                {activeDetail.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-950/80 border border-emerald-600/60 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400 font-bold text-xs">
                      ✓
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs sm:text-sm font-bold text-white transition-all shadow-md"
              >
                <span>Konsultasi Toko {activeDetail.name.split(' ')[0]}</span>
                <span className="font-mono">→</span>
              </a>
            </div>

            <div className="lg:col-span-5 bg-[#070b17] border border-[#1f293d] rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
                  Standar Pengerjaan ZENA STUDIO
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">100% Aman & Milik Anda</div>
                      <div className="text-[11px] text-slate-400">Akun, saldo, dan hak akses tetap 100% di tangan pemilik toko.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Tag className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Riset Kata Kunci Organik</div>
                      <div className="text-[11px] text-slate-400">Membidik kata kunci yang sering dicari pembeli dengan tingkat persaingan terukur.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Siap Jualan dalam Hitungan Hari</div>
                      <div className="text-[11px] text-slate-400">Pengerjaan terstruktur dengan jadwal revisi cepat dan pendampingan.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1f293d] text-[11px] text-slate-400 flex items-center justify-between">
                <span>Dukungan Multi-Toko</span>
                <span className="text-cyan-300 font-semibold">Tersedia Paket Bundle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
