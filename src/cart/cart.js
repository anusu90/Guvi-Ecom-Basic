import React, { useState } from 'react'

export default class Cart extends React.Component {

    removeItem = (e) => {

        let productIdToRemove = e.target.value
        this.props.removeCart(productIdToRemove)
    }

    render() {
        return (

            <div className="col-lg-3">

                <h1 className="my-4">Shop Name</h1>
                <ul className="list-group">
                    {
                        this.props.cartItems.map((cartItem) => {
                            return (

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    {cartItem.name} ---- {cartItem.currency}{cartItem.price}
                                    <button className="btn btn-primary btn-circle-sm" onClick={this.removeItem} value={cartItem.id}> X </button>
                                </li>
                            )
                        })
                    }

                </ul>

                <h2> Total ${this.props.total} </h2>

            </div>


        )
    }
}