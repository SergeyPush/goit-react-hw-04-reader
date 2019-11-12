import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Reader from './components/Reader';
import publications from './data/publications.json';

const App = () => {
  return (
    <BrowserRouter>
      <Route
        path="/reader"
        render={props => <Reader {...props} items={publications} />}
      />
    </BrowserRouter>
  );
};

export default App;
