import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.min.css';


import './styles/back-button.scss';
import './styles/general.scss';
import './styles/sections-general.scss';

import About from './components/About/About';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Pricing from './components/Pricing/Pricing';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Testimonials from './components/Tertimonials/Testimonials';
import TopBar from './components/TopBar/TopBar';

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

function App() {

  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <main>
        <Featured />
        <About />
        <Clients />
        <Services />
        <Testimonials />
        <Team />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
