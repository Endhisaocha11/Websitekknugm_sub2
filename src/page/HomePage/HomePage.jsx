import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Carousel from "../Carousel/Carousel.jsx";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const wasteTypes = [
    {
      icon: "🌿",
      title: "Sampah Organik",
      desc: "Sisa makanan, sayuran, buah-buahan, dan daun kering yang mudah terurai menjadi kompos",
      color: "#10b981"
    },
    {
      icon: "♻️",
      title: "Sampah Anorganik",
      desc: "Plastik, kaca, logam, dan kertas yang dapat didaur ulang menjadi produk baru",
      color: "#3b82f6"
    },
    {
      icon: "⚠️",
      title: "Sampah B3",
      desc: "Baterai, lampu neon, obat kadaluarsa yang memerlukan penanganan khusus",
      color: "#ef4444"
    },
    {
      icon: "🗑️",
      title: "Sampah Residu",
      desc: "Sampah yang tidak dapat didaur ulang dan harus dibuang ke TPA dengan aman",
      color: "#6b7280"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Pemilahan Sampah",
      desc: "Pemilahan dilakukan langsung di rumah tangga berdasarkan jenis sampah",
      icon: "🏠"
    },
    {
      number: "2",
      title: "Pengumpulan Terjadwal",
      desc: "Sampah dikumpulkan sesuai jadwal untuk mencegah penumpukan",
      icon: "🚛"
    },
    {
      number: "3",
      title: "Pengolahan",
      desc: "Sampah organik menjadi kompos, anorganik didaur ulang",
      icon: "⚙️"
    },
    {
      number: "4",
      title: "Pemanfaatan Kembali",
      desc: "Hasil olahan dimanfaatkan atau dijual melalui bank sampah",
      icon: "💰"
    },
    {
      number: "5",
      title: "Pengurangan ke TPA",
      desc: "Mengurangi volume sampah yang dibuang ke TPA secara signifikan",
      icon: "📉"
    }
  ];

  const benefits = [
    {
      icon: "🌍",
      title: "Lingkungan Bersih",
      desc: "Lingkungan menjadi lebih bersih, rapi, dan sehat"
    },
    {
      icon: "💧",
      title: "Kurangi Pencemaran",
      desc: "Mengurangi pencemaran tanah, air, dan udara"
    },
    {
      icon: "♻️",
      title: "Tingkatkan Daur Ulang",
      desc: "Meningkatkan tingkat daur ulang dan pemanfaatan sampah"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Partisipasi Masyarakat",
      desc: "Meningkatkan kesadaran dan partisipasi masyarakat"
    },
    {
      icon: "💰",
      title: "Ekonomi Hijau",
      desc: "Menciptakan peluang ekonomi melalui bank sampah"
    }
  ];

  const articles = [
    {
      title: "Cara Memilah Sampah yang Benar di Rumah",
      image: "🏡",
      date: "25 Des 2025"
    },
    {
      title: "Manfaat Bank Sampah bagi Masyarakat",
      image: "🏦",
      date: "24 Des 2025"
    },
    {
      title: "Tips Mengurangi Penggunaan Plastik",
      image: "🌱",
      date: "23 Des 2025"
    },
    {
      title: "Inovasi Teknologi Pengolahan Sampah",
      image: "💡",
      date: "22 Des 2025"
    }
  ];

  return (
    <div className="homepage">
      <div> 
        <Carousel />
      </div>
      {/* Animated Background */}
      <div className="background-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-badge">
            <span>🌱 Sustainable Waste Management</span>
          </div>
          
          <h1 className="hero-title">
            Kelola Sampah, Jaga Lingkungan,<br />
            <span className="gradient-text">Bangun Masa Depan</span>
          </h1>
          
          <p className="hero-subtitle">
            Pengelolaan sampah bukan sekadar kewajiban, tetapi langkah nyata untuk menjaga 
            keberlangsungan hidup dan kualitas lingkungan. Melalui pendekatan edukatif, 
            sistem pemilahan yang tepat, dan teknologi ramah lingkungan.
          </p>

          <div className="hero-buttons">
            <Link to="/mulai" className="btn btn-primary">
              <span>♻️ Mulai Kelola Sampah</span>
              <span className="btn-arrow">→</span>
            </Link>
            <a href="#about" className="btn btn-secondary">
              <span>📘 Pelajari Lebih Lanjut</span>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">75%</div>
              <div className="stat-label">Sampah Terolah</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Keluarga Aktif</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2.5T</div>
              <div className="stat-label">Sampah Berkurang</div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>↓</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-left">
              <div className="section-badge">🌱 Tentang Kami</div>
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
              <div className="feature-card">
                <span className="feature-icon">📚</span>
                <h3>Edukasi Berkelanjutan</h3>
                <p>Penyediaan informasi dan panduan praktis pengelolaan sampah</p>
              </div>
              <div className="feature-card">
                <span className="feature-icon">🗂️</span>
                <h3>Sistem Pemilahan</h3>
                <p>Membantu memahami cara memilah sampah dengan tepat</p>
              </div>
              <div className="feature-card">
                <span className="feature-icon">♻️</span>
                <h3>Daur Ulang</h3>
                <p>Mengubah sampah menjadi produk bernilai ekonomi</p>
              </div>
              <div className="feature-card">
                <span className="feature-icon">💻</span>
                <h3>Teknologi Digital</h3>
                <p>Monitoring dan evaluasi pengelolaan sampah modern</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waste Types Section */}
      <section id="waste-types" className="waste-types-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">🗂️ Jenis Sampah</div>
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
                <div className="waste-card-footer">
                  <button className="learn-more-btn">
                    Pelajari <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">🔄 Alur Pengelolaan</div>
            <h2 className="section-title">Dari Rumah ke Lingkungan yang Lebih Bersih</h2>
            <p className="section-desc">
              Pengelolaan sampah dilakukan secara sistematis melalui beberapa tahapan
            </p>
          </div>

          <div className="process-timeline">
            {processSteps.map((step, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-icon">
                  <span className="step-number">{step.number}</span>
                  <span className="step-emoji">{step.icon}</span>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{step.title}</h3>
                  <p className="timeline-desc">{step.desc}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="timeline-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">📊 Dampak Positif</div>
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

      {/* Articles Section */}
      <section id="articles" className="articles-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">📰 Artikel & Edukasi</div>
            <h2 className="section-title">Informasi & Tips Lingkungan</h2>
            <p className="section-desc">
              Berbagai konten edukatif untuk meningkatkan pemahaman masyarakat
            </p>
          </div>

          <div className="articles-grid">
            {articles.map((article, idx) => (
              <div 
                key={idx} 
                className="article-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="article-image">
                  <span className="article-emoji">{article.image}</span>
                </div>
                <div className="article-content">
                  <div className="article-date">{article.date}</div>
                  <h3 className="article-title">{article.title}</h3>
                  <a href="#" className="article-link">
                    Baca Selengkapnya <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="articles-cta">
            <button className="btn btn-secondary">
              Lihat Semua Artikel <span>→</span>
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;