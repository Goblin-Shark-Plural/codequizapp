import React from 'react';
import { useState } from 'react';
import Starter from './Starter';
import UserLogin from './UserLogin';
import Questions from './Questions';
import Congrats from './Congrats';

const LandingPage = () => {
  //state to handle if user is logged iin
  const [login, setLogin] = useState(false);
  //state to handle questions
  const [questions, setQuestions] = useState({});
  //state to handle whether quiz is in currently in session or not
  const [quizState, setQuizState] = useState(false);
  //state to loop through questions
  const [currentQIndex, setCurrentQIndex] = useState(0);
  //state to track correct answers
  const [correctCount, setCorrectCount] = useState(0);
  //state to handle questions being completed
  const [questionsDone, setQuestionsDone] = useState(false);

  const handleCurrentQIndex = () => {
    setCurrentQIndex(currentQIndex + 1);
  };

  //function to set questionsDone state
  const handleQuestionsDone = () => {
    setQuestionsDone(true);
  };

  //function to update correctCount
  const handleCorrectCount = () => {
    setCorrectCount(correctCount + 1);
  };
  //function to redirect congrats page back to starter once try again button is clicked
  const redirect = () => {
    setQuizState(false);
    setQuestionsDone(false);
    setCurrentQIndex(0);
    setCorrectCount(0);
  };

  //a callback to handle the click event of GO button to decide whether or not to render the next page

  //function to update loginState
  const updateLogin = () => setLogin(true);

  const handleStartClick = async () => {
    //update quizState to true
    setQuizState(!quizState);
    // send fetch request to retrieve questions from database
    try {
      const response = await fetch('/questions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setQuestions(result);
      console.log(result);
    } catch (err) {
      console.log('Error: ', err);
    }
  };
  return (
    <div id='landingPage'>
      <h1 id='title'>CodeQuiz</h1>
      <UserLogin
        login={login}
        updateLogin={updateLogin}
        quizState={quizState}
      />
      <Starter
        login={login}
        quizState={quizState}
        handleStartClick={handleStartClick}
      />
      <Questions
        login={login}
        quizState={quizState}
        questions={questions}
        questionsDone={questionsDone}
        currentQIndex={currentQIndex}
        handleQuestionsDone={handleQuestionsDone}
        handleCorrectCount={handleCorrectCount}
        handleCurrentQIndex={handleCurrentQIndex}
      />

      <Congrats
        correctCount={correctCount}
        questionsDone={questionsDone}
        questions={questions}
        redirect={redirect}
      />
    </div>
  );
};

export default LandingPage;
