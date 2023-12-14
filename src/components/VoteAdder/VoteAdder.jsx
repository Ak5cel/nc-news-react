import { useState } from "react";
import DownVoteButton from "../DownVoteButton";
import UpVoteButton from "../UpVoteButton";
import "./VoteAdder.css";

const VoteAdder = ({ handleUpVote, handleDownVote, setState, children }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const upVoteAction = () => {
    handleUpVote().catch(() => {
      setState((n) => n - 1);
      setSelectedButton(null);
    });
    setState((n) => n + 1);
    setSelectedButton("up");
  };

  const undoUpVoteAction = () => {
    handleDownVote().catch(() => {
      setState((n) => n + 1);
      setSelectedButton("up");
    });
    setState((n) => n - 1);
    setSelectedButton(null);
  };

  const downVoteAction = () => {
    handleDownVote().catch(() => {
      setState((n) => n + 1);
      setSelectedButton(null);
    });
    setState((n) => n - 1);
    setSelectedButton("down");
  };

  const undoDownVoteAction = () => {
    handleUpVote().catch(() => {
      setState((n) => n - 1);
      setSelectedButton("down");
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
