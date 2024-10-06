 import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Rapidscat from "./components/Rapidscat/Rapidscat.jsx"
import PACEApplication from "./components/PACEApplication/PACEApplication.jsx"
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

import bgVideo from "./assets/earth-bg.mp4";
const App = () => {
    React.useEffect(() => {
      AOS.init({
        duration: 1200,
        easing: "ease-in-out",
      });
    });

  return <div>
    <div className = "h-[700px] relative">
    <video autoPlay loop muted className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar/>
        <Hero />
        <Services/>
        <Rapidscat/>
        <PACEApplication/>
        <Footer/>
        

    
    </div>
  
  </div>;
};

export default App;