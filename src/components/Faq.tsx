import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    question: 'Berapa lama proses pengerjaan toko online / marketplace?',
    answer: 'Untuk paket Marketplace Setup (Starter) biasanya membutuhkan waktu 3-5 hari kerja setelah foto dan detail produk kami terima. Untuk paket Growth dan Iklan, persiapan materi dan setup kampanye membutuhkan 3-7 hari sebelum kampanye tayang secara berkala.',
  },
  {
    question: 'Apakah saya harus memberikan password akun pribadi saya?',
    answer: 'Tidak perlu khawatir! Kami sangat memprioritaskan keamanan Anda. Di Shopee, Tokopedia, dan Meta Ads, pengerjaan dapat dilakukan melalui fitur Sub-Account / Akun Staf Toko atau Business Manager tanpa membagikan kata sandi utama maupun data perbankan Anda.',
  },
  {
    question: 'Bagaimana dengan biaya atau anggaran iklan (ad spend)?',
    answer: 'Biaya paket ZENA DIGITAL STUDIO adalah jasa setup, manajemen, riset target audiens, dan optimasi. Anggaran saldo iklan harian (misalnya Rp50.000/hari di Meta Ads atau Shopee Ads) disiapkan oleh pemilik toko dan diisi langsung ke saldo akun resmi Anda.',
  },
  {
    question: 'Bagaimana jika saya belum punya foto produk yang bagus?',
    answer: 'Jangan khawatir! Kami dapat membantu memberikan panduan cara foto produk menggunakan smartphone agar terlihat bersih dan menarik, atau membantu mengedit latar belakang foto produk Anda agar tampak rapi sesuai standar katalog marketplace.',
  },
  {
    question: 'Bagaimana cara melihat laporan dan hasil kinerjanya?',
    answer: 'Kami menyediakan laporan berkala (mingguan dan bulanan) via WhatsApp atau PDF ringkas yang menjelaskan berapa jumlah pengunjung yang didapat, biaya per klik/order, serta rekomendasi langkah strategis berikutnya.',
  },
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#070b17] border-t border-[#1f293d]/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Tanya Jawab
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Hal-hal mendasar yang biasa ditanyakan para pemilik usaha sebelum memulai kerja sama.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#10172a] border border-[#25304a] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#1f293d] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
