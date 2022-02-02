import React, { Component } from 'react';
import CartTable from './CartTable'
import AddItem from './AddItem'
import CartList from './CartList'

class CartBody extends Component {
    state = { cartList: CartList }

    constructor(props) {
        super(props)
        this.state.totalPrice = this.calculateTotalPrice()
    }


    addToCartList = (item) => {
        let newList = this.state.cartList
        newList.push(item)
        this.setState({cartList: newList, totalPrice: this.calculateTotalPrice()})
    }

    calculateTotalPrice = () => 
        this.state.cartList.reduce((prev, curr) => (curr.product.priceInCents * curr.quantity + prev), 0) / 100 
       
    

    render() {
        return (
            <div>
                <h1>Awesome Shopping</h1>
                <CartTable cartList={this.state.cartList}/>
                <h5>Total Price: ${this.state.totalPrice}</h5>
                <AddItem cartList={this.state.cartList} addFunc={this.addToCartList}/>
                
            </div>
        );
    }
}

export default CartBody;