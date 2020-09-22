import Home from '../containers/Home';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';
import Register from '../containers/Register';

const serverRoutes = (isLogged) => {
  return [
    {
      exact: true,
      path: '/',
      component: isLogged ? Home : Login,
    },
    {
      exact: true,
      path: '/login',
      component: Login,
    },
    {
      exact: true,
      path: '/register',
      component: Register,
    },
    {
      exact: true,
      path: 'player/:id',
      component: isLogged ? Player : Login,
    },
    {
      name: 'Not Found',
      component: NotFound,
    },
  ];
};

export default serverRoutes;
