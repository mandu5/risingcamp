import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Experience/Header";
import Section from "../components/Experience/Section";
import { Footer } from "../components/Mainpage";
import Popup from "../components/Popup";

const Body = styled.div`
  min-height: 100%;
  background: #fff;
  &.active {
    opacity: 0.8;
    pointer-events: none;
    user-select: none;
  }
`;

function Experience() {
  const [popup, setPopup] = useState("popup");
  const [blur, setBlur] = useState("blur");
  const toggle = () => {
    setPopup(popup === "popup" ? "popup active" : "popup");
    setBlur(blur === "blur" ? "blur active" : "blur");
  };
  // const dropDown = () => {

  // }
  return (
    <>
      <Body className={blur}>
        <Header toggle={toggle} />
        <Section />
        <Footer />
      </Body>
      <Popup toggle={toggle} popup={popup} />
    </>
  );
}

export default Experience;
