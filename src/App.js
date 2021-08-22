import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './routes/home/home.component';
import DetailsPage from './routes/details/details.component';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/details" exact>
        <DetailsPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
