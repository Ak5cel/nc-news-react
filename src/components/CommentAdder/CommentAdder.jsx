import "./CommentAdder.css";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useRef, useState } from "react";
import { useSnackbar } from "notistack";
import { postComment } from "../../utils/api";

const CommentAdder = ({ setComments, article_id }) => {
  const { currentUser } = useContext(UserContext);
  const [commentBodyInput, setCommentBodyInput] = useState("");
  const addButtonRef = useRef(null);
  const { enqueueSnackbar } = useSnackbar();

  const showCustomError = (err) => {
    if (err.code === "ERR_NETWORK") {
      enqueueSnackbar("Network error. Please make sure you're online and try again");
    } else {
      enqueueSnackbar("Oops, something went wrong");
    }
  };

  const handleCommentInput = (e) => {
    setCommentBodyInput(e.target.value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();

    setCommentBodyInput("");

    postComment(currentUser, commentBodyInput, article_id)
      .then((newComment) => {
        setComments((currComments) => {
          return [newComment, ...currComments];
        });
      })
      .catch((err) => {
        // refill the form with user's input and show error feedback
        // if posting fails
        setCommentBodyInput(commentBodyInput);
        showCustomError(err);
      });
  };

  return (
    <form className="comment-adder" onSubmit={handleAddComment}>
      <label htmlFor="comment-body-input">
        Add a comment
        <textarea
          name="comment-body"
          id="comment-body-input"
          placeholder="New comment here"
          value={commentBodyInput}
          onChange={handleCommentInput}
          required
        ></textarea>
      </label>
      <button ref={addButtonRef}>Add</button>
    </form>
  );
};

export default CommentAdder;
