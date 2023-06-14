import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login/Login";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
