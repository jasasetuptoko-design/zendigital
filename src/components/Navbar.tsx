import React, { useState } from 'react';
import { SiteConfig } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { Edit3, MessageCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  config: SiteConfig;
  onOpenEditor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ config, onOpenEditor }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const waUrl = createWhatsAppUrl(config.whatsappNumber, config.whatsappDefaultMessage);

  return (
    <header className="sticky top-0 z-40 bg-[#070b17]/90 backdrop-blur-md border-b border-[#1f293d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element) */}
        <a href="#" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center font-black text-white text-base shadow-sm">
            Z
          </div>
          <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            {config.studioName}
          </span>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#layanan" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Layanan</a>
          <a href="#marketplace" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Marketplace</a>
          <a href="#paket" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Paket & Harga</a>
          <a href="#kalkulator" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Kalkulator UMKM</a>
          <a href="#portofolio" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Portofolio</a>
          <a href="#kontak" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Kontak</a>
        </nav>

        {/* Zone 3: Actions - Edit Mode & Primary WhatsApp Consultation */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenEditor}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-purple-200 bg-purple-950/60 hover:bg-purple-900/80 border border-purple-700/50 rounded-xl transition-all shadow-sm"
            title="Buka panel editor untuk mengubah teks, harga, nomor WhatsApp, atau unduh HTML"
          >
            <Edit3 className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden sm:inline">Edit Web</span>
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl transition-all shadow-md shadow-purple-950/30 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Konsultasi</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1221] border-b border-[#1f293d] px-6 py-4 space-y-3">
          <a
            href="#layanan"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-1"
          >
            Layanan Kami
          </a>
          <a
            href="#marketplace"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-1"
          >
            Marketplace
          </a>
          <a
            href="#paket"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-1"
          >
            Paket & Biaya
          </a>
          <a
            href="#kalkulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-1"
          >
            Kalkulator UMKM
          </a>
          <a
            href="#portofolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-1"
          >
            Hasil & Studi Kasus
          </a>
          <a
            href="#kontak"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-1"
          >
            Hubungi Kami
          </a>
        </div>
      )}
    </header>
  );
};
