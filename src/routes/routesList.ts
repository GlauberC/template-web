import Filho1 from '../pages/Filho1';
import Filho2 from '../pages/Filho2';
import Home from '../pages/Home';
import Pai from '../pages/Pai';

export interface RouteProps {
  component: React.FC;
  path?: string;
  label: string;
  icon?: string;
  exact?: boolean;
  children?: RouteProps[];
}

export const routesList: RouteProps[] = [
  { component: Home, path: '/', exact: true, label: 'Início' },
  {
    component: Pai,
    label: 'Pai',
    children: [
      { component: Filho1, path: '/filho1', label: 'Filho 1' },
      { component: Filho2, path: '/filho2', label: 'Filho 2' },
    ],
  },
];

// Exemplo
// Componente pai não pode ter path
/*

export const routesList: RouteProps[] = [
  { component: Home, path: '/', exact: true, label: 'Início' },
  {
    component: Pai,
    label: 'Pai',
    children: [
      { component: Filho1, path: '/filho1', label: 'Filho 1' },
      { component: Filho2, path: '/filho2', label: 'Filho 2' },
    ],
  },
];


*/
