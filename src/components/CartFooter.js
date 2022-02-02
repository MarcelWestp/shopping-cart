import React, { Component } from 'react';

class CartFooter extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">{this.props.copyright} {this.props.date}</a>
            </nav>
        );
    }
}

export default CartFooter;