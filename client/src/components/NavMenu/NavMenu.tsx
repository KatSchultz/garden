import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavMenu.css";

const NavMenu = () => {
  const { userProfile } = useContext(AuthContext) || "";

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list--item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="nav__list--item">
          <Link to={"/search"}>Search</Link>
        </li>
        <li className="nav__list--item">
          <Link to={userProfile ? `/users/${userProfile._id}` : "/login"}>
            Profile
          </Link>
        </li>
        <li className="nav__list--item">
          <Link
            to={userProfile ? `/users/${userProfile._id}/plants` : "/login"}
          >
            My Plants
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
