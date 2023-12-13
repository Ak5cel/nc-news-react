import DownVoteButton from "../DownVoteButton";
import UpVoteButton from "../UpVoteButton";
import "./VoteAdder.css";

const VoteAdder = ({ onUpVote, onDownVote, children }) => {
  return (
    <div className="vote-adder">
      <UpVoteButton onUpVote={onUpVote} />
      {children}
      <DownVoteButton onDownVote={onDownVote} />
    </div>
  );
};

export default VoteAdder;
