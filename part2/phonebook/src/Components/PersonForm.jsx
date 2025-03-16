const PersonForm = ({newName, newPhone, setNewName, setNewPhone, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <h3>add a new person</h3>
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
    );
}
 
export default PersonForm;