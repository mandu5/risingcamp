import React, { useState } from "react";
import styled from "styled-components";
import Popup from "../components/Popup";
import Filter from "../components/Search/Filter";
import { Footer } from "../components/Search";
import Header from "../components/Search/Header";
import Section from "../components/Search/Section";

const Body = styled.div`
  min-height: 100%;
  background: #fff;
  &.active {
    opacity: 0.8;
    pointer-events: none;
    user-select: none;
  }
`;

function Search() {
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
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <>
          <Body className={blur}>
            <Header toggle={toggle} filter={filter} />
            <Section />
            <Footer />
          </Body>
          <Popup toggle={toggle} popup={popup} />
          <Filter filter={filter} pop={pop} />
        </>
      )}
    </>
  );
}

export default Search;
