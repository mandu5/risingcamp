import React from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple, AiOutlineMail } from "react-icons/ai";

const Popups = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 580px;
  padding: 25px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
  background: #fff;
  visibility: hidden;
  transition: 0.3s;
  border-radius: 10px;
  &.active {
    top: 50%;
    visibility: visible;
    opacity: 1;
    transition: 0.3s;
  }
  .header {
    border-bottom: 1px solid #d1cdcd;
    .close {
      width: 15px;
      font-size: 20px;
      border-radius: 100px;
      padding: 8px 28px 8px 15px;
      &:hover {
        background: #d1cdcd;
        cursor: pointer;
      }
    }
    .login {
      justify-content: center;
      text-align: center;
      align-items: center;
      margin: -30px 0 20px 0;
      font-weight: 600;
    }
  }
  .title {
    font-size: 20px;
    font-weight: 500;
    margin: 20px 0 30px 0;
  }
  .border {
    border: 1px solid #8e8d8d;
    border-radius: 5px;
    .arrow {
      float: right;
      margin: -35px 20px 0 0;
    }
    .border1 {
      border-top: 1px solid #8e8d8d;
    }
    .details {
      font-size: 12px;
      margin: 10px 0 -10px 20px;
      color: #8e8d8d;
    }
    .detail {
      margin: 10px 0 10px 20px;
      color: #8e8d8d;
    }
  }
  .info {
    margin: 20px 0 0 0;
    font-size: 13px;
    .underline {
      text-decoration: underline;
      font-weight: 600;
    }
  }
  .button {
    text-align: center;
    color: #fff;
    background: #f42f56;
    padding: 10px 0 10px 0;
    margin: 15px 0 15px 0;
    border-radius: 10px;
    font-weight: 700;
  }
  .toggle {
    text-align: center;
    font-size: 16px;
    padding: 13px 0 13px 0;
    margin: 15px 0 0 0;
    border: 1px solid #8e8d8d;
    border-radius: 10px;
    .icon {
      float: left;
      margin-left: 10px;
    }
  }
  fieldset {
    border-color: #d1cdcd;
    border-width: 1px 0 0 0;
    legend {
      text-align: center;
    }
  }
`;

function Popup({ toggle, popup }) {
  return (
    <Popups className={popup}>
      <div className="header">
        <div className="close" onClick={toggle}>
          X
        </div>
        <div className="login">로그인 또는 회원 가입</div>
      </div>
      <div>
        <div>
          <div className="title">에어비앤비에 오신 것을 환영합니다.</div>
          <div className="border">
            <div>
              <div>
                <div className="details">국가/지역</div>
                <div className="detail">미국(+1)</div>
              </div>
              <div>
                <FaAngleDown className="arrow" />
              </div>
            </div>
            <div className="border1"></div>
            <div className="detail">전화번호</div>
          </div>
          <div className="info">
            전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
            데이터 요금이 부과됩니다.
            <br /> <span className="underline">개인정보 처리방침</span>
          </div>
          <div className="button">계속</div>
        </div>
        <div>
          <fieldset>
            <legend>또는</legend>
          </fieldset>
          <div className="toggle">
            <BsFacebook className="icon" />
            페이스북으로 로그인하기
          </div>
          <div className="toggle">
            <FcGoogle className="icon" />
            구글로 로그인하기
          </div>
          <div className="toggle">
            <AiFillApple className="icon" />
            Apple 계정으로 계속하기
          </div>
          <div className="toggle">
            <AiOutlineMail className="icon" />
            이메일로 로그인하기
          </div>
        </div>
      </div>
    </Popups>
  );
}

export default Popup;
