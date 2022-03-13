import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { isEmailAtom, isLoggedInAtom, isNameAtom } from "./atoms";
import { authService } from "./myBase";
import Routers from "./Router";

const App = React.memo(() => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const setName = useSetRecoilState(isNameAtom);
  const setEmail = useSetRecoilState(isEmailAtom);
  const [init, setInit] = useState(false);

  authService.onAuthStateChanged((loggedIn) => {
    if (loggedIn) {
      setIsLoggedIn(true);
      setName(loggedIn.displayName);
      setEmail(loggedIn.email);
    } else {
      setIsLoggedIn(false);
    }
    setInit(true);
  });

  return <>{init ? <Routers /> : ""}</>;
});

export default App;
