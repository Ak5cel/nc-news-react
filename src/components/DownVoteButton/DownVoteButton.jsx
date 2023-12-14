import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import "./DownVoteButton.css";

const DownVoteButton = ({ onClick, isSelected, isDisabled }) => {
  if (isDisabled) {
    return (
      <button className="down-vote-button" disabled>
        <ThumbDownAltRoundedIcon color="disabled" />
      </button>
    );
  }

  return (
    <button className="down-vote-button" onClick={onClick}>
      <ThumbDownAltRoundedIcon color={isSelected ? "primary" : "inherit"} />
    </button>
  );
};

export default DownVoteButton;
