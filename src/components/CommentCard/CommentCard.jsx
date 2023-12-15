import "./CommentCard.css";
import { useContext, useRef } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useSnackbar } from "notistack";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { deleteComment } from "../../utils/api";
dayjs.extend(relativeTime);

const CommentCard = ({ comment, setComments }) => {
  const { currentUser } = useContext(UserContext);
  const deleteButtonRef = useRef(null);
  const { enqueueSnackbar } = useSnackbar();

  const showCustomError = (err) => {
    if (err.code === "ERR_NETWORK") {
      enqueueSnackbar("Network error, please make sure you're online and try again");
    } else {
      enqueueSnackbar("Oops, something went wrong");
    }
  };

  const handleDelete = () => {
    deleteButtonRef.current.disabled = true;
    deleteComment(comment.comment_id)
      .then(() => {
        setComments((currComments) => {
          return currComments.filter((c) => c.comment_id !== comment.comment_id);
        });
      })
      .catch((err) => {
        showCustomError(err);
      })
      .finally(() => {
        deleteButtonRef.current.disabled = false;
      });
  };

  return (
    <li className="comment-card">
      <p>{comment.author}</p>
      <p>{dayjs(comment.created_at).fromNow()}</p>
      <p className="comment-body">{comment.body}</p>
      <p>{comment.votes} votes</p>

      {comment.author === currentUser ? (
        <IconButton className="delete-button" onClick={handleDelete} ref={deleteButtonRef} color="default" size="small">
          <DeleteOutlinedIcon fontSize="small" />
        </IconButton>
      ) : (
        ""
      )}
    </li>
  );
};

export default CommentCard;
