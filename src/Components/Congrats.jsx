import React, {useState} from 'react'
import Result from './Result.jsx';
const Congrats = () => {
  return (
    <div>
      <h2>Congratulations! You Completed All the Tests!</h2>
      <Result />
      <button>Try Again</button>
    </div>
  )
}

export default Congrats
