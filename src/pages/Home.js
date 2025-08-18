import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Experiences from "../components/Experiences/Experiences";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
import ChatBotToggle from "../components/ChatBot/ChatBotToggle";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
      <ChatBotToggle />
    </>
  );
}

export default Home;
