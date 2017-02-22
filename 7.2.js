'use strict';

class CallCenter {

  constructor(freshers, technicalLead, productManager) {
    this.freshers = freshers;
    this.technicalLead = technicalLead;
    this.productManager = productManager;
    this.incomingCalls = new Queue();
  }

  getCallHandler(call) {
    for (let i = 0; i < this.freshers.length; i++) {
      const currentFresher = this.freshers[i];
      if (currentFresher.canHandleCall(call)) {
        return currentFresher;
      }
    }
    // If we've made it this far, check for technicalLead:
    if (this.technicalLead.canHandleCall(call)) {
      return this.technicalLead;
    }
    if (this.productManager.canHandleCall(call)) {
      return this.productManager;
    }
    return false;
  }

}

class Employee {
  constructor(rank) {
    this.rank = rank;
    this.currentCall = null;
  }

  canHandleCall(call) {
    if (this.currentCall) {
      return false;
    }

    // TODO: randomly return false sometimes for when they can't handle.
    return true;
  }

  endCall(call) {
    this.currentCall = null;
  }

  takeCall(call) {
    this.currentCall = call;
  }
}

class Call {
  constructor() {
    this.created = Date.now();
  }
}