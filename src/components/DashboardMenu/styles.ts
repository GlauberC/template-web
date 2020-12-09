import styled from 'styled-components';
import { lighten } from 'polished';
import { colors } from '../../styles/colors';

const maxWidthContainer = '170px';
const minWidthContainer = '50px';

interface CompactMenuProps {
  isCompactMenu: boolean;
}

export const Container = styled.aside<CompactMenuProps>`
  background: ${colors.prim1};
  height: 100vh;
  width: ${({ isCompactMenu }) =>
    isCompactMenu ? minWidthContainer : maxWidthContainer};
  ul {
    margin-top: 40px;
  }
`;
export const Logo = styled.img``;

export const MenuItem = styled.li`
  display: flex;
  a {
    cursor: pointer;
    color: ${colors.sec1};
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    transition: 0.3s;
    svg {
      margin-right: 5px;
      margin-left: 10px;
    }
  }

  a:hover {
    background: ${lighten(0.2, colors.prim1)};
  }
`;

export const SectionName = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const SelectedBar = styled.div`
  width: 3px;
  height: 32px;
  position: absolute;
  left: 8px;
  background: ${colors.sec1};
`;
export const ArrowToggle = styled.button<CompactMenuProps>`
  position: absolute;
  left: ${({ isCompactMenu }) =>
    isCompactMenu ? minWidthContainer : maxWidthContainer};
  top: 0px;
  background: ${colors.prim1};
  outline: none;
  padding: 5px;
  border: solid 1px ${colors.prim1};
  height: 40px;

  &:hover {
    transition: 0.3s;
    background: ${lighten(0.2, colors.prim1)};
  }
`;
