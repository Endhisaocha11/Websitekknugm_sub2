import { useState } from "react";
import { Link } from "react-router-dom";

const imgPOC = "/sampah/poc.png";
const Alatdanbahan = "/sampah/alatdanbahanpoc.jpeg";

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.71c.32.17.65.35.94.55C9 22 12 22 15 20.5c4-2 5-7 2-11C15 7 11 6 8 8" />
    <path d="M7 21c1-3 3-5 5-7" />
  </svg>
);

export default function POCPage() {
  const [lightboxImg, setLightboxImg] = useState(null);
  
  // GANTI URL_VIDEO_YOUTUBE dengan link YouTube Anda
  // Format: https://www.youtube.com/embed/VIDEO_ID?autoplay=1
  const youtubeVideoUrl = "https://www.youtube.com/embed/Z4uASCeRV60?autoplay=1";

  const sifatKarakteristik = [
    { icon: "💧", text: "Berbentuk cair sehingga mudah diaplikasikan" },
    { icon: "🌱", text: "Mengandung unsur hara makro dan mikro" },
    { icon: "⚡", text: "Cepat diserap oleh tanaman" },
    { icon: "🌍", text: "Ramah lingkungan dan ekonomis" },
    { icon: "🌾", text: "Meningkatkan kesuburan dan struktur tanah" },
    { icon: "✨", text: "Tidak berbau menyengat jika difermentasi dengan baik" },
    { icon: "🦠", text: "Mengandung mikroorganisme baik yang membantu menekan penyakit tanaman" },
    { icon: "⚗️", text: "Umumnya memiliki pH netral–sedikit asam (±6–7)" },
  ];

  const kelebihan = [
    { icon: "👍", text: "Praktis dan mudah digunakan" },
    { icon: "♻️", text: "Dapat dibuat dari limbah organik" },
    { icon: "🚀", text: "Cepat memberi respon pertumbuhan tanaman" },
    { icon: "🦠", text: "Mendukung aktivitas mikroba tanah" },
    { icon: "🏠", text: "Cocok untuk pertanian rumah tangga dan skala kecil" },
  ];

  const kekurangan = [
    { icon: "📊", text: "Kandungan nutrisi relatif rendah" },
    { icon: "💦", text: "Mudah tercuci oleh air hujan" },
    { icon: "⏰", text: "Masa simpan terbatas" },
    { icon: "🔬", text: "Populasi mikroorganisme tidak tinggi" },
    { icon: "🏭", text: "Belum optimal untuk skala industri besar" },
  ];

  const alatBahan = {
    alat: [
      { nama: "Galon bekas ukuran ±15 liter", detail: "(dalam kondisi bersih)", icon: "🪣" },
    ],
    bahan: [
      { nama: "Sampah dedaunan", detail: "Sekitar 1 kg", icon: "🍂" },
      { nama: "Molase / tetes tebu / gula pasir", detail: "Sebagai aktivator", icon: "🍯" },
      { nama: "EM4", detail: "Mikroorganisme efektif", icon: "🧪" },
      { nama: "Air bersih", detail: "(diutamakan tanpa kaporit)", icon: "💧" },
    ]
  };

  const langkahPembuatan = [
    {
      icon: "📋",
      title: "Persiapan",
      items: [
        "Menyiapkan seluruh alat dan bahan yang akan digunakan",
        "Pastikan galon dalam kondisi bersih"
      ]
    },
    {
      icon: "✂️",
      title: "Pencacahan",
      items: [
        "Mencacah sampah dedaunan menjadi ukuran lebih kecil",
        "Proses fermentasi akan berjalan lebih cepat dan merata dengan ukuran yang lebih kecil"
      ]
    },
    {
      icon: "🪣",
      title: "Pengisian Dedaunan",
      items: [
        "Memasukkan sekitar 1 kg dedaunan ke dalam galon",
        "Atau hingga kurang lebih setengah bagian galon"
      ]
    },
    {
      icon: "⚗️",
      title: "Pembuatan Aktivator",
      items: [
        "Membuat larutan aktivator dengan mencampurkan molase/tetes tebu/gula dengan EM4",
        "Tambahkan sedikit air bersih untuk melarutkan"
      ]
    },
    {
      icon: "💧",
      title: "Penambahan Larutan",
      items: [
        "Menuangkan larutan molase dan EM4 ke dalam galon yang berisi dedaunan",
        "Menambahkan air bersih hingga mencapai 2/3 bagian galon",
        "Sisakan ruang udara untuk proses fermentasi"
      ]
    },
    {
      icon: "🔒",
      title: "Penutupan",
      items: [
        "Menutup galon dengan rapat",
        "Jika memungkinkan, gunakan selang airlock sederhana dengan ujung selang tercelup air untuk membuang gas hasil fermentasi",
        "Jika tanpa selang, lakukan pengecekan setiap 2–3 hari sekali dengan membuka tutup galon selama ±2 jam untuk mengeluarkan gas, kemudian tutup kembali"
      ]
    },
    {
      icon: "⏳",
      title: "Proses Fermentasi",
      items: [
        "Proses fermentasi dilakukan selama 2 hingga 3 minggu",
        "POC yang matang ditandai dengan aroma fermentasi yang khas (tidak busuk menyengat)",
        "Warna cairan yang lebih gelap menunjukkan POC sudah matang"
      ]
    },
    {
      icon: "✅",
      title: "Penyaringan & Penggunaan",
      items: [
        "POC siap disaring dan digunakan",
        "Larutkan dengan air, perbandingan POC dengan air 1:10",
        "Atau simpan dalam wadah tertutup untuk digunakan kemudian"
      ]
    },
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
            Pupuk Organik Cair (POC)<br /><span style={{ color: "#a5d6a7" }}>dari Sampah Dedaunan</span>
          </h1>
          <p style={{ color: "#c8e6c9", fontSize: 14, marginTop: 10, marginBottom: 0, lineHeight: 1.5 }}>Pengolahan Limbah untuk Mendukung Pertanian Organik</p>
        </div>
      </div>

      {/* ═══════════ LATAR BELAKANG ═══════════ */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "30px 18px 0" }}>
        <div style={{ background: "#fff", borderRadius: 18, padding: "24px", boxShadow: "0 2px 14px rgba(46,125,50,0.09)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 20 }}>🌿</span>
            <h2 style={{ margin: 0, fontSize: 17, color: "#1b5e20", fontWeight: 700 }}>Latar Belakang</h2>
          </div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "#4a5e4b" }}>
            Limbah organik rumah tangga, khususnya sampah dedaunan, merupakan jenis limbah yang jumlahnya melimpah di lingkungan Padukuhan Banyuurip. Apabila tidak dikelola dengan baik, limbah ini dapat menimbulkan permasalahan lingkungan.
          </p>
          <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.75, color: "#4a5e4b" }}>
            Oleh karena itu, diperlukan upaya pengelolaan limbah yang bermanfaat dan berkelanjutan. Salah satu solusi yang dapat diterapkan adalah pengolahan sampah dedaunan menjadi <strong style={{ color: "#2e7d32" }}>Pupuk Organik Cair (POC)</strong>. POC dapat dimanfaatkan untuk mendukung pertanian organik, meningkatkan kesuburan tanah, serta mengurangi ketergantungan pada pupuk kimia.
          </p>
        </div>
      </div>

      {/* ═══════════ INFOGRAFIS POC ═══════════ */}
      <div style={{ maxWidth: 680, margin: "28px auto 0", padding: "0 18px" }}>
        <div style={{ background: "#fff", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 14px rgba(46,125,50,0.09)" }}>
          {/* Gambar POC - Responsif dan Tanpa Border */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
            <img
              src={imgPOC}
              alt="Infografis Pembuatan POC"
              onClick={() => setLightboxImg(imgPOC)}
              style={{
                maxWidth: "40%",
                height: "auto",
                objectFit: "contain",
                cursor: "pointer",
                transition: "transform 0.3s",
                display: "block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <p style={{ fontSize: 10.5, color: "#7a8f7b", textAlign: "center", margin: "0 0 10px", fontStyle: "italic", padding: "0 18px" }}>
            Klik gambar untuk memperbesar
          </p>
        </div>
      </div>

      {/* ═══════════ APA ITU POC ═══════════ */}
      <div style={{ maxWidth: 680, margin: "28px auto 0", padding: "0 18px" }}>
        <div style={{ background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)", borderRadius: 18, padding: 26, border: "1px solid #c8e6c9" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 26 }}>💧</span>
            <h2 style={{ margin: 0, fontSize: 18, color: "#1b5e20", fontWeight: 700 }}>Apa Itu Pupuk Organik Cair (POC)?</h2>
          </div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "#4a5e4b" }}>
            Pupuk Organik Cair (POC) adalah pupuk berbentuk cair yang dibuat dari bahan organik alami melalui proses fermentasi, seperti sisa tanaman, limbah dapur, dan kotoran hewan. POC mengandung unsur hara makro dan mikro serta zat bioaktif yang membantu pertumbuhan dan ketahanan tanaman.
          </p>
          <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.75, color: "#4a5e4b" }}>
            POC mudah diserap tanaman karena diaplikasikan langsung ke daun, batang, atau media tanam. Pupuk ini efektif digunakan pada fase awal pertumbuhan serta saat tanaman mulai berbunga atau berbuah.
          </p>
        </div>
      </div>

      {/* ═══════════ SIFAT DAN KARAKTERISTIK ═══════════ */}
      <div style={{ maxWidth: 680, margin: "28px auto 0", padding: "0 18px" }}>
        <Divider label="Sifat dan Karakteristik POC" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, marginTop: 16 }}>
          {sifatKarakteristik.map((k, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "15px 17px", boxShadow: "0 2px 10px rgba(46,125,50,0.07)", border: "1px solid #e0f2e0", display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", borderRadius: 10, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{k.icon}</div>
              <p style={{ margin: 0, fontSize: 13, color: "#4a5e4b", lineHeight: 1.5 }}>{k.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ KELEBIHAN & KEKURANGAN ═══════════ */}
      <div style={{ maxWidth: 680, margin: "28px auto 0", padding: "0 18px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
          {/* Kelebihan */}
          <div style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32)", borderRadius: 18, padding: 26, color: "#fff" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 26 }}>✅</span>
              <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Kelebihan POC</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {kelebihan.map((k, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{k.icon}</span>
                  <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "#c8e6c9" }}>{k.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kekurangan */}
          <div style={{ background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)", borderRadius: 18, padding: 26, border: "1px solid #c8e6c9" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 26 }}>⚠️</span>
              <h2 style={{ margin: 0, fontSize: 18, color: "#1b5e20", fontWeight: 700 }}>Kekurangan POC</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {kekurangan.map((k, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{k.icon}</span>
                  <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "#4a5e4b" }}>{k.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════ TUJUAN PROGRAM ═══════════ */}
      <div style={{ maxWidth: 680, margin: "28px auto 0", padding: "0 18px" }}>
        <div style={{ background: "#fff", borderRadius: 18, padding: "24px", boxShadow: "0 2px 14px rgba(46,125,50,0.09)", border: "1px solid #e0f2e0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <span style={{ fontSize: 22 }}>🎯</span>
            <h2 style={{ margin: 0, fontSize: 17, color: "#1b5e20", fontWeight: 700 }}>Tujuan Program</h2>
          </div>
          <ul style={{ margin: 0, paddingLeft: 20, color: "#4a5e4b" }}>
            <li style={{ fontSize: 14, lineHeight: 1.75, marginBottom: 8 }}>
              Mengurangi volume limbah organik dedaunan di lingkungan Padukuhan Banyuurip
            </li>
            <li style={{ fontSize: 14, lineHeight: 1.75, marginBottom: 8 }}>
              Menghasilkan Pupuk Organik Cair (POC) yang ramah lingkungan
            </li>
            <li style={{ fontSize: 14, lineHeight: 1.75, marginBottom: 8 }}>
              Mendukung praktik pertanian organik dan berkelanjutan
            </li>
            <li style={{ fontSize: 14, lineHeight: 1.75 }}>
              Meningkatkan kesadaran masyarakat tentang pemanfaatan limbah organik
            </li>
          </ul>
        </div>
      </div>

      {/* ═══════════ VIDEO ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <Divider label="Video Kegiatan" />
        <div style={{ background: "#fff", borderRadius: 18, padding: 24, marginTop: 16, boxShadow: "0 2px 14px rgba(46,125,50,0.09)", border: "1px solid #e0f2e0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 22 }}>🎥</span>
            <h2 style={{ margin: 0, fontSize: 17, color: "#1b5e20", fontWeight: 700 }}>Video Kegiatan Pembuatan POC</h2>
          </div>
          <p style={{ margin: "0 0 16px", fontSize: 13.5, color: "#5a6b5b", lineHeight: 1.6 }}>
            Tonton video kegiatan sosialisasi pembuatan Pupuk Organik Cair dari sampah dedaunan yang telah kami lakukan di Desa Banyuurip.
          </p>
          
          {/* YouTube Video Embed - AUTOPLAY */}
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: 12, background: "#000" }}>
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

      {/* ═══════════ ALAT & BAHAN ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <Divider label="Alat & Bahan" />

        <div>
          <img
            src={Alatdanbahan}
            alt="Alat dan Bahan Pembuatan POC"    
            onClick={() => setLightboxImg(Alatdanbahan)} // Added lightbox functionality
            style={{
              width: "55%",    
              height: "auto",
              objectFit: "contain",
              marginTop: 20,
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
        
        {/* Alat */}
        <div style={{ marginTop: 16 }}>
          <div style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32)", borderRadius: 18, padding: "20px 24px", color: "#fff", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 22 }}>🛠️</span>
              <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>Alat yang Diperlukan</h2>
            </div>
            <p style={{ margin: 0, fontSize: 12, color: "#a5d6a7" }}>1 item alat utama</p>
          </div>

          {alatBahan.alat.map((item, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "17px 19px", boxShadow: "0 2px 10px rgba(46,125,50,0.07)", border: "1px solid #e0f2e0", display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 12 }}>
              <div style={{ background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", borderRadius: 12, width: 46, height: 46, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{item.icon}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 4px", fontSize: 14, color: "#1b5e20", fontWeight: 700 }}>{item.nama}</h3>
                <p style={{ margin: 0, fontSize: 13, color: "#5a6b5b", lineHeight: 1.5 }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bahan */}
        <div style={{ marginTop: 20 }}>
          <div style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32)", borderRadius: 18, padding: "20px 24px", color: "#fff", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 22 }}>🧪</span>
              <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>Bahan yang Diperlukan</h2>
            </div>
            <p style={{ margin: 0, fontSize: 12, color: "#a5d6a7" }}>4 item bahan utama</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {alatBahan.bahan.map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "17px 19px", boxShadow: "0 2px 10px rgba(46,125,50,0.07)", border: "1px solid #e0f2e0", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)", borderRadius: 12, width: 46, height: 46, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{item.icon}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 4px", fontSize: 14, color: "#1b5e20", fontWeight: 700 }}>{item.nama}</h3>
                  <p style={{ margin: 0, fontSize: 13, color: "#5a6b5b", lineHeight: 1.5 }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════ LANGKAH-LANGKAH PEMBUATAN ═══════════ */}
      <div style={{ maxWidth: 680, margin: "32px auto 0", padding: "0 18px" }}>
        <Divider label="Langkah-Langkah Pembuatan" />
        <div style={{ position: "relative", marginTop: 20 }}>
          <div style={{ position: "absolute", left: 22, top: 0, bottom: 0, width: 3, background: "linear-gradient(to bottom, #2e7d32, #a5d6a7)", borderRadius: 2 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "relative", zIndex: 1 }}>
            {langkahPembuatan.map((step, i) => (
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

      {/* ═══════════ OUTPUT PROGRAM ═══════════ */}
      <div style={{ maxWidth: 680, margin: "28px auto 0", padding: "0 18px" }}>
        <div style={{ background: "linear-gradient(135deg, #1b5e20, #2e7d32)", borderRadius: 18, padding: 26, color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 26 }}>📦</span>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Output Program</h2>
          </div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "#c8e6c9" }}>
            Pupuk Organik Cair (POC) yang siap digunakan untuk tanaman pertanian dan pekarangan.
          </p>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: 16, marginTop: 14 }}>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: "#a5d6a7" }}>
              💡 <strong>Cara Penggunaan:</strong> Larutkan POC dengan air dengan perbandingan 1:10 (1 bagian POC + 10 bagian air) sebelum diaplikasikan ke tanaman.
            </p>
          </div>
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
            Program pengolahan limbah ini diharapkan mampu menjadi solusi sederhana namun efektif dalam mengelola sampah organik sekaligus mendukung pertanian organik di Padukuhan Banyuurip. Dengan memanfaatkan bahan yang mudah didapat dan alat sederhana, masyarakat dapat menghasilkan Pupuk Organik Cair secara mandiri dan berkelanjutan.
          </p>
          <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.75, color: "#4a5e4b" }}>
            Mari mulai memanfaatkan limbah dedaunan dan berkontribusi untuk lingkungan yang lebih hijau! 🌱
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 18px" }}>
      <div style={{ textAlign: "center", marginTop: 24, marginBottom: 40 }}>
        <Link
          to="/kegiatan"
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
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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