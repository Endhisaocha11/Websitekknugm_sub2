import { useState } from "react";
import { Link } from "react-router-dom";

const imgHidroponik = "/Hidroponik.png";
const imgAlatBahan = "/sampah/alatbahanhidroponik.jpeg";

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.71c.32.17.65.35.94.55C9 22 12 22 15 20.5c4-2 5-7 2-11C15 7 11 6 8 8" />
    <path d="M7 21c1-3 3-5 5-7" />
  </svg>
);

export default function HidroponikPage() {
  const [lightboxImg, setLightboxImg] = useState(null);
  
  // GANTI URL_VIDEO_YOUTUBE dengan link YouTube Anda
  // Format: https://www.youtube.com/embed/VIDEO_ID?autoplay=1
  const youtubeVideoUrl = "https://www.youtube.com/embed/Z4uASCeRV60?autoplay=1";

  const alatBahan = [
    { nama: "Botol atau galon bekas", fungsi: "Wadah tanaman & nutrisi", icon: "🍾" },
    { nama: "Kain flanel/kain bekas", fungsi: "Sumbu penyalur nutrisi", icon: "🧵" },
    { nama: "Rockwool/spons cuci piring", fungsi: "Media semai", icon: "🧽" },
    { nama: "Nutrisi AB mix", fungsi: "Makanan tambahan", icon: "💧" },
    { nama: "Cocopeat/sabut kelapa (opsional)", fungsi: "Pengganti tanah", icon: "🥥" },
    { nama: "Benih sayur", fungsi: "Tanaman uji coba", icon: "🌱" },
  ];

  const sistemHidroponik = [
    {
      nama: "Sistem Sumbu (Wick)",
      desc: "Sistem paling sederhana ini merupakan sistem pasif/tidak bergerak dengan memanfaatkan daya kapilaritas sumbu untuk menyerap larutan nutrisi.",
      icon: "🧵",
      color: "#ef5350"
    },
    {
      nama: "Sistem Kultur Air (Water Culture)/Rakit Apung",
      desc: "Sistem sederhana yang bersifat aktif/bergerak dengan cara mengapungkan tanaman menggunakan styrofoam di atas permukaan larutan nutrisi, serta memasang pompa udara/aerator untuk ketersediaan oksigen.",
      icon: "🌊",
      color: "#42a5f5"
    },
    {
      nama: "Sistem Pasang Surut (Ebb and Flow/Flood and Drain)",
      desc: "Sistem dimana larutan nutrisi diberikan dengan cara menggenangi/merendam media tanam (zona akar) untuk beberapa waktu tertentu, kemudian dialirkan kembali ke bak penampungan.",
      icon: "🌀",
      color: "#26c6da"
    },
    {
      nama: "Sistem Fertigasi (Fertilizer and Drip Irrigation)",
      desc: "Sistem ini dilakukan dengan cara menyiram tanaman dengan meneteskan larutan nutrisi. Biasanya digunakan pompa dan pengontrol waktu untuk mengaturnya.",
      icon: "💧",
      color: "#66bb6a"
    },
    {
      nama: "Sistem NFT (Nutrient Film Technique)",
      desc: "Sistem dimana larutan nutrisi diberikan sangat dangkal/tipis dan mengalir terus menerus. Keuntungannya adalah tercukupinya pasokan air, oksigen dan nutrisi pada akar tanaman.",
      icon: "📏",
      color: "#9ccc65"
    },
    {
      nama: "Sistem Aeroponik",
      desc: "Sistem hidroponik yang menggunakan teknologi tinggi. Akar yang menggantung di udara dikabutkan dengan larutan nutrisi menggunakan pengaturan waktu.",
      icon: "💨",
      color: "#ab47bc"
    },
  ];

  const mediaTanam = [
    "Arang sekam", "Rock wool", "Spon/busa", "Serbuk serabut kelapa", 
    "Zeolite", "Pecahan genteng/batu bata", "Kerikil", "Serbuk serat pakis"
  ];

  const steps = [
    {
      icon: "🔧",
      title: "Persiapan Botol",
      items: [
        "Potong botol menjadi dua bagian",
        "Lubangi tutup botol/galon untuk tempat sumbu",
        "Pasang kain flanel/bekas sebagai sumbu"
      ]
    },
    {
      icon: "🌱",
      title: "Penyemaian Benih",
      items: [
        "Basahi rockwool/spons",
        "Taruh 2-3 benih per lubang",
        "Simpan di tempat gelap sampai berkecambah"
      ]
    },
    {
      icon: "🏗️",
      title: "Penyusunan/Pembuatan",
      items: [
        "Isi bagian bawah botol dengan larutan nutrisi (5ml AB mix + 1L air)",
        "Balik bagian atas botol, isi dengan rockwool yang sudah ada kecambah",
        "Tutupi dengan cocopeat sebagai pengganti tanah",
        "Pastikan sumbu menyentuh larutan nutrisi"
      ]
    },
  ];

  const kelebihan = [
    { icon: "🌍", text: "Ramah lingkungan" },
    { icon: "💧", text: "Hemat air - penggunaan air hanya 1/20 dari tanaman biasa" },
    { icon: "⚡", text: "Efisiensi tenaga dan waktu" },
    { icon: "📦", text: "Tidak membutuhkan tempat yang luas" },
    { icon: "📍", text: "Dapat ditanam dimana saja" },
    { icon: "🚀", text: "Pertumbuhan tanaman lebih cepat" },
    { icon: "✨", text: "Kualitas hasil tanaman dapat terjaga" },
    { icon: "☀️", text: "Tidak mengenal musim" },
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
        <img src={lightboxImg} alt="zoom" style={{ maxWidth: "70%", maxHeight: "85vh", borderRadius: 12, objectFit: "contain", display: "block", justifyContent: "center", margin: "0 auto" }} />
        <button
          onClick={() => setLightboxImg(null)}
          style={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,0.55)", border: "none", color: "#fff", borderRadius: "50%", width: 32, height: 32, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
        >✕</button>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "linear-gradient(160deg, #e8f5e9 0%, #f1f8e9 50%, #e0f2f1 100%)", minHeight: "100vh", color: "#2d3a2e",  paddingTop: "80px" }}>
      
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
            Hidroponik Sederhana<br /><span style={{ color: "#a5d6a7" }}>Berbasis Limbah Botol</span>
          </h1>
          <p style={{ color: "#c8e6c9", fontSize: 14, marginTop: 10, marginBottom: 0, lineHeight: 1.5 }}>Bercocok Tanam Tanpa Tanah · Ramah Lingkungan</p>
        </div>
      </div>

      {/* ═══════════ PENGERTIAN HIDROPONIK ═══════════ */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "30px 18px 0" }}>
        <div style={{ background: "#fff", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 14px rgba(46,125,50,0.09)" }}>
          {/* Gambar Hidroponik - Responsif dan Tanpa Border */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
            <img
              src={imgHidroponik}
              alt="Hidroponik"
              onClick={() => setLightboxImg(imgHidroponik)}
              style={{
                maxWidth: "45%", // Make the image smaller
                height: "auto",
                objectFit: "contain",
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
              <span style={{ fontSize: 20 }}>🌿</span>
              <h2 style={{ margin: 0, fontSize: 17, color: "#1b5e20", fontWeight: 700 }}>Apa itu Hidroponik?</h2>
            </div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "#4a5e4b" }}>
              Hidroponik berasal dari bahasa Yunani yaitu <strong style={{ color: "#2e7d32" }}>hydro</strong> yang berarti air dan <strong style={{ color: "#2e7d32" }}>ponos</strong> yang artinya daya. Hidroponik juga dikenal sebagai <em>soilless culture</em> atau budidaya tanaman tanpa tanah.
            </p>
            <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.75, color: "#4a5e4b" }}>
              Jadi hidroponik berarti budidaya tanaman yang memanfaatkan air dan tanpa menggunakan tanah sebagai media. Dengan memenuhi kebutuhan nutrisi (unsur hara), setiap tanaman dapat tumbuh dengan baik walaupun tidak menggunakan media tanah. Selain nutrisi, unsur lain yang harus diperhatikan antara lain adalah kebutuhan <strong style={{ color: "#2e7d32" }}>oksigen, air dan sinar matahari</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════ KELEBIHAN HIDROPONIK ═══════════ */}
      <div style={{ maxWidth: 680, margin: "28px auto 0", padding: "0 18px" }}>
        <Divider label="Kelebihan Hidroponik" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, marginTop: 16 }}>
          {kelebihan.map((k, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "15px 17px", boxShadow: "0 2px 10px rgba(46,125,50,0.07)", border: "1px solid #e0f2e0", display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", borderRadius: 10, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{k.icon}</div>
              <p style={{ margin: 0, fontSize: 13, color: "#4a5e4b", lineHeight: 1.5 }}>{k.text}</p>
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
            <h2 style={{ margin: 0, fontSize: 17, color: "#1b5e20", fontWeight: 700 }}>Video Kegiatan Hidroponik</h2>
          </div>
          <p style={{ margin: "0 0 16px", fontSize: 13.5, color: "#5a6b5b", lineHeight: 1.6 }}>
            Tonton video kegiatan sosialiasi hidroponik berbasis limbah botol yang telah kami lakukan di Desa Banyuurip.
          </p>
          
          {/* YouTube Video Embed - AUTOPLAY */}
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: 12, background: "#000" }}>
            <iframe
              src={youtubeVideoUrl}
              title="Kegiatan Sosialiasi Pembuatan Hidroponik"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: 12 }}
            />
          </div>
        </div>
      </div>

      {/* ═══════════ 6 SISTEM HIDROPONIK ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <Divider label="6 Dasar Sistem Hidroponik" />
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 16 }}>
          {sistemHidroponik.map((sistem, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "20px 22px", boxShadow: "0 2px 10px rgba(46,125,50,0.07)", border: "1px solid #e0f2e0" }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ background: `${sistem.color}15`, borderRadius: 12, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{sistem.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ background: sistem.color, color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 12 }}>{i + 1}</span>
                    <h3 style={{ margin: 0, fontSize: 15, color: "#1b5e20", fontWeight: 700 }}>{sistem.nama}</h3>
                  </div>
                  <p style={{ margin: 0, fontSize: 13, color: "#5a6b5b", lineHeight: 1.6 }}>{sistem.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ MEDIA TANAM ═══════════ */}
      <div style={{ maxWidth: 680, margin: "28px auto 0", padding: "0 18px" }}>
        <div style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32)", borderRadius: 18, padding: 26, color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 26 }}>🌾</span>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Media Tanam Hidroponik</h2>
          </div>
          <p style={{ margin: "0 0 14px", fontSize: 14, lineHeight: 1.75, color: "#c8e6c9" }}>
            Beberapa contoh media tanam yang dapat digunakan dalam sistem hidroponik:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {mediaTanam.map((media, i) => (
              <span key={i} style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: 12.5, fontWeight: 600, padding: "6px 14px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.2)" }}>
                {media}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════ NUTRISI HIDROPONIK ═══════════ */}
      <div style={{ maxWidth: 680, margin: "28px auto 0", padding: "0 18px" }}>
        <div style={{ background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)", borderRadius: 18, padding: 26, border: "1px solid #c8e6c9" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 26 }}>💧</span>
            <h2 style={{ margin: 0, fontSize: 18, color: "#1b5e20", fontWeight: 700 }}>Nutrisi Hidroponik</h2>
          </div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "#4a5e4b" }}>
            Larutan nutrisi terdiri dari berbagai garam pupuk yang dilarutkan ke dalam air dan digunakan sebagai sumber nutrisi bagi tanaman yang dibudidayakan secara hidroponik.
          </p>
          <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.75, color: "#4a5e4b" }}>
            Nutrisi untuk tanaman hidroponik disesuaikan dengan kebutuhan unsur hara setiap tanaman, sehingga tanaman bisa optimal pertumbuhannya. Nutrisi hidroponik biasa disebut <strong style={{ color: "#2e7d32" }}>nutrisi AB mix</strong> yang oleh formulatornya disesuaikan dengan jenis tanaman.
          </p>
        </div>
      </div>

      {/* ═══════════ ALAT & BAHAN ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px"}}>
        <Divider label="Alat & Bahan" />

        <div>
          <img
            src={imgAlatBahan}
            alt="Alat dan Bahan Pembuatan POC"    
            onClick={() => setLightboxImg(imgAlatBahan)} // Added lightbox functionality
            style={{
              width: "55%",    
              height: "auto",
              marginTop: 20,
              objectFit: "contain",
              cursor: "pointer",
              position: "center",
              textAlign: "center",
              margin: "0 auto",
              borderRadius: 12,
              display: "block",
              marginBottom: 10,
              transition: "transform 0.3s",   
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <p style={{ fontSize: 10.5, color: "#7a8f7b", textAlign: "center", margin: "0 0 16px", fontStyle: "italic" }}>
            Klik gambar untuk memperbesar
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
          <div style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32)", borderRadius: 18, padding: "20px 24px", color: "#fff" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 22 }}>🛠️</span>
              <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>Bahan yang Diperlukan</h2>
            </div>
            <p style={{ margin: 0, fontSize: 12, color: "#a5d6a7" }}>6 item bahan utama</p>
          </div>

          {alatBahan.map((item, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "17px 19px", boxShadow: "0 2px 10px rgba(46,125,50,0.07)", border: "1px solid #e0f2e0", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", borderRadius: 12, width: 46, height: 46, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{item.icon}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 4px", fontSize: 14, color: "#1b5e20", fontWeight: 700 }}>{item.nama}</h3>
                <p style={{ margin: 0, fontSize: 13, color: "#5a6b5b", lineHeight: 1.5 }}>{item.fungsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ TAHAPAN PEMBUATAN ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <Divider label="Tahapan Pembuatan" />
        <div style={{ position: "relative", marginTop: 20 }}>
          <div style={{ position: "absolute", left: 22, top: 0, bottom: 0, width: 3, background: "linear-gradient(to bottom, #2e7d32, #a5d6a7)", borderRadius: 2 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "relative", zIndex: 1 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ background: "#2e7d32", border: "3px solid #2e7d32", borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0, boxShadow: "0 2px 8px rgba(46,125,50,0.25)" }}>{step.icon}</div>
                <div style={{ background: "#fff", borderRadius: 14, padding: "16px 18px", flex: 1, boxShadow: "0 2px 10px rgba(46,125,50,0.07)", border: "1px solid #e0f2e0" }}>
                  <span style={{ background: "#2e7d32", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 10 }}>Langkah {i + 1}</span>
                  <h3 style={{ margin: "8px 0 8px", fontSize: 15, color: "#1b5e20", fontWeight: 700 }}>{step.title}</h3>
                  <ul style={{ margin: 0, paddingLeft: 20, color: "#5a6b5b" }}>
                    {step.items.map((item, j) => (
                      <li key={j} style={{ fontSize: 13, lineHeight: 1.6, marginBottom: j < step.items.length - 1 ? 6 : 0 }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════ TIPS PERAWATAN ═══════════ */}
      <div style={{ maxWidth: 680, margin: "28px auto 0", padding: "0 18px" }}>
        <div style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32)", borderRadius: 18, padding: 26, color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 26 }}>💡</span>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Tips Perawatan</h2>
          </div>
          <ul style={{ margin: 0, paddingLeft: 20, color: "#c8e6c9" }}>
            <li style={{ fontSize: 14, lineHeight: 1.75, marginBottom: 8 }}>
              Ganti larutan nutrisi setiap <strong style={{ color: "#a5d6a7" }}>7-10 hari sekali</strong> atau saat larutan berkurang drastis
            </li>
            <li style={{ fontSize: 14, lineHeight: 1.75, marginBottom: 8 }}>
              Letakkan tanaman di tempat yang mendapat <strong style={{ color: "#a5d6a7" }}>cahaya matahari cukup</strong> (minimal 6 jam/hari)
            </li>
            <li style={{ fontSize: 14, lineHeight: 1.75, marginBottom: 8 }}>
              Pastikan sumbu selalu <strong style={{ color: "#a5d6a7" }}>terendam larutan nutrisi</strong>
            </li>
            <li style={{ fontSize: 14, lineHeight: 1.75 }}>
              Kontrol pH larutan nutrisi di kisaran <strong style={{ color: "#a5d6a7" }}>5.5-6.5</strong> untuk hasil optimal
            </li>
          </ul>
        </div>
      </div>

      {/* ═══════════ PENUTUP ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <div style={{ background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)", borderRadius: 18, padding: 26, border: "1px solid #c8e6c9" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 22 }}>📝</span>
            <h2 style={{ margin: 0, fontSize: 17, color: "#1b5e20", fontWeight: 700 }}>Kesimpulan</h2>
          </div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "#4a5e4b" }}>
            Hidroponik sederhana berbasis limbah botol plastik merupakan solusi cerdas untuk bercocok tanam di lahan terbatas sekaligus mengurangi sampah plastik. Dengan metode ini, siapa saja dapat menanam sayuran segar di rumah dengan cara yang ramah lingkungan dan berkelanjutan.
          </p>
          <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.75, color: "#4a5e4b" }}>
            Mari mulai berkebun hidroponik dan berkontribusi untuk lingkungan yang lebih hijau! 🌱
          </p>
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