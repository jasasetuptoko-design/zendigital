import React from 'react';
import { SiteConfig } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  config: SiteConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const waUrl = createWhatsAppUrl(config.whatsappNumber, config.whatsappDefaultMessage);

  return (
    <footer className="py-12 bg-[#050811] border-t border-[#1a2337] text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#151c2e]">
          {/* Brand info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center font-black text-white text-xs">
                Z
              </div>
              <span className="font-extrabold text-white text-sm tracking-tight">
                {config.studioName}
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm mb-4 leading-relaxed">
              Partner pertumbuhan digital untuk UMKM Indonesia. Membantu pembuatan toko marketplace, optimasi visual & katalog, serta periklanan digital berbasis data.
            </p>
            <div className="text-slate-500 text-[11px]">
              {config.location} · {config.operatingHours}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Navigasi Layanan
            </div>
            <ul className="space-y-2">
              <li><a href="#layanan" className="hover:text-white transition-colors">Iklan Meta & TikTok</a></li>
              <li><a href="#marketplace" className="hover:text-white transition-colors">Setup Shopee & Tokopedia</a></li>
              <li><a href="#paket" className="hover:text-white transition-colors">Paket & Harga</a></li>
              <li><a href="#kalkulator" className="hover:text-white transition-colors">Kalkulator UMKM</a></li>
              <li><a href="#portofolio" className="hover:text-white transition-colors">Hasil & Studi Kasus</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Kontak Resmi
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>WhatsApp:</span>
                  <span className="text-cyan-400 font-mono">{config.whatsappNumber}</span>
                </a>
              </li>
              <li><span>Email: {config.email}</span></li>
              <li><span className="text-emerald-400">Konsultasi Terbuka Online</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 {config.studioName}. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex gap-4">
            <span>Dirancang untuk Pertumbuhan UMKM</span>
            <span>·</span>
            <span>Versi Responsif</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
