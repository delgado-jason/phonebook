import { useState, useEffect } from 'react'
import './index.css'

import contactService from './services/contacts';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Contacts from './components/Contacts';
import Notification from './components/Notification';

const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [persons, setPersons] = useState();
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState("")
  const [successMessage, setSuccessMessage] = useState(null)

  const hook = () => {
    contactService
      .getAll()
      .then(response => {
        console.log('request fulfilled')
        setPersons(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        setError({message: error})
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
      name: newName,
      phone: newPhone
      }
      contactService
        .create(personObj)
        .then(response => {
          setPersons(persons.concat(response.data))
          setSuccessMessage(`Added ${personObj.name} successfuly`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
          setNewName('')
          setNewPhone('')
        })
    }
    
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage}/>
      <div>
        <Filter search={newSearch} handler={handleSearchChange} />
      </div>
      <h2>Add a New Person</h2>
      <PersonForm submitHandler={addPerson} newName={newName} handleNameChange={handleNewNameChange} newPhone={newPhone} handlePhoneChange={handleNewPhoneChange} />
      <h2>Contacts</h2>
      <Contacts contacts={persons} setContacts={setPersons}/>
    </div>
  )
}

export default App