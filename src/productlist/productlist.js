import React from 'react'

import Product from "../product/product"

export default class ProductList extends React.Component {
    render() {
        return (
            <div className="col-lg-9">
                <div className="row">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
            </div>

        )
    }
}