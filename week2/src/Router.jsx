import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./routes/Mainpage";
import Search from "./routes/Search";
import Experience from "./routes/Experience";


function Routers() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}
export default Routers;
