import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

const App = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.contacts)
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
      
    return (
        <>
            {loading && <p>Loading...</p> }
            {error && <p>Error!</p> }
            <h1>PhoneBook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </>
    );
};

export default App;
