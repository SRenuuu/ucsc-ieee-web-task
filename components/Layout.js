import React, {useState, useEffect} from "react";
import {Link as ScrollLink} from "react-scroll";
import Head from "next/head";

const Layout = ({pageTitle, children}) => {
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  });
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{pageTitle}</title>
        {/*<link rel="shortcut icon" href="/static/favicon.ico"/>*/}
        <meta name="theme-color" content="#000000"/>
        <meta
          name="description"
          content="ReidXtreme 2.0 | 24-hour competitive programming competition for UCSC UGs"
        />
        <meta name="keywords"
              content="ReidXtreme, UCSC, University of Colombo School of Computing, Competitive Programming, Hackathon,
          ReidXtreme 2021, Reid Avenue, Competition, Undergraduates"/>
        <meta name="author" content="Sandul Renuja"/>
      </Head>
      <div className="page-wrapper" id="wrapper">
        {children}
      </div>
      {scrollTop === true ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          className="scroll-to-top"
        >
          <i className="fa fa-angle-up"/>
        </ScrollLink>
      ) : null}
    </div>
  );
};

export default Layout;
