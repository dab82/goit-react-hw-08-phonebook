import styled from 'styled-components';
import { font } from '../../mainstyle/mixins';

export const AddButton = styled.button`
  padding: 10px 20px;
  margin: 0 auto;
  align-items: center;
  height: 40px;
  border-radius: 20px;
  ${font({ fs: 16, fw: 600, lh: 20 })};
  background-color: ${props => props.theme.colors.buttonBg};
  color: ${props => props.theme.colors.buttonText};
  box-shadow: -1px -1px 5px ${props => props.theme.colors.white},
    5px 5px 10px ${props => props.theme.colors.colorShadow};
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: -2px -2px 5px ${props => props.theme.colors.white},
      2px 2px 5px ${props => props.theme.colors.colorShadow};
  }
  &:active {
    background-color: ${props => props.theme.colors.grey};
    color: ${props => props.theme.colors.white};
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.colorShadow};
  }
`;

export const DelButton = styled.button`
  padding: 10px;
  min-width: 40px;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.buttonBg};
  fill: ${props => props.theme.colors.buttonText};
  box-shadow: -1px -1px 5px ${props => props.theme.colors.white},
    5px 5px 10px ${props => props.theme.colors.colorShadow};
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.15);
    box-shadow: -2px -2px 5px ${props => props.theme.colors.white},
      2px 2px 5px ${props => props.theme.colors.colorShadow};
  }
  &:active {
    background-color: ${props => props.theme.colors.grey};
    fill: ${props => props.theme.colors.white};
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.colorShadow};
  }
`;
