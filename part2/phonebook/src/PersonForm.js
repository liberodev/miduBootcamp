const PersonForm = ({persons, setPersons, newName, setNewName, newPhone, setNewPhone}) => {

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangePhone = (event) => {
    setNewPhone(event.target.value)
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
    <form onSubmit={handleSubmit}>
    <div>
      <div>name: <input onChange={handleChangeName} value={newName} /></div>
      <div>number: <input onChange={handleChangePhone} value={newPhone} /></div>
    </div>
    <div>
      <button type='submit'>add</button>
    </div>
  </form>
  )
}

export default PersonForm