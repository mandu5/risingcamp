import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

const Actions = styled.div`
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
      @media (max-width: 991px) {
      visibility: hidden;
      width: 0;
      height: 0;
    }
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

function Action({ toggle }) {
  const [menu, setMenu] = useState("menu");
  const menuToggle = () => {
    setMenu(menu === "menu" ? "menu active" : "menu");
  };
  return (
    <Actions onClick={menuToggle}>
      <div className="profile">
        <GiHamburgerMenu className="fa-bars" />
        <FaUserCircle className="fa-circle-user" />
      </div>
      <div className={menu}>
        <h3 onClick={toggle}>
          회원가입
          <br />
        </h3>
        <h3 onClick={toggle}>
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
    </Actions>
  );
}

export default Action;
