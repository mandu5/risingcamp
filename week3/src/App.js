import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { isEmailAtom, isLoggedInAtom, isNameAtom } from "./atoms";
import { authService } from "./myBase";
import Routers from "./Router";

const App = React.memo(()=> {
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const [init, setInit] = useState(false);
  const setName = useSetRecoilState(isNameAtom);
  const setEmail = useSetRecoilState(isEmailAtom);
  useEffect(() => {
    authService.onAuthStateChanged((loggedIn) => {
      loggedIn ? setIsLoggedIn(true) : setIsLoggedIn(false);
      const email = loggedIn.email;
      const name = loggedIn.displayName;
      setName(name);
      setEmail(email);
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <Routers /> : ""}
    </>
  );
});

export default App;
