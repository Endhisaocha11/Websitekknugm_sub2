import React from 'react';
import { Link } from 'react-router-dom';
import './FooterComponent.css';
import ugmLogo from "/ugmlogo.png";


const FooterComponent = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <div className="footer-logo">
                <img className="logo-img" src={ugmLogo} alt="Logo UGM" />
                <span className="logo-text">
                  KKN-PPM Universitas Gadjah Mada 2025 <br />
                  Sub-Unit 2 Desa Banyuurip
                </span>
              </div>
              <p className="footer-desc">
                Platform pengelolaan sampah terpadu untuk lingkungan yang lebih 
                bersih dan berkelanjutan.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📸</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📧</a>
              </div>
            </div>

            <div className="footer-col">
              <h3 className="footer-title">Navigasi</h3>
              <ul className="footer-links">
                <li><Link to="/#hero">Beranda</Link></li>
                <li><Link to="/#about">Tentang Kami</Link></li>
                <li><Link to="/#waste-types">Jenis Sampah</Link></li>
                <li><Link to="/#process">Alur Pengelolaan</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-title">Layanan</h3>
              <ul className="footer-links">
                <li><Link to="/bank-sampah">Bank Sampah</Link></li>
                <li><Link to="/edukasi">Edukasi</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-title">Kontak</h3>
              <ul className="footer-links">
                <li>📍 Dlingo, Yogyakarta, Indonesia</li>
                <li>🅾 @memayuningdlingo</li>
                <li>📧 memayuningdlingo2025@gmail.com</li>
                <li>📱 +62 812-3456-7890</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 KKN-PPM UGM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
};

export default FooterComponent;