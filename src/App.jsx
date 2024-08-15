import './App.css';
import Navigation from './Navigation';
import Cart from './Cart';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      products:[
        {
          id:1,
          title:"Xiaomi Mi Band 5",
          qty:1,
          price:199,
          img:""
        },
        {
          id:2,
          title:"Big Power Sound Speaker",
          qty:1,
          price:275,
          img:""
        },
        {
          id:3,
          title:"iphone 6x plus",
          qty:1,
          price:400,
          img:""
        },
        {
          id:4,
          title:"Apple MacBook Air",
          qty:1,
          price:899,
          img:""
        }
      ]
    }
  }
  
  handleIncrease = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products:products
    });
    
    // this.setState(products[index].qty = product.qty+1);

  }

  handleDecrease = (product) => {
    const { products } = this.state;
    if(product.qty === 1){
      return;
    }
    const index = products.indexOf(product);
    products[index].qty -= 1;
    this.setState({
      products:products
    });
  }

  handleRemoveItem = (product) =>{
    const { products } = this.state;
    const items = products.filter((item) => item.id !== product.id);
    this.setState(
      {products:items}
    );
  }

  getCartTotalPrice = () => {
    const {products} = this.state;
    let total = 0;
    products.forEach((product) => {
      total += product.qty * product.price;
    })
    return total;
  }

  getCartTotalItemCount = () => {
    const {products} = this.state;
    let total = 0;
    products.forEach((product) => {
      total += product.qty;
    })
    return total;
  }
  
  render() {
    const {products} = this.state;
    return (
      <><Navigation getCartTotalItemCount={this.getCartTotalItemCount}/>
        <Cart 
          products={products} 
          onIncreaseQty={this.handleIncrease} 
          onDecreaseQty={this.handleDecrease} 
          onItemRemove={this.handleRemoveItem}
          getCartTotalPrice={this.getCartTotalPrice}
        /> 
      </>
    ); // return
  }// render
}

export default App;