import React, { Component } from 'react';

class CartTableFiller extends Component {
    state = {}

    formatter = (cents) => 
        `$${cents / 100}`
    

    render() {
        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-md-8">{this.props.item.product.name}</div>
                    <div className="col-md-2">{this.formatter(this.props.item.product.priceInCents)}</div>
                    <div className="col-md-2">{this.props.item.quantity}</div>
                </div>
            </div>
        );
    }
}

export default CartTableFiller;