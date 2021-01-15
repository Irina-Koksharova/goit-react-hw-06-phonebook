import { useSelector, useDispatch } from 'react-redux';
import s from './ContactsList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { deleteContact, updateFilter } from '../../redux/actions';

const ContactsList = () => {
  const contacts = useSelector(({ items, filter }) => ({
    list: items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    ),
  }));

  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContact(id));
    dispatch(updateFilter(''));
  };

  return (
    <ul className={s.list}>
      {contacts.list.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
