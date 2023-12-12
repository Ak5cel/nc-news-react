import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to={"/home"}>
        <h1>NCN</h1>
      </Link>
    </header>
  );
};

export default Header;
