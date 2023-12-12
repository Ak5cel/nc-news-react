import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  return (
    <div className="articles-list">
      Articles List
      <ul>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </ul>
    </div>
  );
};

export default ArticlesList;
