let React = require('react');
let Tappable = require('react-tappable');
let PageView = require('../pageview');
let AppActions = require('../../actions/app-actions');
let DemoModal = require('../subcomponents/demo-modal');

/*
  This is a Demo Page Component
*/

let PageOne = React.createClass({
  onTap(){
    AppActions.showModal(DemoModal);
  },
  render() {
    return (
      <PageView className="home" header={(<h1 className="header">Page One</h1>)}>
        <p>This is a demo page</p>
        <Tappable component="button" className="button" onTap={this.onTap}>Show Modal</Tappable>
      </PageView>
    );
  }
});
module.exports = PageOne;