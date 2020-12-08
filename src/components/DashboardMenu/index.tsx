import React, { useState, useCallback } from 'react';

import * as Styled from './styles';
import { dashboardMenuData } from '../../data/dashboardMenuData';
import logo from '../../assets/logo.png';

const DashboardMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(dashboardMenuData[0].id);
  const changeSelectedMenu = useCallback((id: string) => {
    setActiveMenu(id);
  }, []);
  return (
    <Styled.Container>
      <Styled.Logo src={logo} />
      <ul>
        {dashboardMenuData.map((item) => (
          <Styled.MenuItem key={item.id}>
            {item.id === activeMenu && <Styled.SelectedBar />}
            <a onClick={() => changeSelectedMenu(item.id)}>{item.label}</a>
          </Styled.MenuItem>
        ))}
      </ul>
      <p>Menu</p>
    </Styled.Container>
  );
};

export default DashboardMenu;
