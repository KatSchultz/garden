import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavMenu.css";

const NavMenu = () => {
  const { user } = useContext(AuthContext) || "";

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
          <Link to={user ? `/users/${user.uid}` : "/login"}>Profile</Link>
        </li>
        <li className="nav__list--item">
          <Link to={user ? `/users/${user.uid}/plants` : "/login"}>
            My Plants
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
