import React from "react";
import {Link as ScrollLink} from "react-scroll";

const NavLinks = () => {
  return (
    <ul className="one-page-scroll-menu navigation-box mr-5">
      <li>
        <ScrollLink
          activeClass="current"
          to="about"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="timeline"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
        >
          Timeline
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="prizes"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
        >
          Prizes
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="faq"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          FAQ
        </ScrollLink>
      </li>
    </ul>
  );
};

export default NavLinks;
