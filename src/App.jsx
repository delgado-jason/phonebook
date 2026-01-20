import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)
    
    // Check whether name already exist
    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
    } else {
      const personObj = {
      id: persons.length + 1,
      name: newName
      }
      setPersons(persons.concat(personObj))
      setNewName('')
    }
    
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => <p key={i}>{person.name}</p>)}
    </div>
  )
}

export default App