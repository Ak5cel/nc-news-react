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
    upVoteArticle(article_id).catch((err) => {
      console.log(err.response.data);
      setVotes((currVotes) => currVotes - 1);
    });

    setVotes((currVotes) => currVotes + 1);
  };

  const handleDownVote = () => {
    downVoteArticle(article_id).catch((err) => {
      console.log(err.response.data);
      setVotes((currVotes) => currVotes + 1);
    });

    setVotes((currVotes) => currVotes - 1);
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
      <VoteAdder onUpVote={handleUpVote} onDownVote={handleDownVote}>
        <span className="votes">{votes}</span>
      </VoteAdder>
    </article>
  );
};

export default Article;
