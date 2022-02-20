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
        <div>
          <div className="title">취소 수수료 없음</div>
          <div>
            <div>무료 취소가 가능한 숙소만 표시</div>
            <div>버튼</div>
          </div>
        </div>
        <div>
          <div className="title">취소 수수료 없음</div>
          <div>
            <div>
              에어비엔비 플러스
              <br />
              <span>퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션</span>
            </div>
            <div>버튼</div>
          </div>
        </div>
        <div>
          <div className="title">숙소 유형</div>
          <div>
            <div>
              <div>버튼</div>
              <div>
                <div>집 전체</div>
                <div>집 전체를 단독으로 사용합니다</div>
              </div>
            </div>
            <div>
              <div>버튼</div>
              <div>
                <div>개인실</div>
                <div>
                  침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와
                  함께 이용할 수도 있습니다
                </div>
              </div>
            </div>
            <div>
              <div>버튼</div>
              <div>
                <div>호텔 객실</div>
                <div>
                  부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다
                </div>
              </div>
            </div>
            <div>
              <div>버튼</div>
              <div>
                <div>다인실</div>
                <div>
                  사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께
                  이용합니다
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="close">전체 해제</div>
        <div className="login">300개 이상의 숙소보기</div>
      </div>
    </Popups>
  );
}

export default Filter;
