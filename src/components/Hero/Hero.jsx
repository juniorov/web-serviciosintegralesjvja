import GLightbox from 'glightbox';

import './hero.scss';

const Hero = () => {
    setTimeout(() => {
        GLightbox({
            selector: '.glightbox'
        });
    }, 500);

    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container" data-aos="zoom-out" data-aos-delay="100">
                <h1>Diseño y Tecnología que <span>Transforman tu Negocio</span></h1>
                <h2>Desarrollo web, diseño gráfico y software para potenciar tu negocio. <br /> Innovación y soluciones integrales para el crecimiento de tu empresa.</h2>
                <div className="d-flex">
                    <a href="#contact" className="btn-get-started scrollto">Empecemos</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;