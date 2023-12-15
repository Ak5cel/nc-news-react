import { useEffect, useState } from "react";
import "./CommentsSection.css";
import CommentsList from "../CommentsList";
import Error from "../Error";
import { getCommentsByArticleId } from "../../utils/api";
import CommentAdder from "../CommentAdder";

const CommentsSection = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setApiError(null);
      })
      .catch((err) => {
        if (err.response) {
          setApiError({ status: err.response.status, message: err.response.data.msg });
        } else {
          setApiError({ message: "Oops, something went wrong" });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  return (
    <div className="comments-section">
      <h3 className="section-heading align-left">Comments ({comments.length})</h3>

      {apiError ? (
        <Error status={apiError.status} message={apiError.message} />
      ) : (
        <>
          <CommentAdder setComments={setComments} article_id={article_id} />
          <CommentsList comments={comments} setComments={setComments} />
        </>
      )}
    </div>
  );
};

export default CommentsSection;
