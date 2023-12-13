import { useEffect, useState } from "react";
import "./CommentsSection.css";
import CommentsList from "../CommentsList";
import { getCommentsByArticleId } from "../../utils/api";

const CommentsSection = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  return (
    <div className="comments-section">
      <h3 className="section-heading align-left">Comments ({comments.length})</h3>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsSection;
