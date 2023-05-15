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
    const tempQuestions = [
      {
        question:
          'Which operator returns true if the two compared values are not equal?',
        a: '<>',
        b: '~',
        c: '==!',
        d: '!==',
        answer: '!==',
      },
      {
        question: 'How is a forEach statement different from a for statement?',
        a: ' Only a for statement uses a callback function.',
        b: 'A for statement is generic, but a forEach statement can be used only with an array.',
        c: 'Only a forEach statement lets you specify your own iterator.',
        d: 'A forEach statement is generic, but a for statement can be used only with an array.',
        answer:
          'A for statement is generic, but a forEach statement can be used only with an array.',
      },
      {
        question:
          'Which statement is the correct way to create a variable called rate and assign it the value 100?',
        a: 'let rate = 100;',
        b: 'let 100 = rate;',
        c: '100 = let rate;',
        d: 'rate = 100;',
        answer: 'let rate = 100',
      },
      {
        question: 'Which method converts JSON data to a JavaScript object?',
        a: 'JSON.fromString()',
        b: 'JSON.parse()',
        c: 'JSON.toObject()',
        d: 'JSON.stringify()',
        answer: 'JSON.parse()',
      },
      {
        question:
          'Which property references the DOM object that dispatched an event?',
        a: 'self',
        b: 'object',
        c: 'target',
        d: 'source',
        answer: 'target',
      },
    ];
    setQuestions(tempQuestions);
    //update quizState to true
    setQuizState(!quizState);
    // send fetch request to retrieve questions from database
    // try {
    //   const response = await fetch('databaseUrl', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
    //   const result = await response.json();
    //   console.log(result);
    // } catch (err) {
    //   console.log('Error: ', err);
    // }
  };
  return (
    <div id="landingPage">
      <h1 id="title">CodeQuiz</h1>
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
