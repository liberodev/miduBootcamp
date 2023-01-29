import './App.css'
import React, { useState } from 'react'
import Persons from './Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 1, name: 'Arto Hellas', phone: '040-1234567' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filter, setFilter ] = useState('')

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangePhone = (event) => {
    setNewPhone(event.target.value)
  }

  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (persons.some((person) => person.name === newName ))
      return alert(`${newName} is already added to phonebook`)
    
    const personToAddToState = {
      id: persons.length + 1,
      name: newName,
      phone: newPhone
    }

    setPersons([...persons, personToAddToState])
    setNewName('')
    setNewPhone('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>filter shown with: <input onChange={handleChangeFilter} value={filter} /></div>
          <div><h2>add a new</h2></div>
          <div>name: <input onChange={handleChangeName} value={newName} /></div>
          <div>number: <input onChange={handleChangePhone} value={newPhone} /></div>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App
