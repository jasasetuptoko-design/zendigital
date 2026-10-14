import React from 'react';
import { SiteConfig } from '../types';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  config: SiteConfig;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ config }) => {
  return (
    <section className="py-20 bg-[#090e1d] border-t border-[#1f293d]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
            Pengalaman Klien Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Apa Kata Pemilik Usaha?
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Kepercayaan dan kepuasan pelanggan adalah komitmen utama kami dalam setiap proyek digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#10172a] border border-[#25304a] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-600" />
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1f293d]">
                <div className="font-bold text-white text-sm">{item.name}</div>
                <div className="text-xs text-slate-400">
                  {item.brand} · {item.city}
                </div>
                <div className="text-[11px] text-cyan-400 font-medium mt-1">
                  Layanan: {item.serviceUsed}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
