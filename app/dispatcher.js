"use strict"

const guid = require('guid');
const listeners = {};


module.exports = {
    register : (cb) => {        
        let id = guid.raw();
        listeners[id] = cb;
        return id;
    },
    dispatch: (payload) => {
        console.info("Dispatching...", payload);

        for (let id in listeners) {
            let listener = listeners[id];
            listener(payload);
        }
    }
}