import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";
import Home from "../../pages/Home";
import Profile from "../Profile/Profile";
// import Plants from "../Plants/Plants";
import NavMenu from "../NavMenu/NavMenu";
import Login from "../Login/Login";
import { useState } from "react";
// import AuthContext from "../../context/AuthContext";
import { PlantModel } from "../../models/plant";
import PlantPage from "../../pages/PlantPage";
import SearchPage from "../../pages/SearchPage";
import UserPlantPage from "../../pages/UserPlantPage";

const App = () => {
  // const { userProfile, userPlants } = useContext(AuthContext);
  const [searchPlants, setSearchPlants] = useState<PlantModel[]>([]);
  console.log(searchPlants);

  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__contents">
          <NavMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/search"
              element={
                <SearchPage
                  setSearchPlants={setSearchPlants}
                  searchPlants={searchPlants}
                />
              }
            />
            {/* <Route
              path="/plants"
              element={
                <Plants
                  isUserPlants={false}
                  userId={null}
                  searchPlants={searchPlants}
                />
              }
            /> */}
            <Route path="/plants/:id" element={<PlantPage />} />
            <Route path="/users/:userId" element={<Profile />} />

            <Route path="/users/:userId/plants" element={<UserPlantPage />} />
            <Route path="/users/:userId/plants/:id" element={<PlantPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
