import { useParams } from "react-router-dom";
import "./SingleArticleView.css";
import Article from "../Article";

const SingleArticleView = () => {
  const { article_id } = useParams();

  return (
    <section className="single-article-view">
      <Article article_id={article_id} />
    </section>
  );
};

export default SingleArticleView;
