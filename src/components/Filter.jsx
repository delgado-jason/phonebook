

const Filter = (props) => {
    
    return (
        <div>
            Search Contacts: <input type='text' value={props.search} onChange={props.handler} />
        </div>
    )
}

export default Filter;