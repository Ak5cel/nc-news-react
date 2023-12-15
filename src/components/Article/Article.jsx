import { useEffect, useState } from "react";
import { downVoteArticle, getArticleById, upVoteArticle } from "../../utils/api";
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
    return upVoteArticle(article_id);
  };

  const handleDownVote = () => {
    return downVoteArticle(article_id);
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

      <VoteAdder handleUpVote={handleUpVote} handleDownVote={handleDownVote} setState={setVotes}>
        <span className="votes">{votes}</span>
      </VoteAdder>
    </article>
  );
};

export default Article;
