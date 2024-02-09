import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";
import Home from "../../pages/Home";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import Plants from "../Plants/Plants";
import Plant from "../Plant/Plant";
import NavMenu from "../NavMenu/NavMenu";
import Login from "../Login/Login";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const App = () => {
  const { user, userProfile } = useContext(AuthContext);
  console.log("userProfile: ", userProfile);
  console.log("user: ", user);
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__contents">
          <NavMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/plants"
              element={<Plants isUserPlants={false} userId={null} />}
            />
            <Route path="/plants/:id" element={<Plant />} />
            <Route path="/users/:userId" element={<Profile />} />

            <Route
              path="/users/:userId/plants"
              element={
                <Plants
                  isUserPlants
                  userId={userProfile ? userProfile._id : ""}
                />
              }
            />
            <Route path="/users/:userId/plants/:id" element={<Plant />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
