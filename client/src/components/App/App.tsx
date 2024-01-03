import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";
import Home from "../../pages/Home";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__contents">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
