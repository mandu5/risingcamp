import React, { useState } from "react";
import styled from "styled-components";
import Filter from "../components/Experience/Filter";
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
  const [pop, setPop] = useState("pop");
  const filter = () => {
    setPop(pop === "pop" ? "pop active" : "pop");
    setBlur(blur === "blur" ? "blur active" : "blur");
  };
  return (
    <>
      <Body className={blur}>
        <Header toggle={toggle} />
        <Section filter={filter} />
        <Footer />
      </Body>
      <Popup toggle={toggle} popup={popup} />
      <Filter filter={filter} pop={pop} />
    </>
  );
}

export default Experience;
