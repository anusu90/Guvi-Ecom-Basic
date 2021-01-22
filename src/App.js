
import React from 'react'
// import logo from './logo.svg';
import './App.css';
import TopBar from "./topbar/topbar"
import ProductList from "./productlist/productlist"
import Cart from './cart/cart'


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
      ],
      productList: [
        {
          id: 1,
          name: "Product 1",
          price: 50,
          imageUrl: "http://placehold.it/700x400",
          rating: 5,
          discription: "Loren Ipsum",
          currency: "$",
        },
        {
          id: 2,
          name: "Product 2",
          price: 40,
          imageUrl: "http://placehold.it/700x400",
          rating: 5,
          discription: "Loren Ipsum 2",
          currency: "$",
        },
        {
          id: 3,
          name: "Product 3",
          price: 30,
          imageUrl: "http://placehold.it/700x400",
          rating: 5,
          discription: "Loren Ipsum 3",
          currency: "$",

        },
        {
          id: 4,
          name: "Product 4",
          price: 20,
          imageUrl: "http://placehold.it/700x400",
          rating: 5,
          discription: "Loren Ipsum 4",
          currency: "$",

        },
      ],
      total: 0
    }
  }

  updateCart = (product) => {
    // console.log(`Update Cart with ${product}`)
    let newTotal = this.state.total + product.price;

    this.setState({
      cartItems: [...this.state.cartItems, product],
      total: newTotal,
    })

  }

  removeCart = (IDitemToRemove) => {
    let indexToRemove = this.state.cartItems.map(items => items.id).indexOf(parseInt(IDitemToRemove));
    let newTotal = this.state.total - this.state.cartItems[indexToRemove].price
    this.state.cartItems.splice(indexToRemove, 1)
    console.log(this.state.cartItems)

    this.setState({
      cartItems: this.state.cartItems,
      total: newTotal,
    })

  }

  render() {
    return (
      <React.Fragment>
        <TopBar></TopBar>
        <div className="container">
          <div className="row">
            <Cart cartItems={this.state.cartItems} total={this.state.total} removeCart={this.removeCart}></Cart>
            <ProductList productList={this.state.productList} cartItems={this.state.cartItems} updateCart={this.updateCart}></ProductList>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


