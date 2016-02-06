let React = require('react');
let Router = require('react-router');
let classnames = require('classnames');
let moment = require('moment');

let Input = React.createClass({
  getDefaultProps() {
    return {
      type:'text',
      maxlength:0,
      minlength:0,
    };
  },
  getInitialState(){
    return {
      hasBlurred:false,
      type:'text',
      valid:false,
      value:''
    };
  },
  componentWillMount(){
    if(this.props.value){
      this.setState({'value':this.props.value});
    }
  },
  componentWillReceiveProps(props){
    if(props.value){
      this.setState({'value':props.value});
    }
  },
  componentDidUpdate(nextProps,nextState){
    if(nextState.value !== this.state.value){
      this.validate();
    }
  },
  componentDidMount(){
    if(this.props.value){
      this.validate();
    }
  },
  validate(){
    this.onChange();
    this.setState({'hasBlurred':true});
  },
  isValid(){
    this.validate();
    return this.props.type == 'checkbox' || this.state.valid;
  },
  onChange(e){
    var value, val = this.refs.input.value;
    if(!val || val.replace(/ /g,'') ===''){
      value = '';
    }
    else if(this.props.type =='number' && val || this.props.type == 'tel'){
      val = val.replace(/\D/g, '');
      if(!isNaN(parseInt(val, 10))){
        value = parseInt(val) + '';
      }
      else{
        value = '';
      }
    }
    else{
      value = val;
    }
    if(this.props.maxlength && this.props.type !== 'tel'){
      value = value.substr(0,this.props.maxlength);
    }
    var valid = this.testIfValid(value);
    if(this.props.type == 'tel'){
      value = this.formatPhoneNumber(value);
      valid = this.testIfValid(value.replace(/\D/g, ''));
    }
    if(this.props.type == 'checkbox'){
      value = this.refs.input.checked;
      valid = true;
    }
    this.setState({value:value, hasBlurred:false, valid:valid});
    if(this.props.onChange){
      this.props.onChange(e);
    }
  },
  formatPhoneNumber(value){
    var numbers = value.replace(/\D/g, ''),
        char = {0:'(',3:') ',6:' - '};
    value = '';
    if(this.props.maxlength){
      numbers = numbers.substr(0,this.props.maxlength);
    }
    if(numbers.length == 11){
      char = {0:'(',1:') ',4:' - ',7:' - '};
    }
    for (var i = 0; i < numbers.length; i++) {
        value += (char[i]||'') + numbers[i];
    }
    return value;
  },
  testIfValid(test){
    if(this.props.minlength && this.props.minlength > test.length){
      return false;
    }
    return true;
  },
  render() {
    var pattern, type = this.props.type;
    if(this.props.type == ('number' || 'tel')){
      pattern = "[0-9]*";
      type = 'text';
    }
    var classes = classnames(this.props.className,{'invalid':!this.state.valid && this.state.hasBlurred});
    return (
      <input disabled={this.props.disabled} ref="input" className={classes} checked={this.state.value} type={type} pattern={pattern} onBlur={this.validate} onChange={this.onChange} value={this.state.value}/>
    );
  }
});
module.exports = Input;