import CommentCard from "../CommentCard/CommentCard";
import "./CommentsList.css";

const CommentsList = ({ comments, setComments }) => {
  return (
    <ul className="comments-list">
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} setComments={setComments} />;
      })}
    </ul>
  );
};

export default CommentsList;
