
import './App.css';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import ContactList from './components/contactList/ContactList';

import Notification from './components/notification/Notification';
import { useSelector } from 'react-redux';

function App() {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length !== 0 ? <SearchBox /> : <div></div>}
     
      {contacts.length === 0 ?  <Notification /> :
      <ContactList />}
    </div>
  );
};

export default App;