import CommentCard from "../CommentCard/CommentCard";
import "./CommentsList.css";

const CommentsList = ({ comments }) => {
  return (
    <ul className="comments-list">
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </ul>
  );
};

export default CommentsList;
