import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { isLoggedInAtom } from "./atoms";
import { authService } from "./myBase";
import Routers from "./Router";

const App = React.memo(()=> {
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const [init, setInit] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((loggedIn) => {
      loggedIn ? setIsLoggedIn(true) : setIsLoggedIn(false);
      setInit(true);
    });
  }, [ setIsLoggedIn]);
  return (
    <>
      {init ? <Routers /> : ""}
    </>
  );
});

export default App;
