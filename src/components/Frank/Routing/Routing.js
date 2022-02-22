import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";

function Routing() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default Routing;
