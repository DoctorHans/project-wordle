import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ numOfGuesses }) {
  return (
    <Banner variant="happy">
      <strong>Congratulations!</strong> You got it in{" "}
      <strong>
        {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
      </strong>
    </Banner>
  );
}

export default WonBanner;
