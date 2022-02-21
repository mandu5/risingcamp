import React from "react";
import styled from "styled-components";
import { BsToggleOff } from "react-icons/bs";

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
    border-bottom: 1px solid #d1cdcd;
  }
  .subtitle {
    font-size: 14px;
    color: rgb(116, 113, 113);
    padding-bottom: 20px;
  }
  .button {
    float: right;
    margin-top: -40px;
    font-size: 30px;
    cursor: pointer;
  }
  .type {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .room {
      margin: -30px 0 0 40px;
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
      <div className="border">
        <div className="title">취소 수수료 없음</div>
        <div>
          <div className="subtitle">무료 취소가 가능한 숙소만 표시</div>
          <div className="button"><BsToggleOff /></div>
        </div>
      </div>
      <div className="border">
        <div className="title">취소 수수료 없음</div>
        <div>
          <div>
            에어비엔비 플러스
            <br />
            <div className="subtitle">
              퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션
            </div>
          </div>
          <div className="button"><BsToggleOff /></div>
        </div>
      </div>
      <div>
        <div className="title">숙소 유형</div>
        <div className="type">
          <div>
            <div className="square"></div>
            <div className="room">
              <div>집 전체</div>
              <div className="subtitle">집 전체를 단독으로 사용합니다</div>
            </div>
          </div>
          <div>
            <div className="square"></div>
            <div className="room">
              <div>개인실</div>
              <div className="subtitle">
                침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께
                이용할 수도 있습니다
              </div>
            </div>
          </div>
          <div>
            <div className="square"></div>
            <div className="room">
              <div>호텔 객실</div>
              <div className="subtitle">
                부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다
              </div>
            </div>
          </div>
          <div>
            <div className="square"></div>
            <div className="room">
              <div>다인실</div>
              <div className="subtitle">
                사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께
                이용합니다
              </div>
            </div>
          </div>
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
