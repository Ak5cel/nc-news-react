import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import "./DownVoteButton.css";

const DownVoteButton = ({ onDownVote }) => {
  return (
    <button onClick={onDownVote}>
      <ThumbDownAltRoundedIcon />
    </button>
  );
};

export default DownVoteButton;
