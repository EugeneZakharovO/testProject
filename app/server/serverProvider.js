(function () {
    'use strict';

    var ServerProvider = Class.extend({

        data: '[{"id":"1","firstName":"Leo","lastName":"Bergovich","email":"leob@gmail.com","phone":"+123456789"}]',

        $get: [function () {
            return this.data;
        }],

        $post: [function(contact, isSave){
            var tempArray = JSON.parse(this.data);
            var tempObj = JSON.parse(contact);
            if(isSave){
                _.remove(tempArray, function(item){
                    return item.id == tempObj.id;
                });
            } else {
                tempObj.id = tempArray[tempArray.length -1].id + 1;
            }
            tempArray.push(tempObj);
            return this.data = JSON.stringify(tempArray);
        }],

        $delete: [function(id){
            var tempArray = JSON.parse(this.data);
            _.remove(tempArray, function(item){
                return item.id == id;
            });
            return this.data = JSON.stringify(tempArray)
        }]
    });

    angular.module('Server', [])
        .provider('Server', ServerProvider);
}());