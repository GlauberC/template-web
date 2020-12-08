import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.aside`
  background: ${colors.prim1};
  height: 100vh;
  margin-bottom: 20px;
`;

export const MenuItem = styled.li`
  color: ${colors.sec1};
  padding: 10px;
  display: flex;

  a {
    cursor: pointer;
  }
`;

export const Logo = styled.img``;
export const SelectedBar = styled.div`
  width: 4px;
  background: ${colors.sec1};
  margin-right: 10px;
`;
