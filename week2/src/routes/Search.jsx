import React from "react";
import styled from "styled-components";
import { Footer } from "../components/Search";
import Header from "../components/Search/Header";
import Section from "../components/Search/Section";

const Body = styled.div`
 min-height: 100%;
  background: #fff;
`;
function Search() {
  return (
    <Body>
      <Header />
      <Section />
      <Footer />
    </Body>
  );
}

export default Search;
