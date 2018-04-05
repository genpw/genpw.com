import { h, Component } from 'preact';
import { Router } from 'preact-router';

import GithubCornerContainer from './github-corner-container';
//import Header from './header';
//import Home from '../routes/home';
//import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
  require('preact/debug'); // eslint-disable-line global-require
}

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   * @return {void}
   */
  handleRoute = event => {
    this.currentUrl = event.url;
  };

  render() {
    /*<Header />
      <Router onChange={this.handleRoute}>
        <Home path="/" />
        <Profile path="/profile/" user="me" />
        <Profile path="/profile/:user" />
      </Router>*/
    return (
      <div id="app">
        <GithubCornerContainer />
      </div>
    );
  }
}
