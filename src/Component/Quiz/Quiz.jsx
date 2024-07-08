import React, { useRef, useState, useEffect } from 'react';
import "./Quiz.css";
import { data } from '../../Assets/data';

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, SetQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  let [timeLeft, setTimeLeft] = useState(30);
  let [end,setEnd] = useState(false);
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

     
      return () => clearInterval(timerId);
    } else {
      setResult(true); 
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let optionArray = [Option1, Option2, Option3, Option4];

  const changeindex = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setEnd(true);
        return;
      }

      setIndex(++index);
      SetQuestion(data[index]);
      setLock(false);
      optionArray.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        optionArray[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const reset = () => {
    setIndex(0);
    SetQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    setTimeLeft(30);
    setEnd(false);
  };

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <p>Time left: <b>{formatTime(timeLeft)}</b></p>
      <hr />
      {timeLeft === 0 ? <></> : end ? <><h2>Result will be shown when time's up</h2></>:<>
        <h2>{index + 1}. {question.question}</h2>
        <ul>
          <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
          <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
          <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
          <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
        </ul>
        <button onClick={changeindex}>Next</button>
        <div className='index'>
          {index + 1} of {data.length} questions
        </div>
      </>}
      {result ? <>
        <h2>You Scored {score} out of {data.length}</h2>
        {score < 3 ? <h2 className='Result-chear'>~Improve Your Self~</h2> : score >= 3 && score <= 4 ? <h2 className='Result-chear'>~Well Done!~</h2> : <h2 className='Result-chear'>~Hurrah!, Excellent~</h2>}
        <button onClick={reset}>Reset</button>
      </> : <></>}
    </div>
  );
};

export default Quiz;
