import "./CommentCard.css";
import { useRef } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { deleteComment } from "../../utils/api";
dayjs.extend(relativeTime);

const CommentCard = ({ comment, setComments }) => {
  const currentUser = "grumpy19"; //hardcoded for now

  const handleDelete = () => {
    deleteComment(comment.comment_id)
      .then(() => {
        setComments((currComments) => {
          return currComments.filter((c) => c.comment_id !== comment.comment_id);
        });
      })
      .catch((err) => {
        console.log("error deleting comment");
      });
  };

  return (
    <li className="comment-card">
      <p>{comment.author}</p>
      <p>{dayjs(comment.created_at).fromNow()}</p>
      <p className="comment-body">{comment.body}</p>
      <p>{comment.votes} votes</p>

      {comment.author === currentUser ? (
        <IconButton className="delete-button" onClick={handleDelete} color="default" size="small">
          <DeleteOutlinedIcon fontSize="small" />
        </IconButton>
      ) : (
        ""
      )}
    </li>
  );
};

export default CommentCard;
