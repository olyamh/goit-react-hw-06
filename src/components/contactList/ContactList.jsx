import { useSelector } from 'react-redux';
import Contact from '../contact/Contact';

const ContactList =()=>{
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.filter);
    const filteredData = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));    
    return (
        <ul>
        {filteredData.map(contact =>
        <Contact key={contact.id} {...contact}/>
         )} </ul>
    )

}

export default ContactList;