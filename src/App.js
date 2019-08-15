import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage'

import BookPageComponent from './components/bookPage';
import Dashboard from './components/dashboard';
import Register from './components/register';
import AboutUs from './components/aboutUs';
import Login from './components/login';
import Homepage from './components/homepage';
import AuthGuard from './components/higherOrderComponents/authGuard';
import reducers from './reducers'

const jwtToken = localStorage.getItem('JWT_TOKEN');
axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(reduxThunk)));



class App extends Component {

  render() {
    console.log('jwtToken', jwtToken);
    const persistor = persistStore(store);

    return <Provider
      store={store}
    >
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/about_us" component={AboutUs}/>
            <Route exact path="/dashboard" component={AuthGuard(Dashboard)}/>
            <Route
              exact
              path="/book"
              component={AuthGuard(BookPageComponent)}
            />
            <Route
              path="/change_password"
              component={AuthGuard(BookPageComponent)}
            />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>;
  }
}

export default App;
