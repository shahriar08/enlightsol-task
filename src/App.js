import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './component/Home/Home';
import { DataProvider } from './component/ProductContext/Context';
import { Route } from 'react-router-dom';
import Products from './component/Products/Products';
import ProductDetails from './component/ProductDetails/ProductDetails';
import Cart from './component/Cart/Cart';
import { Container } from 'react-bootstrap';
import Layout from './component/Layout/Layout';
import { Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Container>
        <DataProvider>
          <div className="App">
            <Router>
              <Switch>
                <Route path="/" exact >
                  <Home />
                </Route>
                <Route path="/home" exact >
                  <Home />
                </Route>
                <Route path="/product" exact>
                  <Layout>
                    <Products />
                  </Layout>
                </Route>
                <Route path="/product/:id" exact>
                  <Layout>
                    <ProductDetails />
                  </Layout>
                </Route>
                <Route path="/cart" exact>
                  <Layout>
                    <Cart />
                  </Layout>
                </Route>
              </Switch>
            </Router>
          </div>
        </DataProvider>
      </Container>
    );
  }
}
export default App;
