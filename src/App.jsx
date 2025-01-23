import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.min.css';


import './styles/general.scss';
import './styles/back-button.scss';
import './styles/sections-general.scss';

import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Featured from './components/Featured/Featured';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Faq from './components/Faq/Faq';
import Counts from './components/Counts/Counts';
import Pricing from './components/Pricing/Pricing';
import Clients from './components/Clients/Clients';
import Team from './components/Team/Team';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Tertimonials/Testimonials';

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
        <Skills />
        <Counts />
        <Clients />
        <Services />
        <Testimonials />
        <Portfolio />
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
