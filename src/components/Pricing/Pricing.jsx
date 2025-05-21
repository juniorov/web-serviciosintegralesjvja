import './pricing.scss';

const Pricing = () => {
    return (
        <section id="pricing" className="pricing">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Productos</h2>
                    <h3>Mira nuestros <span>Productos</span></h3>
                    <p>Tenemos los productos que necesitas para tu negocio, y si no lo tienes, lo creamos.</p>
                </div>

                <div className="row">

                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="box">
                            <h3>Sys Human</h3>
                            <ul>
                                <li>Gestión integral de empleados</li>
                                <li>Control de nómina avanzado</li>
                                <li>Control de ausencias</li>
                                <li>Control de vacaciones</li>
                                <li>Control de permisos</li>
                                <li>Documentación y notificaciones</li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="https://sys-human.com/" target="_blank" className="btn-buy">Visitar</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                        <div className="box featured">
                            <h3>Tu QR CR</h3>
                            <ul>
                                <li>Genera el código QR</li>
                                <li>Sube tus archivos</li>
                                <li>Descarga y comparte</li>
                                <li>Escaneos ilimitados</li>
                                <li>Estadísticas mensuales de los escaneos</li>
                                <li>Información disponible online 24/7</li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="https://tuqrcr.com/" target="_blank" className="btn-buy">Visitar</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                        <div className="box">
                            <h3>Mi Mercadito CR</h3>
                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                                <li>Pharetra massa</li>
                                <li>Massa ultricies mi</li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="https://mimercaditocr.com/" target="_blank" className="btn-buy">Visitar</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                        <div className="box">
                            <span className="advanced d-none">Advanced</span>
                            <h3>Sys Education</h3>
                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                                <li>Pharetra massa</li>
                                <li>Massa ultricies mi</li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="#" className="btn-buy">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;