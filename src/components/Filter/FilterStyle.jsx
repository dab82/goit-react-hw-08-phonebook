import styled from 'styled-components';
import { font, deviceMax } from '../../mainstyle/mixins';

export const FilterInput = styled.input`
  border: 0;
  outline: 0;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.buttonBg};
  ${font({ fs: 16, fw: 500, lh: 20 })};
  box-shadow: inset 2px 2px 5px ${props => props.theme.colors.colorShadow},
    inset -5px -5px 10px ${props => props.theme.colors.white};
  transition: all 0.2s ease-in-out;
  appearance: none;

  &:focus {
    box-shadow: inset 1px 1px 2px var(--color-shadow),
      inset -1px -1px 2px var(--color-white);
  }
`;

export const FilterWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px;
  width: 70%;
  margin: 0 auto 10px auto;

  @media ${deviceMax.laptop} {
    width: auto;
    margin: 0 0 10px 0;
  }
`;
