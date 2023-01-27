import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  })
  const longitud = anecdotes.length
  const handleClickAnecdote = () => setSelected(Math.floor(Math.random()*longitud))
  const handleClickVote = () => {
    const copy = {...points}
    copy[selected]++

    setPoints({...copy})
  }

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {points[selected]} votes</p>
      <br />
      <button onClick={handleClickVote}>Vote</button>
      <button onClick={handleClickAnecdote}>Next anecdote</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>
);
