import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { getTopics } from "../../utils/api";

const Navbar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav className="nav">
      <Link to={`/articles`}>All</Link>
      {topics.map((topic) => {
        return (
          <Link key={topic.slug} to={`/articles/topic/${topic.slug}`}>
            {" | "} {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
