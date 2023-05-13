import React from 'react';
import { useState } from 'react';

const Questions = (props) => {
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
  //state to loop through questions
  const [currentQIndex, setCurrentQIndex] = useState(0);
  //handle incrementing index
  const handleNextQuestion = () => setCurrentQIndex(currentQIndex + 1);
  const currentQ = tempQuestions[currentQIndex];
  console.log(currentQ);
  //if login is true AND quizState is true, return this component
  if (props.login && props.quizState) {
    return (
      <div id="question">
        <h2>{currentQ.question}</h2>
        <ul className="options">
          <button onClick={handleNextQuestion}>{currentQ.a}</button>
          <button onClick={handleNextQuestion}>{currentQ.b}</button>
          <button onClick={handleNextQuestion}>{currentQ.c}</button>
          <button onClick={handleNextQuestion}>{currentQ.d}</button>
        </ul>
      </div>
    );
  }
};

export default Questions;
