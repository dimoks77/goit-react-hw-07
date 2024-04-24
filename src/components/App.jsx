import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { addContact, deleteContact, fetchContacts } from '../redux/contactsSlice';
import { fetchContacts } from '../redux/api';
import { changeFilter } from '../redux/filtersSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleAddContact = (contact) => {
        dispatch(addContact(contact));
    };

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    };

    const handleSearchChange = (value) => {
        dispatch(changeFilter(value));
    };
       
    return (
        <>
            <h1>PhoneBook</h1>
            <ContactForm onAdd={handleAddContact} />
            <SearchBox onChange={handleSearchChange} />
            <ContactList onDelete={handleDeleteContact} />
        </>
    );
};

export default App;
