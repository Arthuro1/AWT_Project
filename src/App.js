import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.js";
import "jquery"
import "bootstrap/dist/js/bootstrap.js";
import 'font-awesome/css/font-awesome.min.css';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux"
import reduxThunk from "redux-thunk";

import BookPageComponent from './components/bookPage'
import Dashboard from './components/dashboard';
import Register from './components/register';
import AboutUs from './components/aboutUs';
import Login from "./components/login";
import Homepage from "./components/homepage";
import AuthGuard from "./components/higherOrderComponents/authGuard"

import reducers from "./reducers"
import Profile from "./components/profile";

const jwtToken = localStorage.getItem("JWT_TOKEN");
axios.defaults.headers.common['Authorization'] = 'Bearer '+jwtToken;

class App extends Component {

    render() {
        console.log("jwtToken",jwtToken);
        return (
            <Provider store={createStore(reducers, {
                auth:{
                    token: jwtToken,
                    isAuthentificated: !!jwtToken,
                }
            }, applyMiddleware(reduxThunk))}>
                <Router>
                    <div className="container-fluid">

                        <Switch>
                            <Route exact path='/' component={ Homepage } />
                            <Route path='/login' component={ Login } />
                            <Route path='/register' component={ Register } />
                            <Route path='/about_us' component={ AboutUs } />
                            <Route exact path='/dashboard' component={ AuthGuard(Dashboard)} />
                            <Route exact path='/dashboard/book' component={ BookPageComponent }/>
                            <Route path ='/profile' component={ Profile }/>
                            <Route path='/change_password' component={ BookPageComponent }/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
