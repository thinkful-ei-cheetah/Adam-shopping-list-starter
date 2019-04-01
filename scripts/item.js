'use strict';
/* global cuid */
const Item = (function(){
    function validateName(name) {
        if (!name){
            throw new Error('name does not exist');
            
        }
    }
    function create(name){
        return {id: cuid(), name, checked: false};
    }
    return {
        validateName,
        create
    };
}());

