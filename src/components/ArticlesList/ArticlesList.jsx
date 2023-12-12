import ArticleCard from "../ArticleCard";
import "./ArticlesList.css";

const ArticlesList = ({ articles }) => {
  return (
    <ul className="articles-list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
};

export default ArticlesList;
