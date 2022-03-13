import React from "react";
import { authService } from "../myBase";

function LogoutButton() {
  const onLogOutClick = () => authService.signOut();
  return <button onClick={onLogOutClick}>Log Out</button>;
}

export default LogoutButton;
