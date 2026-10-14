import React, { useState } from 'react';
import { SiteConfig } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, Phone, Mail, Clock, MapPin, Send } from 'lucide-react';

interface CtaSectionProps {
  config: SiteConfig;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ config }) => {
  const [clientName, setClientName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [customNeed, setCustomNeed] = useState('');

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo ${config.studioName}, saya ${clientName ? clientName : 'Pemilik Usaha'}${
      businessName ? ` dari (${businessName})` : ''
    }. 
Pesan/Kebutuhan: ${customNeed || 'Saya ingin konsultasi pengembangan toko online dan iklan digital.'}`;

    const url = createWhatsAppUrl(config.whatsappNumber, msg);
    window.open(url, '_blank');
  };

  const defaultWaUrl = createWhatsAppUrl(config.whatsappNumber, config.whatsappDefaultMessage);

  return (
    <section id="kontak" className="py-20 bg-[#070b17] border-t border-[#1f293d]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#17113b] via-[#10243a] to-[#0e172e] border border-[#35436c] rounded-3xl p-8 sm:p-12 shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3">
                <span>Mulai Sekarang</span>
                <span className="text-slate-500">·</span>
                <span>Konsultasi Bebas Biaya</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                Siap Mengembangkan Bisnis Online Anda?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-xl">
                Diskusikan kendala toko marketplace, rencana iklan Meta & TikTok, atau kebutuhan konten brand Anda bersama {config.studioName}. Kami siap mendampingi langkah demi langkah.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-900/40 border border-purple-700/50 flex items-center justify-center text-purple-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400">WhatsApp Resmi:</div>
                    <div className="font-bold text-white font-mono">{config.whatsappNumber}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-900/40 border border-cyan-700/50 flex items-center justify-center text-cyan-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400">Email:</div>
                    <div className="font-bold text-white">{config.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400">Jam Operasional:</div>
                    <div className="font-medium text-white">{config.operatingHours}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400">Wilayah Layanan:</div>
                    <div className="font-medium text-white">{config.location}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={defaultWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-950/50"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Langsung di WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Consultation Form to WhatsApp */}
            <div className="lg:col-span-5 bg-[#0a0f1d]/90 border border-[#2b3a5c] rounded-2xl p-6 shadow-xl backdrop-blur-sm">
              <div className="text-sm font-bold text-white mb-1">
                Kirim Pesan Cepat via WhatsApp
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Isi form singkat ini untuk otomatis membuka chat dengan detail kebutuhan Anda:
              </p>

              <form onSubmit={handleCustomSubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-3 py-2 text-xs bg-[#10172a] border border-[#25304a] rounded-lg text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Nama Toko / Brand Bisnis
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Contoh: Toko Hijab Cantik"
                    className="w-full px-3 py-2 text-xs bg-[#10172a] border border-[#25304a] rounded-lg text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Ceritakan Kebutuhan Anda
                  </label>
                  <textarea
                    rows={3}
                    value={customNeed}
                    onChange={(e) => setCustomNeed(e.target.value)}
                    placeholder="Contoh: Saya ingin setup toko baru di Shopee dan Tokopedia sekalian optimasi iklannya..."
                    className="w-full px-3 py-2 text-xs bg-[#10172a] border border-[#25304a] rounded-lg text-white focus:outline-none focus:border-purple-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim ke WhatsApp ZENA STUDIO</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
