import { connect } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import s from './Filter.module.css';
import { filterContact } from '../../redux/actions';

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

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilter: e => dispatch(filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
