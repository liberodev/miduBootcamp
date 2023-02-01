const express = require('express')
const app = express()

let notes = [
  {
    "id": 1,
    "content": "Me tengo que suscribir a @midudev en Twitch",
    "date": "2019-05-30T17:30:31.098Z",
    "important": true
  },
  {
    "id": 2,
    "content": "Tengo que estudiar las clases del FullStack Bootcamp",
    "date": "2019-05-30T18:39:34.091Z",
    "important": false
  },
  {
    "id": 3,
    "content": "Repasar los retos de JavaScript de midudev",
    "date": "2019-05-30T19:20:14.298Z",
    "important": true
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  const note = notes.find(note => note.id === id)

  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  notes = notes.filter(note => note.id !== id)

  res.status(204).end()
})

const PORT = 4001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})