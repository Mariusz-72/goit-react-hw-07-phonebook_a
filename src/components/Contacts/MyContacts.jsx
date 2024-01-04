import MyContactForm from '../MyContactForm/MyContactForm';
import MyContactList from '../ContactList/ContactList';
import MyContactsFilter from '../MyContactsFilter/MyContactsFilter';


import css from '../Contacts/MyContacts.module.css';

const MyContacts = () => {
  return (
    <div>
      <h2 className={css.title}>Phonebook</h2>
      <MyContactForm />
      <MyContactsFilter />
      <h2 className={css.title}>Contacts</h2>
      <MyContactList />
    </div>
  );
};

export default MyContacts;