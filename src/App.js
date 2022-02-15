import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './component/Home/Home';
import { DataProvider } from './component/ProductContext/Context';
// import { Route } from 'react-router-dom';
// import Products from './component/Products/Products';
// import ProductDetails from './component/ProductDetails/ProductDetails';
// import Cart from './component/Cart/Cart';
import { Container } from 'react-bootstrap';
// import Layout from './component/Layout/Layout';
// import { Switch } from 'react-router-dom';
import Header from './component/Header/Header';

class App extends React.Component {
  render() {
    return (
      <>
        <DataProvider>
          <div className="App">
            <Router>
              <Home/>
            </Router>
          </div>
        </DataProvider>
      </>
    );
  }
}
export default App;
