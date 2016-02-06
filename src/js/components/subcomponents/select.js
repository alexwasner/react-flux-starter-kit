let React = require('react');
let Router = require('react-router');
let ReactSelect = require('react-select');
let classnames = require('classnames');

let Select = React.createClass({
  getDefaultProps() {
    return {
      defaultValue:''
    };
  },
  getInitialState(){
    return {
      hasBlurred:false,
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
      this.isValid();
    }
  },
  componentDidMount(){
    if(this.props.value){
      this.isValid();
    }
  },
  isValid(){
    this.setState({hasBlurred:true});
    return this.state.value !== '';
  },
  onChange(value){
    if(typeof this.props.onChange == 'function'){
      this.props.onChange(value, this.props['data-index']);
    }
    else{
      this.setState({value:value, hasBlurred:true});
    }
  },
  render() {
    let classes = classnames(this.props.className,{'invalid':this.state.hasBlurred && this.state.value === ''});
    let val = this.state.value;
    if(typeof this.props.value == 'string' && this.state.value !== this.props.value){
      val = this.props.value;
    }
    return (
      <div className="select">
        <ReactSelect searchable={false} clearable={false} {...this.props} className={classes} onChange={this.onChange} value={val}/>
      </div>
    );
  }
});
module.exports = Select;