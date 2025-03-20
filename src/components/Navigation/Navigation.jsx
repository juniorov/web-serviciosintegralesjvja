import './navigation.scss';

const Navigation = () => {
    return (
        <nav id="navbar" className="navbar">
            <ul>
                <li><a className="nav-link scrollto active" href="#hero">Inicio</a></li>
                <li><a className="nav-link scrollto" href="#about">Sobre Nosotros</a></li>
                <li><a className="nav-link scrollto" href="#services">Servicios</a></li>
                <li><a className="nav-link scrollto " href="#portfolio">Portafolio</a></li>
                <li><a className="nav-link scrollto" href="#team">Aliados</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contacto</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    )
}

export default Navigation;