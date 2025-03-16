import Person from "./Person";

const Numbers = ({persons, nameFilter=""}) => {
    return (
        <div>
            <h3>Numbers</h3>
      
            {persons.filter((person) => person.name.includes(nameFilter))
                .map((person) => <Person key={person.name} person={person}/>)}
        </div>
    );
}
 
export default Numbers;