import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/" component={MovieList} />
      </Switch>
    </div>
  );
};

export default App;