
import './footer.scss';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-newsletter d-none">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h4>Join Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <form action="" method="post">
                                <input type="email" name="email" />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Servicios Integrales <br />JV & JA<span>.</span></h3>
                            <p>
                                Palmares, Alajuela <br /><br />
                                <strong>Phone:</strong> <a href="https://wa.me/50670359524" target="_blank">+506 7035-9524</a><br />
                                <strong>Email:</strong> <a href="mailto:contacto@jvjasoluciones.com">contacto@jvjasoluciones.com</a><br />
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Productos</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://sys-human.com/" target="_blank">Sys Human</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://tuqrcr.com/" target="_blank">Tu QR CR</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://mimercaditocr.com/" target="_blank">Mi Mercadito CR</a></li>
                                <li className="d-none"><i className="bx bx-chevron-right"></i> <a href="https://sys-education.com/" target="_blank">Sys Education</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Social</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://www.facebook.com/jvjasoluciones" target="_blank">Facebook</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://instagram.com/jvjasoluciones" target="_blank">Instagram</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Soluciones Para</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Sodas y Restaurantes</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Tiendas y Mercados</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Educación</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Cualquier tipo de empresas</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-4">
                <div className="copyright">
                    &copy; Copyright <strong><span>Servicios Integrales JV & JA</span></strong>. Todos los derechos reservados
                </div>
            </div>
        </footer>
    )
}

export default Footer;