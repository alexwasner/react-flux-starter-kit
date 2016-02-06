let React = require('react');
let ReactCSSTransitionGroup = require('react-addons-css-transition-group');
let ModalStore = require('../../stores/modal-store');
let classnames = require('classnames');
let FluxyMixin = require('../../../../node_modules/alt/mixins/FluxyMixin');

var Modal = React.createClass({
    mixins:[FluxyMixin],
    statics: {
      storeListeners: {
        _onChange: ModalStore
      }
    },
    _onChange(state){
      this.setState(state);
    },
    getInitialState: function() {
      return ModalStore.getState() || {};
    },
    render: function() {
        var prop = this.state.isOpen ? 'show' : '';
        var classes = classnames('modal-wrapper', prop);
        var M = this.state.modal;
        var open = this.state.isOpen ? (<M/>) : false;
        return (
          <div className={classes}>
            <ReactCSSTransitionGroup component="div" className="modal" transitionName={"bottom-show"} transitionEnterTimeout={500} transitionAppearTimeout={500} transitionLeaveTimeout={500} transitionAppear={true} >
              {open}
            </ReactCSSTransitionGroup>
          </div>
        );
    }
});

module.exports = Modal;
