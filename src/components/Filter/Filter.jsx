import { InputField  } from "./Filter.styled";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilterValue } from "redux/contacts/selectors";


export function Filter() {
  const dispatch = useDispatch();
    const filter = useSelector(selectFilterValue);

  return (
    <>
      <h3>Find contacts by name</h3>
      <InputField  type="text"  value={filter} onChange={evt => dispatch(setFilter(evt.target.value))} />
    </>
  );
}