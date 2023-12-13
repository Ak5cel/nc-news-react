import { useEffect, useState } from "react";
import { getArticleById } from "../../utils/api";
import "./Article.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import VoteAdder from "../VoteAdder";
dayjs.extend(relativeTime);

const Article = ({ article_id }) => {
  const [article, setArticle] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setVotes(article.votes);
      setIsLoading(false);
    });
  }, []);

  const handleUpVote = () => {
    console.log("upvote article");
    setVotes(votes + 1);
  };

  const handleDownVote = () => {
    console.log("downvote article");
    setVotes(votes - 1);
  };

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
      <p>
        {article.votes} votes • {article.comment_count} comments
      </p>
      <VoteAdder onUpVote={handleUpVote} onDownVote={handleDownVote}>
        {votes}
      </VoteAdder>
    </article>
  );
};

export default Article;
