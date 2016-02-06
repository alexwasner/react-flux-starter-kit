let React = require('react');
let ReactCSSTransitionGroup = require('react-addons-css-transition-group');
/*
  This is the Loader Component
*/

let Loader = React.createClass({
  getDefaultProps(){
    return {
      loading:false
    };
  },
  renderLoader(){
    return (<div className="loader-view"><div className="loader"></div></div>);
  },
  render() {
    var spinner = this.props.loading ? this.renderLoader() : false;
    return (
      <ReactCSSTransitionGroup component="div" transitionName={'load'} transitionEnterTimeout={500} transitionAppearTimeout={500} transitionLeaveTimeout={500} transitionAppear={false} >
        {spinner}
      </ReactCSSTransitionGroup>
    );
  }
});
module.exports = Loader;