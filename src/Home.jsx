import React from "react";
import HeroSection from "./Components/HeroSection";
import FeaturesSection from "./Components/FeaturesSection";
import AboutSection from "./Components/AboutSection";
import PresaleSection from "./Components/PresaleSection";
import TokenomicsSection from "./Components/TokenomicsSection";
import RoadmapSection from "./Components/RoadmapSection";
import MemesSection from "./Components/MemesSections";
import StatsSections from "./Components/StatsSections";
import FAQSection from "./Components/FAQSection";
import TokenDetails from "./Components/TokenDetails";
import ContactUs from "./Components/ContactUs";
import HarryFamilySection from "./Components/HarryFamilySection";
import HarryMeme from "./Components/HarryMeme";
import NewsletterSection from "./Components/NewsletterSection";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <HarryMeme />
      <FeaturesSection />
      <TokenomicsSection />
      <TokenDetails />
      <RoadmapSection />
      <PresaleSection />
      <MemesSection />
      <StatsSections />
      <HarryFamilySection />
      <ContactUs />
      <FAQSection />
      <NewsletterSection/>
    </div>
  );
};

export default Home;
