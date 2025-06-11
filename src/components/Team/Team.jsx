import './team.scss';

const Team = () => {
    return (
        <section id="team" className="team section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Nuestros Aliados</h2>
                    <h3>Aliados <span>Estratégicos</span></h3>
                    <p>Trabajamos de la mano con empresas que nos apoyan en el desarrollo de soluciones tecnológicas.</p>
                </div>

                <div className="row justify-content-center">

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center" data-aos="fade-up" data-aos-delay="100">
                        <div className="member">
                            <div className="member-img">
                                <img src="/assets/images/aliados/sca-negro.jpg" className="img-fluid sca-medina" alt="SCA Medina" />
                                <div className="social">
                                    <a href=""><i class="bi bi-globe"></i></a>
                                    <a href="https://www.facebook.com/profile.php?id=100067780363565" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                                    <a href="https://www.instagram.com/sca.medina.srl" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>SCA Medina</h4>
                                <span>Contables / Administrativos / Tributarios / Financieros / Afines.</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="member">
                            <div className="member-img">
                                <img src="/assets/images/aliados/pacifico-legal-y-financiero.jpg" className="img-fluid" alt="Pacifico Legal y Financiero" />
                                <div className="social">
                                    <a href="https://www.facebook.com/PacificoLegalyFinanciero" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                                    <a href="https://www.instagram.com/pacificolegalyfinanciero" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                                    <a href="" className='d-none'><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Pacifico Legal y Financiero </h4>
                                <span>Soluciones legales y financieras para negocios y personas.</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center d-none" data-aos="fade-up" data-aos-delay="300">
                        <div className="member">
                            <div className="member-img">
                                <img src="/assets/images/team/team-3.jpg" className="img-fluid" alt="" />
                                <div className="social">
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch d-none" data-aos="fade-up" data-aos-delay="400">
                        <div className="member">
                            <div className="member-img">
                                <img src="/assets/images/team/team-4.jpg" className="img-fluid" alt="" />
                                <div className="social">
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Amanda Jepson</h4>
                                <span>Accountant</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Team;