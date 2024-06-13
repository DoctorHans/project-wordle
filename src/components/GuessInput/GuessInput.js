import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(tentativeGuess);
        handleSubmitGuess(tentativeGuess);
        setTentativeGuess("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={tentativeGuess}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
