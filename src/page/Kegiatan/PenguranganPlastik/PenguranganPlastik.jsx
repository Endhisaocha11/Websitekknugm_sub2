import { useState } from "react";
import { Link } from "react-router-dom";

const imgPenguranganSampah = "/sampah/PenguranganPlastik.png";
const pdfByeByePlastics = "/byebyeplastics.pdf";

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.71c.32.17.65.35.94.55C9 22 12 22 15 20.5c4-2 5-7 2-11C15 7 11 6 8 8" />
    <path d="M7 21c1-3 3-5 5-7" />
  </svg>
);

export default function PengurangansampahPage() {
  const [lightboxImg, setLightboxImg] = useState(null);

  const youtubeVideoUrl = "https://www.youtube.com/embed/GbPf6r32uwQ?si=0QLv2dzs9UpBJKNS?autoplay=1";

  const dampakPlastik = [
    { icon: "🌊", text: "Mencemari sungai dan laut", color: "#42a5f5" },
    { icon: "🐢", text: "Membahayakan satwa liar", color: "#66bb6a" },
    { icon: "⏰", text: "Bertahan ratusan tahun di alam", color: "#ffa726" },
    { icon: "🏞️", text: "Merusak keindahan lingkungan", color: "#26c6da" },
    { icon: "🌡️", text: "Berkontribusi pada perubahan iklim", color: "#ef5350" },
    { icon: "💧", text: "Menyumbat saluran air", color: "#42a5f5" },
  ];

  const langkahSederhana = [
    {
      icon: "🛍️",
      title: "Bawa Tas Belanja Sendiri",
      desc: "Gunakan tas kain atau tas belanja yang dapat digunakan berulang kali",
      tips: "Simpan tas lipat di tas atau mobil agar tidak lupa"
    },
    {
      icon: "💧",
      title: "Botol Minum Isi Ulang",
      desc: "Gunakan tumbler atau botol minum yang dapat diisi ulang",
      tips: "Pilih botol stainless steel atau kaca yang tahan lama"
    },
    {
      icon: "🥤",
      title: "Tolak Sedotan Plastik",
      desc: "Katakan tidak pada sedotan plastik atau bawa sedotan sendiri",
      tips: "Sedotan stainless atau bambu adalah alternatif yang baik"
    },
    {
      icon: "🍱",
      title: "Wadah Makanan Sendiri",
      desc: "Bawa tempat makan dan alat makan sendiri saat beli makanan",
      tips: "Banyak merchant memberikan diskon untuk yang membawa wadah sendiri"
    },
    {
      icon: "♻️",
      title: "Pilah Sampah",
      desc: "Pisahkan sampah plastik untuk didaur ulang",
      tips: "Cuci dan keringkan plastik sebelum dimasukkan ke tempat daur ulang"
    },
    {
      icon: "🌱",
      title: "Dukung Produk Ramah Lingkungan",
      desc: "Pilih produk dengan kemasan minimal atau ramah lingkungan",
      tips: "Cari produk berlabel 'eco-friendly' atau 'biodegradable'"
    },
  ];

  const contohPlastikSekaliPakai = [
    "Kantong plastik belanja",
    "Sedotan plastik",
    "Botol air mineral",
    "Gelas plastik",
    "Sendok & garpu plastik",
    "Bungkus makanan",
    "Styrofoam",
    "Plastik pembungkus"
  ];

  const faktaMengejutkan = [
    { angka: "8 juta ton", desc: "Plastik masuk ke lautan setiap tahun" },
    { angka: "450 tahun", desc: "Waktu yang dibutuhkan plastik untuk terurai" },
    { angka: "1 juta", desc: "Burung laut mati setiap tahun karena plastik" },
    { angka: "5 trilun", desc: "Kantong plastik digunakan setiap tahun di dunia" },
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
        <img src={lightboxImg} alt="zoom" style={{ maxWidth: "80%", maxHeight: "85vh", borderRadius: 12, objectFit: "contain", display: "block", margin: "0 auto", justifyContent: "center" }} />
        <button
          onClick={() => setLightboxImg(null)}
          style={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,0.55)", border: "none", color: "#fff", borderRadius: "50%", width: 32, height: 32, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
        >✕</button>
      </div>
    </div>
  );

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
            Kurangi Plastik Sekali Pakai<br /><span style={{ color: "#a5d6a7" }}>Langkah Sederhana untuk Bumi</span>
          </h1>
          <p style={{ color: "#c8e6c9", fontSize: 14, marginTop: 10, marginBottom: 0, lineHeight: 1.5 }}>Plastik Berkurang · Bumi Senang 💚</p>
        </div>
      </div>

      {/* ═══════════ APA ITU PLASTIK SEKALI PAKAI ═══════════ */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "30px 18px 0" }}>
        <div style={{ background: "#fff", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 14px rgba(46,125,50,0.09)" }}>
          {/* Gambar Pengurangan Sampah */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
            <img
              src={imgPenguranganSampah}
              alt="Pengurangan Sampah Plastik"
              onClick={() => setLightboxImg(imgPenguranganSampah)}
              style={{
                maxWidth: "50%",
                height: "auto",
                objectFit: "contain",
                marginTop: 10,
                cursor: "pointer",
                transition: "transform 0.3s",
                display: "block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <p style={{ fontSize: 10.5, color: "#7a8f7b", textAlign: "center", margin: "0 0 10px", fontStyle: "italic", padding: "0 18px" }}>
            Klik gambar untuk memperbesar
          </p>

          {/* Teks Pengertian */}
          <div style={{ padding: "12px 24px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 20 }}>🛍️</span>
              <h2 style={{ margin: 0, fontSize: 17, color: "#1b5e20", fontWeight: 700 }}>Apa itu Plastik Sekali Pakai?</h2>
            </div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "#4a5e4b" }}>
              Plastik sekali pakai adalah plastik yang <strong style={{ color: "#2e7d32" }}>digunakan hanya satu kali</strong> dan setelah itu langsung menjadi sampah. Plastik jenis ini sangat praktis, tetapi dampaknya terhadap lingkungan sangat besar.
            </p>
            <div style={{ marginTop: 16 }}>
              <p style={{ margin: "0 0 8px", fontSize: 13.5, fontWeight: 700, color: "#2e7d32" }}>Contoh plastik sekali pakai:</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {contohPlastikSekaliPakai.map((item, i) => (
                  <span key={i} style={{ background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", color: "#1b5e20", fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 16, border: "1px solid #a5d6a7" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════ FAKTA MENGEJUTKAN ═══════════ */}
      <div style={{ maxWidth: 680, margin: "28px auto 0", padding: "0 18px" }}>
        <Divider label="Fakta Mengejutkan" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginTop: 16 }}>
          {faktaMengejutkan.map((fakta, i) => (
            <div key={i} style={{ background: "linear-gradient(135deg, #fff, #f1f8e9)", borderRadius: 14, padding: "18px 16px", boxShadow: "0 2px 10px rgba(46,125,50,0.09)", border: "2px solid #c8e6c9", textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#d32f2f", marginBottom: 6, lineHeight: 1 }}>{fakta.angka}</div>
              <p style={{ margin: 0, fontSize: 12, color: "#4a5e4b", lineHeight: 1.4 }}>{fakta.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ MENGAPA HARUS DIKURANGI ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <Divider label="Mengapa Harus Dikurangi?" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, marginTop: 16 }}>
          {dampakPlastik.map((dampak, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "15px 17px", boxShadow: "0 2px 10px rgba(46,125,50,0.07)", border: "1px solid #e0f2e0", display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ background: `${dampak.color}15`, borderRadius: 10, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{dampak.icon}</div>
              <p style={{ margin: 0, fontSize: 13, color: "#4a5e4b", lineHeight: 1.5 }}>{dampak.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ DAMPAK NYATA ═══════════ */}
      <div style={{ maxWidth: 680, margin: "28px auto 0", padding: "0 18px" }}>
        <div style={{ background: "linear-gradient(135deg, #d32f2f, #e53935)", borderRadius: 18, padding: 26, color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 26 }}>⚠️</span>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Dampak Nyata di Sekitar Kita</h2>
          </div>
          <p style={{ margin: "0 0 14px", fontSize: 14, lineHeight: 1.75, color: "#ffcdd2" }}>
            Sampah plastik yang tidak terkelola dengan baik dapat:
          </p>
          <ul style={{ margin: 0, paddingLeft: 20, color: "#ffcdd2" }}>
            <li style={{ fontSize: 14, lineHeight: 1.75, marginBottom: 6 }}>Mengotori sungai, lahan, dan lingkungan permukiman</li>
            <li style={{ fontSize: 14, lineHeight: 1.75, marginBottom: 6 }}>Menurunkan kualitas hidup masyarakat</li>
            <li style={{ fontSize: 14, lineHeight: 1.75, marginBottom: 6 }}>Merusak kawasan wisata dan keindahan alam</li>
            <li style={{ fontSize: 14, lineHeight: 1.75 }}>Mengganggu kesehatan dan ekosistem</li>
          </ul>
        </div>
      </div>

      {/* ═══════════ LANGKAH SEDERHANA ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <Divider label="Apa yang Bisa Kita Lakukan?" />
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 16 }}>
          {langkahSederhana.map((langkah, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "20px 22px", boxShadow: "0 2px 10px rgba(46,125,50,0.07)", border: "1px solid #e0f2e0" }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", borderRadius: 12, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{langkah.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ background: "#2e7d32", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 12 }}>{i + 1}</span>
                    <h3 style={{ margin: 0, fontSize: 15, color: "#1b5e20", fontWeight: 700 }}>{langkah.title}</h3>
                  </div>
                  <p style={{ margin: "0 0 6px", fontSize: 13, color: "#5a6b5b", lineHeight: 1.6 }}>{langkah.desc}</p>
                  <p style={{ margin: 0, fontSize: 12, color: "#7a8f7b", fontStyle: "italic", lineHeight: 1.5 }}>💡 {langkah.tips}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ VIDEO ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <Divider label="Video Kegiatan" />
        <div style={{ background: "#fff", borderRadius: 18, padding: 24, marginTop: 16, boxShadow: "0 2px 14px rgba(46,125,50,0.09)", border: "1px solid #e0f2e0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 22 }}>🎥</span>
            <h2 style={{ margin: 0, fontSize: 17, color: "#1b5e20", fontWeight: 700 }}>Video Kegiatan Pengurangan Plastik Sekali Pakai</h2>
          </div>
          <p style={{ margin: "0 0 16px", fontSize: 13.5, color: "#5a6b5b", lineHeight: 1.6 }}>
            Tonton video kegiatan sosialisasi pengurangan penggunaan plastik sekali pakai bersama siswa-siswi di SD Banyuurip.
          </p>
          {/* YouTube Video Embed - AUTOPLAY */}
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: 12, background: "#000",marginBottom: 6 }}>
            <iframe
              src={youtubeVideoUrl}
              title="Tutorial POC"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: 12 }}
            />
          </div>
        </div>
      </div>

      {/* ═══════════ MITRA BYE BYE PLASTIC BAGS ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <div style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32)", borderRadius: 18, padding: 26, color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 26 }}>🤝</span>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Mitra Kami</h2>
          </div>
          <p style={{ margin: "0 0 16px", fontSize: 14, lineHeight: 1.75, color: "#c8e6c9" }}>
            Program ini didukung oleh <strong style={{ color: "#fff" }}>Bye Bye Plastic Bags</strong>, sebuah gerakan global yang dimulai oleh anak-anak muda untuk mengurangi penggunaan plastik sekali pakai.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="https://byebyeplasticbags.org/" target="_blank" rel="noopener noreferrer" style={{ color: "#a5d6a7", textDecoration: "none", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16 }}>🌐</span>
              <span>byebyeplasticbags.org</span>
            </a>
            <a href="https://www.instagram.com/byebyeplasticbagsjogja" target="_blank" rel="noopener noreferrer" style={{ color: "#a5d6a7", textDecoration: "none", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16 }}>📸</span>
              <span>@byebyeplasticbagsjogja</span>
            </a>
            <a href={pdfByeByePlastics} target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "10px 16px", borderRadius: 12, textDecoration: "none", fontSize: 13.5, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8, marginTop: 6, border: "1px solid rgba(255,255,255,0.25)", width: "fit-content" }}>
              <span style={{ fontSize: 18 }}>📄</span>
              <span>Download Materi Lengkap (PDF)</span>
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════ CALL TO ACTION ═══════════ */}
      <div style={{ maxWidth: 680, margin: "28px auto 0", padding: "0 18px" }}>
        <div style={{ background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)", borderRadius: 18, padding: 26, border: "2px solid #66bb6a", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💚</div>
          <h2 style={{ margin: "0 0 10px", fontSize: 20, color: "#1b5e20", fontWeight: 700 }}>Pilihan Kita Menentukan Masa Depan Bumi</h2>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: "#4a5e4b" }}>
            Jika sampah plastik berkurang, maka lingkungan lebih bersih dan bumi lebih sehat!
          </p>
          <div style={{ marginTop: 16, padding: "12px 20px", background: "#fff", borderRadius: 12, border: "2px dashed #66bb6a" }}>
            <p style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#2e7d32" }}>
              Mulai dari Kita, Mulai dari Sekarang ✨
            </p>
          </div>
        </div>
      </div>
      
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 18px" }}>
      <div style={{ textAlign: "center", marginTop: 24, marginBottom: 40 }}>
        <Link
            to="/kegiatan"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            display: "inline-block",
            background: "#4169E1",
            color: "#fff",
            fontSize: 15,
            fontWeight: 700,
            padding: "12px 24px",
            borderRadius: 8,
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(65,105,225,0.3)",
            transition: "background 0.3s",
            border: "none",
            cursor: "pointer"
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#00008B"}
          onMouseLeave={e => e.currentTarget.style.background = "#4169E1"}
        >
          🏠 Kembali ke Program
        </Link>
      </div>
    </div>


      {/* ═══════════ FOOTER ═══════════ */}
      <div style={{ maxWidth: 680, margin: "40px auto 0", padding: "24px 18px 36px", textAlign: "center", borderTop: "1px solid #c8e6c9" }}>
        <p style={{ margin: "5px 0 0", fontSize: 11, color: "#9aaa9b", fontStyle: "italic" }}>Locally Rooted, Globally Respected</p>
      </div>
    </div>
  );
}