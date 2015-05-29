'use strict';
var AllContactsController = BaseController.extend({

  init:function(scope){
    this._super(scope);
    this.getContact()
  },

  defineListeners:function(){
  },

  defineScope:function(){
    this.$scope.instance="AllContactsController";

  },

  getContact: function(){
    this.$scope.contacts = ServerProvider.$get();
  },

  addNewContact: function(){
    this.$scope.currentContact = new Contact()
  },

  openContactDetails: function (contact) {
    this.$scope.currentContact = new Contact(contact.firstName, contact.lastName, contact.email, contact.phone)

  }
});

angular.module('contactManager')
  .controller('AllContactsCtrl', ['$scope', AllContactsController]);