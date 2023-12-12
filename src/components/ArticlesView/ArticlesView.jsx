import { useEffect, useState } from "react";
import ArticlesList from "../ArticlesList";
import axios from "axios";
import { getArticles } from "../../utils/api";

const ArticlesView = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="articles-view">
      <h2 className="section-heading align-left">Browse Articles</h2>

      {isLoading ? <p>Loading...</p> : <ArticlesList articles={articles} />}
    </div>
  );
};

export default ArticlesView;
