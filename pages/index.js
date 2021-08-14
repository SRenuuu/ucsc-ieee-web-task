import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PrizesSection from "../components/PrizesSection";
import TimelineSection from "../components/TimelineSection";
import AboutSection from "../components/AboutSection";
import FAQ from "../components/FAQSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Layout pageTitle="ReidXtreme 2.0">
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <TimelineSection/>
      <PrizesSection/>
      <FAQ/>
      <Footer/>
    </Layout>
  );
};

export default Home;
