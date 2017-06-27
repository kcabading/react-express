"use strict":

const Dispatcher = require('./../dispatcher.js');

class GroceryItemStore {

    constructor() {
        this.items = [];
        this.listeners = [];
    }
    
    getItems() {
        return this.items;
    }

    onChange(listener) {
        this.listeners.push(listener);
    }

    triggerListeners() {
        changeListeners.forEach( (listener) => {
            listener(groceryItems);
        });
    }
}


module.exports = GroceryItemStore;