import { connect } from 'react-redux';
import s from './ContactsList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { deleteContact } from '../../redux/actions';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={() => onDelete(id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = ({ items }) => ({
  contacts: items,
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
