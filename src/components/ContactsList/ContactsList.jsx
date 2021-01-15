import { connect } from 'react-redux';
import s from './ContactsList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { deleteContact, updateFilter } from '../../redux/actions';

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

const mapStateToProps = ({ items, filter }) => ({
  contacts: items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  ),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => {
    dispatch(deleteContact(id));
    dispatch(updateFilter(''));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
