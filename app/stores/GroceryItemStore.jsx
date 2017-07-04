"use strict";

const Dispatcher = require('./../dispatcher.js');

function GroceryItemStore() {    

    // call dispatcher register
    Dispatcher.register(function(event){        
        var split = event.type.split(':');
        if (split[0] === 'grocery-item') {
            switch(split[1]) {
                case 'add':
                    addGroceryItem(event.payload);
                    break;
                case 'delete':
                    deleteGroceryItem(event.payload);
                    break;
            }
        }
    });
        
    var items = [
        {
            name: "Ice Cream",
            purchased: true
        },
        {
            name: "Ice Cream"
        },{
            name: "Ice Cream"
        },{
            name: "Ice Cream"
        },{
            name: "Ice Cream"
        }
    ];
    
    var listeners = [];

    function addGroceryItem(item) {
        items.push(item);
        triggerListeners();
    }

    function deleteGroceryItem(item) {
        let index = items.findIndex(function(_item){
            return _item.name == item.name
        });
        items.splice(index, 1);
        triggerListeners();
    }
    
    function getItems() {
        return items;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function triggerListeners() {
        listeners.forEach( (listener) => {
            listener(items);
        });
    }

    return {
        getItems,
        onChange,
        deleteGroceryItem
    }
}

module.exports = new GroceryItemStore();