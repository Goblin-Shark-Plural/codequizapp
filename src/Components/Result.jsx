import React from 'react';

const Result = ({ correctCount, questions }) => {
  return (
    <div>
      <h2>
        You have answered {correctCount}/{questions.length} correctly!
      </h2>
      <h2>You did great!</h2>
    </div>
  );
};

export default Result;
