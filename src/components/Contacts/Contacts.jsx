import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactsList, ContactEl } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { selectIsLoading } from 'redux/contacts/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {isLoading ? (
        <p>Please, wait...</p>
      ) : (
        <ContactsList>
          {filteredContacts.map(e => (
            <ContactEl key={e.id}>
              <p>
                {e.name}: {e.number}
              </p>
              <button
                type="button"
                onClick={() => dispatch(deleteContact(e.id))}
              >
                Delete
              </button>
            </ContactEl>
          ))}
        </ContactsList>
      )}
    </div>
  );
};