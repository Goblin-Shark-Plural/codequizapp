import React from 'react';
import { useState } from 'react';
import Starter from './Starter';
import UserLogin from './UserLogin';
import Questions from './Questions';

const LandingPage = () => {
  //state to handle if user is logged iin
  const [login, setLogin] = useState(false);
  //state to handle questions
  const [questions, setQuestions] = useState({});
  //state to handle whether quiz is in currently in session or not
  const [quizState, setQuizState] = useState(false);

  //a callback to handle the click event of GO button to decide whether or not to render the next page

  //function to update loginState
  const updateLogin = () => setLogin(true);

  const handleStartClick = async () => {
    const tempQuestions = [
      {
        question: 'What does the array method .push() do?',
        a: 'Not this one',
        b: 'Not this one',
        c: 'This one',
        d: 'Not this one',
        answer: 'c',
      },
      {
        question: 'What does the array method .pop() do?',
        a: 'Not this one',
        b: 'Not this one',
        c: 'Not this one',
        d: 'This one',
        answer: 'd',
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
      {/* <div>
      <UserLogin/>
      <Starter/>
      <Questions/>
      <Congrats/>
      </div> */}
      <h1 id="title">CodeQuiz</h1>
      <UserLogin login={login} updateLogin={updateLogin} />
      <Starter
        login={login}
        quizState={quizState}
        handleStartClick={handleStartClick}
      />
      <Questions login={login} quizState={quizState} questions={questions} />
    </div>
  );
};

export default LandingPage;
