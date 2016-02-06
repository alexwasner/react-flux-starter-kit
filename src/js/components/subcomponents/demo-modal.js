let React = require('react');
let BaseModal = require('./base-modal');
let Tappable = require('react-tappable');

let DemoModal = React.createClass({
  render: function () {
    return (
        <BaseModal close={true}>
          <h1>This is a demo of a modal</h1>
        </BaseModal>
      );
  }
});

module.exports = DemoModal;
