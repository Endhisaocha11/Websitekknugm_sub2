import React from "react";
import "./BankSampah.css";

const BankSampah = () => {
  return (
    <div className="bank-sampah">
      <h1>Bank Sampah Desa Banyu Urip</h1>
      <p>
        Desa <strong>Banyu Urip</strong> menawarkan pengalaman wisata alam dan budaya yang mempesona.
        Dikelilingi oleh hamparan sawah hijau dan suasana pedesaan yang asri, tempat ini cocok untuk melepas penat.
      </p>

      <div className="spot-container">
        <div className="spot">
          <img src="https://source.unsplash.com/400x250/?rice-field,indonesia" alt="Sawah" />
          <h3>Wisata Alam Sawah</h3>
          <p>Menikmati pemandangan sawah dan udara segar khas pedesaan.</p>
        </div>

        <div className="spot">
          <img src="https://source.unsplash.com/400x250/?village,culture" alt="Budaya Lokal" />
          <h3>Kegiatan Budaya</h3>
          <p>Mengenal tradisi dan kerajinan lokal masyarakat Banyu Urip.</p>
        </div>

        <div className="spot">
          <img src="https://source.unsplash.com/400x250/?river,forest" alt="Sungai" />
          <h3>Wisata Sungai</h3>
          <p>Bermain air dan menikmati kesegaran sungai alami.</p>
        </div>
      </div>

      <div className="info">
        <p>📍 <strong>Lokasi:</strong> Desa Banyu Urip, Kecamatan ..., Kabupaten ...</p>
        <p>⏰ <strong>Jam Buka:</strong> Setiap hari, 07.00 – 17.00 WIB</p>
      </div>
    </div>
  );
};

export default BankSampah;
