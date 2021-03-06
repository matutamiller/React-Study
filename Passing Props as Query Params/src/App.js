import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import notFound from './component/NotFound/NotFound';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
          <ul style={{listStyle: 'none', margin: 'auto', padding: '0'}}>
            <li style={{ margin: '10px', display: 'inline-block'}}>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li style={{ margin: '10px', display: 'inline-block'}}>
              <NavLink to="/courses">Courses</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users" component={Users}/>
          <Route path="/courses" component={Courses}/>
          <Redirect from='/all-courses' to='/courses' />
          <Route component={notFound}/>
        </Switch>
        

        </div>
        
        
      </BrowserRouter>
    );
  }
}

export default App;
