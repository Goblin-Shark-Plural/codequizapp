import React, { useState } from 'react';

const UserLogin = ({ updateLogin }) => {
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

  return (
    <div className="login">
      <h2>User Login</h2>

      <div action="" className="inputField">
        <div>
          <label>User Name</label>
          <input type="text" placeholder="username" id="usernameInput" />
        </div>

        <div>
          <label>User Password</label>
          <input type="text" placeholder="password" id="passwordInput" />
        </div>

        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default UserLogin;
