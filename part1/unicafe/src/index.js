import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Cabecera = ({texto}) => <h1>{texto}</h1>
const Feedback = ({good, setGood, neutral, setNeutral, bad, setBad}) => {
  return (
    <div>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
    </div>
  )
}
const Statistics = ({good, neutral, bad}) => {
  if ( good === 0 && neutral === 0 && bad === 0)
    return <p>No feedback given</p>

  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Total total={good + neutral + bad} />
      <Average avg={((good*1) + (neutral*0) + (bad*(-1))) / (good + neutral + bad)} />
      <Positive positive={(good*100) / (good + neutral + bad)} />
    </div>
  )
}
const Total = ({total}) => <p>all {total}</p>
const Average = ({avg}) => {
  if (isNaN(avg))
    return <p>average 0</p>
  else
    return <p>average {avg.toFixed(2)}</p>
}
const Positive = ({positive}) => {
  if (isNaN(positive))
    return <p>positive 0</p>
  else
    return <p>positive {positive.toFixed(2)} %</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Cabecera texto='give feedback' />
      <Feedback good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad} />
      <Cabecera texto='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
