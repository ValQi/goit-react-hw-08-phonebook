import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';

import { Field, ErrorMessage, Formik } from 'formik';
import { Formikk } from './Input.styled';
import * as Yup from 'yup';

const NameInputSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Дуже коротке!').required('Занято'),
  number: Yup.string()
    .matches(/^\+[1-9]\d{1,14}$/, 'Невірний номер телефону')
    .required('Повинно бути філд'),
});
export const NameInput = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const addNewContact = newContact => {
    const hasContact = contacts.some(
      contact => contact.name === newContact.name
    );
    if (hasContact) {
      alert('A contact with that name already exists');
      return;
    }
    dispatch(addContact(newContact));
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={NameInputSchema}
      onSubmit={(values, actions) => {
        addNewContact(values);
        actions.resetForm();
      }}
    >
      <Formikk>
        <label>
          Ім'я
          <Field type="text" name="name" placeholder=" Name" />
          <ErrorMessage name="name" />
        </label>
        <label>
          Номер
          <Field type="tel" name="number" placeholder=" + Number" />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Додати контакт</button>
      </Formikk>
    </Formik>
  );
};