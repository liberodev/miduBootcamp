import Person from './Person'

const Persons = ({persons, filter}) => {

  return (
    <div>
      {persons
        .filter((person) => {
          if (filter === '') return true
          return (person.name).includes(filter)
        })
        .map((person) => (
          <Person key={person.id} {...person} />
      ))}
    </div>
  )
}

export default Persons