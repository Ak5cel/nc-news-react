import "./CommentCard.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const CommentCard = ({ comment }) => {
  return (
    <li className="comment-card">
      <p>{comment.author}</p>
      <p>{dayjs(comment.created_at).fromNow()}</p>
      <p className="comment-body">{comment.body}</p>
      <p>{comment.votes} votes</p>
    </li>
  );
};

export default CommentCard;
