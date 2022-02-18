import React, { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle, FaAirbnb } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { AiOutlineGlobal } from "react-icons/ai";
import Calendar from "react-calendar";
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
const Head = styled.header`
  background: #000;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 32px 70px 2px 70px;
  z-index: 100;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: 991px) {
      visibility: hidden;
      width: 0;
      height: 0;
    }
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
    margin: 30px 0 30px -425px;
    width: 850px;
    left: 50%;
    i {
      margin-right: -25px;
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
      padding: 13px 10px 13px 10px;
      &:hover {
        border-radius: 1000px;
        background: #ebebeb;
      }
    }
    .subs {
      color: #717171;
    }
    .hide,
    .show {
      position: absolute;
    }
    .hide {
      visibility: hidden;
    }
    .show {
      visibility: visible;
    }
    @media (max-width: 991px) {
      visibility: hidden;
      width: 0;
      height: 0;
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
    .img {
      color: red;
      margin-right: 10px;
    }
    label {
      @media (max-width: 991px) {
        /* 중앙정렬 */
        visibility: visible;
        position: fixed;
        width: 300px;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #fff;
        border-radius: 100px;
        font-size: 15px;
        padding: 20px 20px 20px 0px;
        width: 65%;
        margin-left: 10%;
        cursor: pointer;
      }
      span {
        @media (max-width: 991px) {
          visibility: visible;
          color: #000;
        }
      }
    }
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
  &.sticky {
    padding: 0px 70px;
    margin-top: -60px;
    background-color: #fff;
    color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
    @media (max-width: 1073px) {
      visibility: hidden;
    }
    ul {
      li {
        color: #000;
      }
    }
    .top {
      margin-bottom: -110px;
    }
    .input {
      visibility: hidden;
      height: 0px;
      width: 0;
    }
    .logo {
      color: #ff385c;
    }
    .selections {
      visibility: hidden;
      width: 0;
    }
    .selections2 {
      visibility: visible;
      color: #ffffff;
      width: 300px;
      margin-left: -380px;
      margin-top: 10px;
      padding: 4px 5px 38px 20px;
      border-radius: 100px;
      border: 1px solid #e6e3e3;
      cursor: pointer;
      &:hover {
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
        transition: 0.3s;
      }
      input {
        border: none;
        left: 0;
        top: 0;
        width: 80%;
        height: 30px;
        margin-top: 2px;
      }
      i {
        background: #ff385c;
        font-size: 15px;
        padding: 8px 10px;
        border-radius: 1000px;
        margin-left: 0px;
        float: right;
      }
    }
  }
`;

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

function Header() {
  const [calendar, setCalendar] = useState("hide");
  const [value, onChange] = useState("날짜 입력");
  const inputRef = useRef(null);
  const selectDate = () => {
    setCalendar(calendar === "hide" ? "show" : "hide");
  };
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
        <div className="border">
          <label>
            <div>위치</div>
            <input placeholder="어디로 여행가세요?"></input>
          </label>
        </div>
        <div className="border">
          <div>체크인</div>
          <div className="subs">날짜 입력</div>
        </div>
        <div onClick={selectDate} className="border">
          <div>체크아웃</div>
          <div>
            <input type="text" value={value} ref={inputRef} disabled />
          </div>
          <Calendar onChange={onChange} className={calendar} />
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
            <ImSearch className="img" />
          </span>
          <span>어디로 여행가세요?</span>
        </label>
      </div>
    </Head>
  );
}

export default Header;
