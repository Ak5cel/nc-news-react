import "./CommentAdder.css";

const CommentAdder = () => {
  return (
    <form className="comment-adder">
      <label htmlFor="comment-body-input">
        Add a comment
        <textarea name="comment-body" id="comment-body-input" placeholder="New comment here" required></textarea>
      </label>
      <button>Add</button>
    </form>
  );
};

export default CommentAdder;
