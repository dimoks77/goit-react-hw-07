import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from "react-redux";

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items); 
    const filter = useSelector(state => state.filters.name.toLowerCase());

    const filteredContacts = Array.isArray(contacts) ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    ) : [];

    return (
        <ul className={css.list}>
            {filteredContacts.map(contact => (
                <li key={contact.id} className={css.listItem}>
                    <Contact contact={contact} /> 
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
