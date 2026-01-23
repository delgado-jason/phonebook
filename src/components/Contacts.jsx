import Button from './Button';

const Contacts = ({contacts, setContacts}) => {
        
    return (
        <div>
            {contacts.map(contact => 
                <p key={contact.id}>
                    {contact.name} 
                    {contact.phone}
                    <Button contacts={contacts} contactId={contact.id} setContacts={setContacts} />
                </p>
            )}
        </div>
    )
}

export default Contacts;