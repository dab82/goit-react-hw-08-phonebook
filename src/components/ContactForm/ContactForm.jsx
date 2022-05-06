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
import { SpinnerDotted } from 'spinners-react';

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
    resetForm();
    toast.success(`${name} is added to the phonebook `);
  };

  return (
    <>
      {isLoading && <SpinnerDotted />}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <AddForm autoComplete="off">
          <div>
            <LabelForm htmlFor="name">Name</LabelForm>
            <div>
              <Input
                type="text"
                name="name"
                // placeholder="Text..."
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <FormError name="name" />
            </div>
          </div>
          <div>
            <LabelForm htmlFor="number">Number</LabelForm>
            <div>
              <Input
                type="tel"
                name="number"
                // placeholder="Number..."
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <FormError name="number" />
            </div>
          </div>
          <Button type="submit" disabled={isLoading} text={'Add contact'} />
        </AddForm>
      </Formik>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: propTypes.func,
  contacts: propTypes.arrayOf(propTypes.object),
};
