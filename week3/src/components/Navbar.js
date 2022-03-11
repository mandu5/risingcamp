import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isEmailAtom, isNameAtom } from "../atoms";
import LogoutButton from "./LogoutButton";

const Header = styled.div``;

function Navbar() {
    const name = useRecoilValue(isNameAtom);
    const email = useRecoilValue(isEmailAtom);
  return (
    <Header>
      <h1>과거와 현재</h1>
      {name}
      {email}
      <LogoutButton />
    </Header>
  );
}

export default Navbar;
