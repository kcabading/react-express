"use strict";

const React = require('react');
const GroceryItem = require('./GroceryItem.jsx');
const GroceryListAddItem = require('./GroceryListAddItem.jsx');

class GroceryItemList extends React.Component{

    render(){
        return (
            <div>
                <h1>Grocery List Items</h1>
                <div>
                    <ul>
                    {
                        this.props.initial.map( (item, index) => {
                            return (
                                <GroceryItem item={item} key={index} />
                            )
                        })                   
                    }
                    </ul>
                    <GroceryListAddItem />
                </div>
            </div>
        )
    }
};

module.exports = GroceryItemList;