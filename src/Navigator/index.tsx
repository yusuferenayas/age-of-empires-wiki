import {Header} from "Components";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import {routePath, routes} from "./routes";

const Navigator = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map(({component, ...rest}, index) => (
          <Route key={index} component={component} {...rest} />
        ))}
        <Redirect to={routePath.home} />
      </Switch>
    </Router>
  );
};

export default Navigator;
