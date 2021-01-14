import { connect } from 'react-redux';
import s from './ContactsList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = ({ items }) => ({
  contacts: items,
});
const mapDispatchToProps = dispatch => ({
  onDelete: () => null,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
