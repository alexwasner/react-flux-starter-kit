let React = require('react');
let APP = React.createClass({
  render () {
    return (
        <div id="view-root">
          {this.props.children}
        </div>
    );
  }
});


module.exports = APP;



