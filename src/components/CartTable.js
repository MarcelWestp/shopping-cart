import React, { Component } from 'react';

import CartTableFiller from './CartTableFiller';

class CartTable extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <h1>Cart Items</h1>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-md-8">Product</div>
                            <div className="col-md-2">Price</div>
                            <div className="col-md-2">Quantity</div>
                        </div>
                    </div>
                    {this.props.cartList.map(item => <CartTableFiller item={item} />)}
                </div>
            </div>);
    }
}

export default CartTable;