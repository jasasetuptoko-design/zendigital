/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SiteConfig } from './types';
import { DEFAULT_SITE_CONFIG } from './data/defaultContent';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Marketplaces } from './components/Marketplaces';
import { Pricing } from './components/Pricing';
import { Calculator } from './components/Calculator';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { StudioEditorModal } from './components/StudioEditorModal';
import { Edit3, CheckCircle2 } from 'lucide-react';

const STORAGE_KEY = 'zena_digital_studio_v1';

export default function App() {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return DEFAULT_SITE_CONFIG;
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSaveConfig = (newConfig: SiteConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
      setToastMessage('Perubahan berhasil disimpan!');
      setTimeout(() => setToastMessage(null), 3000);
    } catch {
      // Ignore
    }
  };

  const handleResetConfig = () => {
    setConfig(DEFAULT_SITE_CONFIG);
    try {
      localStorage.removeItem(STORAGE_KEY);
      setToastMessage('Konten dikembalikan ke pengaturan default.');
      setTimeout(() => setToastMessage(null), 3000);
    } catch {
      // Ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#070b17] text-[#f5f7ff] font-sans selection:bg-purple-600 selection:text-white flex flex-col">
      {/* Quick Edit Mode Floating Banner for instant access */}
      <div className="bg-gradient-to-r from-purple-950 via-[#10172a] to-cyan-950 border-b border-purple-800/40 px-4 py-2 text-xs flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span className="font-semibold text-white">Mode Pratinjau & Edit Aktif:</span>
          <span className="hidden sm:inline text-slate-400">
            Anda dapat mengubah teks, nomor WhatsApp, paket harga, atau mengekspor file HTML mandiri.
          </span>
        </div>
        <button
          onClick={() => setIsEditorOpen(true)}
          className="flex items-center gap-1.5 px-2.5 py-1 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-colors text-[11px] shrink-0"
        >
          <Edit3 className="w-3 h-3" />
          <span>Buka Editor</span>
        </button>
      </div>

      {/* Main Navigation */}
      <Navbar config={config} onOpenEditor={() => setIsEditorOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero config={config} />
        <Services config={config} />
        <Marketplaces config={config} />
        <Pricing config={config} />
        <Calculator config={config} />
        <Portfolio config={config} />
        <Testimonials config={config} />
        <Faq />
        <CtaSection config={config} />
      </main>

      {/* Footer */}
      <Footer config={config} />

      {/* Floating Action Button for Mobile/Desktop to quickly Edit */}
      <button
        onClick={() => setIsEditorOpen(true)}
        className="fixed bottom-6 right-6 z-30 p-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl shadow-purple-950/60 hover:scale-105 transition-all flex items-center gap-2 group"
        title="Edit teks, harga, nomor WhatsApp & ekspor HTML"
        aria-label="Edit Konten Website"
      >
        <Edit3 className="w-5 h-5" />
        <span className="hidden sm:inline font-bold text-xs pr-1">Edit Website</span>
      </button>

      {/* Studio Content Editor Modal */}
      <StudioEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        config={config}
        onSave={handleSaveConfig}
        onReset={handleResetConfig}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-lg flex items-center gap-2 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
