import React from 'react';
import { useState } from 'react';

const LandingPage = () => {
  //state to handle whether quiz is in currently in session or not (display either quizMe/AddQs buttons or questions from request)
  const [quizState, setQuizState] = useState(false);

  const handleQuizMeClick = () => {
    //send fetch request to retrieve questions from database
    setQuizState(true);
  };
  return (
    <div>
      <h1 id="title">CodeQuiz</h1>
      {!quizState ? (
        //display starter buttons if quizState is false
        <div className="starterButtons">
          <button onClick={handleQuizMeClick}>Quiz Me!</button>
          <button>Add Questions</button>
        </div>
      ) : (
        //display questions from request if quizState is true
        <div className="questionDiv">
          <h3>Question Component Placeholder</h3>
          {/* button for testing purposes...remove when creating function to update state when all questions have been answered */}
          <button onClick={() => setQuizState(false)}>End Quiz</button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
