import { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TopBar from '../TopBar/TopBar';
import './privacy-policy.scss';

const PrivacyPolicy = () => {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = 'Política de privacidad | Servicios Integrales JV & JA';

        return () => {
            document.title = previousTitle;
        };
    }, []);

    return (
        <>
            <TopBar />
            <Header />

            <main className="privacy-page">
                <section className="privacy-hero">
                    <div className="container">
                        <div className="privacy-hero-content">
                            <a className="privacy-back-link" href="/">
                                <i className="bi bi-arrow-left" aria-hidden="true"></i>
                                Volver al inicio
                            </a>
                            <p className="privacy-kicker">Transparencia y confianza</p>
                            <h1>Política de privacidad</h1>
                            <p className="privacy-intro">
                                En Servicios Integrales JV &amp; JA cuidamos la información que compartes
                                con nosotros y te explicamos, en lenguaje claro, cómo la utilizamos.
                            </p>
                            <div className="privacy-meta">
                                <span><i className="bi bi-calendar3" aria-hidden="true"></i> Última actualización: 6 de octubre de 2026</span>
                                <span><i className="bi bi-geo-alt" aria-hidden="true"></i> Aplicable a Costa Rica</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="privacy-content-section">
                    <div className="container">
                        <div className="row gy-5 gx-xl-5">
                            <aside className="col-lg-3">
                                <nav className="privacy-toc" aria-label="Contenido de la política">
                                    <p>En esta página</p>
                                    <a href="#responsable">Responsable</a>
                                    <a href="#datos">Datos que recopilamos</a>
                                    <a href="#uso">Cómo usamos los datos</a>
                                    <a href="#whatsapp">WhatsApp Business</a>
                                    <a href="#terceros">Proveedores y terceros</a>
                                    <a href="#derechos">Tus derechos</a>
                                    <a href="#contacto">Contáctanos</a>
                                </nav>
                            </aside>

                            <article className="col-lg-8 privacy-article">
                                <div className="privacy-callout">
                                    <i className="bi bi-shield-check" aria-hidden="true"></i>
                                    <p>
                                        Esta política describe el tratamiento de datos personales realizado
                                        a través de este sitio web, nuestros formularios de contacto y los
                                        canales de atención, incluido WhatsApp Business.
                                    </p>
                                </div>

                                <section id="responsable">
                                    <h2>1. Responsable del tratamiento</h2>
                                    <p>
                                        El responsable es <strong>Servicios Integrales JV &amp; JA</strong>, con
                                        domicilio en Palmares, Alajuela, Costa Rica. Para cualquier consulta
                                        relacionada con tus datos puedes escribir a{' '}
                                        <a href="mailto:contacto@jvjasoluciones.com">contacto@jvjasoluciones.com</a>
                                        {' '}o llamar al <a href="https://wa.me/50670359524" target="_blank" rel="noreferrer">+506 7035 9524</a>.
                                    </p>
                                </section>

                                <section id="datos">
                                    <h2>2. Datos que podemos recopilar</h2>
                                    <p>Dependiendo de la interacción que tengas con nosotros, podemos recibir:</p>
                                    <ul>
                                        <li>Nombre y datos de contacto, como teléfono, correo electrónico y empresa.</li>
                                        <li>Información que incluyas voluntariamente en una consulta, solicitud de cotización o conversación.</li>
                                        <li>Datos técnicos básicos de navegación, como dirección IP, dispositivo y páginas visitadas, mediante herramientas de medición y seguridad.</li>
                                        <li>Preferencias de comunicación y el historial necesario para atender tu solicitud.</li>
                                    </ul>
                                    <p>
                                        No solicitamos datos personales sensibles para prestar nuestros servicios.
                                        Te pedimos que no envíes por formularios o mensajería información sensible,
                                        documentos de identidad, contraseñas ni datos financieros que no sean necesarios.
                                    </p>
                                </section>

                                <section id="uso">
                                    <h2>3. Para qué usamos la información</h2>
                                    <p>Usamos los datos únicamente para fines relacionados con nuestra relación contigo, por ejemplo:</p>
                                    <ul>
                                        <li>Responder preguntas, solicitudes de información y cotizaciones.</li>
                                        <li>Prestar, coordinar y dar seguimiento a nuestros servicios.</li>
                                        <li>Enviar confirmaciones, recordatorios y comunicaciones de servicio que hayas solicitado.</li>
                                        <li>Mejorar el sitio, medir su funcionamiento y protegerlo contra abusos o accesos no autorizados.</li>
                                        <li>Enviar novedades, promociones o contenido comercial cuando exista una base válida para hacerlo y puedas retirar tu consentimiento.</li>
                                    </ul>
                                    <p>
                                        No vendemos ni alquilamos tus datos personales. Tampoco usamos la información
                                        de las conversaciones para crear perfiles ajenos a la atención de tu solicitud.
                                    </p>
                                </section>

                                <section id="whatsapp" className="privacy-highlight">
                                    <div className="privacy-section-heading">
                                        <span className="privacy-icon whatsapp-icon"><i className="bi bi-whatsapp" aria-hidden="true"></i></span>
                                        <h2>4. Comunicaciones por WhatsApp Business</h2>
                                    </div>
                                    <p>
                                        Si nos contactas por WhatsApp o aceptas recibir mensajes, podremos utilizar
                                        tu número y el contenido de la conversación para responderte, gestionar una
                                        solicitud y enviarte actualizaciones relacionadas con ella.
                                    </p>
                                    <p>
                                        Los mensajes se gestionan mediante WhatsApp Business, un servicio de Meta.
                                        WhatsApp y Meta pueden tratar cierta información conforme a sus propias
                                        políticas y condiciones. Puedes consultarlas directamente en{' '}
                                        <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer">la política de privacidad de WhatsApp</a>.
                                    </p>
                                    <p>
                                        Puedes dejar de recibir mensajes promocionales en cualquier momento escribiendo
                                        <strong> “BAJA”</strong> en la conversación. Los mensajes estrictamente necesarios
                                        para una solicitud o servicio activo podrían continuar mientras sean necesarios
                                        para gestionarlo.
                                    </p>
                                </section>

                                <section id="terceros">
                                    <h2>5. Proveedores y transferencias</h2>
                                    <p>
                                        Podemos apoyarnos en proveedores tecnológicos que nos ayudan con alojamiento,
                                        correo electrónico, analítica, seguridad y mensajería. Estos proveedores solo
                                        deben tratar la información según nuestras instrucciones y con medidas razonables
                                        de seguridad.
                                    </p>
                                    <p>
                                        Algunos servicios pueden operar desde otros países. Cuando esto ocurra,
                                        procuraremos utilizar proveedores confiables y aplicar las salvaguardas
                                        apropiadas conforme a la normativa aplicable.
                                    </p>
                                </section>

                                <section id="conservacion">
                                    <h2>6. Conservación y seguridad</h2>
                                    <p>
                                        Conservamos los datos durante el tiempo necesario para cumplir la finalidad
                                        para la que fueron recopilados, atender obligaciones legales, resolver disputas
                                        y mantener registros de servicio. Después los eliminamos o anonimizamos cuando
                                        ya no sean necesarios.
                                    </p>
                                    <p>
                                        Aplicamos controles administrativos y técnicos razonables para reducir el riesgo
                                        de pérdida, uso indebido, acceso no autorizado, alteración o divulgación.
                                        Ningún canal de internet es completamente infalible, por lo que también te
                                        recomendamos proteger tus cuentas y no compartir información confidencial por chat.
                                    </p>
                                </section>

                                <section id="derechos">
                                    <h2>7. Tus derechos</h2>
                                    <p>
                                        Puedes solicitar información sobre el uso de tus datos y pedir su acceso,
                                        rectificación, actualización, eliminación o limitar determinados usos, cuando
                                        corresponda. También puedes retirar un consentimiento previamente otorgado.
                                    </p>
                                    <p>
                                        Para ejercer tus derechos, envía una solicitud a{' '}
                                        <a href="mailto:contacto@jvjasoluciones.com">contacto@jvjasoluciones.com</a>
                                        {' '}indicando tu nombre, el medio de contacto y el detalle de tu solicitud.
                                        Podremos pedir información razonable para verificar tu identidad y proteger tus datos.
                                    </p>
                                </section>

                                <section id="cookies">
                                    <h2>8. Cookies y herramientas de medición</h2>
                                    <p>
                                        Este sitio puede utilizar cookies y herramientas de análisis para recordar
                                        preferencias, entender cómo se utiliza el sitio y mejorar su funcionamiento.
                                        Puedes controlar o eliminar cookies desde la configuración de tu navegador;
                                        algunas funciones podrían verse afectadas.
                                    </p>
                                </section>

                                <section id="cambios">
                                    <h2>9. Cambios a esta política</h2>
                                    <p>
                                        Podemos actualizar esta política cuando cambien nuestros servicios, canales de
                                        comunicación o la normativa aplicable. Publicaremos la versión vigente en esta
                                        página e indicaremos la fecha de actualización al inicio.
                                    </p>
                                </section>

                                <section id="contacto" className="privacy-contact-card">
                                    <span className="privacy-icon"><i className="bi bi-chat-dots" aria-hidden="true"></i></span>
                                    <div>
                                        <h2>¿Tienes una consulta?</h2>
                                        <p>Estamos disponibles para ayudarte con cualquier duda sobre el uso de tu información.</p>
                                        <a className="privacy-contact-link" href="mailto:contacto@jvjasoluciones.com">contacto@jvjasoluciones.com <i className="bi bi-arrow-up-right" aria-hidden="true"></i></a>
                                    </div>
                                </section>
                            </article>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;
