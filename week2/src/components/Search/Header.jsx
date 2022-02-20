import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAirbnb, FaAngleDown } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import Action from "../Action";
import Dropdown from "./Dropdown";

const Head = styled.header`
  background: #fff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  .top {
    padding: 0px 70px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid rgb(224, 221, 221);
  }
  .input {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fff;
    color: #000;
    font-size: 13px;
    width: 90%;
    margin: 30px 3% 0px 5%;
    span {
      color: #000;
      font-size: 13px;
      border: 1px solid #d8d8d8;
      padding: 12px 20px 12px 20px;
      border-radius: 100px;
      float: right;
      &:hover {
        cursor: pointer;
        border: 1px solid #000;
      }
    }
    .borders {
      border-bottom: 1px solid #000;
      cursor: pointer;
    }
    .border {
      cursor: pointer;
      padding: 10px 10px 10px 10px;
      border-radius: 5px;
      &:hover {
        background-color: rgb(238, 236, 236);
      }
    }
    .subs {
      color: #717171;
    }
    input {
      border: none;
    }
  }
  .host {
    color: #000;
    li {
      margin: 10px;
    }
  }
  &.sticky {
    padding: 0px 70px;
    background: #fff;
    margin-top: -100px;
    color: #000;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.01);
    .top {
      margin-bottom: -120px;
      border: none;
    }
    .input {
      padding: 20px;
    }
    .selections {
      visibility: hidden;
      width: 0;
    }
    .selections2 {
      visibility: hidden;
      input {
        border: none;
        left: 0;
        top: 0;
        width: 120px;
        height: 30px;
      }
      i {
        background: #ff385c;
        color: #fff;
        font-size: 15px;
        padding: 8px;
        border-radius: 100px;
        margin-left: 60px;
      }
    }
    .logo {
      visibility: hidden;
    }
    ul {
      li {
        a {
          color: #000;
        }
      }
    }
    .host {
      visibility: hidden;
      color: #000;
    }
  }
  .logo {
    color: #ff385c;
    text-decoration: none;
    letter-spacing: 2px;
    .image {
      margin-bottom: -10px;
      font-size: 35px;
    }
    span {
      font-weight: 700;
      font-size: 20px;
      margin-left: 5px;
    }
  }
  .selections {
    margin-left: 270px;
    visibility: hidden;
  }
  .selections2 {
    visibility: hidden;
    width: 0;
    height: 0;
  }
  .selection {
    margin-top: 5px;
    margin-left: 15px;
    margin-right: 15px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
  ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      position: relative;
      list-style: none;
      a {
        position: relative;
        margin: 0 15px;
        text-decoration: none;
        color: #fff;
        letter-spacing: 2px;
        font-weight: 500px;
      }
    }
  }
`;

function Header({ toggle, filter }) {
  const [dropdown, setDropdown] = useState("dropdown");
  const dropToggle = () => {
    setDropdown(dropdown === "dropdown" ? "dropdown active" : "dropdown");
  };
  return (
    <Head>
      <div className="top">
        <Link to="/" className="logo">
          <FaAirbnb className="image" />
          <span>airbnb</span>
        </Link>
        <div className="selections">
          <span className="selection">숙소</span>
          <span className="selection">체험</span>
          <span className="selection">온라인 체험</span>
        </div>
        <div className="host">
          <ul>
            <li>호스트 되기</li>
            <li>
              <AiOutlineGlobal />
            </li>
            <li>
              <Action toggle={toggle} />
            </li>
          </ul>
        </div>
      </div>
      <div className="input">
        <div className="borders">
          <div>농장</div>
        </div>
        <div className="border">
          <div>해변 근처</div>
        </div>
        <div className="border">
          <div>멋진 수영장</div>
        </div>
        <div className="border">
          <div>하우스보트</div>
        </div>
        <div className="border">
          <div>통나무집</div>
        </div>
        <div className="border">
          <div>초소형 주택</div>
        </div>
        <div className="border">
          <div>트리하우스</div>
        </div>
        <div className="border">
          <div>Luxe</div>
        </div>
        <div className="border">
          <div>캠핑카</div>
        </div>
        <div className="border">
          <div>개성 넘치는 숙소</div>
        </div>
        <div className="border">
          <div>료칸</div>
        </div>
        <div className="border">
          <div>헛간</div>
        </div>
        <div className="border">
          <div>성</div>
        </div>
        <div className="border">
          <Dropdown dropToggle={dropToggle} dropdown={dropdown} />
        </div>
        <span>
          언제든 <FaAngleDown />
        </span>
        <span>
          인원 <FaAngleDown />
        </span>
        <span onClick={filter}>
          <BiTransfer />
          필터
        </span>
      </div>
    </Head>
  );
}

export default Header;
