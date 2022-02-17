import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle, FaAirbnb } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { AiOutlineGlobal } from "react-icons/ai";
import styled from "styled-components";

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
const Head = styled.header`
  background: #000;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0px 70px;
  margin-top: 30px;
  z-index: 100;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .input {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    background-color: #fff;
    color: #000;
    border-radius: 1000px;
    font-size: 13px;
    padding: 10px 0px 10px 0px;
    margin: 30px 0 30px -425px;
    width: 850px;
    left: 50%;
    i {
      margin-right: -35px;
      background: #ff385c;
      color: #fff;
      font-size: 18px;
      padding: 15px 18px 15px 18px;
      border-radius: 100px;
      &:hover {
        background-color: #f9879c;
      }
    }
    input {
      border: none;
    }
    .border {
      border-left: 1px solid #dfdddd;
      padding-left: 20px;
    }
    .subs {
      color: #717171;
    }
  }
  .logo {
    color: #fff;
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
    margin-left: 250px;
    padding-left: 20px;
  }
  .selections2 {
    visibility: hidden;
    width: 0;
    height: 0;
  }
  .selection {
    margin: 5px 15px 0 15px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
  .responsive {
    visibility: hidden;
    width: 0;
    height: 0;
  }
  ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: -20px;
    li {
      list-style: none;
      margin: 0 15px;
      text-decoration: none;
    }
  }
`;

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function Header() {
  const menuToggle = () => {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  };
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
          <input placeholder="검색 시작하기" />
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
        <div>
          <label>
            <div>위치</div>
            <input placeholder="어디로 여행가세요?"></input>
          </label>
        </div>
        <div className="border">
          <div>체크인</div>
          <div className="subs">날짜 입력</div>
        </div>
        <div className="border">
          <div>체크아웃</div>
          <div className="subs">날짜 입력</div>
        </div>
        <div className="border">
          <div>인원</div>
          <div className="subs">게스트 추가</div>
        </div>
        <i>
          <ImSearch />
        </i>
      </div>
      <div className="responsive">
        <label>
          <span>
            <ImSearch />
          </span>
          <span>어디로 여행가세요?</span>
        </label>
      </div>
    </Head>
  );
}

export default Header;
