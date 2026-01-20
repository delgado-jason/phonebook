import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas', 
      id: 1,
      phone: 8134687962
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNewPhoneChange = (event) => {
    setNewPhone(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)
    
    // Check whether name already exist
    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewPhone('')
    } else {
      const personObj = {
      id: persons.length + 1,
      name: newName,
      phone: newPhone
      }
      setPersons(persons.concat(personObj))
      setNewName('')
      setNewPhone('')
    }
    
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} required/>
        </div>
        <div>
          phone: <input type="tel" value={newPhone} onChange={handleNewPhoneChange} required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.id}>{person.name}    {person.phone}</p>)}
    </div>
  )
}

export default App