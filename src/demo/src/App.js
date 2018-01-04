import React, { Component } from 'react';


import 'bootstrap/dist/css/bootstrap.css';

import Nav_bar from './Form/Navbar';
import Navs from './Form/Navs';
import Profile from './Page/Profile';
import Users from './Page/Users';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
        <div>
          {<Nav_bar />}
          {/* <Navs/> */}
          {/* <Users/> */}
          <Profile/>
        </div>
    );
  }
}

export default App;
