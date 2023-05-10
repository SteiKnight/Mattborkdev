// src/components/About.js

import React, { useState, useEffect } from "react";

export default function About() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    const height = navbar.offsetHeight;
    setNavbarHeight(height);
  }, []);

  const sectionStyle = {
    height: `calc(95vh - ${navbarHeight}px)`,
  };

  return (
    <section id="about" className="flex items-center justify-center" style={sectionStyle}>
      <div className="container mx-auto flex px-5 py-20 flex-col items-center justify-center mb-10">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-center">
          <p className="no-wrap text-md md:text-md lg:text-xl mx-5 md:mx-8 mb-2 leading-relaxed text-[#D2931B]" style={{ fontFamily: 'Inconsolata' }}>
            Hi, my name is
          </p>
          <h1 className="no-wrap text-lg md:text-xl lg:text-5xl mx-5 md:mx-12 title-font sm:text-4xl text-3xl mb-4 font-medium text-[#C7D4F0]" style={{ fontFamily: 'Inter' }}>
            Matthew Borkowski.
          </h1>
          <h2 className="mx-5 no-wrap text-lg md:text-xl lg:text-5xl mx-5 md:ml-16 title-font mb-4 font-medium text-[#8B96B3]" style={{ fontFamily: 'Inter' }}>
            <span>Developer and student.</span>
          </h2>
          <p className="md:text-md lg:text-xl md:mx-8 mb-8 leading-relaxed" style={{ fontFamily: 'Inconsolata' }}>
            I'm a computer science student at <span className="text-[#D2931B]">Wilfrid Laurier University</span> and I like to code things in my free time.
          </p>
        </div>
      </div>
    </section>

  );
}