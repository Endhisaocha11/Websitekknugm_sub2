import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const programs = [
    {
      icon: "📚",
      title: "Pendidikan",
      desc: "Program pembelajaran dan literasi untuk warga"
    },
    {
      icon: "❤️",
      title: "Kesehatan",
      desc: "Edukasi kesehatan dan layanan pemeriksaan"
    },
    {
      icon: "👥",
      title: "Pemberdayaan",
      desc: "Pelatihan keterampilan dan wirausaha"
    }
  ];

  return (
    <div className="homepage">
      {/* Animated Background Elements */}
      <div className="background-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          {/* Logo UGM */}
          <div className="logo-container">
            <div className="logo">
              <span>UGM</span>
            </div>
          </div>

          <h1 className="main-title">KKN UGM 2025</h1>
          
          <div className="location">
            <span className="location-icon">📍</span>
            <p>Kelurahan Banyu Urip, Bantul</p>
          </div>

          <p className="subtitle">
            Bersama membangun desa, berbagi ilmu dan pengalaman untuk kemajuan masyarakat
          </p>

          <div className="button-container">
            <button className="btn btn-primary">
              <span>Jelajahi Program</span>
              <span className="arrow">↓</span>
            </button>
            <button className="btn btn-secondary">
              Tentang Kami
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <span>↓</span>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="programs-section">
        <div className="programs-container">
          <h2 className="section-title">Program Kami</h2>
          <p className="section-subtitle">
            Kontribusi nyata untuk masyarakat Banyu Urip
          </p>

          <div className="programs-grid">
            {programs.map((program, idx) => (
              <div key={idx} className={`program-card card-${idx + 1}`}>
                <div className="program-icon">
                  {program.icon}
                </div>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-desc">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <p className="footer-title">KKN UGM - Kelurahan Banyu Urip</p>
          <p className="footer-subtitle">Mengabdi untuk Indonesia 🇮🇩</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;