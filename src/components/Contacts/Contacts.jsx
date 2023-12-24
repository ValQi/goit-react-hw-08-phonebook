import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

import { selectVisibleContacts, selectIsLoading } from '../../redux/contacts/selectors';
import { ContactsUl, ContactLi } from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {isLoading ? (
        <p>Будь ласка зачекайте...</p>
      ) : (
        <ContactsUl>
          {filteredContacts.map(element => (
            <ContactLi key={element.id}>
              <p>{element.name}: {element.number}</p>
              <button
                type="button"
                onClick={() => dispatch(deleteContact(element.id))}
              > Видалити
              </button>
            </ContactLi>
          ))}
        </ContactsUl>
      )}
    </div>
  );
};