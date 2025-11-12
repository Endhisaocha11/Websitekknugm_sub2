import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="mt-auto bg-dark text-white pt-4 pb-4">
            <div className="container">
                <div className="row">
                    {/* Información de la empresa */}
                    <div className="col-md-3 mb-3">
                        <h5>Sobre Nosotros</h5>
                        <p>Somos un sitio dedicado a ofrecerte los mejores productos con envíos a todo el país.</p>
                    </div>

                    {/* Enlaces rápidos */}
                    <div className="col-md-3 mb-3">
                        <h5>Enlaces Rápidos</h5>
                        <ul className="list-unstyled">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <i className="bi bi-house" /> Inicio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <i className="bi bi-info-circle" /> Nosotros
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <i className="bi bi-envelope" /> Contacto
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <i className="bi bi-shield-lock" /> Políticas
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Información de contacto */}
                    <div className="col-md-3 mb-3">
                        <h5>Contacto</h5>
                        <ul className="list-unstyled">
                            <li>
                                <i className="bi bi-geo-alt-fill" /> Av. Siempre Viva 742, Springfield
                            </li>
                            <li>
                                <i className="bi bi-telephone-fill" /> +54 9 11 1234-5678
                            </li>
                            <li>
                                <i className="bi bi-envelope-fill" /> soporte@Ecommerce.com
                            </li>
                        </ul>
                    </div>

                    {/* Redes Sociales */}
                    <div className="col-md-3 mb-3">
                        <h5>Síguenos</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/tu_pagina" className="text-white">
                                    <i className="bi bi-facebook fs-4" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://twitter.com/tu_cuenta" className="text-white">
                                    <i className="bi bi-twitter fs-4" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/tu_cuenta" className="text-white">
                                    <i className="bi bi-instagram fs-4" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/company/tu_empresa" className="text-white">
                                    <i className="bi bi-linkedin fs-4" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="bg-light" />

                {/* Derechos de autor */}
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="mb-0">&copy; 2025 Ecommerce. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;