import Navigation from '../Navigation/Navigation';
import './header.scss';

const Header = () => {
    // let selectHeader = document.querySelector('#header')
    // if (selectHeader) {
    //     let headerOffset = selectHeader.offsetTop
    //     let nextElement = selectHeader.nextElementSibling
    //     const headerFixed = () => {
    //     if ((headerOffset - window.scrollY) <= 0) {
    //         selectHeader.classList.add('fixed-top')
    //         nextElement.classList.add('scrolled-offset')
    //     } else {
    //         selectHeader.classList.remove('fixed-top')
    //         nextElement.classList.remove('scrolled-offset')
    //     }
    //     }
    //     window.addEventListener('load', headerFixed)
    //     onscroll(document, headerFixed)
    // }

    return (
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo mt-5 mb-5">
                    <a href="/">
                        <img src="/assets/images/logo.png" alt="Logo Servicios Integrales JV & JA" />
                    </a>
                </h1>

                <Navigation />
            </div>
        </header>
    )
}

export default Header;