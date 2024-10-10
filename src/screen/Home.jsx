import { Element } from "react-scroll";
import Hero from "../components/Hero/Hero";
import About from "../components/about/About";
import FrequentQuestion from "../components/faq/Questions";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header"
import PlansAndSub from "../components/subscription/Plans";

const Home = () => {
  return (
    <div>
      <Element name="hero-section">
        <Header />
        <Hero />
      </Element>
      <Element name="subscription">
        <PlansAndSub />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="faq">
        <FrequentQuestion />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
};

export default Home;
