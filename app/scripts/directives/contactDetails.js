'use strict';

var ContactDetailsDirective = BaseController.extend({
    _contact:null,

    init:function(scope){
        this._super(scope);
    },

    defineListeners:function(){
    },

    defineScope:function(){
        this.$scope.instance="ContactDetailsDirective";
        this.$scope.addContact = this.addContact;
        this.$scope.saveContact = this.saveContact;
        this.$scope.removeContact = this.removeContact;
    },

    addContact: function(){
        ServerProvider.$post(this.$scope.contact);
    },

    saveContact: function(){
        ServerProvider.$post(this.$scope.contact, true);
    },

    removeContact: function(){
        ServerProvider.$delete(this.$scope.contact.id);
    }
});

angular.module('contactManager')
    .directive('ContactDetails', [
        function () {
            return {
                restrict: 'AEC',
                templateUrl: "/views/directives/contactDetails.html",
                link: function($scope,$elm,$attrs){
                    new ContactDetailsDirective($scope);
                },
                scope: {
                    'contact': '=contactDetails'
                }
            };
        }
    ]);