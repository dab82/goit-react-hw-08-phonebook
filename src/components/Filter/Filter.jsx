import { filterContact } from '../../redux/filter/actions';
import { useDispatch } from 'react-redux';
import { FilterInput, FilterWrapper } from './FilterStyle';
import { LabelForm } from '../ContactForm/ContactFormStyle';
import propTypes from 'prop-types';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = event => dispatch(filterContact(event.target.value));

  return (
    <FilterWrapper>
      <LabelForm htmlFor="filter">Find contacts by name</LabelForm>
      <FilterInput name="filter" type="text" onChange={handleChange} />
    </FilterWrapper>
  );
};

Filter.propTypes = {
  onChange: propTypes.func,
};
