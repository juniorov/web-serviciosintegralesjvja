import './about.scss';

const About = () => {
    return (
        <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Acerca de Nosotros</h2>
                    <h3>Conoce sobre <span>Nosotros</span></h3>
                    <p>Conoce sobre nosotros, nuestra misión, visión y valores.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                        <img src="/assets/images/about.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                        <h3>Misión</h3>
                        <p className="fst-italic">
                            En <strong>SERVICIOS INTEGRALES JV & JA S.R.L.</strong>, nos especializamos en ofrecer soluciones tecnológicas innovadoras y de alta calidad. Desarrollamos software a la medida, páginas web funcionales y atractivas, y brindamos servicios de diseño gráfico y asesoría profesional, orientados a potenciar el crecimiento y la eficiencia de nuestros clientes. Nuestro compromiso es crear herramientas que se adapten a sus necesidades, generando valor y confianza a través de la tecnología.
                        </p>

                        <h3 className='mt-5'>Visión</h3>
                        <p className="fst-italic">
                            Ser reconocidos como una empresa líder en el desarrollo de soluciones tecnológicas, destacándonos por la calidad de nuestros servicios, la atención personalizada y la innovación en el diseño gráfico, el desarrollo de software a la medida, las páginas web y las asesorías especializadas. Aspiramos a ser el aliado estratégico de las empresas que buscan crecer y transformarse digitalmente.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;