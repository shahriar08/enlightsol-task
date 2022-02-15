import React, { Component } from 'react';
import Banner from '../Banner/Banner';
import Layout from '../Layout/Layout';
import Products from '../Products/Products';


export class Home extends Component {
    render() {
        return (
            <Layout>
                <Banner/>
                <Products></Products>
            </Layout>
        )
    }
}

export default Home;