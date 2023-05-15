import React, { useState } from 'react';
import Result from './Result.jsx';
const Congrats = ({ correctCount }) => {
  //todo: pased in correctCount state, also needs questions' LENGTH and prop drill to Result component
  return (
    <div>
      <h2>Congratulations! You Completed All the Tests!</h2>
      <Result correctCount={correctCount} />
      <button>Try Again</button>
    </div>
  );
};

export default Congrats;
