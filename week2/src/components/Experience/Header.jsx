import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaAirbnb } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import styled from "styled-components";
import Action from "../Action";

const Head = styled.header`
  background: #fff;
  color: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 80px 0 80px;
  z-index: 100;
  .top {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
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
    visibility: hidden;
  }
  .selections2 {
    color: #ffffff;
    width: 250px;
    margin: 10px 150px 0 0;
    padding: 5px 0px 5px 20px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    border: 1px solid #e6e3e3;
    &:hover {
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
      transition: 0.3s;
    }
    input {
      border: none;
      width: 83%;
      height: 30px;
    }
    i {
      background: #ff385c;
      color: #fff;
      font-size: 15px;
      padding: 6px 8px 6px 8px;
      border-radius: 100px;
    }
  }
  .selection {
    margin: 5px 15px 0 15px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      position: relative;
      list-style: none;
      margin: 0 10px 0 10px;
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

function Header({ toggle }) {
  return (
    <Head>
      <div className="top">
        <div className="logo">
          <FaAirbnb className="image" />
          <span>airbnb</span>
        </div>
        <div className="selections">
          <span className="selection">숙소</span>
          <span className="selection">체험</span>
          <span className="selection">온라인 체험</span>
        </div>
        <div className="selections2">
          <input placeholder="근처 추천 장소 | 날짜 입력하기" />
          <i>
            <ImSearch />
          </i>
        </div>
        <div>
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
    </Head>
  );
}

export default Header;
