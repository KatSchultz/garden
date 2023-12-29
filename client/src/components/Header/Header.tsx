import Login from "../Login/Login";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1 className="title">Mi Native Garden</h1>
      <Login />
    </header>
  );
};

export default Header;
