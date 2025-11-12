import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Hubungi Kami 💬</h1>
        <p>
          Punya pertanyaan, saran, atau ingin berkolaborasi dengan tim{" "}
          <strong>KKN UGM Sub Unit 2 2025</strong>?  
          Silakan kirim pesan melalui form di bawah ini atau hubungi kontak resmi kami.
        </p>
      </div>

      {/* Form Kontak */}
      <div className="contact-form-container">
        <form className="contact-form">
          <label>Nama Lengkap</label>
          <input type="text" placeholder="Masukkan nama kamu" required />

          <label>Alamat Email</label>
          <input type="email" placeholder="nama@email.com" required />

          <label>Pesan</label>
          <textarea rows="5" placeholder="Tulis pesanmu di sini..." required></textarea>

          <button type="submit">Kirim Pesan</button>
        </form>
      </div>

      {/* Info Kontak */}
      <div className="contact-info">
        <h2>Kontak Resmi</h2>
        <p>📍 Desa Banyu Urip, Kecamatan ..., Kabupaten ...</p>
        <p>📞 +62 812-3456-7890 (Koordinator Lapangan)</p>
        <p>
          📧{" "}
          <a href="mailto:kknsubunit2ugm2025@gmail.com">
            kknsubunit2ugm2025@gmail.com
          </a>
        </p>

        <div className="social-links">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
