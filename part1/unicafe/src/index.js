import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Cabecera = ({texto}) => <h1>{texto}</h1>
const Button = ({good, setGood, neutral, setNeutral, bad, setBad}) => {
  return (
    <div>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
    </div>
  )
}
const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const dividendoAVG = (good*1) + (neutral*0) + (bad*(-1))
  const dividendoPOS = good*100

  if ( total === 0)
    return <p>No feedback given</p>

  return (
    <table>
        <tbody>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='all' value={total} />
          <Statistic text='average' value={isNaN(dividendoAVG / total) ? 0 : dividendoAVG / total} />
          <Statistic text='positive' value={isNaN(dividendoPOS / total) ? 0 : dividendoPOS / total} />
        </tbody>
    </table>
  )
}
const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Cabecera texto='give feedback' />
      <Button good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad} />
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
