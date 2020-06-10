import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer, InitialState } from './redux/reducer';
import logo from './assets/proshield.png';
import FrontPage from './components/front-page/front-page';
import { NewResident } from './components/new-resident-page/new-resident-page';
import ExistingResident from './components/add-contact-to-resident/add-contact-to-resident';
import NewContact from './components/new-contact-page/new-contact-page';
import AddContactToContact from './components/add-contact-to-contact/add-contact-to-contact';
import SignUp from './components/new-contact-page/sign-up';
import './App.css';

export const store = createStore(rootReducer, InitialState);

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <div className='App-header'>
          <div className='App-header-text'>
            Welcome to ProShield
          </div>
          <div className='App-header-logo'>
            <img width='16px' src={logo} alt='logo'/>
          </div>
        </div>
        <Router>
          <Route exact path={'/'} component={FrontPage} />
          <Route path={'/NewResident'} component={NewResident} />
          <Route path={'/NewContact'} component={NewContact} />
          <Route path={'/ExistingResident'} component={ExistingResident} />
          <Route path={'/AddContactToContact'} component={AddContactToContact} />
          <Route path={'/Signup'} component={SignUp} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
