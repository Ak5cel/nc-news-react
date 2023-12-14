import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import "./UpVoteButton.css";

const UpVoteButton = ({ onClick, isSelected, isDisabled }) => {
  if (isDisabled) {
    return (
      <button className="up-vote-button" disabled>
        <ThumbUpAltRoundedIcon color="disabled" />
      </button>
    );
  }

  return (
    <button className="up-vote-button" onClick={onClick}>
      <ThumbUpAltRoundedIcon color={isSelected ? "primary" : "inherit"} />
    </button>
  );
};

export default UpVoteButton;
