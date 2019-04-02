'use strict';
/* global cuid, Item */
const store = (function () {

    const items = [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
      ];
     const hideCheckedItems = false;
     const searchTerm = '';

     function findById(id){
         items.find(item => item.id === id);
     } 
     function addItem (name){
        try{
            findById(name);
            this.items.push(Item.create(name));
        }catch(error){
            console.log('DANGER WILL ROBINSON');
        }
     }
     function findAndToggleChecked (id){
        const togglecheck = this.findById(id);
        togglecheck.checked = !togglecheck.checked;
     }
     function findAndUpdateName(id, newName){
        try {
            const item = findById(id);
            item.name = newName;
        }catch(error){
            console.log('Cannot update name' + error.message);
        }
     }
     function findAndDelete (id){
        const index = items.findIndex(item => item.id === id);
        this.items.splice(index, 1);
     }

     return {
         items,
         hideCheckedItems,
         searchTerm,
         findById,
         addItem,
         findAndToggleChecked,
         findAndUpdateName,
         findAndDelete
     };
}());