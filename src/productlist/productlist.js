import React from 'react'

import Product from "../product/product"

export default class ProductList extends React.Component {
    render() {
        return (
            <div className="col-lg-9">
                <div className="row">
                    {
                        this.props.productList.map((product) => {
                            let index = this.props.cartItems.map(i => i.id).indexOf(product.id);
                            return <Product product={product} isDisabled={(index > -1) ? true : false} updateCart={this.props.updateCart} />
                        })
                    }
                </div>
            </div>

        )
    }
}