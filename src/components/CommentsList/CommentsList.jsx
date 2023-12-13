import "./CommentsList.css";

const CommentsList = ({ comments }) => {
  return (
    <ul className="comments-list">
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentsList;
