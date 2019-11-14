import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Reader from './components/Reader';
import publications from './data/publications.json';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/reader"
          // eslint-disable-next-line react/jsx-props-no-spreading
          render={props => <Reader {...props} items={publications} />}
        />
        <Route exact path="/">
          <Redirect to="/reader" />
        </Route>
        <Redirect to="/reader" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
