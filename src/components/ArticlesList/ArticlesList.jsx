import ArticleCard from "../ArticleCard";

const ArticlesList = ({ articles }) => {
  return (
    <div className="articles-list">
      Articles List
      <ul>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;
