import { useState } from "react";
import { useSnackbar } from "notistack";
import DownVoteButton from "../DownVoteButton";
import UpVoteButton from "../UpVoteButton";
import "./VoteAdder.css";

const VoteAdder = ({ handleUpVote, handleDownVote, setState, children }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const showCustomError = (err) => {
    if (err.code === "ERR_NETWORK") {
      enqueueSnackbar("Network error, please make sure you're online and try again");
    } else {
      enqueueSnackbar("Oops, something went wrong");
    }
  };

  const upVoteAction = () => {
    handleUpVote().catch((err) => {
      setState((n) => n - 1);
      setSelectedButton(null);
      showCustomError(err);
    });
    setState((n) => n + 1);
    setSelectedButton("up");
  };

  const undoUpVoteAction = () => {
    handleDownVote().catch((err) => {
      setState((n) => n + 1);
      setSelectedButton("up");
      showCustomError(err);
    });
    setState((n) => n - 1);
    setSelectedButton(null);
  };

  const downVoteAction = () => {
    handleDownVote().catch((err) => {
      setState((n) => n + 1);
      setSelectedButton(null);
      showCustomError(err);
    });
    setState((n) => n - 1);
    setSelectedButton("down");
  };

  const undoDownVoteAction = () => {
    handleUpVote().catch((err) => {
      setState((n) => n - 1);
      setSelectedButton("down");
      showCustomError(err);
    });
    setState((n) => n + 1);
    setSelectedButton(null);
  };

  return (
    <div className="vote-adder">
      <UpVoteButton
        onClick={!selectedButton ? upVoteAction : selectedButton === "up" ? undoUpVoteAction : null}
        isSelected={selectedButton === "up"}
        isDisabled={selectedButton === "down"}
      />
      {children}
      <DownVoteButton
        onClick={!selectedButton ? downVoteAction : selectedButton === "down" ? undoDownVoteAction : null}
        isSelected={selectedButton === "down"}
        isDisabled={selectedButton === "up"}
      />
    </div>
  );
};

export default VoteAdder;
