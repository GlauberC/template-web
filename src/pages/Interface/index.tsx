import React from 'react';
import Aside from '../../components/Aside';

import * as Styled from './styles';

const Interface: React.FC = ({ children }) => {
  return (
    <Styled.Interface>
      <Aside />
      <main>{children}</main>
    </Styled.Interface>
  );
};

export default Interface;
