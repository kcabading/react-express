'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
console.log('running main jsx');

const GroceryItemList = require('./components/GroceryItemList.jsx');
const GroceryItemStore = require('./stores/GroceryItemStore.jsx');

var initial = GroceryItemStore.getItems();

function render() {
    ReactDOM.render(<GroceryItemList initial={initial}/>, app);
}

GroceryItemStore.onChange(function(items){
    initial = items;
    render();
});

render();


