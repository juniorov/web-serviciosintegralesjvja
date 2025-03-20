import './about.scss';

const About = () => {
    return (
        <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Acerca de Nosotros</h2>
                    <h3>Find Out More <span>About Us</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                        <img src="/assets/images/about.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                        <h3>Misión</h3>
                        <p className="fst-italic">
                            En <strong>SERVICIOS INTEGRALES JV & JA S.R.L.</strong>, nos comprometemos a ofrecer soluciones integrales e innovadoras en diseño gráfico, desarrollo de software y creación de páginas web, impulsando el crecimiento de nuestros clientes a través de la tecnología, la creatividad y el servicio personalizado. Además, diversificamos nuestras operaciones en los sectores de agricultura, turismo, comercio exterior y transporte, generando valor sostenible y contribuyendo al desarrollo económico y social de nuestras comunidades.
                        </p>

                        <h3 className='mt-5'>Visión</h3>
                        <p className="fst-italic">
                            Ser una empresa líder a nivel nacional e internacional en el diseño gráfico, desarrollo de software y páginas web, reconocida por nuestra calidad, responsabilidad y compromiso con la innovación. Aspiramos a expandir nuestras áreas de negocio en agricultura, turismo, exportación e importación, y transporte, consolidándonos como un grupo empresarial versátil, confiable y competitivo.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;