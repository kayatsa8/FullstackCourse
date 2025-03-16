import { useState } from 'react'
import Person from './Components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456'},
    { name: 'Ada Lovelace', phone: '39-44-5323523'},
    { name: 'Dan Abramov', phone: '12-43-234345'},
    { name: 'Mary Poppendieck', phone: '39-23-6423122'}
  ]); 
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState("");
  const [nameFilter, setNameFilter] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();

    if(newName === "" || newPhone === ""){
      return;
    }

    if(persons.some((person) => person.name === newName)){
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const person = {name: newName, phone: newPhone};

    setPersons((p) => [...p, person]);
    setNewName(() => "");
    setNewPhone(() => "");
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        <label>filter shown with: </label>
        <input value={nameFilter} onChange={(event) => setNameFilter(() => event.target.value)}/>
      </div>

      <form onSubmit={handleSubmit}>
        <h1>add a new person</h1>
        <div>
          name: <input value={newName} onChange={((event) => setNewName(() => event.target.value))}/>
        </div>
        <div>
          nubmer: <input value={newPhone} onChange={(event) => setNewPhone(() => event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      
      {persons.filter((person) => person.name.includes(nameFilter)).map((person) => <Person key={person.name} person={person}/>)}
    </div>
  )
}

export default App