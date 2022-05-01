import styled from 'styled-components';
import { centerBlock, font, widthHeight } from '../mainstyle/mixins';
export const Container = styled.div`
  padding: 40px 30px;
  ${centerBlock};
  /* height: 100vh; */
  max-width: 480px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.colorBg};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24),
    0px 3px 5px rgba(0, 0, 0, 0.52);
`;

export const MainTitle = styled.h1`
  font-family: ${props => props.theme.fonts.secondary};
  ${widthHeight(240)};
  ${font({ fs: 28, fw: 600, lh: 32 })};
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primaryText};
  text-shadow: 1px 1px 1px ${props => props.theme.colors.white};
`;

export const SubTitle = styled.h2`
  font-family: ${props => props.theme.fonts.secondary};
  ${widthHeight(240)};
  ${font({ fs: 24, fw: 600, lh: 28 })};
  margin-bottom: 10px;
  margin-top: 10px;
  color: ${props => props.theme.colors.primaryText};
  text-shadow: 1px 1px 1px ${props => props.theme.colors.white};
`;
