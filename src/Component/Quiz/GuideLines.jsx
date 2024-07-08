import React from 'react'
import "./GuideLines.css"
import { Link } from 'react-router-dom'
const GuideLines = () => {
  return (
    <div className='container'>
       <h1>GuideLines For The Quiz</h1>
       <ul>
         <li>1- Don't use Chat-gpt and other AI tools.</li>
         <li>2- Don't change your laptop or mobile tab.</li>
         <li>3- One's Quiz end, you can give quiz again.</li>
         <li>4- After quiz end, your result will be shown.</li>
         <li>5- No multiple choice questions.</li>
         <li>6- when you go futher then you cann't come back.</li>
       </ul>
       <Link to={'/quiz'}>
          <button>start</button>
       </Link>
    </div>
  )
}

export default GuideLines