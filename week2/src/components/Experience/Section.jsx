import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import styled from "styled-components";
import {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
} from "../../assets/img-nearby";
import videoSrc from "../../assets/video/1.mp4";
import { data, data1, data2 } from "./data";
import Dropdown from "./Dropdown";

const Sections = styled.section`
  background-color: #fff;
  color: #000;
  padding-bottom: 20px;
  margin-top: 100px;
  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #000;
    font-size: 13px;
    margin: 25px 0 15px 0;
    span {
      color: #000;
      font-size: 13px;
      border: 1px solid #d8d8d8;
      padding: 10px 14px 10px 14px;
      border-radius: 100px;
      margin: 0 10px 0 10px;
      float: right;
      cursor: pointer;
      &:hover {
        border: 1px solid #000;
      }
    }
    .subs {
      color: #717171;
    }
    input {
      border: none;
    }
  }
  .border1 {
    border-bottom: 1px solid rgb(222, 218, 218);
    margin-bottom: 59px;
  }
  .margin {
    margin: 50px 5% 0 5%;
    .title {
      font-weight: 600;
      font-size: 35px;
      margin-bottom: 15px;
    }
    .subtitle {
      font-size: 25px;
      font-weight: 400;
      margin-top: 70px;
    }
    .right {
      float: right;
    }
  }
  .videos {
    display: flex;
    justify-content: space-between;
    margin: 60px;
    .title {
      margin: 120px 280px 0 80px;
      font-size: 50px;
      font-weight: 700;
    }
    .video {
      border-radius: 20px;
    }
  }
  .underline {
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
  .tabs {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
  .taball {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  .tab1 {
    margin: 10px;
    border-radius: 15px;
  }
  .img1,
  .img2,
  .img3,
  .img4,
  .img5,
  .img6,
  .img7,
  .img8,
  .img9,
  .img10,
  .img11,
  .img12,
  .img13,
  .img14,
  .img15,
  .img16 {
    height: 304px;
    border-radius: 15px;
    margin-bottom: 20px;
  }
  .img1 {
    background: url(${A});
    background-size: cover;
  }
  .img2 {
    background: url(${B});
    background-size: cover;
  }
  .img3 {
    background: url(${C});
    background-size: cover;
  }
  .img4 {
    background: url(${D});
    background-size: cover;
  }
  .img5 {
    background: url(${E});
    background-size: cover;
  }
  .img6 {
    background: url(${F});
    background-size: cover;
  }
  .img7 {
    background: url(${G});
    background-size: cover;
  }
  .img8 {
    background: url(${H});
    background-size: cover;
  }
  .img9 {
    background: url(${I});
    background-size: cover;
  }
  .img10 {
    background: url(${J});
    background-size: cover;
  }
  .img11 {
    background: url(${K});
    background-size: cover;
  }
  .img12 {
    background: url(${L});
    background-size: cover;
  }
  .img13 {
    background: url(${M});
    background-size: cover;
  }
  .img14 {
    background: url(${N});
    background-size: cover;
  }
  .img15 {
    background: url(${O});
    background-size: cover;
  }
  .city {
    font-size: 15px;
    font-weight: 600;
    .right {
      float: right;
    }
  }
  .distance {
    font-size: 15px;
    .right {
      float: right;
    }
  }
  .more {
    position: relative;
    border: none;
    font-size: 15px;
    left: 48%;
    top: 50%;
    padding: 15px 25px;
    border-radius: 10px;
    margin: 50px 0 30px 0;
    background-color: rgb(70, 69, 69);
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #000;
    }
  }
`;

function Section({ filter }) {
  const [dropdown, setDropdown] = useState("dropdown");
  const dropToggle = () => {
    setDropdown(dropdown === "dropdown" ? "dropdown active" : "dropdown");
  };
  return (
    <Sections>
      <div className="border1">
        <div className="input">
          <span>
            <Dropdown dropToggle={dropToggle} dropdown={dropdown} />
          </span>
          <span>
            요금 <FaAngleDown />
          </span>
          <span>
            체험 진행 언어 <FaAngleDown />
          </span>
          <span>
            시간 <FaAngleDown />
          </span>
          <span>문화예술</span>
          <span>엔터테인먼트</span>
          <span>식음료</span>
          <span>스포츠</span>
          <span>투어</span>
          <span>관광</span>
          <span>웰빙</span>
          <span>자연 및 야외활동</span>
          <span onClick={filter}>
            <BiTransfer />
            필터
          </span>
        </div>
      </div>
      <div className="videos">
        <div className="title">
          현지인이
          <br /> 호스팅하는 잊지
          <br /> 못할 액티비티
        </div>
        <div>
          <video className="video" autoPlay muted width="330px" height="440px">
            <source src={videoSrc} type="video/mp4"></source>
          </video>
          <div>
            <span>
              <span>★</span> 4.99 (181)
            </span>
            <br />
            <span>그녀와 함께하는 수제도장 만들기</span>
            <br />
            <span>호스트: Helen</span>
          </div>
        </div>
      </div>
      <div className="margin">
        <div>체험 162개</div>
        <br />
        <div className="title">내 주변 체험 보기</div>
        <br />
        <div>
          예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.
          <span className="underline">자세히 알아보기</span>
        </div>
        <br />
        <span>
          <span className="subtitle">이번 주말 진행 되는 체험</span>
          <span className="right">
            <span className="underline">보기(75개)</span>
          </span>
        </span>
        <div className="tabs">
          {data1.map((item) => (
            <div className="tab1" key={item.img}>
              <div className={item.img}></div>
              <div>
                <span className="city">{item.score}</span>
                <br />
                <span className="distance">{item.detail}</span>
                <br />
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <span>
          <div className="subtitle">독특한 개성으로 높은 평점을 받은 체험</div>
        </span>
        <div className="tabs">
          {data2.map((item) => (
            <div className="tab1" key={item.img}>
              <div className={item.img}></div>
              <div>
                <span className="city">{item.score}</span>
                <br />
                <span className="distance">{item.detail}</span>
                <br />
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <span>
          <div className="subtitle">모든 체험</div>
        </span>
        <div className="taball">
          {data.map((item) => (
            <div key={item.img}>
              <div className="tab1">
                <div className={item.img}></div>
                <div>
                  <span className="city">{item.score}</span>
                  <br />
                  <span className="distance">{item.detail}</span>
                  <br />
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="more">더 보기</button>
    </Sections>
  );
}

export default Section;
