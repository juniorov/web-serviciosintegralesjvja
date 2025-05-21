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
                        <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.961205117418!2d-84.21656698791895!3d10.020060172644888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9db3ac74b7d%3A0x2767c19c1a5fbe02!2sParque%20Eloy%20Alfaro%20Delgado!5e0!3m2!1ses-419!2scr!4v1747869451261!5m2!1ses-419!2scr" frameBorder="0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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