import { useState } from "react";

import Search from "./components/Search";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [query, setQuery] = useState("");
  const [newName, setNewName] = useState("enter a new person");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    try {
      validateName(newName);
      const personObj = {
        name: newName,
        number: newPhoneNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(personObj));
      setNewName("");
      setNewPhoneNumber("");
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewPhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  const validateName = (name) => {
    persons.forEach((person) => {
      if (person.name === name) {
        alert(`${name} is already added to the phonebook`);
        throw new Error("Duplicate Entry");
      }
    });
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().startsWith(query.toLowerCase()),
  );

  return (
    <div>
      <h2>PhoneBook</h2>
      <Search query={query} setQuery={setQuery} />
      <PersonForm
        personHandler={addPerson}
        nameChangeHandler={handleNewNameChange}
        phoneChangeHandler={handleNewPhoneNumberChange}
        newName={newName}
        setNewName={setNewName}
        newPhoneNumber={newPhoneNumber}
        setNewPhoneNumber={setNewPhoneNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
