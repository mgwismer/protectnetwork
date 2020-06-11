import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer, InitialState } from './redux/reducer';
import FrontPage from './components/front-page/front-page';
import { NewResident } from './components/new-resident-page/new-resident-page';
import ExistingResident from './components/add-contact-to-resident/add-contact-to-resident';
import NewContact from './components/new-contact-page/new-contact-page';
import AddContactToContact from './components/add-contact-to-contact/add-contact-to-contact';
import SignUp from './components/new-contact-page/sign-up';
import SignIn from './components/send-alerts/signin';
import './App.css';
import AppHeader from './components/app-header/app-header';

export const store = createStore(rootReducer, InitialState);

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <AppHeader />
          <Route exact path={'/'} component={FrontPage} />
          <Route path={'/NewResident'} component={NewResident} />
          <Route path={'/NewContact'} component={NewContact} />
          <Route path={'/ExistingResident'} component={ExistingResident} />
          <Route path={'/AddContactToContact'} component={AddContactToContact} />
          <Route path={'/Signup'} component={SignUp} />
          <Route path={'/Signin'} component={SignIn} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
