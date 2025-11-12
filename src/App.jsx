import { Routes, Route } from 'react-router-dom'
import NavbarComponent from './assets/components/NavbarComponent.jsx' 
import FooterComponents from './assets/components/FooterComponent.jsx'

import HomePage from './page/HomePage/HomePage.jsx'
import InformationPage from './page/Information/InformationPage.jsx'
import ContactPage from './page/Contact/ContactPage.jsx'

function App() {
  return (
    <div>
    <NavbarComponent />
      
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/information" Component={InformationPage} />
      <Route path="/contact" Component={ContactPage} />
    </Routes>
      
    <FooterComponents />
  </div>
  )
}

export default App
