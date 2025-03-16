import { useState } from 'react'
import Person from './Components/Person';
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import Numbers from './Components/Numbers';

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

      <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} />

      <PersonForm newName={newName} newPhone={newPhone}
                  setNewName={setNameFilter} setNewPhone={setNewPhone}
                  handleSubmit={handleSubmit}
      />

      <Numbers persons={persons} nameFilter={nameFilter}/>
      
    </div>
  )
}

export default App