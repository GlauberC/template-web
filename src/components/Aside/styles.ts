import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

const button = css`
  color: ${colors.text2};
  font-size: 1.15rem;
  text-align: center;
  padding: 0.5rem 0;

  &:hover {
    background-color: ${darken(0.6, colors.sec1)};
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 7rem;
  background-color: ${colors.prim1};
`;
export const AsideSubMenu = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 12rem;
  background-color: ${colors.prim1};
  border-left: solid 1px ${colors.background};
`;

export const A = styled(Link)`
  ${button}
`;

export const ButtonLink = styled.button`
  ${button}
  border: none;
  background: inherit;
  outline: none;
`;
