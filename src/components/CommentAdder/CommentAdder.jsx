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

    setComments((currComments) => {
      const newComment = {
        comment_id: currComments.length + 1,
        body: commentBodyInput,
        article_id: article_id,
        author: currentUser,
        votes: 0,
        created_at: Date.now(),
      };

      return [newComment, ...currComments];
    });
    setCommentBodyInput("");

    postComment(currentUser, commentBodyInput, article_id).catch((err) => {
      // reset comments and refill the form with user's input
      // if posting fails
      setCommentBodyInput(commentBodyInput);
      setComments((currComments) => {
        const newCommentId = currComments.length;
        console.log(newCommentId, "<--new id");

        return currComments.filter((comment) => comment.comment_id !== newCommentId);
      });
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
