import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import s from './App.module.css';
import Container from '../../components/Container';
import Section from '../Section/Section';
import ContactsForm from '../ContactsForm';
import Filter from '../Filter';
import ContactsList from '../ContactsList';
import initialContacts from './initialContacts.json';

const App = () => {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem('contacts') ?? initialContacts),
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmitForm = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    const includesContact = contacts.some(
      ({ name }) => name === newContact.name,
    );

    !includesContact
      ? setContacts([newContact, ...contacts])
      : notification(`${newContact.name} is already in your contacts`);
  };

  const notification = message => {
    toast.dark(message, {
      className: `${s.toast}`,
      progressClassName: `${s.progress}`,
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const handleDeleteButton = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
    setFilter('');
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <Container>
      <Section>
        <h1>Phonebook</h1>
        <ContactsForm
          onSubmit={handleSubmitForm}
          onSubmitError={notification}
        />
        <ToastContainer autoClose={3000} limit={1} style={{ width: '352px' }} />
      </Section>

      {contacts.length > 0 && (
        <Section>
          <h2>Contacts</h2>
          <Filter value={filter} onFilter={handleChangeFilter} />
          <ContactsList
            contacts={visibleContacts}
            onDelete={handleDeleteButton}
          ></ContactsList>
        </Section>
      )}
    </Container>
  );
};

export default App;
