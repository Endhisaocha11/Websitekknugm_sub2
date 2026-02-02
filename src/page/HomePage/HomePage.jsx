import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Carousel from "../Carousel/Carousel.jsx";

/* ───────────────────────────────────────────
   DATA
─────────────────────────────────────────── */
const wasteTypes = [
  {
    icon: "🌿",
    title: "Sampah Organik",
    desc: "Sisa makanan, sayuran, buah-buahan, dan daun kering yang mudah terurai menjadi kompos",
    color: "#10b981",
  },
  {
    icon: "♻️",
    title: "Sampah Anorganik",
    desc: "Plastik, kaca, logam, dan kertas yang dapat didaur ulang menjadi produk baru",
    color: "#3b82f6",
  },
  {
    icon: "⚠️",
    title: "Sampah B3",
    desc: "Baterai, lampu neon, obat kadaluarsa yang memerlukan penanganan khusus",
    color: "#ef4444",
  },
  {
    icon: "🗑️",
    title: "Sampah Residu",
    desc: "Sampah yang tidak dapat didaur ulang dan harus dibuang ke TPA dengan aman",
    color: "#6b7280",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Pemilahan Sampah",
    desc: "Pemilahan dilakukan langsung di rumah tangga berdasarkan jenis sampah",
    icon: "🏠",
  },
  {
    number: "2",
    title: "Pengumpulan Terjadwal",
    desc: "Sampah dikumpulkan sesuai jadwal untuk mencegah penumpukan",
    icon: "🚛",
  },
  {
    number: "3",
    title: "Pengolahan",
    desc: "Sampah organik menjadi kompos, anorganik didaur ulang",
    icon: "⚙️",
  },
  {
    number: "4",
    title: "Pemanfaatan Kembali",
    desc: "Hasil olahan dimanfaatkan atau dijual melalui bank sampah",
    icon: "💰",
  },
  {
    number: "5",
    title: "Pengurangan ke TPA",
    desc: "Mengurangi volume sampah yang dibuang ke TPA secara signifikan",
    icon: "📉",
  },
];

const benefits = [
  {
    icon: "🌍",
    title: "Lingkungan Bersih",
    desc: "Lingkungan menjadi lebih bersih, rapi, dan sehat",
  },
  {
    icon: "💧",
    title: "Kurangi Pencemaran",
    desc: "Mengurangi pencemaran tanah, air, dan udara",
  },
  {
    icon: "♻️",
    title: "Tingkatkan Daur Ulang",
    desc: "Meningkatkan tingkat daur ulang dan pemanfaatan sampah",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Partisipasi Masyarakat",
    desc: "Meningkatkan kesadaran dan partisipasi masyarakat",
  },
  {
    icon: "💰",
    title: "Ekonomi Hijau",
    desc: "Menciptakan peluang ekonomi melalui bank sampah",
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
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
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

// ── Hero ──
const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <section id="hero" className="hero-section">
      <div className={`hero-content ${visible ? "visible" : ""}`}>
        <div className="hero-badge">
          <span>🌱 Sustainable Waste Management</span>
        </div>

        <h1 className="hero-title">
          Kelola Sampah, Jaga Lingkungan,<br />
          <span className="gradient-text">Bangun Masa Depan</span>
        </h1>

        <p className="hero-subtitle">
          Pengelolaan sampah bukan sekadar kewajiban, tetapi langkah nyata untuk
          menjaga keberlangsungan hidup dan kualitas lingkungan. Melalui pendekatan
          edukatif, sistem pemilahan yang tepat, dan teknologi ramah lingkungan.
        </p>

        <div className="hero-buttons">
          <Link
            to="/kegiatan"
            className="btn btn-primary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to the top
          >
            <span>♻️ Mulai Kelola Sampah</span>
          </Link>
          <a
            href="#about"
            className="btn btn-secondary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to the top
          >
            <span>📘 Pelajari Lebih Lanjut</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// ── About ──
const AboutSection = () => {
  const [ref, inView] = useInView();
  return (
    <section id="about" className={`about-section reveal ${inView ? "visible" : ""}`} ref={ref}>
      <div className="container">
        <div className="about-content">
          <div className="about-left">
            <div className="hero-badge">🌱 Tentang Kami</div>
            <h2 className="section-title">
              Mengapa Pengelolaan Sampah Itu Penting?
            </h2>
            <p className="section-desc">
              Sampah yang tidak dikelola dengan baik dapat menimbulkan berbagai
              permasalahan serius, seperti pencemaran tanah dan air, penyumbatan
              saluran drainase yang menyebabkan banjir, serta meningkatnya risiko penyakit.
            </p>
            <p className="section-desc">
              Website ini hadir sebagai platform pengelolaan sampah terpadu yang bertujuan
              untuk meningkatkan kesadaran masyarakat sekaligus memberikan solusi nyata
              yang mudah diterapkan dalam kehidupan sehari-hari.
            </p>
          </div>

          <div className="about-right">
            {[
              { icon: "📚", title: "Edukasi Berkelanjutan", text: "Penyediaan informasi dan panduan praktis pengelolaan sampah" },
              { icon: "🗂️", title: "Sistem Pemilahan", text: "Membantu memahami cara memilah sampah dengan tepat" },
              { icon: "♻️", title: "Daur Ulang", text: "Mengubah sampah menjadi produk bernilai ekonomi" },
              { icon: "💻", title: "Teknologi Digital", text: "Monitoring dan evaluasi pengelolaan sampah modern" },
            ].map((f, i) => (
              <div className="feature-card" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
                <span className="feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Waste Types ──
const WasteTypesSection = () => {
  const [ref, inView] = useInView();
  return (
    <section id="waste-types" className={`waste-types-section reveal ${inView ? "visible" : ""}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="hero-badge">🗂️ Jenis Sampah</div>
          <h2 className="section-title">Kenali Sampah, Kelola dengan Tepat</h2>
          <p className="section-desc">
            Pemahaman terhadap jenis sampah merupakan langkah awal dalam pengelolaan yang efektif
          </p>
        </div>

        <div className="waste-types-grid">
          {wasteTypes.map((waste, idx) => (
            <div
              key={idx}
              className="waste-card"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="waste-card-header" style={{ background: waste.color }}>
                <span className="waste-icon">{waste.icon}</span>
              </div>
              <div className="waste-card-body">
                <h3 className="waste-title">{waste.title}</h3>
                <p className="waste-desc">{waste.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Process Timeline ──
const ProcessSection = () => {
  const [ref, inView] = useInView();
  return (
    <section id="process" className={`process-section reveal ${inView ? "visible" : ""}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="hero-badge">🔄 Alur Pengelolaan</div>
          <h2 className="section-title">Dari Rumah ke Lingkungan yang Lebih Bersih</h2>
          <p className="section-desc">
            Pengelolaan sampah dilakukan secara sistematis melalui beberapa tahapan
          </p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, idx) => (
            <div key={idx} className="timeline-item" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="timeline-icon">
                <span className="step-number">{step.number}</span>
                <span className="step-emoji">{step.icon}</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-desc">{step.desc}</p>
              </div>
              {idx < processSteps.length - 1 && <div className="timeline-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Benefits ──
const BenefitsSection = () => {
  const [ref, inView] = useInView();
  return (
    <section id="benefits" className={`benefits-section reveal ${inView ? "visible" : ""}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="hero-badge">📊 Dampak Positif</div>
          <h2 className="section-title">Manfaat yang Dirasakan Bersama</h2>
          <p className="section-desc">
            Implementasi pengelolaan sampah yang baik memberikan berbagai manfaat
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="benefit-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── PDF Booklet ──
const PDFSection = () => {
  const [ref, inView] = useInView(0.1);
  return (
    <section id="booklet" className={`pdf-section reveal ${inView ? "visible" : ""}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="hero-badge">📄 Booklet Informasi</div>
          <h2 className="section-title">Panduan Lengkap Pengelolaan Sampah</h2>
          <p className="section-desc">
            Unduh atau baca langsung booklet resmi yang berisi panduan praktis dan edukasi pengelolaan sampah.
          </p>
        </div>

        <div className="pdf-wrapper">
          <div className="pdf-frame-container">
            <iframe
              src="/bookletsampah.pdf" // Ensure the correct file path
              type="application/pdf"
              className="pdf-iframe"
              title="Booklet Pengelolaan Sampah"
              allowFullScreen
            />
          </div>

          <div className="pdf-actions">
            <a href="/bookletsampah.pdf" download="BookletPengelolaanSampah.pdf" className="btn btn-primary btn-large">
              <span>⬇️ Unduh PDF</span>
            </a>
            <a href="/bookletsampah.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <span>🔗 Buka di Tab Baru</span>
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
const HomePage = () => (
  <div className="homepage">
    {/* Animated background blobs */}
    <div className="background-container">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
    </div>

    {/* Carousel */}
    <Carousel />

    {/* Page Sections */}
    <HeroSection />
    <AboutSection />
    <WasteTypesSection />
    <ProcessSection />
    <BenefitsSection />
    <PDFSection />
  </div>
);

export default HomePage;