import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../redux/action/index';

const Cart = () => {

    const state = useSelector(state => state.handleCart)
    const emptyCart = () => {};

    const cartItems = () => {};

    const buttons = () => {};

  return (
    <div>
        <div className='row'>
            <div className='col-md-4'>
                <img 
                    src={product.image} 
                    alt={product.title} 
                    height="200px" 
                    width="180px" 
                />
            </div>
            <div className='col-md-4'>
                <h3> {product.title} </h3>
                <p className='lead fw-bold'>
                    {product.qty} X ${product.price} = ${product.qty * product.price}
                </p>
                <button className='btn btn-otline-dark me-4' onClick={() => handleButton(product)}>
                    <i className='fa fa-minus'></i>
                </button>
                <button className='btn btn-otline-dark' onClick={() => handleButton(product)}>
                    <i className='fa fa-plus'></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cart