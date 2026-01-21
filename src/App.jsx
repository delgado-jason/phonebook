import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Contacts from './components/Contacts';

const App = () => {

  const [persons, setPersons] = useState();

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState("")

  const hook = () => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
    })
  }

  useEffect(hook, [])

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