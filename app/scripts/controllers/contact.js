'use strict';

var Contact = Class.extend({

    firstName: '',

    lastName: '',

    email: '',

    phone: '',

    fullName: '',

    init: function (firstName, lastName, email, phone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.fullName = this.setFullName();
    },

    setFullName: function(){
        return this.firstName + " " + this.lastName;
    }
});