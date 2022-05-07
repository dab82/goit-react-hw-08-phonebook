import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { List, Total } from './ContactListStyle';
import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { useFetchContactsQuery } from '../../redux/api/contactsApi';
// import { SpinnerDotted } from 'spinners-react';
import { getFilter } from '../../redux/filter/selector';
import { authSelectors } from 'redux/auth';

export const ContactList = () => {
  const token = useSelector(authSelectors.getToken);
  const filter = useSelector(getFilter);
  const {
    data: contacts,
    error,
    isFetching,
    refetch,
  } = useFetchContactsQuery();

  useEffect(() => {
    if (!token) {
      refetch();
    }
  }, [token, refetch]);

  const normalizedFilter = filter.toLowerCase();
  let visibleContacts = [];

  if (contacts) {
    visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
  useEffect(() => {
    if (error) {
      toast.error(`Server error`);
    }
  }, [error]);

  const showContacts = !isFetching && !error && contacts;

  return (
    <>
      {/* {isFetching && <SpinnerDotted />} */}
      {showContacts && (
        <List>
          <Total>Total contacts: {visibleContacts.length}</Total>

          {visibleContacts
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ id, name, number }) => (
              <ContactItem key={id} name={name} id={id} number={number} />
            ))}
        </List>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
