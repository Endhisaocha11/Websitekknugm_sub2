import { Routes, Route } from 'react-router-dom'
import NavbarComponent from './assets/components/Navbar/NavbarComponent.jsx' 
import FooterComponents from "./assets/components/Footer/FooterComponent.jsx";

import HomePage from './page/HomePage/HomePage.jsx'
import InformationPage from './page/Information/InformationPage.jsx'
import ContactPage from './page/Contact/ContactPage.jsx'
import BankSampah from './page/BankSampah/BankSampah.jsx'
import Kegiatan from './page/Kegiatan/Kegiatan.jsx'
import Carousel from './page/Carousel/Carousel.jsx' 

function App() {
  return (
    <div>
    <NavbarComponent />
      
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/carousel" Component={Carousel} />
      <Route path="/information" Component={InformationPage} />
      <Route path="/contact" Component={ContactPage} />
      <Route path="/bank-sampah" Component={BankSampah} />
      <Route path="/kegiatan" Component={Kegiatan} />
    </Routes>
      
    <FooterComponents />
  </div>
  )
}

export default App
