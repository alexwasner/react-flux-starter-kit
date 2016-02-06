let alt = require('../alt');
let AppActions = require('../actions/app-actions');

const ModalStore = alt.createStore(class ModalStore {

  constructor() {
    this.bindActions(AppActions);
    this.state = {isOpen:false, modal:null, zip:''};
  }
  onShowModal(component){
    this.setState({'isOpen':true,modal:component});
  }
  onCloseModal(){
    this.setState({isOpen:false});
  }
});

module.exports = ModalStore;