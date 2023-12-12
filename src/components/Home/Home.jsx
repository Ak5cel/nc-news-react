import "./Home.css";
import ArticlesList from "../ArticlesList/ArticlesList";
import Banner from "../Banner";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../utils/api";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles.slice(0, 10));
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="home-page">
      <Banner />
      <h2 className="align-left">What's Happening</h2>
      <Link to={`/articles`} key={"view-more"} className="view-more-link">
        View More {">"}
      </Link>
      {isLoading ? <p>Loading...</p> : <ArticlesList articles={articles} />}
    </div>
  );
};

export default Home;
