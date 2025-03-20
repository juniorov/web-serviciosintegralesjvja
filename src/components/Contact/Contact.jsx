import './contact.scss';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Contacto</h2>
                    <h3><span>Contáctenos</span></h3>
                    <p>Contanos sobre tu proyecto</p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-6">
                        <div className="info-box mb-4">
                            <i className="bx bx-map"></i>
                            <h3>Dirección</h3>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="info-box  mb-4">
                            <i className="bx bx-envelope"></i>
                            <h3>Email</h3>
                            <p>contacto@jvjasoluciones.com</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="info-box  mb-4">
                            <i className="bx bx-phone-call"></i>
                            <h3>Llamanos</h3>
                            <p>+506 7035 9524</p>
                        </div>
                    </div>

                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-6 ">
                        <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
                    </div>

                    <div className="col-lg-6">
                        <form action="forms/contact.php" method="post" className="php-email-form">
                            <div className="row">
                                <div className="col form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" required />
                                </div>
                                <div className="col form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" required/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Tu mensaje ha sido enviado. Gracias!</div>
                            </div>
                            <div className="text-center"><button type="submit">Enviar</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;