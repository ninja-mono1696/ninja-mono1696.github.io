import React from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 500) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });
  return (
    <a href="#home" className="scrollup">
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  );
};

export default ScrollToTop;
