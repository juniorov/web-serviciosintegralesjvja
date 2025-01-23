import { useEffect, useRef } from 'react';
import './preloader.scss';

const Preloader = () => {
    const preloaderRef = useRef(null);

    useEffect(() => {
        preloaderRef.current = document.querySelector('#preloader');
    }, []);


    return (
        <>
            <div id="preloader"></div>
            <a href="#"
                className="back-to-top d-flex align-items-center justify-content-center"
                aria-label="Volver al inicio de la página">
                    <i className="bi bi-arrow-up-short"></i>
            </a>
        </>
    )
}

export default Preloader;