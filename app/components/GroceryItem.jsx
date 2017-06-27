"use strict";

const React = require('react');

class GroceryItem extends React.Component{


    render() {

        return (
            <li><h4 className={this.props.item.purchased ? "strikethrough" : ""} >{this.props.item.name}</h4></li>
        )
    }
}

module.exports = GroceryItem;