import React, { useState } from 'react';
import Result from './Result.jsx';
import Starter from './Starter.js';
const Congrats = ({ questionsDone, correctCount, questions, redirect }) => {
  if (questionsDone) {
    return (
      <div className="congrats">
        <h2 id='congratsTitle'>Congratulations! You Completed All the Tests!</h2>
        <Result correctCount={correctCount} questions={questions} />
        <button className="button-43" id="tryAgainBtn" onClick={redirect}>
          Try Again
        </button>
      </div>
    );
  }
};

export default Congrats;
