// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 primary text-white py-2 px-5">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5">
          {/* first col */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">Keep Learning</h1>
            <p>
              Get exclusive Newsletter to your inbox <span className="font-bold"></span>
            </p>
            <br />
            <div className="flex items-center h-10">
              <input type="text" className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2" placeholder="Email"/> 
              <button className="bg-[#13D9BD] text-white hover:bg-green-500 px-3 py-2 rounded-md duration-200"> OK </button>
              </div>
          </div>


          {/* second col */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3"> Quick Links</h1>
                <ul className="flex flex-col gap-3">
                  <li><a href="#">Home</a></li>
                  <li><a href="/Insights.html">Insights</a></li>
                  <li><a href="/More.html">More about PACE</a></li>
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3"> Quick Links</h1>
                <ul className="flex flex-col gap-3">
                  <li><a href="https://pace.oceansciences.org/blog.htm">Blogs</a></li>
                  <li><a href="https://pace.oceansciences.org/news.htm">News</a></li>
                  <li><a href="#">Home</a></li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </section>
      
      <div><left> Made by <a href= "https://www.linkedin.com/in/yajatgupta/"><u> Yajat Gupta</u></a></left></div>
    </div>
  );
};

export default Footer;
