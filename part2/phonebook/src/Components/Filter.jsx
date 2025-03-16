const Filter = ({nameFilter, setNameFilter}) => {
    return (
        <div>
            <label>filter shown with: </label>
            <input value={nameFilter} onChange={(event) => setNameFilter(() => event.target.value)}/>
        </div>
    );
}
 
export default Filter;