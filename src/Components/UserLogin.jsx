import React, { useState } from 'react';

const UserLogin = () => {
  return (
    <div className='login'>
      <h2>User Login</h2>
      <label className='inputFiled'>User Name</label>
      <input type='text' placeholder='usernam' className='inputFiled'/>
      <label className='inputFiled'>User Password</label>
      <input type='text' placeholder='password' className='inputFiled'/>
      <button></button>
    </div>
  );
};

export default UserLogin;
