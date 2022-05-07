import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { List } from './ContactListStyle';
import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { useFetchContactsQuery } from '../../redux/api/contactsApi';
import { SpinnerDotted } from 'spinners-react';
import { authSelectors } from 'redux/auth';
import { getvisibleContacts } from 'redux/filter/selector';

export const ContactList = () => {
  const token = useSelector(authSelectors.getToken);
  const { data, isFetching, error, refetch } = useFetchContactsQuery();
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
      {isFetching && !visibleContacts && <SpinnerDotted />}

      {/* <Total>Total contacts: {data.length}</Total> */}

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
