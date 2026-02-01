import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const imgDesain2 = "/src/assets/img/sampah/desainplang2.jpg";

const SDGIcon = ({ number, color }) => (
  <svg viewBox="0 0 40 40" width="40" height="40">
    <circle cx="20" cy="20" r="18" fill={color} />
    <text x="20" y="17" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">SDG</text>
    <text x="20" y="31" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">{number}</text>
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.71c.32.17.65.35.94.55C9 22 12 22 15 20.5c4-2 5-7 2-11C15 7 11 6 8 8" />
    <path d="M7 21c1-3 3-5 5-7" />
  </svg>
);

export default function EcoBrickPlang() {
  const [lightboxImg, setLightboxImg] = useState(null);

  const budgetItems = [
    { nama: "Besi Beton Polos Diameter 10 mm (1 meter)", kuantitas: 75, harga: 11500, total: 862500, ket: "Besi Beton" },
    { nama: "Plat Strip Besi 3 mm x 50 mm x 6000 mm", kuantitas: 4, harga: 95000, total: 380000, ket: "Plat Besi" },
    { nama: "Cat Pilox Hijau 150ml", kuantitas: 2, harga: 15900, total: 31800, ket: "Cat Pilox" },
    { nama: "Jasa Las", kuantitas: 1, harga: 500000, total: 500000, ket: "" },
  ];
  const grandTotal = budgetItems.reduce((s, i) => s + i.total, 0);
  const fmt = (n) => "Rp" + n.toLocaleString("id-ID");

  const steps = [
    { icon: "📍", title: "Persiapan & Perencanaan", desc: "Koordinasi dengan perangkat desa, penentuan lokasi pemasangan plang, serta penyusunan desain dan kebutuhan material." },
    { icon: "🔧", title: "Pembuatan Rangka Plang", desc: "Merakit rangka plang menggunakan bahan yang telah ditentukan sesuai desain, memastikan kekuatan dan ketahanan terhadap kondisi luar ruang." },
    { icon: "🗑️", title: "Pengumpulan & Pemilahan Bahan", desc: "Mengumpulkan botol plastik bekas dari lingkungan desa, kemudian membersihkan dan memilahnya sesuai kriteria ecobrick yang layak digunakan." },
    { icon: "🧱", title: "Pembuatan Ecobrick", desc: "Mengisi botol plastik dengan sampah plastik non-organik hingga mencapai kepadatan sesuai standar agar ecobrick kuat dan aman digunakan." },
    { icon: "🎨", title: "Perakitan & Finishing Plang", desc: "Memasang ecobrick pada rangka plang, melakukan pengecatan atau pelapisan akhir menggunakan bahan ramah lingkungan, serta pengecekan kualitas." },
    { icon: "📢", title: "Pemasangan & Sosialisasi", desc: "Memasang plang nama desa di lokasi yang telah ditentukan dan melakukan sosialisasi kepada masyarakat mengenai konsep 3R dan ecobrick." },
  ];

  const benefits = [
    { icon: "♻️", text: "Mengurangi volume sampah botol plastik di lingkungan desa melalui pemanfaatan kembali berbasis ecobrick." },
    { icon: "🏞️", text: "Menciptakan plang nama desa yang ramah lingkungan, fungsional, dan memiliki nilai estetika." },
    { icon: "🧠", text: "Meningkatkan kesadaran dan partisipasi masyarakat terhadap pengelolaan sampah berbasis konsep 3R." },
    { icon: "📚", text: "Menjadikan plang nama desa sebagai media edukasi lingkungan yang mudah dipahami masyarakat." },
    { icon: "🌍", text: "Mendukung terwujudnya citra desa yang peduli lingkungan dan berkelanjutan." },
  ];

  const Divider = ({ label }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "0 auto", maxWidth: 680, padding: "0 18px" }}>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, #a5d6a7)" }} />
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#7aaa7e" }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, #a5d6a7)" }} />
    </div>
  );

  const Lightbox = () => (
    <div
      onClick={() => setLightboxImg(null)}
      style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, cursor: "pointer" }}
    >
      <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "85vh" }}>
        <img src={lightboxImg} alt="zoom" style={{ maxWidth: "100%", maxHeight: "85vh", borderRadius: 12, objectFit: "contain", display: "block" }} />
        <button
          onClick={() => setLightboxImg(null)}
          style={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,0.55)", border: "none", color: "#fff", borderRadius: "50%", width: 32, height: 32, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
        >✕</button>
      </div>
    </div>
  );

  const PDFSection = () => {
    const [ref, inView] = useInView({ threshold: 0.1 });
    return (
      <div ref={ref} style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease-out" }}>
        <Divider label="Poster Design" />
        <div style={{ background: "#fff", borderRadius: 18, padding: 24, marginTop: 16, boxShadow: "0 2px 14px rgba(46,125,50,0.09)", border: "1px solid #e0f2e0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 22 }}>📄</span>
            <h2 style={{ margin: 0, fontSize: 17, color: "#1b5e20", fontWeight: 700 }}>Poster Design Plang Ecobrick</h2>
          </div>
          <p style={{ margin: "0 0 20px", fontSize: 13.5, color: "#5a6b5b", lineHeight: 1.6 }}>
            Unduh atau baca langsung poster yang berisi panduan praktis bagaimana membuat plang nama sekolah dari botol plastik.
          </p>

          {/* PDF Viewer */}
          <div style={{ background: "#f5f5f5", borderRadius: 12, overflow: "hidden", marginBottom: 16, border: "1px solid #e0e0e0" }}>
            <iframe
              src="/src/assets/PosterEcobrick.pdf"
              type="application/pdf"
              style={{ width: "100%", height: 500, border: "none", display: "block" }}
              title="Poster Design Plang Ecobrick"
            />
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a 
              href="/src/assets/PosterEcobrick.pdf" 
              download="PosterEcobrick.pdf" 
              style={{ flex: "1 1 200px", background: "#2e7d32", color: "#fff", fontSize: 14, fontWeight: 600, padding: "12px 20px", borderRadius: 10, textDecoration: "none", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: "0 2px 8px rgba(46,125,50,0.25)", transition: "background 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#1b5e20"}
              onMouseLeave={e => e.currentTarget.style.background = "#2e7d32"}
            >
              <span>⬇️</span>
              <span>Unduh PDF</span>
            </a>
            <a 
              href="/src/assets/PosterEcobrick.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ flex: "1 1 200px", background: "#fff", color: "#2e7d32", fontSize: 14, fontWeight: 600, padding: "12px 20px", borderRadius: 10, textDecoration: "none", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, border: "2px solid #2e7d32", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#e8f5e9"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#fff"; }}
            >
              <span>🔗</span>
              <span>Buka di Tab Baru</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "linear-gradient(160deg, #e8f5e9 0%, #f1f8e9 50%, #e0f2f1 100%)", minHeight: "100vh", color: "#2d3a2e", paddingTop: "80px" }}>

      {lightboxImg && <Lightbox />}

      {/* ═══════════ HERO HEADER ═══════════ */}
      <div style={{ background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%)", padding: "36px 20px 44px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -50, right: -50, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: -35, left: -25, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <LeafIcon />
            <span style={{ color: "#a5d6a7", fontSize: 13, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>Program KKN-PPM · UGM</span>
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(24px, 5.5vw, 32px)", fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
            Plang Nama Sekolah<br /><span style={{ color: "#a5d6a7" }}>Ramah Lingkungan</span>
          </h1>
          <p style={{ color: "#c8e6c9", fontSize: 14, marginTop: 10, marginBottom: 0, lineHeight: 1.5 }}>Berbasis Daur Ulang Botol Bekas · Ecobrick</p>
        </div>
      </div>

      {/* ═══════════ LATAR BELAKANG ═══════════ */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "30px 18px 0" }}>
        <div style={{ background: "#fff", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 14px rgba(46,125,50,0.09)", border: "1px solid #e0f2e0" }}>
          <div style={{ display: "flex", gap: 3, height: 180 }}>
            <img
              src={imgDesain2}
              alt="Desain Plang 2"
              onClick={() => setLightboxImg(imgDesain2)}
              style={{ flex: 1, objectFit: "cover", cursor: "pointer", transition: "transform 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            />
          </div>
          <p style={{ fontSize: 10.5, color: "#7a8f7b", textAlign: "center", margin: "6px 0 0", fontStyle: "italic" }}>Klik gambar untuk memperbesar</p>

          <div style={{ padding: "22px 24px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 20 }}>🌲</span>
              <h2 style={{ margin: 0, fontSize: 17, color: "#1b5e20", fontWeight: 700 }}>Latar Belakang</h2>
            </div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "#4a5e4b" }}>
              Permasalahan sampah plastik, khususnya botol bekas, masih menjadi tantangan lingkungan di tingkat desa akibat rendahnya pengelolaan dan pemanfaatan ulang. Plang nama desa umumnya masih menggunakan material konvensional yang kurang ramah lingkungan.
            </p>
            <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.75, color: "#4a5e4b" }}>
              Melalui program ini, sampah plastik dimanfaatkan menjadi <strong style={{ color: "#2e7d32" }}>ecobrick</strong> yang bernilai guna dan estetika — sekaligus menjadi media edukasi lingkungan berbasis prinsip <strong style={{ color: "#2e7d32" }}>3R</strong> menuju desa berkelanjutan.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════ TUJUAN ═══════════ */}
      <div style={{ maxWidth: 680, margin: "28px auto 0", padding: "0 18px" }}>
        <Divider label="Tujuan Program" />
        <div style={{ background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)", borderRadius: 18, padding: 24, marginTop: 16, border: "1px solid #c8e6c9" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 22 }}>🎯</span>
            <h2 style={{ margin: 0, fontSize: 17, color: "#1b5e20", fontWeight: 700 }}>Apa yang Ingin Dicapai</h2>
          </div>
          {[
            "Mengurangi volume sampah botol plastik melalui pemanfaatan berbasis ecobrick.",
            "Menciptakan plang nama desa yang ramah lingkungan, fungsional, dan estetis.",
            "Meningkatkan kesadaran masyarakat terhadap pengelolaan sampah berbasis 3R.",
            "Menjadikan plang nama sebagai media edukasi lingkungan.",
            "Mendukung citra desa yang peduli lingkungan dan berkelanjutan.",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 11, marginBottom: i < 4 ? 12 : 0 }}>
              <div style={{ background: "#2e7d32", color: "#fff", borderRadius: "50%", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
              <p style={{ margin: 0, fontSize: 13.5, color: "#3a5a3b", lineHeight: 1.6 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ KONSEP 3R ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <Divider label="Konsep 3R" />
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 16 }}>
          {[
            { letter: "R", title: "Reduce", color: "#ef5350", bg: "#ffebee", desc: "Mengurangi penggunaan barang sekali pakai untuk menekan jumlah sampah sejak dari sumbernya dan meminimalkan dampak negatif terhadap lingkungan." },
            { letter: "R", title: "Reuse", color: "#fb8c00", bg: "#fff3e0", desc: "Menggunakan kembali barang yang masih layak pakai sehingga masa guna produk lebih panjang dan volume sampah dapat dikurangi secara signifikan." },
            { letter: "R", title: "Recycle", color: "#43a047", bg: "#e8f5e9", desc: "Mendaur ulang sampah menjadi produk baru yang bermanfaat. Dalam program ini, botol bekas didaur ulang menjadi ecobrick yang kuat dan fungsional." },
          ].map((r, i) => (
            <div key={i} style={{ background: r.bg, borderRadius: 16, padding: "20px 22px", border: `1px solid ${r.color}25`, display: "flex", gap: 18, alignItems: "flex-start" }}>
              <div style={{ background: r.color, color: "#fff", borderRadius: 13, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 800, flexShrink: 0 }}>{r.letter}</div>
              <div>
                <h3 style={{ margin: "0 0 5px", color: r.color, fontSize: 17, fontWeight: 700 }}>{r.title}</h3>
                <p style={{ margin: 0, fontSize: 13.5, color: "#5a5e5a", lineHeight: 1.6 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ ECOBRICK ═══════════ */}
      <div style={{ maxWidth: 680, margin: "28px auto 0", padding: "0 18px" }}>
        <div style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32)", borderRadius: 18, padding: 26, color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 26 }}>🧱</span>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Apa itu Ecobrick?</h2>
          </div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "#c8e6c9" }}>
            Ecobrick adalah metode pemanfaatan sampah plastik non-organik dengan cara memadatkannya ke dalam botol plastik bekas hingga mencapai kepadatan tertentu, sehingga dapat digunakan sebagai bahan bangunan atau produk fungsional.
          </p>
          <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.75, color: "#c8e6c9" }}>
            Ecobrick berperan sebagai <strong style={{ color: "#a5d6a7" }}>solusi praktis</strong> pengelolaan sampah plastik sekaligus sarana edukasi lingkungan berbasis partisipasi masyarakat.
          </p>
        </div>
      </div>

      {/* ═══════════ TAHAPAN (Timeline) ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <Divider label="Tahapan Pelaksanaan" />
        <div style={{ position: "relative", marginTop: 20 }}>
          <div style={{ position: "absolute", left: 22, top: 0, bottom: 0, width: 3, background: "linear-gradient(to bottom, #2e7d32, #a5d6a7)", borderRadius: 2 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "relative", zIndex: 1 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ background: i < 3 ? "#2e7d32" : "#fff", border: "3px solid #2e7d32", borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0, boxShadow: "0 2px 8px rgba(46,125,50,0.25)" }}>{step.icon}</div>
                <div style={{ background: "#fff", borderRadius: 14, padding: "16px 18px", flex: 1, boxShadow: "0 2px 10px rgba(46,125,50,0.07)", border: "1px solid #e0f2e0" }}>
                  <span style={{ background: "#2e7d32", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 10 }}>Langkah {i + 1}</span>
                  <h3 style={{ margin: "8px 0 4px", fontSize: 15, color: "#1b5e20", fontWeight: 700 }}>{step.title}</h3>
                  <p style={{ margin: 0, fontSize: 13, color: "#5a6b5b", lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════ ANGGARAN ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <Divider label="Rancangan Anggaran" />
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 16 }}>
          <div style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32)", borderRadius: 18, padding: "22px 24px", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 22 }}>💰</span>
                <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>Anggaran Biaya</h2>
              </div>
              <p style={{ margin: 0, fontSize: 12, color: "#a5d6a7" }}>4 item · *Harga dapat berubah sewaktu-waktu</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: "10px 20px" }}>
              <div style={{ fontSize: 10.5, color: "#a5d6a7", textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>Total</div>
              <div style={{ fontSize: 21, fontWeight: 800 }}>{fmt(grandTotal)}</div>
            </div>
          </div>

          {budgetItems.map((item, i) => {
            const persen = ((item.total / grandTotal) * 100).toFixed(1);
            const barColors = ["#ef5350", "#fb8c00", "#43a047", "#42a5f5"];
            return (
              <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "18px 20px", boxShadow: "0 2px 10px rgba(46,125,50,0.07)", border: "1px solid #e0f2e0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                  <div>
                    <h3 style={{ margin: "0 0 5px", fontSize: 14, color: "#1b5e20", fontWeight: 700, lineHeight: 1.4 }}>{item.nama}</h3>
                    {item.ket && <span style={{ background: "#e8f5e9", color: "#2e7d32", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>{item.ket}</span>}
                  </div>
                  <span style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32)", color: "#fff", fontSize: 13, fontWeight: 700, padding: "4px 13px", borderRadius: 20, whiteSpace: "nowrap" }}>{fmt(item.total)}</span>
                </div>
                <div style={{ background: "#eee", borderRadius: 6, height: 6, marginBottom: 12, overflow: "hidden" }}>
                  <div style={{ width: `${persen}%`, height: "100%", background: barColors[i], borderRadius: 6 }} />
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {[
                    { label: "Kuantitas", value: item.kuantitas, icon: "📦" },
                    { label: "Harga Satuan", value: fmt(item.harga), icon: "🏷️" },
                    { label: "Porsi", value: `${persen}%`, icon: "📊" },
                  ].map((d, j) => (
                    <div key={j} style={{ flex: "1 1 90px", background: "#f7faf7", borderRadius: 10, padding: "8px 11px", border: "1px solid #eef5ee" }}>
                      <div style={{ fontSize: 10.5, color: "#7a8f7b", marginBottom: 2 }}>{d.icon} {d.label}</div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#2d3a2e" }}>{d.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          <div style={{ background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)", borderRadius: 14, padding: "15px 20px", border: "1px solid #c8e6c9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 14, color: "#4a5e4b", fontWeight: 600 }}>📋 Total Keseluruhan</span>
            <span style={{ fontSize: 18, fontWeight: 800, color: "#1b5e4b" }}>{fmt(grandTotal)}</span>
          </div>
        </div>
      </div>

      {/* ═══════════ MANFAAT ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <Divider label="Manfaat Program" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "17px 19px", boxShadow: "0 2px 10px rgba(46,125,50,0.07)", border: "1px solid #e0f2e0", display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", borderRadius: 12, width: 46, height: 46, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{b.icon}</div>
              <p style={{ margin: 0, fontSize: 13.5, color: "#4a5e4b", lineHeight: 1.6 }}>{b.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ SDG ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <Divider label="Dukungan SDG" />
        <div style={{ background: "#fff", borderRadius: 18, padding: 24, marginTop: 16, boxShadow: "0 2px 14px rgba(46,125,50,0.09)", border: "1px solid #e0f2e0" }}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {[
              { num: 11, color: "#f9a825", label: "Permukiman Berkelanjutan" },
              { num: 12, color: "#66bb6a", label: "Konsumsi & Produksi Bertanggung Jawab" },
              { num: 13, color: "#42a5f5", label: "Penanganan Perubahan Iklim" },
            ].map((sdg) => (
              <div key={sdg.num} style={{ display: "flex", alignItems: "center", gap: 12, background: "#f5faf5", borderRadius: 14, padding: "12px 16px", flex: "1 1 180px", border: "1px solid #e8f0e8" }}>
                <SDGIcon number={sdg.num} color={sdg.color} />
                <span style={{ fontSize: 13, color: "#4a5e4b", fontWeight: 600, lineHeight: 1.4 }}>{sdg.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════ PDF SECTION ═══════════ */}
      <PDFSection />

      {/* ═══════════ PENUTUP ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <div style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32)", borderRadius: 18, padding: 26, color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 22 }}>📝</span>
            <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>Penutup</h2>
          </div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "#c8e6c9" }}>
            Program ini bertujuan memanfaatkan sampah botol plastik menjadi plang nama desa yang ramah lingkungan dan bernilai edukatif. Diharapkan program ini dapat meningkatkan kepedulian masyarakat terhadap pengelolaan sampah serta mendukung terciptanya lingkungan desa yang bersih dan berkelanjutan.
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: 24, marginBottom: 40 }}>
          <button
            onClick={() => window.open("https://drive.google.com/drive/folders/1HaKzY2pmOjHT3Dp05V_ZbVQJNXn4ov4T", "_blank")}
            style={{ background: "#2e7d32", color: "#fff", fontSize: 15, fontWeight: 700, padding: "12px 24px", borderRadius: 8, border: "none", cursor: "pointer", boxShadow: "0 4px 12px rgba(46,125,50,0.3)", transition: "background 0.3s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#1B5E20"}
            onMouseLeave={e => e.currentTarget.style.background = "#2e7d32"}
          >
            Design Plang Bisa Diunduh di Sini
          </button>
        </div>
      </div>
      <div className="cta-buttons" style={{ textAlign: "center", marginTop: "24px" }}>
        <Link
          to="/kegiatan"
          className="btn btn-primary btn-large"
          style={{
            display: "inline-block",
            background: "#4169E1",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(46,125,50,0.3)",
            transition: "background 0.3s, transform 0.2s",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to the top
            onMouseEnter={e => e.currentTarget.style.background = "#00008B"}
            onMouseLeave={e => e.currentTarget.style.background = "#4169E1"}
        >
          <span>🏠 Kembali ke Program</span>
        </Link>
      </div>

      {/* ═══════════ FOOTER ═══════════ */}
      <div style={{ maxWidth: 680, margin: "40px auto 0", padding: "24px 18px 36px", textAlign: "center", borderTop: "1px solid #c8e6c9" }}>
        <p style={{ margin: "5px 0 0", fontSize: 11, color: "#9aaa9b", fontStyle: "italic" }}>Locally Rooted, Globally Respected</p>
      </div>
    </div>
  );
}

