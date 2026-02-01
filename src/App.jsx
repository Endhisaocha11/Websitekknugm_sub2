import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './assets/components/Navbar/NavbarComponent.jsx';
import FooterComponents from './assets/components/Footer/FooterComponent.jsx';

import HomePage from './page/HomePage/HomePage.jsx';
import InformationPage from './page/Information/InformationPage.jsx';
import ContactPage from './page/Contact/ContactPage.jsx';
import Kegiatan from './page/Kegiatan/KegiatanPage.jsx';
import Carousel from './page/Carousel/Carousel.jsx';
import DesainPlang from './page/Kegiatan/DesainPlang/DesainPlang.jsx';
import Hidroponik from './page/Kegiatan/Hidroponik/Hidroponik.jsx';
import PengelolaanPOC from './page/Kegiatan/PengelolaanPupukCair/PengelolaanPupukCair.jsx';
import PenguranganPlastik from './page/Kegiatan/PenguranganPlastik/PenguranganPlastik.jsx';
import DataPengeluaranSampah from './page/Kegiatan/DataPengeluaranSampah/DataPengeluaranSampah/DataPengeluaranSampah.jsx'; // Ensure this path is correct

function App() {
  return (
    <div>
      <NavbarComponent />
      
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/carousel" Component={Carousel} />
        <Route path="/information" Component={InformationPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/kegiatan" Component={Kegiatan} />
        <Route path="/desainplang" Component={DesainPlang} />
        <Route path="/hidroponik" Component={Hidroponik} />
        <Route path="/pengelolaanpoc" Component={PengelolaanPOC} />
        <Route path="/penguranganplastik" Component={PenguranganPlastik} />
        <Route path="/datapengeluaransampah" Component={DataPengeluaranSampah} />
      </Routes>
      
      <FooterComponents />
    </div>
  );
}

export default App;
