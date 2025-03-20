import './services.scss';

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Servicios</h2>
                    <h3>Ver nuestros <span>Servicios</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-code bx-tada"></i></div>
                            <h4><a href="">Software a la medida</a></h4>
                            <p>Desarrollamos software a la medida basado en las necesidades de tu empresa.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bxl-html5 bx-tada"></i></div>
                            <h4><a href="">Diseño y desarrollo de páginas web</a></h4>
                            <p>Desarrollamos páginas web para promocionar su empresa o productos.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-cart-download bx-tada"></i></div>
                            <h4><a href="">Tiendas virtuales (e-commerce)</a></h4>
                            <p>Venda sus productos en línea, links de pago, integraciones con diferentes bancos (BAC, BN, Banco Promerica, Greenpay, etc)</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-support bx-tada"></i></div>
                            <h4><a href="">Gestión y soporte de sitios web</a></h4>
                            <p>Le ayudamos con el mantenimiento de su sitio web, actualizaciones, optimizaciones y soporte técnico.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-server bx-tada"></i></div>
                            <h4><a href="">Hosting y dominios</a></h4>
                            <p>Le ayudamos a buscar el mejor hosting, adaptado a su necesidad y presupuesto.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-arch bx-tada"></i></div>
                            <h4><a href="">Divera don</a></h4>
                            <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services;