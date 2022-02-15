import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DataContext } from '../ProductContext/Context';
import './Products.css'

export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
            <Container id="product">
               {
                   products.map(product =>(
                       <Card className="card" key={product._id}>
                           <Link to={`/product/${product._id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h4>
                                   <Link to={`/product/${product._id}`}>{product.title}</Link>
                               </h4>
                               <span>${product.price}</span>
                               <button onClick={()=> addCart(product._id)}>Add to cart</button>
                           </div>
                       </Card>
                   ))
               }
            </Container>
        )
    }
}

export default Products;