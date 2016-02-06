let alt = require('../alt');

class AppActions {
  constructor() {
    this.generateActions(
      'showModal',
      'closeModal'
    );
  }
}

module.exports = alt.createActions(AppActions);