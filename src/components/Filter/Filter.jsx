import { useSelector, useDispatch } from 'react-redux';

import { Input } from "./Filter.styled";
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilterValue } from "redux/contacts/selectors";


export function Filter() {
  const dispatch = useDispatch();
    const filter = useSelector(selectFilterValue);

  return (
    <> <h3>Шукати по ніку користувача</h3><Input  type="text"  value={filter} onChange={evt => dispatch(setFilter(evt.target.value))} /></>
  );
}