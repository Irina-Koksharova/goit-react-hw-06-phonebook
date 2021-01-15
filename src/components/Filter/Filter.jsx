import { useSelector, useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import s from './Filter.module.css';
import { filterContact } from '../../redux/actions';

const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

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
        onChange={e => dispatch(filterContact(e.target.value))}
        autoComplete="off"
      ></input>
    </>
  );
};

export default Filter;
