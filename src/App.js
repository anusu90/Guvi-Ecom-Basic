
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
      cartItems: [],
      productList: [],
      total: 0
    }
  }

  render() {
    return (
      <React.Fragment>
        <TopBar></TopBar>
        <div className="container">
          <div className="row">
            <Cart></Cart>
            <ProductList></ProductList>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


