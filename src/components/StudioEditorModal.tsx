import React, { useState } from 'react';
import { SiteConfig, PricingPlan } from '../types';
import { generateStandaloneHtml } from '../utils/whatsapp';
import { X, Save, RotateCcw, Copy, Download, Check, Phone, DollarSign, Type, Layers, ExternalLink } from 'lucide-react';

interface StudioEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteConfig;
  onSave: (newConfig: SiteConfig) => void;
  onReset: () => void;
}

export const StudioEditorModal: React.FC<StudioEditorModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
  onReset,
}) => {
  const [activeTab, setActiveTab] = useState<'kontak' | 'hero' | 'paket' | 'export'>('kontak');
  const [formData, setFormData] = useState<SiteConfig>(config);
  const [copied, setCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync if config changes externally
  React.useEffect(() => {
    setFormData(config);
  }, [config, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleCopyHtml = () => {
    const htmlCode = generateStandaloneHtml(formData);
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadHtml = () => {
    const htmlCode = generateStandaloneHtml(formData);
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${formData.studioName.toLowerCase().replace(/\s+/g, '-')}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const updatePricingField = (
    index: number,
    field: keyof PricingPlan,
    value: any
  ) => {
    const updated = [...formData.pricingPlans];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    setFormData({ ...formData, pricingPlans: updated });
  };

  const updateFeaturesList = (planIndex: number, text: string) => {
    const lines = text.split('\n').filter((l) => l.trim().length > 0);
    const updated = [...formData.pricingPlans];
    updated[planIndex] = {
      ...updated[planIndex],
      features: lines,
    };
    setFormData({ ...formData, pricingPlans: updated });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-[#0c1221] border border-[#25304a] rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#10172a] border-b border-[#25304a] flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold">
              Panel Editor ZENA STUDIO
            </div>
            <h2 className="text-lg font-black text-white">
              Edit Konten, Harga & Nomor WhatsApp
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg text-xs font-bold transition-all shadow-md"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{savedSuccess ? 'Tersimpan!' : 'Simpan'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Tutup panel editor"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-2 bg-[#080d19] border-b border-[#1f293d] flex gap-2 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('kontak')}
            className={`px-3 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'kontak'
                ? 'bg-purple-600/30 text-purple-300 border border-purple-500/50'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Kontak & WhatsApp</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`px-3 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'hero'
                ? 'bg-purple-600/30 text-purple-300 border border-purple-500/50'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Judul & Hero</span>
          </button>

          <button
            onClick={() => setActiveTab('paket')}
            className={`px-3 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'paket'
                ? 'bg-purple-600/30 text-purple-300 border border-purple-500/50'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>Paket & Biaya</span>
          </button>

          <button
            onClick={() => setActiveTab('export')}
            className={`px-3 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'export'
                ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-500/50'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Ekspor HTML Standalone</span>
          </button>
        </div>

        {/* Modal Body / Tab Contents */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-xs text-slate-200">
          {/* TAB 1: KONTAK & WHATSAPP */}
          {activeTab === 'kontak' && (
            <div className="space-y-4 max-w-2xl">
              <div className="p-3 bg-purple-950/40 border border-purple-800/40 rounded-xl text-purple-200">
                <span className="font-bold">Tips:</span> Masukkan nomor WhatsApp dalam format internasional tanpa spasi atau tanda plus (contoh: <code className="font-mono bg-purple-900/60 px-1 py-0.5 rounded">6281234567890</code>). Semua tombol konsultasi di website akan otomatis mengarah ke nomor ini.
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">
                  Nomor WhatsApp Utama (Format 62xxx)
                </label>
                <input
                  type="text"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  placeholder="6281234567890"
                  className="w-full px-3 py-2 bg-[#10172a] border border-[#25304a] rounded-lg text-white font-mono text-sm focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">
                  Nama Studio / Usaha
                </label>
                <input
                  type="text"
                  value={formData.studioName}
                  onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
                  className="w-full px-3 py-2 bg-[#10172a] border border-[#25304a] rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">
                  Tagline Studio
                </label>
                <input
                  type="text"
                  value={formData.studioTagline}
                  onChange={(e) => setFormData({ ...formData, studioTagline: e.target.value })}
                  className="w-full px-3 py-2 bg-[#10172a] border border-[#25304a] rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">
                  Pesan Pembuka WhatsApp Standar
                </label>
                <textarea
                  rows={2}
                  value={formData.whatsappDefaultMessage}
                  onChange={(e) => setFormData({ ...formData, whatsappDefaultMessage: e.target.value })}
                  className="w-full px-3 py-2 bg-[#10172a] border border-[#25304a] rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">
                    Email Resmi
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-[#10172a] border border-[#25304a] rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">
                    Jam Operasional
                  </label>
                  <input
                    type="text"
                    value={formData.operatingHours}
                    onChange={(e) => setFormData({ ...formData, operatingHours: e.target.value })}
                    className="w-full px-3 py-2 bg-[#10172a] border border-[#25304a] rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: JUDUL & HERO */}
          {activeTab === 'hero' && (
            <div className="space-y-4 max-w-2xl">
              <div>
                <label className="block font-bold text-slate-300 mb-1">
                  Teks Badge Atas
                </label>
                <input
                  type="text"
                  value={formData.heroBadge}
                  onChange={(e) => setFormData({ ...formData, heroBadge: e.target.value })}
                  className="w-full px-3 py-2 bg-[#10172a] border border-[#25304a] rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">
                    Judul Utama (Baris 1)
                  </label>
                  <input
                    type="text"
                    value={formData.heroHeadline}
                    onChange={(e) => setFormData({ ...formData, heroHeadline: e.target.value })}
                    className="w-full px-3 py-2 bg-[#10172a] border border-[#25304a] rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">
                    Judul Warna Gradient (Baris 2)
                  </label>
                  <input
                    type="text"
                    value={formData.heroHeadlineGradient}
                    onChange={(e) => setFormData({ ...formData, heroHeadlineGradient: e.target.value })}
                    className="w-full px-3 py-2 bg-[#10172a] border border-[#25304a] rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">
                  Deskripsi / Subheadline Hero
                </label>
                <textarea
                  rows={3}
                  value={formData.heroSubheadline}
                  onChange={(e) => setFormData({ ...formData, heroSubheadline: e.target.value })}
                  className="w-full px-3 py-2 bg-[#10172a] border border-[#25304a] rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="border-t border-[#1f293d] pt-4">
                <label className="block font-bold text-slate-300 mb-2">
                  4 Angka Statistik di Hero:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[11px] text-slate-400">Stat 1 (Marketplaces):</span>
                    <input
                      type="text"
                      value={formData.stats.marketplaces}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          stats: { ...formData.stats, marketplaces: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 bg-[#10172a] border border-[#25304a] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-400">Stat 2 (Platforms):</span>
                    <input
                      type="text"
                      value={formData.stats.platforms}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          stats: { ...formData.stats, platforms: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 bg-[#10172a] border border-[#25304a] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-400">Stat 3 (Fokus Bisnis):</span>
                    <input
                      type="text"
                      value={formData.stats.focus}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          stats: { ...formData.stats, focus: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 bg-[#10172a] border border-[#25304a] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-400">Stat 4 (Metrik):</span>
                    <input
                      type="text"
                      value={formData.stats.optimization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          stats: { ...formData.stats, optimization: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 bg-[#10172a] border border-[#25304a] rounded-lg text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PAKET & BIAYA */}
          {activeTab === 'paket' && (
            <div className="space-y-6">
              <p className="text-slate-400">
                Ubah nama paket, harga, dan daftar fitur (1 baris per fitur). Setiap perubahan akan langsung terhubung ke tombol pemesanan WhatsApp.
              </p>

              <div className="space-y-6">
                {formData.pricingPlans.map((plan, index) => (
                  <div key={plan.id} className="p-4 bg-[#10172a] border border-[#25304a] rounded-xl space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-purple-300 uppercase tracking-wider text-xs">
                        Paket {index + 1}: {plan.tier.toUpperCase()}
                      </span>
                      <label className="flex items-center gap-2 text-[11px] text-slate-400 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={plan.isPopular || false}
                          onChange={(e) => updatePricingField(index, 'isPopular', e.target.checked)}
                          className="rounded accent-purple-500"
                        />
                        <span>Tandai Sebagai "Paling Populer"</span>
                      </label>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">Nama Paket</label>
                        <input
                          type="text"
                          value={plan.name}
                          onChange={(e) => updatePricingField(index, 'name', e.target.value)}
                          className="w-full px-3 py-1.5 bg-[#080d19] border border-[#25304a] rounded-lg text-white font-bold"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">Harga Tampilan (Contoh: Rp299K / Rp299.000)</label>
                        <input
                          type="text"
                          value={plan.priceFormatted}
                          onChange={(e) => updatePricingField(index, 'priceFormatted', e.target.value)}
                          className="w-full px-3 py-1.5 bg-[#080d19] border border-[#25304a] rounded-lg text-white font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">Periode (per toko / per bulan)</label>
                        <input
                          type="text"
                          value={plan.period}
                          onChange={(e) => updatePricingField(index, 'period', e.target.value)}
                          className="w-full px-3 py-1.5 bg-[#080d19] border border-[#25304a] rounded-lg text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Deskripsi Singkat</label>
                      <input
                        type="text"
                        value={plan.description}
                        onChange={(e) => updatePricingField(index, 'description', e.target.value)}
                        className="w-full px-3 py-1.5 bg-[#080d19] border border-[#25304a] rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">
                        Daftar Fasilitas / Fitur (Tulis 1 poin per baris):
                      </label>
                      <textarea
                        rows={4}
                        value={plan.features.join('\n')}
                        onChange={(e) => updateFeaturesList(index, e.target.value)}
                        className="w-full px-3 py-2 bg-[#080d19] border border-[#25304a] rounded-lg text-white font-mono text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: EKSPOR HTML STANDALONE */}
          {activeTab === 'export' && (
            <div className="space-y-4 max-w-2xl">
              <div className="p-4 bg-cyan-950/40 border border-cyan-800/40 rounded-xl">
                <div className="font-bold text-cyan-300 text-sm mb-1">
                  Ekspor File HTML Mandiri (Self-Contained)
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Anda dapat menyalin atau mengunduh kode HTML lengkap halaman ini. File ini dapat langsung dibuka di browser mana pun atau diupload ke hosting web (cPanel, GitHub Pages, Vercel, Netlify) tanpa perlu instalasi tambahan.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleCopyHtml}
                  className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold transition-all shadow-md"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Kode HTML Tersalin ke Clipboard!' : 'Salin Kode HTML'}</span>
                </button>

                <button
                  onClick={handleDownloadHtml}
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#151d34] hover:bg-[#1f2b4e] text-white border border-[#2d3a5a] rounded-xl font-bold transition-all"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Unduh File .HTML</span>
                </button>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-2">
                  Pratinjau Kode HTML Standalone yang Dihasilkan:
                </label>
                <textarea
                  readOnly
                  rows={9}
                  value={generateStandaloneHtml(formData)}
                  className="w-full p-3 bg-[#080d19] border border-[#25304a] rounded-lg text-slate-300 font-mono text-[11px] leading-relaxed resize-none focus:outline-none select-all"
                />
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#090d18] border-t border-[#1f293d] flex items-center justify-between">
          <button
            onClick={() => {
              if (window.confirm('Apakah Anda yakin ingin mengembalikan seluruh konten ke default awal?')) {
                onReset();
                onClose();
              }
            }}
            className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset ke Default Awal</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                handleSave();
                onClose();
              }}
              className="px-5 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-md"
            >
              Simpan & Terapkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
