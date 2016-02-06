import { Router, Route, Link } from 'react-router';
let React = require('react');
let Tappable = require('react-tappable');
let classnames = require('classnames');
let Footer = require('./subcomponents/footer');
let AppActions = require('../actions/app-actions');
  /*
    This is the base component that all pages use. 

    Optional props:
      headerTitle : React component - The HeaderTitle component for each page
  */
let PageView = React.createClass({
  render(){
    var prop = this.props.className || '';
    var classes = classnames('view', prop);
    return (
      <div className={classes}>
        <div className="view-interior">
          <header className="main-header">
            <div className="wrap">
              {this.props.header}
            </div>
          </header>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
});



module.exports = PageView;
