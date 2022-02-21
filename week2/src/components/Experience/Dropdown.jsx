import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import styled from "styled-components";

const Drop = styled.div`
  .dropdown {
    position: absolute;
    padding: 20px;
    margin: 110px 0 0 0;
    right: 90px;
    background: #fff;
    width: 350px;
    box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    visibility: hidden;
    opacity: 0;
    &.active {
      top: 40px;
      left: 120px;
      visibility: visible;
      opacity: 1;
      @media (max-width: 1200px) {
        visibility: hidden;
        width: 0;
        height: 0;
      }
    }
    .type {
      font-size: 17px;
    }
    .age {
      font-size: 14px;
      color: #928f8f;
    }
    .right {
      float: right;
      font-size: 15px;
      margin-top: -40px;
      .button {
        font-size: 35px;
        margin-bottom: -12px;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
    .foot {
      border-top: 1px solid #d1cdcd;
      margin: 10px;
      .remove {
        font-size: 15px;
        margin-top: 20px;
        text-decoration: underline;
        &:hover {
          color: #d1cdcd;
          cursor: pointer;
        }
      }
      .save {
        float: right;
        width: 50px;
        padding: 12px;
        border-radius: 10px;
        cursor: pointer;
        margin-top: -25px;
        background: #000;
        color: #fff;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

function Dropdown({ dropdown, dropToggle }) {
  return (
    <Drop>
      <div onClick={dropToggle}>
        인원 <FaAngleDown />
      </div>
      <div className={dropdown}>
        <div>
          <div className="type">성인</div>
          <div className="age">만 13세 이상</div>
          <div className="right">
            <AiOutlineMinusCircle className="button" />
            0
            <AiOutlinePlusCircle className="button" />
          </div>
        </div>
        <div>
          <div className="type">어린이</div>
          <div className="age">만 2~12세</div>
          <div className="right">
            <AiOutlineMinusCircle className="button" />
            0
            <AiOutlinePlusCircle className="button" />
          </div>
        </div>
        <div>
          <div className="type">유아</div>
          <div className="age">만 2세 미만</div>
          <div className="right">
            <AiOutlineMinusCircle className="button" />
            0
            <AiOutlinePlusCircle className="button" />
          </div>
        </div>
        <div className="foot">
          <div className="remove">지우기</div>
          <div className="save">저장</div>
        </div>
      </div>
    </Drop>
  );
}

export default Dropdown;
