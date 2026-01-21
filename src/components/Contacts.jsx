

const Contacts = ({contacts}) => {
        
    return (
        <div>
            {contacts.map(contact => 
                <p key={contact.id}>{contact.name} {contact.phone}</p>
            )}
        </div>
    )
}

export default Contacts;