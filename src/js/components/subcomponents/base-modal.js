var React = require('react');
let classnames = require('classnames');
var AppActions = require('../../actions/app-actions.js');

var BaseModal = React.createClass({
  propTypes:{
    modalClass: React.PropTypes.string
  },
  closeModal:function(){
    AppActions.closeModal();
  },
  render: function () {
    var classes = classnames('modal-inner', this.props.modalClass || '');
    var closeModal = this.props.close ? <button className="close" onClick={this.closeModal}>Close</button> : false;
    return (
      <div className={classes}>
        {closeModal}
        {this.props.children}
      </div>
    );
  }
});

module.exports = BaseModal;
