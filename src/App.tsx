import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import { FrontPage } from './components/front-page/front-page';
import { NewPearl } from './components/new-pearl-page/new-pearl-page';
import { ExistingPearl } from './components/existing-pearl/existing-pearl';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path={'/'} component={FrontPage} />
        <Route exact path={'/NewPearl'} component={NewPearl} />
        <Route exact path={'/ExistingPearl'} component={ExistingPearl} />
      </Router>
    </div>
  );
}

export default App;
