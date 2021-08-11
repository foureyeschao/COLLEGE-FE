import React from "react";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useAuth } from 'context/auth-context';
import { AuthenticatedApp } from 'authenticated-app';
import { UnauthenticatedApp } from 'unauthenticated-app';
/* interface RouteProps {
  component: React.FC<{}>;
  isAuthenticated: boolean;
  path: string;
  rest?: any;
}

const PrivateRoute = ({ component, isAuthenticated, ...rest }: RouteProps) => {
  const routeComponent = (props: any) => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/" }} />
    )
  }
  return <Route render={routeComponent}  {...rest} />
} */

function App() {
  const { user } = useAuth()

  return <div>
    {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
  </div>

}

export default App;
