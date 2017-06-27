"use strict";


const Dispatcher = require('./../dispatcher.js');

module.exports = {
    add: (item) => {

        Dispatcher.dispatch({
            payload: item,
            type: "grocery-item:add"
        });
    }
}