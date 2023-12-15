import { useEffect, useState } from "react";
import ArticlesList from "../ArticlesList";
import { getArticles } from "../../utils/api";
import { useParams } from "react-router-dom";
import Error from "../Error";

const ArticlesView = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
        setApiError(null);
      })
      .catch((err) => {
        if (err.response) {
          setApiError({ status: err.response.status, message: err.response.data.msg });
        } else {
          setApiError({ message: "Oops, something went wrong" });
        }
      });
  }, [topic]);

  if (apiError) {
    return <Error status={apiError.status} message={apiError.message} />;
  }

  return (
    <div className="articles-view">
      <h2 className="section-heading align-left">
        {topic ? topic[0].toUpperCase() + topic.slice(1) : "Browse Articles"}
      </h2>

      {isLoading ? <p>Loading...</p> : <ArticlesList articles={articles} />}
    </div>
  );
};

export default ArticlesView;
