let React = require('react');
let PageView = require('../pageview');
/*
  This is a basic 404 page. Typically only hit when there is no session or device passed with the URL.
*/

let _404 = React.createClass({
  render() {
    return (
      <PageView className="404" >
        <span>404: Page not found.</span>
      </PageView>
    );
  }
});
module.exports = _404;