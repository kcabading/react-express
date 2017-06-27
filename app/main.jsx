'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
console.log('running main jsx');

const GroceryItemList = require('./components/GroceryItemList.jsx');

let initial = [
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


ReactDOM.render(<GroceryItemList initial={initial}/>, app);