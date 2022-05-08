import { Formik, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../Buttons/Button';
import { AddForm, Input, Message, LabelForm } from './ContactFormStyle';
import {
  useFetchContactsQuery,
  useAddContactsMutation,
} from 'redux/api/contactsApi';
import propTypes from 'prop-types';
import { SpinnerInfinity } from 'spinners-react';

const initialValues = {
  name: '',
  number: '',
  filter: '',
};
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <Message>{message}</Message>}
    />
  );
};

export const ContactForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [newContact, { isLoading }] = useAddContactsMutation();
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const nameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (nameInContacts) {
      toast.warn(`${name} is already in contacts`);
      resetForm();
      return;
    }
    newContact({ name, number });
    toast.success(`${name} is added to the phonebook `);
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <AddForm autoComplete="off">
          <LabelForm htmlFor="name">Name</LabelForm>

          <Input
            type="text"
            name="name"
            placeholder="type name..."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormError name="name" />

          <LabelForm htmlFor="number">Number</LabelForm>

          <Input
            type="tel"
            name="number"
            placeholder="type number..."
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormError name="number" />

          <Button
            type="submit"
            text={
              isLoading ? (
                <SpinnerInfinity
                  сolor="#910ac7"
                  secondaryColor="rgba(0,0,0,0.1)"
                  thickness="80"
                  speed="200"
                />
              ) : (
                'Add contact'
              )
            }
          />
        </AddForm>
      </Formik>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: propTypes.func,
  contacts: propTypes.arrayOf(propTypes.object),
};
