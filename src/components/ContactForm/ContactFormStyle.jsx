import { Form, Field } from 'formik';
import styled from 'styled-components';
import { font } from '../../mainstyle/mixins';

export const AddForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 420px;
  padding: 20px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.greyBg};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24),
    0px 2px 1px rgba(0, 0, 0, 0.32);
`;

export const Input = styled(Field)`
  border: 0;
  outline: 0;
  width: 80%;
  margin-bottom: 10px;
  border-radius: 20px;
  padding: 10px;
  background-color: ${props => props.theme.colors.buttonBg};
  ${font({ fs: 16, fw: 400, lh: 20 })};
  box-shadow: inset 2px 2px 5px ${props => props.theme.colors.colorShadow},
    inset -5px -5px 10px ${props => props.theme.colors.white};
  transition: all 0.2s ease-in-out;
  appearance: none;

  &:focus {
    box-shadow: inset 1px 1px 2px var(--color-shadow),
      inset -1px -1px 2px var(--color-white);
  }
`;

export const Message = styled.p`
  ${font({ fs: 14, fw: 400, lh: 16 })};
  color: ${props => props.theme.colors.red};
  display: block;
  margin-bottom: 4px;
`;
export const LabelForm = styled.label`
  ${font({ fs: 16, fw: 700, lh: 20 })};
  display: block;
  margin-bottom: 10px;
`;
