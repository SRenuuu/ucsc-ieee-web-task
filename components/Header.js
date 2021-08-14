import React, {useState, useEffect} from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";

const HeroSection = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    mobileMenu();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      mobileMenu();
    };
  });

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  const mobileMenu = () => {
    let subMenuColse = document.querySelectorAll(".sub-nav-toggler");
    let menuToggler = document.querySelector(".menu-toggler");
    let menuBox = document.querySelector(".main-navigation");
    menuToggler.addEventListener("click", function (e) {
      e.preventDefault();
      menuBox.classList.toggle("active");
    });
    subMenuColse.forEach((subMenuColseBtn) => {
      subMenuColseBtn.addEventListener("click", function (event) {
        let subMenu =
          event.currentTarget.parentElement.parentElement.children[1];
        event.preventDefault();
        subMenu.classList.toggle("active");
      });
    });
  };

  return (
    <header className="site-header header-main">
      <nav
        className={`navbar navbar-expand-lg navbar-light header-navigation stricky pt-3 pb-2 pt-lg-2 pb-lg-1 pt-xl-1 ${
          sticky === true ? "stricky-fixed" : " "
        }`}
      >
        <div className="container clearfix">
          <div className="logo-box clearfix px-3 px-lg-0">
            <Link href="/">
              <a className="navbar-brand">
                ReidXtreme 2.0
              </a>
            </Link>
            <button className="menu-toggler mr-sm-5">
              <span className="fa fa-bars"/>
            </button>
          </div>

          <div className="main-navigation">
            <NavLinks/>
          </div>
          <div className="right-side-box">
            <a href="#" className="header-btn">
              Register now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeroSection;
