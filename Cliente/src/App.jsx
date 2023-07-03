import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { NotFound } from "./pages/NotFound";
import { DashBoard } from "./pages/main/DashBoard";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
