import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { a } from "../img";

const Banners = styled.div`
  color: #fff;
  margin: 200px 5% 100px 5%;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  width: 90%;
  height: 650px;
  background: url(${a});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .title {
    font-size: 48px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 400px;
  }
  .button {
    border: none;
    background-color: #fff;
    border-radius: 100px;
    font-size: 18px;
    padding: 14px 32px 14px 32px;
    text-decoration: none;
    cursor: pointer;
    color: #ba65ba;
    margin-top: 20px;
    &:hover {
      background-color: rgb(219, 216, 216);
    }
  }
`;

function Banner() {
  return (
    <Banners>
      <div>
        <div className="title">
          에어비앤비가
          <br /> 여행지를 찾아드릴게요!
        </div>
        <br />
        <Link to="/search" className="button">
          <span>유연한 검색</span>
        </Link>
      </div>
    </Banners>
  );
}

export default Banner;
