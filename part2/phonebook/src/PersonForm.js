const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangePhone = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (persons.some((person) => person.name === newName ))
      return alert(`${newName} is already added to phonebook`)
    
    const personToAddToState = {
      id: persons.length + 1,
      name: newName,
      phone: newNumber
    }

    setPersons([...persons, personToAddToState])
    setNewName('')
    setNewNumber('')
  }

  return ( 
    <form onSubmit={handleSubmit}>
    <div>
      <div>name: <input onChange={handleChangeName} value={newName} /></div>
      <div>number: <input onChange={handleChangePhone} value={newNumber} /></div>
    </div>
    <div>
      <button type='submit'>add</button>
    </div>
  </form>
  )
}

export default PersonForm