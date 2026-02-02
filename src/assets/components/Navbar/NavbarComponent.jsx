import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '/logo.png';
import './NavbarComponent.css'; 
import TitleLogo from '/title.png';

const NavbarComponent = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
  };

  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Programmatically close the navbar
    }
  };

  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top">
      <Container>
        {/* Logo dan Brand di Kiri */}
        <Navbar.Brand as={Link} to="/" className="brand-custom" onClick={scrollToTop}>
          <img
            src={Logo}
            className="logo-img"
            alt="Logo"
          />
          <img src={TitleLogo} alt="Urip Resik" className="title-img" />
        </Navbar.Brand>

        {/* Toggle untuk Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom" />
        
        {/* Menu Navigasi di Kanan */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom" onClick={() => { scrollToTop(); handleNavLinkClick(); }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/information" className="nav-link-custom" onClick={() => { scrollToTop(); handleNavLinkClick(); }}>
              Edukasi
            </Nav.Link>
            <Nav.Link as={Link} to="/kegiatan" className="nav-link-custom" onClick={() => { scrollToTop(); handleNavLinkClick(); }}>
              Kegiatan
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom" onClick={() => { scrollToTop(); handleNavLinkClick(); }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;