import React from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

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
    margin-top: 20px;
    padding-bottom: 25px;
    border-top: 1px solid #d1cdcd;
    border-bottom: 1px solid #d1cdcd;
    .range {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      .box {
        width: 250px;
        border: 1px solid #d1cdcd;
        border-radius: 10px;
        margin-top: 10px;
      }
      span {
        margin: 20px 10px 10px 10px;
      }
      .details {
        margin: 5px 0px 5px 15px;
      }
    }
  }
  .subtitle {
    font-size: 14px;
    color: rgb(116, 113, 113);
    padding: 20px 0 20px 0;
  }
  .type {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .room {
      margin: -45px 0 0 30px;
      padding: 20px;
    }
    .square {
      background: #fff;
      width: 28px;
      height: 28px;
      border-radius: 5px;
      border: 1px solid #d1cdcd;
      cursor: pointer;
      &:hover {
        border: 1px solid #000;
      }
    }
  }
  .all {
    width: 76px;
    text-decoration: underline;
    cursor: pointer;
  }
  .footer {
    border-top: 1px solid #d1cdcd;
    margin-top: 10px;
    .cancle {
      margin-top: 30px;
      text-decoration: underline;
      &:hover {
        color: #d1cdcd;
        cursor: pointer;
      }
    }
    .more {
      float: right;
      padding: 15px;
      border-radius: 10px;
      cursor: pointer;
      margin-top: -40px;
      background: #000;
      color: #fff;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

function Filter({ filter, pop }) {
  return (
    <Popups className={pop}>
      <div className="header">
        <div className="close" onClick={filter}>
          X
        </div>
        <div className="login">필터 추가하기</div>
      </div>
      <div>
        <div className="title">활동 유형</div>
        <div className="type">
          <div>
            <div className="square"></div>
            <div className="room">
              <div>문화예술</div>
            </div>
          </div>
          <div>
            <div className="square"></div>
            <div className="room">
              <div>엔터테인먼트</div>
            </div>
          </div>
          <div>
            <div className="square"></div>
            <div className="room">
              <div>식음료</div>
            </div>
          </div>
          <div>
            <div className="square"></div>
            <div className="room">
              <div>스포츠</div>
            </div>
          </div>
        </div>
        <div className="all">
          모두보기
          <FaAngleDown />
        </div>
      </div>
      <div className="border">
        <div className="title">가격 범위</div>
        <div>
          체험의 평균 요금은 ₩71090입니다.
          <br />
          <div className="range">
            <div className="box">
              <div className="details">최저 요금</div>
              <div className="details">₩ 1195</div>
            </div>
            <span>-</span>
            <div className="box">
              <div className="details">최고 요금</div>
              <div className="details">₩ 119575+</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="title">체험 진행 언어</div>
        <div className="type">
          <div>
            <div className="square"></div>
            <div className="room">
              <div>영어</div>
            </div>
          </div>
          <div>
            <div className="square"></div>
            <div className="room">
              <div>프랑스어</div>
            </div>
          </div>
          <div>
            <div className="square"></div>
            <div className="room">
              <div>독일어</div>
            </div>
          </div>
          <div>
            <div className="square"></div>
            <div className="room">
              <div>일본어</div>
            </div>
          </div>
        </div>
        <div className="all">
          모두보기
          <FaAngleDown />
        </div>
      </div>
      <div className="footer">
        <div className="cancle">전체 해제</div>
        <div className="more">300개 이상의 숙소보기</div>
      </div>
    </Popups>
  );
}

export default Filter;
