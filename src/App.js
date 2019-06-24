import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.js";
import "jquery"
import "bootstrap/dist/js/bootstrap.js";
import 'font-awesome/css/font-awesome.min.css';
import 'react-multi-carousel/lib/styles.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Register from './components/register.component';
import MeetUp from './components/meetUp.component';
import AboutUs from './components/aboutUs.component';
import Login from "./components/login.component";
import Homepage from "./components/homepage.component";


class App extends Component {

    render() {
        return (
            <Router>
                <div className="container-fluid">

                    <Switch>
                        <Route exact path='/' component={ Homepage } />
                        <Route path='/login' component={ Login } />
                        <Route path='/register' component={ Register } />
                        <Route path='/meet_up' component={ MeetUp } />
                        <Route path='/about_us' component={ AboutUs } />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
