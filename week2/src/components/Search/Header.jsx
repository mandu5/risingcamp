import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAirbnb, FaUserCircle } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Head = styled.header`
  background: #fff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.2s;
  margin-top: 30px;
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
    margin-top: 30px;
    width: 95%;
    margin-left: 3%;
    span {
      color: #000;
      font-size: 13px;
      border: 1px solid #d8d8d8;
      padding: 12px 30px 12px 30px;
      border-radius: 100px;
      float: right;
    }
    .borders {
      border-bottom: 1px solid #000;
      cursor: pointer;
    }
    .border {
      cursor: pointer;
      padding-top: 10px;
      padding-bottom: 10px;
      border-radius: 15px;
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
    font-weight: 400;
    font-size: 30px;
    color: #fff;
    text-decoration: none;
    letter-spacing: 2px;
    color: #ff385c;
    cursor: pointer;
    span {
      font-weight: 500;
      font-size: 25px;
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
const Action = styled.div`
  border: 1px solid rgb(223, 223, 223);
  background-color: #fff;
  color: #222222;
  border-radius: 100px;
  font-size: 18px;
  padding: 3px 13px 3px 13px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
  .profile {
    color: #717171;
    .fa-bars {
      margin: 0 0 5px 0;
    }
    .fa-circle-user {
      margin: 5px -5px 0 10px;
      font-size: 30px;
    }
  }
  .menu {
    position: absolute;
    top: 120px;
    right: -10px;
    background: #fff;
    width: 250px;
    box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    visibility: hidden;
    opacity: 0;
    z-index: 100000;
    &.active {
      top: 50px;
      visibility: visible;
      opacity: 1;
    }
    h3 {
      width: 100%;
      font-size: 13px;
      padding: 15px 0;
      font-weight: 500;
      color: #555;
      line-height: 1.2em;
      margin-top: 10px;
      margin-bottom: 10px;
      padding: 10px;
      &:hover {
        background-color: rgb(211, 210, 210);
      }
    }
  }
`;

function Header() {
  const menuToggle = () => {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
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
              <Action onClick={menuToggle}>
                <div className="profile">
                  <GiHamburgerMenu className="fa-bars" />
                  <FaUserCircle className="fa-circle-user" />
                </div>
                <div className="menu">
                  <h3>
                    회원가입
                    <br />
                  </h3>
                  <h3>
                    로그인
                    <br />
                  </h3>
                  <h3>
                    숙소 호스트 되기
                    <br />
                  </h3>
                  <h3>
                    체험 호스팅하기
                    <br />
                  </h3>
                  <h3>
                    도움말
                    <br />
                  </h3>
                </div>
              </Action>
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
          <div>더 보기</div>
        </div>
        <span>
          언제든 <div className="fa-solid fa-angle-down"></div>
        </span>
        <span>
          인원 <div className="fa-solid fa-angle-down"></div>
        </span>
        <span>
          <div className="fa-solid fa-filter"></div> 필터
        </span>
      </div>
    </Head>
  );
}

export default Header;
