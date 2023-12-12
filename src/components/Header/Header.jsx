import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to={"/home"}>
        <h1>NCN</h1>
      </Link>
    </header>
  );
};

export default Header;
