import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const topics = [
    {
      slug: "coding",
      description: "Code is love, code is life",
    },
    {
      slug: "football",
      description: "FOOTIE!",
    },
    {
      slug: "cooking",
      description: "Hey good looking, what you got cooking?",
    },
  ];

  return (
    <nav className="nav">
      <Link to={`/articles`}>All</Link>
      {topics.map((topic) => {
        return (
          <Link key={topic.slug} to={`/articles/${topic.slug}`}>
            {" | "} {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
