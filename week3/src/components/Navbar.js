import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isEmailAtom, isNameAtom } from "../atoms";
import LogoutButton from "./LogoutButton";
import Option from "./Option";

const SHeader = styled.header`
  width: 100%;
  padding: 18px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 5px 5px #7b79ef;
  background-color: #8785EF;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .input {
    border: 1px solid #b7aff9;
    border-radius: 5px;
    padding: 2px;
  }
`;
const Column = styled.div`
  display: flex;
  .submit {
    padding: 10px 15px;
    margin: 0 0 0 5px;
    background-color: #191919;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`;
const Profile = styled.div`
  text-align: center;
  .email {
    color: #FAF7FF;
  }
`;

function Navbar({ setCity, setDate, setCityTwo, setDateTwo, onClick }) {
  const name = useRecoilValue(isNameAtom);
  const email = useRecoilValue(isEmailAtom);

  return (
    <SHeader>
      <Wrapper>
        <Column>
          <h1>날씨 비교</h1>
        </Column>
        <Column className="input">
          <Option
            setCity={setCity}
            setDate={setDate}
            setCityTwo={setCityTwo}
            setDateTwo={setDateTwo}
          />
          <button className="submit" onClick={onClick}>
            비교
          </button>
        </Column>
        <Column>
          <Profile>
            <div>{name}</div>
            <div className="email">{email}</div>
          </Profile>
          <LogoutButton />
        </Column>
      </Wrapper>
    </SHeader>
  );
}

export default Navbar;
