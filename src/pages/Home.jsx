import React from "react";
import Bar from "../components/LandingBar";
import Intro from "../components/Intro";
import WhatWeOffer from "../components/What_we_offer";
import Features from "../components/Features";
import Mission from "../components/Mission";
import Contacts from "../components/Contacts";
import Frequently_asked_questions from "../components/FAQs";

function Home() {
  return (
    <div>
      <Bar width="80%" />
      <Intro width="80%" />
      <WhatWeOffer width="80%" />
      <Features width="80%" />
      <Mission width="80%" />
      <Contacts width="100%" />
      <Frequently_asked_questions width="80%"/>
    </div>
  );
}

export default Home;
