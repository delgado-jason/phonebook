

const PersonForm = (props) => {
    return (
    <form onSubmit={props.submitHandler}>
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange} required/>
        </div>
        <div>
          phone: <input type="tel" value={props.newPhone} onChange={props.handlePhoneChange} required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
    )
    
}

export default PersonForm;