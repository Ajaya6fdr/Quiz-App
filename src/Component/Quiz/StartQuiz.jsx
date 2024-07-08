import React, { useState } from 'react'
import "./StartQuiz.css"
import { Link } from 'react-router-dom'
const StartQuiz = () => {
   
  return (
    <div className='container'>
      <h1>Check Your Knowledge!<br></br> Start Quiz Now!</h1>
      <Link to={'/guidelines'}>
        <button>start</button>
      </Link>
    </div>
  )
}

export default StartQuiz