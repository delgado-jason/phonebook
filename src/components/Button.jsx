import contactService from '../services/contacts';

const text = {
        deleteText: 'delete'
    }


const Button = ({contacts, contactId, setContacts}) => {

    const deleteHandler = (id) => {
        id = contactId;
        const contactName = contacts.find(contact => contact.id === id).name;
        
        // Confirm user wants to delete record
        if (window.confirm(`Are you sure you want to delete the contact '${contactName}'?`)) {
            contactService
            .remove(id)
            .then(
                setContacts(contacts.filter(contact => contact.id !== id))
            )
        }
    }

    return <button onClick={deleteHandler}>{text.deleteText}</button>
}

export default Button;