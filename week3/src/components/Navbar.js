import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isEmailAtom, isLoggedInAtom, isNameAtom } from "../atoms";
import LogoutButton from "./LogoutButton";
import Option from "./Option";
import { authService } from "../myBase";

const SHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid #efefef;
  padding: 18px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  max-width: 930px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
`;
const Profile = styled.div``;

function Navbar({ setCity, setDate }) {
  const name = useRecoilValue(isNameAtom);
  const email = useRecoilValue(isEmailAtom);
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const setName = useSetRecoilState(isNameAtom);
  const setEmail = useSetRecoilState(isEmailAtom);
  useEffect(() => {
    authService.onAuthStateChanged((loggedIn) => {
      loggedIn ? setIsLoggedIn(true) : setIsLoggedIn(false);
      const email = loggedIn.email;
      const name = loggedIn.displayName;
      setName(name);
      setEmail(email);
    });
  }, [setEmail, setIsLoggedIn, setName]);
  return (
    <SHeader>
      <Wrapper>
        <Column>
          <h1>과거와 현재</h1>
        </Column>
        <Column>
        <Option setCity={setCity} setDate={setDate} />
        </Column>
        <Column>
          <Profile>
            <div>{name}</div>
            <div>{email}</div>
          </Profile>
          <LogoutButton />
        </Column>
      </Wrapper>
    </SHeader>
  );
}

export default Navbar;
