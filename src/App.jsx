import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      phone: '040-123456', 
      id: 2 
    },
    { name: 'Ada Lovelace', 
      phone: '39-44-5323523', 
      id: 3
    },
    { 
      name: 'Dan Abramov', 
      phone: '12-43-234345', 
      id: 4 
    },
    { name: 'Mary Poppendieck', 
      phone: '39-23-6423122', 
      id: 5 
    }
  ]);

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState("")

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value.toLowerCase());
    console.log(newSearch)
    if (newSearch !== "") {
      let personSearch = persons.filter(person => person.name.toLowerCase().includes(newSearch))
      setPersons(personSearch);
    } else {
      persons.map(person => {
        <p key={person.id}>{person.name}  {person.phone}</p>
      })
    }
  }

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
      <div>
        Search: <input type="text" value={newSearch} onChange={handleSearchChange}/>
      </div>
      <h2>Add a New Person</h2>
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