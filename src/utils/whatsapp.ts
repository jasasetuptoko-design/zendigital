import { SiteConfig } from '../types';

export function createWhatsAppUrl(phone: string, message: string): string {
  // Clean phone number: remove non-digits
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function generateStandaloneHtml(config: SiteConfig): string {
  const waUrl = createWhatsAppUrl(config.whatsappNumber, config.whatsappDefaultMessage);

  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(config.studioName)} | ${escapeHtml(config.studioTagline)}</title>
<meta name="description" content="${escapeHtml(config.heroSubheadline)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
:root{--bg:#070b17;--card:#10172a;--card2:#151d34;--text:#f5f7ff;--muted:#aeb7ce;--accent:#7c5cff;--accent2:#00d4ff;--line:#25304a}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:'Plus Jakarta Sans',sans-serif;background:linear-gradient(180deg,#070b17,#0b1020);color:var(--text);line-height:1.6}
a{text-decoration:none;color:inherit}.container{max-width:1150px;margin:auto;padding:0 22px}
nav{position:sticky;top:0;z-index:20;background:rgba(7,11,23,.88);backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}
.navin{height:72px;display:flex;align-items:center;justify-content:space-between}
.logo{font-weight:900;letter-spacing:0.5px;font-size:20px}.logo span{color:var(--accent2)}
.navlinks{display:flex;gap:24px;color:#d9def0;font-size:14px}
.btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:12px;background:linear-gradient(135deg,var(--accent),#9b6cff);font-weight:700;border:0;color:#fff;cursor:pointer;transition:transform .15s ease}
.btn:hover{transform:translateY(-2px)}
.btn.outline{background:transparent;border:1px solid #3a4665;color:#f5f7ff}
.hero{padding:95px 0 80px;text-align:center;position:relative;overflow:hidden}
.hero:before{content:"";position:absolute;width:500px;height:500px;background:#6548ff22;filter:blur(90px);border-radius:50%;top:-180px;left:50%;transform:translateX(-50%)}
.hero>*{position:relative}
.badge{display:inline-block;padding:7px 16px;border:1px solid #34405e;border-radius:999px;color:#bfc8df;font-size:12px;font-weight:600;letter-spacing:1px;background:#10172a}
h1{font-size:clamp(36px,5.5vw,68px);line-height:1.08;margin:22px auto 18px;max-width:920px;font-weight:800}
.gradient{background:linear-gradient(90deg,#fff,#9d8aff,#00d4ff);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero p{max-width:720px;margin:0 auto 30px;color:var(--muted);font-size:17px}
.actions{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:55px}
.stat{background:#0e1527;border:1px solid var(--line);border-radius:16px;padding:18px;text-align:center}
.stat b{display:block;font-size:22px;color:#fff}.stat span{font-size:12px;color:var(--muted)}
section{padding:78px 0}.section-head{text-align:center;max-width:700px;margin:0 auto 42px}
.section-head h2{font-size:36px;margin:0 0 10px;font-weight:800}.section-head p{color:var(--muted)}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.card{background:linear-gradient(145deg,var(--card),#0c1221);border:1px solid var(--line);border-radius:20px;padding:28px;transition:all .2s ease;display:flex;flex-direction:column}
.card:hover{transform:translateY(-4px);border-color:#4b5a85}
.card-num{font-size:12px;font-weight:700;color:var(--accent2);letter-spacing:1px;margin-bottom:8px}
.card h3{margin:8px 0 10px;font-size:20px;font-weight:700}.card p,.card li{color:var(--muted);font-size:14px}.card ul{padding-left:19px;margin:16px 0;flex-grow:1}
.card li{margin-bottom:8px}
.platforms{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
.platform{padding:12px 20px;border-radius:14px;background:#11192c;border:1px solid var(--line);font-weight:600;font-size:14px}
.price{font-size:34px;font-weight:800;margin:12px 0;color:#fff}
.price span{font-size:14px;font-weight:400;color:var(--muted)}
.popular{border-color:#705cff;box-shadow:0 0 35px #6e5cff18;position:relative}
.tag{display:inline-block;font-size:11px;font-weight:700;background:#6d5cff;color:white;border-radius:6px;padding:4px 8px;width:fit-content;margin-bottom:12px}
.cta{background:linear-gradient(135deg,#17113b,#10243a);border:1px solid #35436c;border-radius:28px;padding:55px 30px;text-align:center}
.cta h2{font-size:38px;margin:0 0 12px;font-weight:800}
footer{padding:35px 0;border-top:1px solid var(--line);color:var(--muted);font-size:13px}
.footerin{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;align-items:center}
@media(max-width:850px){.navlinks{display:none}.stats{grid-template-columns:repeat(2,1fr)}.grid{grid-template-columns:1fr}.cta{padding:35px 20px}.cta h2{font-size:28px}}
</style>
</head>
<body>

<nav><div class="container navin">
  <a class="logo" href="#">${escapeHtml(config.studioName.split(' ')[0] || 'ZENA')} <span>${escapeHtml(config.studioName.split(' ').slice(1).join(' ') || 'DIGITAL STUDIO')}</span></a>
  <div class="navlinks">
    <a href="#layanan">Layanan</a>
    <a href="#marketplace">Marketplace</a>
    <a href="#paket">Paket & Harga</a>
    <a href="#kontak">Kontak</a>
  </div>
  <a class="btn" href="${waUrl}" target="_blank" rel="noopener noreferrer">Konsultasi</a>
</div></nav>

<header class="hero"><div class="container">
  <div class="badge">${escapeHtml(config.heroBadge)}</div>
  <h1>${escapeHtml(config.heroHeadline)} <span class="gradient">${escapeHtml(config.heroHeadlineGradient)}</span></h1>
  <p>${escapeHtml(config.heroSubheadline)}</p>
  <div class="actions">
    <a class="btn" href="#paket">Lihat Paket & Harga</a>
    <a class="btn outline" href="${waUrl}" target="_blank" rel="noopener noreferrer">Konsultasi via WhatsApp</a>
  </div>
  <div class="stats">
    <div class="stat"><b>${escapeHtml(config.stats.marketplaces)}</b><span>Channel Penjualan</span></div>
    <div class="stat"><b>${escapeHtml(config.stats.platforms)}</b><span>Jangkauan Media</span></div>
    <div class="stat"><b>${escapeHtml(config.stats.focus)}</b><span>Target Bisnis</span></div>
    <div class="stat"><b>${escapeHtml(config.stats.optimization)}</b><span>Metrik Pertumbuhan</span></div>
  </div>
</div></header>

<section id="layanan"><div class="container">
  <div class="section-head">
    <h2>Layanan Unggulan Kami</h2>
    <p>Dibuat untuk membantu bisnis UMKM tampil kredibel, memperluas jangkauan pembeli, dan meningkatkan omset secara konsisten.</p>
  </div>
  <div class="grid">
    ${config.services.map(s => `
      <div class="card">
        <div class="card-num">${escapeHtml(s.number)} · ${escapeHtml(s.tag)}</div>
        <h3>${escapeHtml(s.title)}</h3>
        <p>${escapeHtml(s.shortDesc)}</p>
        <ul>
          ${s.points.map(p => `<li>${escapeHtml(p)}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>
</div></section>

<section id="marketplace"><div class="container">
  <div class="section-head">
    <h2>Marketplace yang Kami Bantu</h2>
    <p>Mulai dari pembukaan akun resmi, upload katalog produk, dekorasi banner, hingga strategi iklan terarah.</p>
  </div>
  <div class="platforms">
    <div class="platform">🟠 Shopee</div>
    <div class="platform">🟢 Tokopedia</div>
    <div class="platform">⚫ TikTok Shop</div>
    <div class="platform">🔵 Lazada</div>
    <div class="platform">🔷 Blibli</div>
    <div class="platform">🔴 Bukalapak</div>
  </div>
</div></section>

<section id="paket"><div class="container">
  <div class="section-head">
    <h2>Paket Layanan Investasi</h2>
    <p>Pilih paket sesuai tahap pertumbuhan usaha Anda. Tanpa komitmen tersembunyi, dapat disesuaikan dengan skala katalog bisnis.</p>
  </div>
  <div class="grid">
    ${config.pricingPlans.map(plan => {
      const planWaUrl = createWhatsAppUrl(
        config.whatsappNumber,
        `Halo ${config.studioName}, saya tertarik untuk memesan paket ${plan.name} (${plan.priceFormatted}). Mohon info langkah selanjutnya.`
      );
      return `
      <div class="card ${plan.isPopular ? 'popular' : ''}">
        <span class="tag">${escapeHtml(plan.badge)}</span>
        <h3>${escapeHtml(plan.name)}</h3>
        <p>${escapeHtml(plan.description)}</p>
        <div class="price">${escapeHtml(plan.priceFormatted)} <span>/${escapeHtml(plan.period)}</span></div>
        <ul>
          ${plan.features.map(f => `<li>${escapeHtml(f)}</li>`).join('')}
        </ul>
        <a class="btn" href="${planWaUrl}" target="_blank" rel="noopener noreferrer">Pilih Paket Ini</a>
      </div>
      `;
    }).join('')}
  </div>
</div></section>

<section><div class="container"><div class="cta" id="kontak">
  <h2>Siap Mengembangkan Bisnis Online Anda?</h2>
  <p>Konsultasikan kebutuhan iklan, marketplace, atau media sosial usaha Anda bersama tim kami. Solusi praktis & ramah UMKM.</p>
  <div class="actions">
    <a class="btn" href="${waUrl}" target="_blank" rel="noopener noreferrer">💬 Hubungi via WhatsApp (${escapeHtml(config.whatsappNumber)})</a>
  </div>
</div></div></section>

<footer><div class="container footerin">
  <div>
    <b>${escapeHtml(config.studioName)}</b><br>
    ${escapeHtml(config.studioTagline)} · ${escapeHtml(config.location)}
  </div>
  <div>© 2026 ${escapeHtml(config.studioName)}. All rights reserved.</div>
</div></footer>

</body>
</html>`;
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
