import React from 'react';
import { useState } from 'react';

const Starter = (props) => {
  //if login is true AND quizState is false, return this component
  if (props.login && !props.quizState) {
    return (
      <div>
        <h1 id="starterTitle">Codequiz</h1>
        <div className="starterPrompt">
          <h2>Are you ready to test your coding skills?</h2>
          <button id="starterButton" onClick={() => props.handleStartClick()}>
            Let's Go!
          </button>
        </div>
      </div>
    );
  }
};

export default Starter;
