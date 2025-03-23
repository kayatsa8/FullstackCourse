import { useEffect, useState } from 'react'
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import Numbers from './Components/Numbers';
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState("");
  const [nameFilter, setNameFilter] = useState("");



  useEffect(() => {
    axios.get("http://localhost:3001/persons")
          .then(response => {
            setPersons(response.data);
          });

  }, []);



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
                  setNewName={setNewName} setNewPhone={setNewPhone}
                  handleSubmit={handleSubmit}
      />

      <Numbers persons={persons} nameFilter={nameFilter}/>
      
    </div>
  )
}

export default App