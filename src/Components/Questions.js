import React from 'react';
import { useState } from 'react';

const Questions = (props) => {
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
