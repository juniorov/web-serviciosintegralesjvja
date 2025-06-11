import './contact.scss';

const Contact = () => {
    return (
        <section id="contact" className="contact section-bg">
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
                            <p>Palmares, Alaejuela</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="info-box  mb-4">
                            <i className="bx bx-envelope"></i>
                            <h3>Email</h3>
                            <p><a href="mailto:contacto@jvjasoluciones.com">contacto@jvjasoluciones.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="info-box  mb-4">
                            <i className="bx bx-phone-call"></i>
                            <h3>Llamanos</h3>
                            <p><a href="https://wa.me/50670359524" target="_blank">+506 7035-9524</a></p>
                        </div>
                    </div>

                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-6 ">
                        <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744.3163438785248!2d-84.4330509927726!3d10.05597949131564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa05ab607c33e67%3A0xf18fb4d648c6bc41!2sParque%20Sim%C3%B3n%20Ruiz%20Elizondo!5e0!3m2!1ses-419!2scr!4v1749658231560!5m2!1ses-419!2scr" frameBorder="0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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