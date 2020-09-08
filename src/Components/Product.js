import React,{Component} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import cart from "../cart.svg";
import {ProductConsumer} from "../Context";
import PropTypes from 'prop-types';
export default class Product extends Component{
    render(){
        const {id,title,img,price,inCart}=this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value=>(<div className="img-container p-5" onClick={()=>value.handleDetail(id)}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"></img>
                        </Link>
                        <h3 className='product-title text-center'>{title}</h3>
									<div className='product-price'> ${price}</div>
                        <button className="cart-btn" disabled={inCart?true:false} onClick={()=>{
                            value.addToCart(id);
                            value.openModal(id);
                            }}>
        {inCart?(<p className="text-capitalize mb-b" disabled> {" "}in cart</p>):
                            (<span><img src={cart} width='40px' height='40px' alt=''/></span>)}
                            </button>
                            
                            </div>)}
                        
                    
                            </ProductConsumer>
                    </div>
            </ProductWrapper>           
        );
    }
}
Product.propTypes={
product:PropTypes.shape({
id: PropTypes.number,
img: PropTypes.string,
title: PropTypes.string,
price: PropTypes.number,
inCart: PropTypes.bool,
}).isRequired
};
const ProductWrapper =styled.div`
.product-price {
     /*position: absolute; */
    padding: 0.3rem 0.6rem;
    background: transparent;
    font-size: 1.2rem;
    border-radius: 0.7rem;
    text-align: center;
    font-family: 'fredoka one';
}
.product-title{
    position: relative;
    align:center;
}
.card{
    border-color:transparent;
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 1s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--mainBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform: translate(100%,100%);
    transition: all 1s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
.cart-btn:hover{
    background-color:var(--lightBlue);
    cursor:pointer;
}
`;