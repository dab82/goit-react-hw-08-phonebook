import { AddButton } from './ButtonStyle';
import propTypes from 'prop-types';
export const Button = ({ type, onClick, children }) => {
  return (
    <AddButton type={type} onClick={onClick}>
      {children}
    </AddButton>
  );
};

Button.propTypes = {
  type: propTypes.string.isRequired,
  onClick: propTypes.func,
  children: propTypes.any,
};
