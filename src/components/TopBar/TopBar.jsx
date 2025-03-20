
import './top-bar.scss';

const TopBar = () => {
    return (
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contacto@jvjasoluciones.com">contacto@jvjasoluciones.com</a></i>
                    <i className="bi bi-phone d-flex align-items-center ms-4"><span>+506 7035 9524</span></i>
                </div>
                <div className="social-links d-none d-md-flex align-items-center">
                    <a href="https://www.facebook.com/jvjasoluciones" target="_blank" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="https://instagram.com/jvjasoluciones" target="_blank" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin d-none"></i></a>
                </div>
            </div>
        </section>
    )
}


export default TopBar;