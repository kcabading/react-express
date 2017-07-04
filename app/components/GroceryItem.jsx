"use strict";

const React = require('react');
const Action = require('./../actions/GroceryItemActionCreator.jsx');


class GroceryItem extends React.Component{

    onDelete(e) {
        e.preventDefault();

        Action.delete(this.props.item)

    }

    render() {
        return (
            <li><h4 className={this.props.item.purchased ? "strikethrough" : ""} >{this.props.item.name}</h4> <button onClick={this.onDelete.bind(this)}>&times;</button></li>
        )
    }
}

module.exports = GroceryItem;