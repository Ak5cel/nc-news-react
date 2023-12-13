import { useEffect, useState } from "react";
import { getArticleById } from "../../utils/api";
import "./Article.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Article = ({ article_id }) => {
  const [article, setArticle] = useState({});
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  if (isloading) {
    return <p>Loading...</p>;
  }

  return (
    <article className="article">
      <h2>{article.title}</h2>
      <p>
        {article.author} • {dayjs(article.created_at).fromNow()}
      </p>
      <p className="topic-tag">{article.topic}</p>
      <img src={article.article_img_url} alt="" />
      <p className="article-body">{article.body}</p>
      <p>{article.votes} votes</p>
    </article>
  );
};

export default Article;
