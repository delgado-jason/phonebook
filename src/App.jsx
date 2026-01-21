import { useState } from 'react'

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Contacts from './components/Contacts';

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
        <Filter search={newSearch} handler={handleSearchChange} />
      </div>
      <h2>Add a New Person</h2>
      <PersonForm submitHandler={addPerson} newName={newName} handleNameChange={handleNewNameChange} newPhone={newPhone} handlePhoneChange={handleNewPhoneChange} />
      <h2>Contacts</h2>
      <Contacts contacts={persons} />
    </div>
  )
}

export default App