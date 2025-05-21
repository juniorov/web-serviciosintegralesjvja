
import './top-bar.scss';

const TopBar = () => {
    return (
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contacto@jvjasoluciones.com">contacto@jvjasoluciones.com</a></i>
                    <i className="bi bi-phone d-flex align-items-center ms-4"><a href="https://wa.me/message/J4FHXHTWPAV2N1?text=Hola," target='_blank' rel='noopener noreferrer'><span>+506 7035 9524</span></a></i>
                </div>
                <div className="social-links d-none d-md-flex align-items-center">
                    <a href="https://www.facebook.com/jvjasoluciones" target="_blank" rel="noopener noreferrer" className="facebook" aria-label="Facebook">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://instagram.com/jvjasoluciones" target="_blank" rel="noopener noreferrer" className="instagram" aria-label="Instagram">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="linkedin" aria-label="Linkedin">
                        <i className="bi bi-linkedin d-none"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}


export default TopBar;