import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../Container';
import Section from '../Section';
import Title from '../Title';
import ContactsForm from '../ContactsForm';
import Filter from '../Filter';
import ContactsList from '../ContactsList';
import { setContact } from '../../redux/actions';

const App = ({ contacts, setContact }) => {
  setContact(contacts);

  return (
    <Container>
      <Section>
        <Title children={'Phonebook'} />
        <ContactsForm />
        <ToastContainer autoClose={3000} limit={1} style={{ width: '352px' }} />
      </Section>

      {contacts.length > 0 && (
        <Section>
          <Title children={'Contacts'} style={{ fontSize: '22px' }} />
          <Filter />
          <ContactsList />
        </Section>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  contacts: state.items,
});

const mapDispatchToProps = dispatch => ({
  setContact: contacts => dispatch(setContact(contacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
