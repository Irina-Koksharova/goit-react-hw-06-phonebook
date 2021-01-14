import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import s from './Filter.module.css';

const Filter = ({ value, onFilter }) => {
  return (
    <>
      <label className={s.label} htmlFor="input">
        Find contact by name
      </label>

      <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
        <FiSearch />
      </IconContext.Provider>

      <input
        className={s.input}
        id="input"
        value={value}
        onChange={onFilter}
        autoComplete="off"
      ></input>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
