import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { List, Total } from './ContactListStyle';
import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { useFetchContactsQuery } from '../../redux/api/contactsApi';
import { SpinnerDotted } from 'spinners-react';
import { getvisibleContacts } from 'redux/filter/selector';
import { authSelectors } from 'redux/auth';

export const ContactList = () => {
  const { data, isFetching, error, refetch } = useFetchContactsQuery();
  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    refetch();
  }, [token, refetch]);

  useEffect(() => {
    if (error) {
      toast.error(`Server error`);
    }
  }, [error]);

  const visibleContacts = useSelector(state => getvisibleContacts(state, data));

  return (
    <>
      {isFetching && !visibleContacts && <SpinnerDotted color="#055770" />}
      {visibleContacts && (
        <Total>Total contacts: {visibleContacts.length}</Total>
      )}
      <List>
        {visibleContacts &&
          visibleContacts
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ id, name, number }) => (
              <ContactItem name={name} key={id} id={id} number={number} />
            ))}
      </List>
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
