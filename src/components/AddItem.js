import React, { Component } from 'react';

class AddItem extends Component {
    state = {}

    fillComboBox = (pro) => (
        <option value={pro.name} key={pro.id}>{pro.name}</option>
    )

    currentProduct
    currentQuantity

    setCurrentProduct = (e) => {
        e.preventDefault()
        this.currentProduct = this.list.find(item => item.name === e.target.value)
    }

    setCurrentQuantity = (e) => {
        e.preventDefault()
        this.currentQuantity = e.target.value
    }

    submit = (e) => {
        e.preventDefault()
        let newItem = {
            id: this.props.cartList.length + 1,
            product: this.currentProduct,
            quantity: this.currentQuantity
        }
        this.props.addFunc(newItem)
       
    }
    


    list = [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ]

    render() {
        return (
            <form>
                <h4>Quantity</h4>
                <input onChange={this.setCurrentQuantity}/>
                <h4>Product</h4>
                <select
                    onChange={this.setCurrentProduct}
                    className="form-select"
                    aria-label="Default select example"
                >
                    {this.list.map(pro => this.fillComboBox(pro))}
                </select>
                <button onClick={this.submit} className="btn btn-primary">
                    Submit
                </button>
            </form>
        );
    }
}

export default AddItem;