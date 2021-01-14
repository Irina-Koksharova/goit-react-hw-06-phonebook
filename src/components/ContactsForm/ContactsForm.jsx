import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactsForm.module.css';

const ContactsForm = ({ onSubmit, onSubmitError }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeForm = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (name.trim() === '') {
      onSubmitError('Contact name is missing');
      return;
    }
    if (number.trim() === '') {
      onSubmitError('Contact number is missing');
      return;
    }
    onSubmit({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmitForm}>
      <label className={s.label} htmlFor="name">
        Name
      </label>
      <input
        className={s.input}
        type="text"
        name="name"
        value={name}
        placeholder="Enter the name"
        autoComplete="off"
        id="name"
        onChange={handleChangeForm}
      ></input>
      <label className={s.label} htmlFor="number">
        Number
      </label>
      <input
        className={s.input}
        type="tel"
        name="number"
        value={number}
        placeholder="111-11-11"
        autoComplete="off"
        id="number"
        onChange={handleChangeForm}
      ></input>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSubmitError: PropTypes.func.isRequired,
};

export default ContactsForm;
