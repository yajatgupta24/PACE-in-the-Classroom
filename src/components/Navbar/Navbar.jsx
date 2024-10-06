// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (   
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={Logo} alt="" className="w-20" />
              <span><b> IN THE CLASSROOM</b></span>
            </div>
            <div className="text-white hidden sm:block">
            <ul className="flex items-center gap-8 text-l py-5 ">
                <li>
                  <a href="/Insights.html">Recent Insights</a>
                </li>
                <li>
                  <a href="/More.html">More about PACE</a>
                </li>
                <li>
                  <a href="https://pace.oceansciences.org/blog.htm">Blogs</a>
                </li>
                <li>
                  <a href="https://pace.oceansciences.org/news.htm">News & Updates</a>
                </li>
                <li>
                  <a href="/Quiz.html">Quizes</a>
                </li>
                <li>
                  <a href="https://eyes.nasa.gov/apps/earth/#/satellites/pace">PACE on Map</a>
                </li>
                <li>
                  <a href="/Reference.html"target="_blank" rel="noopener noreferrer">References</a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </nav>   
  );
};
export default Navbar;