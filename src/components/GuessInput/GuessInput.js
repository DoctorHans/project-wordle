import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(guess);
        setGuess("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
