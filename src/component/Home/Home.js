import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';
import Layout from '../Layout/Layout';
import ProductDetails from '../ProductDetails/ProductDetails';
import Products from '../Products/Products';


export class Home extends Component {
    render() {
        return (
            <section>
                <Route path="/" exact >
                    <Layout>
                        <Banner />
                        <Products />
                    </Layout>
                </Route>
                <Route path="/home" exact >
                    <Layout>
                        <Banner />
                        <Products />
                    </Layout>
                </Route>
                <Route path="/product" exact>
                    <Layout>
                        <Products />
                    </Layout>
                </Route>
                <Route path="/product/:id" element={<ProductDetails />}>

                </Route>
                <Route path="/cart" exact>
                    <Layout>
                        <Cart />
                    </Layout>
                </Route>
            </section>
        )
    }
}

export default Home;