import React, { useState } from 'react';

const UserLogin = ({ updateLogin, login, quizState }) => {
  const handleLoginClick = (event) => {
    event.preventDefault();
    // console.log(username, input);
    const usernameInputValue = document.getElementById('usernameInput').value;
    document.getElementById('usernameInput').value = '';
    const passwordInputValue = document.getElementById('passwordInput').value;
    document.getElementById('passwordInput').value = '';
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: usernameInputValue,
    //     password: passwordInputValue,
    //     // username,
    //     // input,
    //   }),
    // })
    //   .then((result) => result.json())
    //   .then((result) => {
    //     console.log('result is: ', result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    updateLogin();
  };

  if (!login && !quizState) {
    return (
      <div className="login">
        <h2 id="userLoginH2">User Login</h2>

        <div action="" className="inputField">
          <div id="userInput">
            <label id="userLabel">User Name: </label>
            <input type="text" placeholder="username" id="usernameInput" />
          </div>

          <div id="passwordInput">
            <label id="passwordLabel">User Password:</label>
            <input type="text" placeholder="password" id="passwordInput" />
          </div>
        </div>
        <button id="loginbutton" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    );
  }
};

export default UserLogin;
