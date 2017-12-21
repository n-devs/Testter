import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';


import Offline from './Offline';
import Online from './Online';

import 'bootstrap/dist/css/bootstrap.css';



function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/Offline', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/Online', setState: { from: props.location } }} />}
    />
  )
}

class App extends Component {

  state = {
    authed: true,
    loading: false,
  }
  // componentDidMount() {
  //   this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
  //      if (user) {
  //       this.setState({
  //         authed: true,
  //         loading: false,
  //       })
  //     } else {
  //       this.setState({
  //         authed: false,
  //         loading: false
  //       })
  //     }
  //   })
  // }
  // componentWillUnmount() {
  //   this.removeListener()
  // }

  render() {
    return this.state.loading === true ?
    <div className="text-center" style={{ padding: '20%' }}>
      <div id="inTurnBlurringTextG">
        <div id="inTurnBlurringTextG_1" className="inTurnBlurringTextG">L</div>
        <div id="inTurnBlurringTextG_2" className="inTurnBlurringTextG">o</div>
        <div id="inTurnBlurringTextG_3" className="inTurnBlurringTextG">a</div>
        <div id="inTurnBlurringTextG_4" className="inTurnBlurringTextG">d</div>
        <div id="inTurnBlurringTextG_5" className="inTurnBlurringTextG">i</div>
        <div id="inTurnBlurringTextG_6" className="inTurnBlurringTextG">n</div>
        <div id="inTurnBlurringTextG_7" className="inTurnBlurringTextG">g</div>
      </div>
    </div> :(
      <BrowserRouter>
      <Switch>
        {this.state.authed 
          ? <PrivateRoute authed={this.state.authed} exact component={Online} />
          : <PublicRoute authed={this.state.authed} exact component={Offline} />}
      </Switch>
    </BrowserRouter>

    );

  }
}

export default App;
