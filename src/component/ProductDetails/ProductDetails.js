import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DataContext } from '../ProductContext/Context';
import './ProductDetails.css'

export class ProductDetails extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = (props) =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }



    render() {
        const {product} = this.state;
        const {addCart} = this.context;
        return (
            <Container>
                {
                    product.map(item =>(
                        <div className="details" key={item._id}>
                            <img src={item.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </Container>
        )
    }
}


export default ProductDetails;