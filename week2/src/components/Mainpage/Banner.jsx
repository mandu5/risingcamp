import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { a } from "../../assets/img";

const Black = styled.div`
  background: #000;
  color: #fff;
  background: #000;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0px 5% 100px 5%;
  padding: 200px 0px 0px 0px;
  border-radius: 10px;
  width: 90%;
`;
const Banners = styled.div`
  background: url(${a});
  height: 650px;
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
const Ukraine = styled.div`
  width: 100%auto;
  height: 360px;
  border-radius: 15px;
  background-color: #ff385c;
  margin: 30px 0 100px 0;
  padding-top: 120px;
  font-size: 48px;
  font-weight: 600;
  line-height: 48px;
  button {
    background-color: #ff385c;
    border: 1px solid #fff;
    color: #fff;
    padding: 10px 18px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

function Banner() {
  return (
    <Black>
      <Ukraine>
        10만 명에 달하는 우크라이나 피란민에게 임시
        <br /> 숙소를 제공해주세요
        <br />
        <button>자세히 알아보기</button>
      </Ukraine>
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
    </Black>
  );
}

export default Banner;
