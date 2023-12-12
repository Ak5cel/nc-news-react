import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <li className="article-card">
      <h3>{article.title}</h3>
      <p>
        {article.author} • {article.created_at}
      </p>
      <img src={article.article_img_url} alt="" />
      <p>{article.topic}</p>
      <p>
        {article.votes} votes • {article.comment_count} comments
      </p>
    </li>
  );
};

export default ArticleCard;
