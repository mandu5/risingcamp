import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "./atoms";
import Home from "./routes/Home";
import Login from "./routes/Login";

function Routers() {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
export default Routers;
