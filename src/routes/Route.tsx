import React, { useContext } from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { name } = useContext(AuthContext);
  return (
    <ReactDOMRoute
      {...rest}
      render={() => (isPrivate === !!name ? (
        <Component />
      ) : (
        <Redirect
          to="/"
        />
      ))}
    />
  );
};

export default Route;
