import { useParams } from "react-router-dom";
import "./SingleArticleView.css";
import Article from "../Article";
import CommentsSection from "../CommentsSection/CommentsSection";

const SingleArticleView = () => {
  const { article_id } = useParams();

  return (
    <section className="single-article-view">
      <Article article_id={article_id} />
      <CommentsSection article_id={article_id} />
    </section>
  );
};

export default SingleArticleView;
