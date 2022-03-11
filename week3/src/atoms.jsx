import { atom } from "recoil";

export const isLoggedInAtom = atom({
  key: "loggedIn",
  default: false,
});
export const isNameAtom = atom({
  key: "name",
  default: "",
});
export const isEmailAtom = atom({
  key: "email",
  default: "",
});