import "./ArticleCard.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ArticleCard = ({ article }) => {
  return (
    <li className="article-card">
      <h3>{article.title}</h3>
      <p>
        {article.author} • {dayjs(article.created_at).fromNow()}
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
