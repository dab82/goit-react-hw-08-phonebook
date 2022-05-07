import styled from 'styled-components';
import { font, widthHeight } from '../../mainstyle/mixins';

export const List = styled.ol`
  padding: 20px;

  overflow-y: hidden;

  ${font({ fs: 16, fw: 400, lh: 20 })};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.greyBg};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24),
    0px 2px 1px rgba(0, 0, 0, 0.32);
`;

export const Total = styled.h2`
  font-family: ${props => props.theme.fonts.secondary};
  ${widthHeight(240)};
  ${font({ fs: 24, fw: 600, lh: 28 })};
  margin-bottom: 10px;
  /* margin-top: 10px; */
  color: ${props => props.theme.colors.primaryText};
  text-shadow: 1px 1px 1px ${props => props.theme.colors.white};
`;
