import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Reader from './components/Reader';
import publications from './data/publications.json';

const App = () => {
  return (
    <BrowserRouter>
      <Route
        path="/reader"
        // eslint-disable-next-line react/jsx-props-no-spreading
        render={props => <Reader {...props} items={publications} />}
      />
    </BrowserRouter>
  );
};

export default App;
