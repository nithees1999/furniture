import React from "react";
import "../styles/home.css";
import Services from "../services/Services";
import Shop from "../pages/Shop";
import Ideas from "../ideas/Ideas";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";



const Home = () => {
  return (
    <div>
      <section className="hero_section">
        <div className="hero__content">
          <h2>Make Your Interior More Minimalistic & Modern</h2>
          <p>Bringing interiors to life, understanding the person or
            people living in a home is far greater need in design.</p>
          <div className="search__box">
            <input type="text" placeholder="Search Furniture" />
            <span><i class="ri-search-line"></i></span>
          </div>
        </div>
      </section>
      <Services />
      <Ideas />
      <Shop />
      <AboutUs />
      <Contact />


    </div>
  );
};



export default Home;
