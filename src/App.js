import "./App.css";
// eslint-disable-next-line no-unused-vars
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Task2 from "./Components/Task2";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Routes> */}
          {/* <Task2 /> */}
          <Dashboard/>
          {/* <Navbar/> */}
          {/* <Route path="/singUp" element={<Singup />} /> */}
        {/* </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
