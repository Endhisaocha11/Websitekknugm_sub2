import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./InformationPage.css";

/* ───────────────────────────────────────────
   DATA INFORMASI
─────────────────────────────────────────── */

// Data untuk galeri gambar
const galleryImages = [
  {
    id: 1,
    src: "/sampah/skemamanajemensampah.png",
    title: "Skema Manajemen Sampah",
    desc: "Alur pengelolaan sampah dari pemilahan hingga pemrosesan akhir",
  },
  {
    id: 2,
    src: "/sampah/sampahorganik.png",
    title: "Sampah Organik (Hijau)",
    desc: "Sampah alami seperti sisa makanan dan daun yang mudah terurai",
  },
  {
    id: 3,
    src: "/sampah/sampahnonorganik.png",
    title: "Sampah Nonorganik",
    desc: "Sampah anorganik seperti plastik dan logam yang sulit terurai",
  },
  {
    id: 4,
    src: "/sampah/berapalamasampahterurai.png",
    title: "Waktu Sampah Terurai",
    desc: "Perkiraan waktu penguraian berbagai jenis sampah di alam",
  },
  {
    id: 5,
    src: "/sampah/sampahresidu.png",
    title: "Sampah Residu",
    desc: "Jenis sampah yang tidak dapat didaur ulang maupun dikomposkan",
  },
  {
    id: 6,
    src: "/sampah/sampahb3.png",
    title: "Sampah B3",
    desc: "Sampah berbahaya dan beracun yang memerlukan penanganan khusus",
  },
  {
    id: 7,
    src: "/sampah/sampahcair.png",
    title: "Limbah Cair",
    desc: "Limbah berbentuk cair yang dapat mencemari tanah dan air",
  },
];


// Data jenis sampah yang dikelola
const jenisKelola = [
  {
    icon: "🏠",
    title: "Sampah Rumah Tangga",
    desc: "Berasal dari kegiatan sehari-hari dalam rumah tangga, tidak termasuk tinja dan sampah plastik.",
  },
  {
    icon: "🏢",
    title: "Sampah Sejenis Rumah Tangga",
    desc: "Berasal dari kawasan komersial, industri, kawasan khusus, fasilitas sosial, fasilitas umum, dan/atau fasilitas lainnya.",
  },
  {
    icon: "⚠️",
    title: "Sampah Spesifik",
    desc: "Sampah yang karena sifat, konsentrasi, dan/atau volumenya memerlukan pengelolaan khusus seperti sampah B3, puing bangunan, dan sampah akibat bencana.",
  },
];

// Data sumber sampah
const sumberSampah = [
  { icon: "🏠", title: "Rumah Tangga", desc: "Sampah organik dan anorganik dari aktivitas rumah tangga" },
  { icon: "🏪", title: "Komersial", desc: "Dari pertokoan, restoran, pasar, perkantoran, hotel" },
  { icon: "🏫", title: "Institusi", desc: "Dari sekolah, rumah sakit, pusat pemerintahan" },
  { icon: "🏭", title: "Industri", desc: "Dari proses produksi industri" },
  { icon: "🌳", title: "Fasilitas Umum", desc: "Dari taman, pantai, tempat rekreasi" },
  { icon: "🏗️", title: "Konstruksi", desc: "Sisa pembuatan gedung, perbaikan, pembongkaran" },
  { icon: "💧", title: "Pengolahan Air", desc: "Dari pengelolaan air buangan" },
  { icon: "🌾", title: "Pertanian", desc: "Sisa pertanian yang tidak dapat dimanfaatkan" },
];

// Data dampak sampah
const dampakSampah = [
  {
    icon: "🏥",
    title: "Kesehatan",
    color: "#ef4444",
    points: [
      "Penyakit diare, kolera, tifus menyebar cepat",
      "Penyakit jamur kulit",
      "Penyakit melalui rantai makanan (cacing pita)",
      "Keracunan dari sampah beracun (kontaminasi merkuri)",
    ],
  },
  {
    icon: "🌍",
    title: "Lingkungan",
    color: "#10b981",
    points: [
      "Pencemaran air dari lindi sampah",
      "Kematian organisme dan ikan",
      "Perubahan ekosistem perairan",
      "Gas metana yang dapat meledak",
    ],
  },
  {
    icon: "💰",
    title: "Sosial & Ekonomi",
    color: "#f59e0b",
    points: [
      "Lingkungan tidak menyenangkan (bau dan pemandangan buruk)",
      "Dampak negatif pada pariwisata",
      "Biaya kesehatan meningkat",
      "Banjir dan kerusakan infrastruktur",
    ],
  },
];

// Data sistem pengelolaan
const sistemPengelolaan = [
  {
    icon: "📉",
    title: "Pengurangan Sampah",
    desc: "Pembatasan, guna-ulang, dan daur-ulang sampah",
    color: "#10b981",
  },
  {
    icon: "🗂️",
    title: "Pemilahan",
    desc: "Pengelompokan sampah sesuai jenis dan sifat",
    color: "#3b82f6",
  },
  {
    icon: "🚛",
    title: "Pengumpulan",
    desc: "Pengambilan dari sumber ke tempat penampungan",
    color: "#8b5cf6",
  },
  {
    icon: "🚚",
    title: "Pengangkutan",
    desc: "Membawa sampah ke tempat pemrosesan akhir",
    color: "#f59e0b",
  },
  {
    icon: "⚙️",
    title: "Pengolahan",
    desc: "Mengubah karakteristik dan komposisi sampah",
    color: "#ec4899",
  },
  {
    icon: "♻️",
    title: "Pemrosesan Akhir",
    desc: "Pengembalian residu ke lingkungan secara aman",
    color: "#06b6d4",
  },
];

/* ───────────────────────────────────────────
   CUSTOM HOOK – Intersection Observer
─────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* ───────────────────────────────────────────
   SUB-COMPONENTS
─────────────────────────────────────────── */

// ── Hero Section ──
const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="hero" className="info-hero-section">
      <div className={`info-hero-content ${visible ? "visible" : ""}`}>
        <div className="info-hero-badge">
          <span>📚 Pusat Informasi</span>
        </div>

        <h1 className="info-hero-title">
          Panduan Lengkap<br />
          <span className="gradient-text">Pengelolaan Sampah</span>
        </h1>

        <p className="info-hero-subtitle">
          Memahami definisi, jenis, dampak, dan sistem pengelolaan sampah yang
          tepat untuk menciptakan lingkungan yang bersih dan berkelanjutan
          berdasarkan regulasi dan standar nasional.
        </p>
      </div>
    </section>
  );
};

// ── Definisi Sampah ──
const DefinisiSection = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="definisi"
      className={`definisi-section reveal ${inView ? "visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-badge">📖 Definisi</div>
          <h2 className="section-title">Apa Itu Sampah?</h2>
        </div>

        <div className="definition-grid">
          <div className="definition-card">
            <div className="def-icon">🌍</div>
            <h3>WHO (World Health Organization)</h3>
            <p>
              Sampah merupakan suatu materi yang tidak digunakan, tidak terpakai,
              tidak disenangi, atau sesuatu yang dibuang yang berasal dari
              kegiatan manusia.
            </p>
          </div>

          <div className="definition-card">
            <div className="def-icon">📜</div>
            <h3>Perda DIY No. 3 Tahun 2013</h3>
            <p>
              Sampah adalah sisa kegiatan sehari-hari manusia dan/atau proses
              alam yang berbentuk padat.
            </p>
          </div>

          <div className="definition-card">
            <div className="def-icon">⚖️</div>
            <h3>UU No. 18 Tahun 2008</h3>
            <p>
              Sampah adalah sisa kegiatan sehari-hari manusia atau proses alam
              yang berbentuk padat atau semipadat berupa zat organik atau
              anorganik yang dapat terurai atau tidak dapat terurai yang dianggap
              sudah tidak berguna lagi dan dibuang ke lingkungan.
            </p>
          </div>
        </div>

        <div className="conclusion-box">
          <h3>Kesimpulan</h3>
          <p>
            Sampah merupakan limbah hasil olahan manusia baik dalam bentuk zat
            organik dan non organik yang sudah tidak dapat digunakan lagi dan
            penanganannya harus sesuai dengan sifat karakter sampah tersebut
            sehingga tidak membahayakan lingkungan maupun kesehatan masyarakat.
          </p>
        </div>
      </div>
    </section>
  );
};

// ── Jenis Sampah yang Dikelola ──
const JenisKelolaSection = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="jenis-kelola"
      className={`jenis-section reveal ${inView ? "visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-badge">🗂️ Klasifikasi</div>
          <h2 className="section-title">Jenis-Jenis Sampah yang Dikelola</h2>
          <p className="section-desc">
            Berdasarkan UU RI No. 18 Tahun 2008 tentang Pengelolaan Sampah
          </p>
        </div>

        <div className="jenis-kelola-grid">
          {jenisKelola.map((item, idx) => (
            <div
              key={idx}
              className="jenis-card"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="jenis-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Sumber Sampah ──
const SumberSection = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="sumber"
      className={`sumber-section reveal ${inView ? "visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-badge">📍 Sumber</div>
          <h2 className="section-title">Dari Mana Sampah Berasal?</h2>
        </div>

        <div className="sumber-grid">
          {sumberSampah.map((item, idx) => (
            <div
              key={idx}
              className="sumber-card"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <span className="sumber-icon">{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Dampak Sampah ──
const DampakSection = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="dampak"
      className={`dampak-section reveal ${inView ? "visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-badge">⚠️ Dampak</div>
          <h2 className="section-title">
            Dampak Sampah yang Tidak Dikelola
          </h2>
          <p className="section-desc">
            Sampah yang tidak dikelola dengan baik menimbulkan berbagai dampak
            negatif
          </p>
        </div>

        <div className="dampak-grid">
          {dampakSampah.map((item, idx) => (
            <div
              key={idx}
              className="dampak-card"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div
                className="dampak-header"
                style={{ background: item.color }}
              >
                <span className="dampak-icon">{item.icon}</span>
                <h3>{item.title}</h3>
              </div>
              <ul className="dampak-list">
                {item.points.map((point, i) => (
                  <li key={i}>
                    <span className="bullet">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Sistem Pengelolaan ──
const SistemSection = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="sistem"
      className={`sistem-section reveal ${inView ? "visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-badge">⚙️ Sistem</div>
          <h2 className="section-title">Sistem Pengelolaan Sampah</h2>
          <p className="section-desc">
            Proses pengelolaan sampah menurut UU No. 18 Tahun 2008
          </p>
        </div>

        <div className="sistem-grid">
          {sistemPengelolaan.map((item, idx) => (
            <div
              key={idx}
              className="sistem-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div
                className="sistem-number"
                style={{ background: item.color }}
              >
                {idx + 1}
              </div>
              <div className="sistem-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="permasalahan-box">
          <h3>⚠️ Permasalahan Teknis Operasional</h3>
          <div className="masalah-grid">
            <div className="masalah-item">
              <span>🔧</span>
              <p>Kapasitas peralatan belum memadai</p>
            </div>
            <div className="masalah-item">
              <span>🛠️</span>
              <p>Pemeliharaan alat kurang baik</p>
            </div>
            <div className="masalah-item">
              <span>👷</span>
              <p>Lemahnya tenaga pelaksana</p>
            </div>
            <div className="masalah-item">
              <span>📋</span>
              <p>Metode operasional terbatas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Image Gallery with Slider ──
const GallerySection = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="gallery"
      className={`gallery-section reveal ${inView ? "visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-badge">🖼️ Galeri</div>
          <h2 className="section-title">Dokumentasi Pengelolaan Sampah</h2>
          <p className="section-desc">
            Lihat dokumentasi visual kegiatan pengelolaan sampah
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-card">
              <a href={image.src} download={image.title} title={`Download ${image.title}`}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="gallery-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #10b981, #3b82f6); color: white; font-size: 4rem;">
                        📸
                      </div>
                    `;
                  }}
                />
              </a>
              <h3 className="gallery-title">{image.title}</h3>
              <p className="gallery-desc">{image.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── CTA Section ──
const CTASection = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="cta"
      className={`info-cta-section reveal ${inView ? "visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="cta-content">
          <div className="cta-icon">♻️</div>
          <h2 className="cta-title">
            Mulai Terapkan Pengelolaan Sampah yang Benar
          </h2>
          <p className="cta-desc">
            Dengan pemahaman yang tepat, kita semua dapat berkontribusi untuk
            lingkungan yang lebih bersih dan sehat. Mari mulai dari diri sendiri!
          </p>
          <div className="cta-buttons">
            <Link
              to="/kegiatan"
              className="btn btn-info"
            >
              🌱 Lihat Program Kami
            </Link>
            <Link
              to="/"
              className="btn btn-secondary"
            >
              🏠 Kembali ke Beranda
            </Link>
            <a
              href="https://drive.google.com/drive/folders/1ta_yElZhQrg95ph8gF_JZlysUzbZ1VE4?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link"
            >
              📂 Lihat Sumber Artikel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───────────────────────────────────────────
   MAIN PAGE
─────────────────────────────────────────── */
const InformationPage = () => {
  return (
    <div className="information-page">
      {/* Animated background blobs */}
      <div className="background-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Page Sections */}
      <HeroSection />
      <DefinisiSection />
      <JenisKelolaSection />
      <SumberSection />
      <DampakSection />
      <SistemSection />
      <GallerySection />
      <CTASection />
    </div>
  );
};

export default InformationPage;