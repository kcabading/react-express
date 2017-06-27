"use strict";

const React = require('react');
const Action = require('./../actions/GroceryItemActionCreator.jsx');

class CreateItem extends React.Component{

    constructor(props) {

        super(props);

        this.state = {
            input: ""
        }
    }

    handleInputName(e) {

        this.setState({
            input: e.target.value 
        });
    }

    addItem(e) {
        e.preventDefault();
        console.log('adding item' + this.state.input);

        Action.add({
            name: this.state.input
        });

        this.setState({
            input: ""
        })

    }

    render() {

        return (
            <div className='grocery-addItem'>
                <form onSubmit={this.addItem.bind(this)}>
                    <input type="text" value={this.state.input} onChange={this.handleInputName.bind(this)}/>
                    <button>Add Item</button>
                </form>
            </div>
        )   
    }
}

module.exports = CreateItem;