import React, { useState, useCallback } from 'react';

import { Link } from 'react-router-dom';
import * as Styled from './styles';
import { dashboardMenuData } from '../../data/dashboardMenuData';
import logo from '../../assets/logo.png';
import Icon from '../Icon';
import { colors } from '../../styles/colors';
import { AuthRoutesNames } from '../../routes';

const DashboardMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(dashboardMenuData[0].id);
  const [isCompactMenu, setIsCompactMenu] = useState(false);

  const handleCompact = useCallback((compactMenu: boolean) => {
    setIsCompactMenu(compactMenu);
  }, []);

  const changeSelectedMenu = useCallback((id: string, route: string) => {
    setActiveMenu(id);
  }, []);
  return (
    <Styled.Container isCompactMenu={isCompactMenu}>
      {!isCompactMenu && <Styled.Logo src={logo} />}
      <ul>
        {dashboardMenuData.map((item) => (
          <Styled.MenuItem key={item.id}>
            <Link
              to={AuthRoutesNames.dashboard + item.route}
              onClick={() => changeSelectedMenu(item.id, item.route)}
            >
              {item.id === activeMenu && <Styled.SelectedBar />}
              <Styled.SectionName>
                <Icon name={item.iconName} size={20} color={colors.sec1} />
                {!isCompactMenu && <p>{item.label}</p>}
              </Styled.SectionName>
            </Link>
          </Styled.MenuItem>
        ))}
      </ul>
      <p>Menu</p>
      <Styled.ArrowToggle
        isCompactMenu={isCompactMenu}
        onClick={() => handleCompact(!isCompactMenu)}
      >
        <Icon
          name={isCompactMenu ? 'keyboard-arrow-right' : 'keyboard-arrow-left'}
          size={22}
          color={colors.sec1}
        />
      </Styled.ArrowToggle>
    </Styled.Container>
  );
};

export default DashboardMenu;
