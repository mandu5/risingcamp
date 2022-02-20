import React from "react";
import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";

const Drop = styled.div`
  .dropdown {
    position: absolute;
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
      top: 50px;
      visibility: visible;
      opacity: 1;
    }
    h3 {
      width: 87%;
      font-size: 13px;
      font-weight: 500;
      border-radius: 12px;
      color: #555;
      line-height: 1.2em;
      margin: 10px 0px 10px 20px;
      padding: 10px;
      &:hover {
        background-color: rgb(211, 210, 210);
      }
    }
  }
`;

function Dropdown({ dropdown, dropToggle }) {
  return (
    <Drop onClick={dropToggle}>
      <div>
        더 보기 <FaAngleDown />
      </div>
      <div className={dropdown}>
        <h3>돔</h3>
        <h3>키클라데스</h3>
        <h3>주택</h3>
        <h3>객잔</h3>
        <h3>보트</h3>
        <h3>A자형 주택</h3>
        <h3>트룰로</h3>
        <h3>스키를 탄 채로 출입 가능</h3>
        <h3>속세를 벗어난 숙소</h3>
        <h3>유르트</h3>
      </div>
    </Drop>
  );
}

export default Dropdown;
