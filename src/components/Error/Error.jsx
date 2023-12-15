import "./Error.css";

const Error = ({ status, message }) => {
  return (
    <div className="error-display">
      <h2>Error</h2>
      {status ? <p>{status}</p> : ""}

      <p>{message}</p>
    </div>
  );
};

export default Error;
