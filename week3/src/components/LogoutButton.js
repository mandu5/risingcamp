import React from "react";
import styled from "styled-components";
import { authService } from "../myBase";

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 -80px 0 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
`;
function LogoutButton() {
  const onLogOutClick = () => authService.signOut();
  return <Button onClick={onLogOutClick}>Log Out</Button>;
}

export default LogoutButton;
