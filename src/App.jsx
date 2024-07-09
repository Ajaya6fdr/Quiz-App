import React from 'react'
import StartQuiz from './Component/Quiz/StartQuiz'
import GuideLines from './Component/Quiz/GuideLines'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Quiz from './Component/Quiz/Quiz';
const App = () => {
  return (
    <>
        <Router basename="/<Quiz-App>">
          <Routes>
            <Route path="/" element={<StartQuiz/>} />
            <Route path="/guidelines" element={<GuideLines/>} />
            <Route path="/quiz" element={<Quiz/>} />
          </Routes>
        </Router>
    </>
  )
}

export default App