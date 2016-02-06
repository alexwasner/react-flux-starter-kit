import {Link} from 'react-router';
let React = require('react');
let PageView = require('../pageview');
let Tappable = require('react-tappable');
let Router = require('react-router');
let classnames = require('classnames');

/*
  This is a Homepage Component
*/

let Home = React.createClass({
  render() {
    return (
      <PageView className="home" header={(<h1 className="header">Homepage</h1>)}>
        <p>This is the homepage</p>
        <Link to="/page-one"><Tappable component="button" className="button">Go To Page One</Tappable></Link>
      </PageView>
    );
  }
});
module.exports = Home;