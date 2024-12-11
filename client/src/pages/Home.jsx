// eslint-disable-next-line no-unused-vars
import React from "react";
import Steps from "../components/Steps";
import Header from "../components/Header";
import Description from "../components/Description";
import Testimonials from "../components/Testimonials";
import GenerateBtn from "../components/GenerateBtn";

function Home() {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonials />
      <GenerateBtn/>
    </div>
  );
}

export default Home;
