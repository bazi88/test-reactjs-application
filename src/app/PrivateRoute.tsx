import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { RootState } from 'types/RootState';

export default function PrivateRoute({ component: Component, ...rest }) {
  const token =
    useSelector((state: RootState) => state?.loginPage?.token) ||
    localStorage.getItem('token');

  return (
    // <Route {...rest} render={props => <Component {...props}></Component>} />
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props}></Component>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    ></Route>
  );
}
