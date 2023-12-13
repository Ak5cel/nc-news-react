import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import "./UpVoteButton.css";

const UpVoteButton = ({ onUpVote }) => {
  return (
    <button onClick={onUpVote}>
      <ThumbUpAltRoundedIcon />
    </button>
  );
};

export default UpVoteButton;
