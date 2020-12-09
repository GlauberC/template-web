import React from 'react';
import DashboardMenu from '../../components/DashboardMenu';
import Header from '../../components/Header';
import DashboardRoutes from '../../routes/DashboardRoutes';

import * as Styled from './styles';

const Dashboard: React.FC = () => {
  return (
    <Styled.Container>
      <DashboardMenu />
      <Styled.MainContainer>
        <Header />
        <DashboardRoutes />
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default Dashboard;
