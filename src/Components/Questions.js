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
  //state to track correct answers
  const [correctCount, setCorrectCount] = useState(0);
  //state to loop through questions
  const [currentQIndex, setCurrentQIndex] = useState(0);
  //handle incrementing index
  const handleNextQuestion = () => {
    if (currentQIndex < tempQuestions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      //pass correctCount to result component
      return;
    }
  };

  const currentQ = tempQuestions[currentQIndex];

  //compare response to correct answer, increment correctCount if correct
  const answerCheck = (selection) => {
    if (selection === currentQ.answer) setCorrectCount(correctCount + 1);
  };
  //if login is true AND quizState is true, return this component
  if (props.login && props.quizState) {
    return (
      <div className="questionsDiv">
        <h2 id="question">{currentQ.question}</h2>
        <ul className="options">
          <button
            className="button-43"
            onClick={() => {
              handleNextQuestion();
              answerCheck('a');
            }}
          >
            {currentQ.a}
          </button>
          <button
            className="button-43"
            onClick={() => {
              handleNextQuestion();
              answerCheck('b');
            }}
          >
            {currentQ.b}
          </button>
          <button
            className="button-43"
            onClick={() => {
              handleNextQuestion();
              answerCheck('c');
            }}
          >
            {currentQ.c}
          </button>
          <button
            className="button-43"
            onClick={() => {
              handleNextQuestion();
              answerCheck('d');
            }}
          >
            {currentQ.d}
          </button>
        </ul>
      </div>
    );
  }
};

export default Questions;
