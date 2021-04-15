import React, { useCallback, useState } from 'react';
import { RouteProps, routesList } from '../../routes/routesList';

import * as Styled from './styles';

const Aside: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<RouteProps>({} as RouteProps);

  const handleSelectMenu = useCallback((route: RouteProps) => {
    setActiveMenu(route);
  }, []);

  const resetActiveMenu = useCallback(() => {
    setActiveMenu({} as RouteProps);
  }, []);

  return (
    <>
      <Styled.Aside>
        {routesList.map((route) => (
          <>
            {route.children && route.children.length > 0 ? (
              <Styled.ButtonLink onClick={() => handleSelectMenu(route)}>
                {route.label}
              </Styled.ButtonLink>
            ) : (
              <Styled.A onClick={resetActiveMenu} to={route.path}>
                {route.label}
              </Styled.A>
            )}
          </>
        ))}
      </Styled.Aside>
      {activeMenu.children && (
        <Styled.AsideSubMenu>
          {activeMenu.children.map((child) => (
            <Styled.A onClick={resetActiveMenu} to={child.path}>
              {child.label}
            </Styled.A>
          ))}
        </Styled.AsideSubMenu>
      )}
    </>
  );
};

export default Aside;
