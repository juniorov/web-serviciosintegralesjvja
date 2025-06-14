import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './testimonials.scss';

const Testimonials = () => {
    new Swiper('.testimonials-slider', {
        // configure Swiper to use modules
        modules: [Navigation, Pagination],
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
        el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });

    return (
        <section id="testimonials" className="testimonials">
        <div className="container" data-aos="zoom-in">
            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper-wrapper">

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                            <img src="/assets/images/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                            <h3 className="d-none">Saul Goodman</h3>
                            <h4 className="d-none">Ceo &amp; Founder</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                            <img src="/assets/images/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                            <h3 className="d-none">Sara Wilsson</h3>
                            <h4 className="d-none">Designer</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                            <img src="/assets/images/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                            <h3 className="d-none">Jena Karlis</h3>
                            <h4 className="d-none">Store Owner</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                            <img src="/assets/images/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                            <h3 className="d-nh3e">Matt Brandon</h3>
                            <h4 className="d-none">Freelancer</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                            <img src="/assets/images/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                            <h3 className="d-none">John Larson</h3>
                            <h4 className="d-none">Entrepreneur</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>

                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </section>
    )
}

export default Testimonials;