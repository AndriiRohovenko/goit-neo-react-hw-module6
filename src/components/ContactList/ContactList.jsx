import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

function ContactList() {
  const contactsData = useSelector(state => state.contacts);
  const filterData = useSelector(state => state.filters.filterByName.name);
  const dispatch = useDispatch();

  const foundContacts = () => {
    return contactsData.filter(item =>
      item.name.toLowerCase().includes(filterData)
    );
  };

  const handleDeleteAction = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul className={styles.contactListWrapper}>
        {foundContacts().map(contact => (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              onDelete={() => handleDeleteAction(contact.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
