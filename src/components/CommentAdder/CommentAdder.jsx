import "./CommentAdder.css";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useRef, useState } from "react";
import { postComment } from "../../utils/api";

const CommentAdder = ({ setComments, article_id }) => {
  const { currentUser } = useContext(UserContext);
  const [commentBodyInput, setCommentBodyInput] = useState("");
  const addButtonRef = useRef(null);

  const handleCommentInput = (e) => {
    setCommentBodyInput(e.target.value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    addButtonRef.current.disabled = true; // disable button temporarily until posted

    console.log(`adding ${commentBodyInput} as ${currentUser} for ${article_id}`);

    postComment(currentUser, commentBodyInput, article_id).then((newComment) => {
      setComments((currComments) => {
        return [newComment, ...currComments];
      });
      setCommentBodyInput("");
      addButtonRef.current.disabled = false;
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
