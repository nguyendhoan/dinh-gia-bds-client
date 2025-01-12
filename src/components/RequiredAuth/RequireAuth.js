import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from './../../context/AuthContext';

const RequireAuth = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/login" />
        )
      }
    />
  );
};

export default RequireAuth;