import './App.css';
import Navigation from './Navigation';
import Cart from './Cart';
import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { db } from './firebase';
import { collection, onSnapshot, doc, updateDoc, deleteDoc, addDoc, query, where } from 'firebase/firestore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }
  }

  componentDidMount() {
    // Replace getDocs with onSnapshot for real-time updates
    // we can use getDocs instead of onSnapshot but it will not update data bi-directionally 
    // const q = query(collection(db, "products"), where("price", "==", 150));

    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      console.log("snapshot: ", snapshot.docs);
      const productData = snapshot.docs.map((doc) => ({
        id: doc.id,
        qty: Number(doc.data().qty) || 1, // Ensure qty is a number
        ...doc.data(),
      }));

      this.setState({
        products: productData,
        loading: false,
      });
    });

    // Store the unsubscribe function so it can be called in componentWillUnmount
    this.unsubscribe = unsubscribe;
  }

  componentWillUnmount() {
    // Unsubscribe from the snapshot listener when the component unmounts
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleIncrease = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    const newQty = products[index].qty + 1 ;

    // Using spread rest operator
    products[index] = {
      ...products[index],
      qty:newQty
    }

    this.setState({
      products: products
    });
    
    const updateDataFBStore = async() => {

      // creating doc reference
      const productRef = doc(db, 'products', product.id);
      // updating data on Firebase store
      await updateDoc(productRef, { qty: newQty });
    }
    
    updateDataFBStore();
    // this.setState(products[index].qty = product.qty+1);

  };

  handleDecrease = (product) => {
    const { products } = this.state;
    if (product.qty === 1) {
      return;
    }
    const index = products.indexOf(product);
    const newQty = products[index].qty - 1;

    products[index] = {
      ...products[index], 
      qty: newQty
    }
    
    this.setState({
      products: products,
    });

    const updateDataFBStore = async () => {

      // creating doc reference
      const productRef = doc(db, 'products', product.id);
      // updating data on Firebase store
      await updateDoc(productRef, { qty: newQty });
    }
    
    updateDataFBStore();

  };

  handleRemoveItem = async (product) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== product.id);
    this.setState(
      { products: items }
    );

     // Remove the item from Firebase
     const productRef = doc(db, 'products', product.id);
     await deleteDoc(productRef);
  };

  getCartTotalPrice = () => {
    const { products } = this.state;
    let total = 0;
    products.forEach((product) => {
      total += product.qty * product.price;
    });
    // console.log("getCartTotalPrice: ", total)
    return total;
  };

  getCartTotalItemCount = () => {
    const { products } = this.state;
    let totalItemCount = 0;
  
    products.forEach((product) => {
      totalItemCount += product.qty || 0; // Ensure qty is accounted for, defaulting to 0 if undefined
    });
  
    console.log("getCartTotalItemCount", totalItemCount);
    return totalItemCount;
  };


  // Firebase functions
  addDataToFBStore = async () => {
    const product = {
      title:"Apple Macbook pro",
      price:799,
      qty:1,
      img:'https://picsum.photos/id/1/200/300'
    }

    // add doc to firebase store
    const docRef = await addDoc(collection(db, 'products'), product);
    console.log(docRef.id);
  }
  

  render() {
    const { products, loading } = this.state;
    return (
      <>
        <Navigation 
          getCartTotalItemCount={this.getCartTotalItemCount}
          addNewProduct={this.addDataToFBStore}
        />
        <Container>
          <Cart
            products={products}
            onIncreaseQty={this.handleIncrease}
            onDecreaseQty={this.handleDecrease}
            onItemRemove={this.handleRemoveItem}
            getCartTotalPrice={this.getCartTotalPrice}
          />
          {loading && <><Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" /></>
          }
        </Container>
      </>
    ); // return
  }// render
}

export default App;