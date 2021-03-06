import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import './App.css'

class App extends Component {
  render() {
      return (
          <Router>
                  {this.showContentMenus(routes)}
          </Router>

      );
  }

  showContentMenus = (routes) => {
      var result = null;
      if (routes.length > 0) {
          result = routes.map((route, index) => {
              return (
                  <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.main}
                  />
              );
          });
      }
      return <Switch>{result}</Switch>;
  }

}

export default App;

