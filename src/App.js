import React from 'react'
import { useState } from 'react'
import Button from './components/Button.jsx'
import Statistics from './components/Statistics.jsx'

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return(
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <br />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
