import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Popup from "../components/Popup";
import Filter from "../components/Search/Filter";
import { Footer } from "../components/Search";
import Header from "../components/Search/Header";
import Section from "../components/Search/Section";
import Loading from "../components/Search/Loading";

const Body = styled.div`
  min-height: 100%;
  background: #fff;
  &.active {
    opacity: 0.8;
    pointer-events: none;
    user-select: none;
  }
`;

const Search = React.memo(() => {
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

  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);
  const dataRequest = () => {
    setData(data === false ? true : false);
  };
  useEffect(() => {
    if (data) {
      setLoading(false);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  }, [data]);
  return (
    <>
      {loading ? (
        <>
          <Body className={blur}>
            <Header toggle={toggle} filter={filter} />
            <Loading dataRequest={dataRequest} />
            <Footer />
          </Body>
          <Popup toggle={toggle} popup={popup} />
          <Filter filter={filter} pop={pop} />
        </>
      ) : (
        <>
          <Body className={blur}>
            <Header toggle={toggle} filter={filter} />
            <Section dataRequest={dataRequest} />
            <Footer />
          </Body>
          <Popup toggle={toggle} popup={popup} />
          <Filter filter={filter} pop={pop} />
        </>
      )}
    </>
  );
});

export default Search;
