import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./KegiatanPage.css";

/* ───────────────────────────────────────────
   DATA KEGIATAN
─────────────────────────────────────────── */
const kegiatanData = [
  {
    id: 1,
    image: "/src/assets/img/sampah/desainplang2.jpg",
    icon: "🪧",
    title: "Desain Plang",
    desc: "Pembuatan dan pemasangan plang informasi pengelolaan sampah untuk meningkatkan kesadaran masyarakat di lingkungan sekitar",
    color: "#10b981",
    link: "/desainplang",
  },
  {
    id: 2,
    image: "/src/assets/Hidroponik.png",
    icon: "🌱",
    title: "Hidroponik",
    desc: "Pemanfaatan sistem hidroponik sebagai solusi pertanian berkelanjutan dengan memanfaatkan air dan nutrisi secara efisien",
    color: "#3b82f6",
    link: "/hidroponik",
  },
  {
    id: 3,
    image: "/src/assets/img/sampah/poc.png",
    icon: "🧪",
    title: "Pengelolaan POC",
    desc: "Pengolahan sampah organik menjadi Pupuk Organik Cair (POC) yang bermanfaat untuk kesuburan tanaman",
    color: "#f59e0b",
    link: "/pengelolaanpoc",
  },
  {
    id: 4,
    image: "/src/assets/img/sampah/PenguranganPlastik.png",
    icon: "♻️",
    title: "Pengurangan Plastik",
    desc: "Kampanye dan aksi nyata pengurangan penggunaan plastik sekali pakai untuk lingkungan yang lebih bersih",
    color: "#8b5cf6",
    link: "/penguranganplastik",
  },
  {
    id: 5,
    image: "/src/assets/data-sampah.jpg",
    icon: "📊",
    title: "Data Pengeluaran Sampah",
    desc: "Monitoring dan pencatatan data pengeluaran sampah untuk evaluasi dan peningkatan sistem pengelolaan sampah",
    color: "#ef4444",
    link: "/datapengeluaransampah",
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
    <section id="hero" className="kegiatan-hero-section">
      <div className={`kegiatan-hero-content ${visible ? "visible" : ""}`}>
        <div className="kegiatan-hero-badge">
          <span>🌍 Program & Kegiatan</span>
        </div>

        <h1 className="kegiatan-hero-title">
          Aksi Nyata untuk<br />
          <span className="gradient-text">Lingkungan Berkelanjutan</span>
        </h1>

        <p className="kegiatan-hero-subtitle">
          Berbagai program dan kegiatan yang kami lakukan untuk mewujudkan
          lingkungan yang lebih bersih, sehat, dan berkelanjutan melalui
          pengelolaan sampah yang tepat dan inovatif.
        </p>
      </div>
    </section>
  );
};

// ── Kegiatan Cards Section ──
const KegiatanSection = () => {
  const [ref, inView] = useInView();

  return (
    <section
      id="kegiatan"
      className={`kegiatan-section reveal ${inView ? "visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-badge">✨ Kegiatan Kami</div>
          <h2 className="section-title">Program Pengelolaan Sampah Terpadu</h2>
          <p className="section-desc">
            Eksplorasi berbagai kegiatan dan program yang telah kami
            implementasikan untuk menciptakan dampak positif bagi lingkungan
          </p>
        </div>

        <div className="kegiatan-grid">
          {kegiatanData.map((kegiatan, idx) => (
            <div
              key={kegiatan.id}
              className="kegiatan-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="kegiatan-card-image">
                <div
                  className="image-overlay"
                  style={{ background: `linear-gradient(135deg, ${kegiatan.color}dd, ${kegiatan.color}aa)` }}
                >
                  <span className="kegiatan-icon">{kegiatan.icon}</span>
                </div>
                <img
                  src={kegiatan.image}
                  alt={kegiatan.title}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.background = `linear-gradient(135deg, ${kegiatan.color}, ${kegiatan.color}dd)`;
                  }}
                />
              </div>

              <div className="kegiatan-card-body">
                <h3 className="kegiatan-title">{kegiatan.title}</h3>
                <p className="kegiatan-desc">{kegiatan.desc}</p>

                <Link
                  to={kegiatan.link}
                  className="kegiatan-btn"
                  style={{
                    background: `linear-gradient(135deg, ${kegiatan.color}, ${kegiatan.color}dd)`,
                  }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to the top
                >
                  <span>Lihat Detail</span>
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
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
      className={`cta-section reveal ${inView ? "visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="cta-content">
          <div className="cta-icon">🌱</div>
          <h2 className="cta-title">
            Mari Bersama Wujudkan Lingkungan Berkelanjutan
          </h2>
          <p className="cta-desc">
            Setiap langkah kecil yang kita ambil hari ini akan membawa dampak
            besar untuk masa depan. Bergabunglah dengan kami dalam misi
            menjaga kelestarian lingkungan.
          </p>
          <div className="cta-buttons">
            <Link
              to="/"
              className="btn btn-secondary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to the top
            >
              <span>🏠 Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───────────────────────────────────────────
   MAIN PAGE
─────────────────────────────────────────── */
const KegiatanPage = () => (
  <div className="kegiatan-page">
    {/* Animated background blobs */}
    <div className="background-container">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
    </div>

    {/* Page Sections */}
    <HeroSection />
    <KegiatanSection />
    <CTASection />
  </div>
);

export default KegiatanPage;