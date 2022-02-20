import React, { useState } from "react";
import { Header, Banner, Footer, Section } from "../components/Mainpage";
import "../App.css";
import styled from "styled-components";
import Popup from "../components/Popup";

const Black = styled.div`
  background-color: #000;
  min-height: 250vh;
  &.active {
    opacity: 0.8;
    pointer-events: none;
    user-select: none;
  }
`;

function Mainpage() {
  const [popup, setPopup] = useState("popup");
  const [blur, setBlur] = useState("blur");
  const toggle = () => {
    setPopup(popup === "popup" ? "popup active" : "popup");
    setBlur(blur === "blur" ? "blur active" : "blur");
  };
  return (
    <>
      <Black className={blur}>
        <Header toggle={toggle} />
        <Banner />
        <Section />
        <Footer />
      </Black>
      <Popup toggle={toggle} popup={popup} />
    </>
  );
}

export default Mainpage;
