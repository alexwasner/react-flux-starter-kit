import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';
let React = require('react');
let ReactDom = require('react-dom');
let APP = require('./components/app');
let $ = require('jquery');
let Home = require('./components/maincomponents/home');
let PageOne = require('./components/maincomponents/page-one');
let _404 = require('./components/maincomponents/404');
let ModalManager = require('./components/maincomponents/modal');

  /*
    Here are all the Routes available in the app. If you want a new page,
    add the route here and the component in the component property.

  */
ReactDom.render((
  <Router>
    <Route path="/" component={APP}>
      <IndexRoute component={Home}/>
      <Route path="page-one" component={PageOne}/>
      <Route path="*" component={_404}/>
    </Route>
  </Router>
), document.getElementById('main-wrapper'));
ReactDom.render(<ModalManager/>, document.getElementById('modal-container'));