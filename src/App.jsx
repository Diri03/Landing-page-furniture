import "./App.css";
import Categories from "./components/categories/Categories";
import CTA from "./components/cta/CTA";
import Feature from "./components/features/Feature";
import Footer from "./components/footers/Footer";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Section4 from "./components/section4/Section4";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Hero />
      <Feature />
      <Categories />
      <Section4 />
      <Products />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
