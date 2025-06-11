import './featured.scss';

const Featured = () => {
    return (
        <section id="featured-services" className="featured-services">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><i className="bx bx-user-voice"></i></div>
                            <h4 className="title"><a href="">Innovación Constante</a></h4>
                            <p className="description">Adaptamos y creamos soluciones tecnológicas de vanguardia para el crecimiento de nuestros clientes.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon"><i className='bx bxs-business'></i></div>
                            <h4 className="title"><a href="">Colaboración Estratégica</a></h4>
                            <p className="description">Trabajamos codo a codo con cada PyME, siendo su socio tecnológico confiable y cercano.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon"><i className="bx bx-tachometer"></i></div>
                            <h4 className="title"><a href="">Excelencia en el Servicio</a></h4>
                            <p className="description">Nos comprometemos a entregar soluciones de alta calidad y soporte excepcional siempre.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon"><i className="bx bx-world"></i></div>
                            <h4 className="title"><a href="">Impacto Medible</a></h4>
                            <p className="description">Enfocamos la tecnología en resultados reales que impulsan el éxito y la eficiencia de su negocio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured;