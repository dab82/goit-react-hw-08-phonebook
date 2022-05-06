import { Item, Name, PhoneNumber } from './ContactItemStyle';
import { ReactComponent as DeleteIcon } from '../../Icon/delicon.svg';
import { IconButton } from '../Buttons/IconButton';
import { useRemoveContactsMutation } from 'redux/api/contactsApi';
import propTypes from 'prop-types';
import { SpinnerDotted } from 'spinners-react';

export const ContactItem = ({ id, name, number }) => {
  const [removeContacts, { isLoading }] = useRemoveContactsMutation();

  return (
    <>
      {isLoading && <SpinnerDotted />}
      <Item>
        <Name>{name}:</Name>
        <PhoneNumber>{number} </PhoneNumber>
        <IconButton
          aria-label="Delete contact"
          onClick={() => removeContacts(id)}
          disabled={isLoading}
        >
          <DeleteIcon />
        </IconButton>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};
