import styled from 'styled-components';
import {
  centerBlock,
  font,
  widthHeight,
  deviceMin,
  deviceMax,
} from '../mainstyle/mixins';

export const Container = styled.div`
  padding: 40px 30px;
  ${centerBlock};
  max-width: 600px;

  @media ${deviceMin.desktop} {
    max-width: 800px;
  }

  @media ${deviceMax.laptop} {
    max-width: 500px;
  }
  @media ${deviceMax.mobileM} {
    max-width: 360px;
  }
  position: relative;
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
