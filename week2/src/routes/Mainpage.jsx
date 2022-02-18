import React from "react";
import { Header, Banner, Footer, Section } from "../components/Mainpage";
import "../App.css";
import styled from "styled-components";

const Black = styled.div`
  background: #000;
  min-height: 250vh;
`;
function Mainpage() {
  return (
    <Black>
      <Header />
      <Banner />
      <Section />
      <Footer />
    </Black>
  );
}

export default Mainpage;
