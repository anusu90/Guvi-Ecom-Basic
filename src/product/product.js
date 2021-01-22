import React from 'react';

export default class Product extends React.Component {

    addToCart = () => {
        this.props.updateCart(this.props.product);
    }

    render() {
        return (

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="http://localhost:3000"><img className="card-img-top" src={this.props.product.imageUrl} alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="http://localhost:3000">{this.props.product.name}</a>
                        </h4>
                        <h5>{this.props.product.currency}{this.props.product.price}</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        <button className="btn btn-primary" disabled={this.props.isDisabled} onClick={this.addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>

        )
    }
}
