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
  //handle displaying new question
  const handleNextQuestion = () => {
    if (props.currentQIndex < tempQuestions.length - 1) {
      props.handleCurrentQIndex();
    } else {
      props.handleQuestionsDone();
    }
  };

  const currentQ = tempQuestions[props.currentQIndex];

  //compare response to correct answer, increment correctCount if correct
  const answerCheck = (selection) => {
    if (selection === currentQ.answer) props.handleCorrectCount();
  };
  //if login is true AND quizState is true, return this component
  if (props.login && props.quizState && !props.questionsDone) {
    return (
      <div className="questionsDiv">
        <h2 id="question">{currentQ.question}</h2>
        <ul className="options">
          <button
            className="button-43"
            onClick={() => {
              answerCheck('a');
              handleNextQuestion();
            }}
          >
            {currentQ.a}
          </button>
          <button
            className="button-43"
            onClick={() => {
              answerCheck('b');
              handleNextQuestion();
            }}
          >
            {currentQ.b}
          </button>
          <button
            className="button-43"
            onClick={() => {
              answerCheck('c');
              handleNextQuestion();
            }}
          >
            {currentQ.c}
          </button>
          <button
            className="button-43"
            onClick={() => {
              answerCheck('d');
              handleNextQuestion();
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
