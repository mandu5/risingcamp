import React from "react";
import { Header, Banner, Footer, Section } from "../components";
import "../App.css";

function Mainpage() {
  return (
    <>
      <div className="black">
        <Header />
        <Banner />
      </div>
      <Section />
      <Footer />
    </>
  );
}

export default Mainpage;
