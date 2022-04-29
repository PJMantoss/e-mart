import React from 'react';

const Cart = () => {
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
                <p className='lead fw-bold'></p>
                <button className='' onClick={() => {}}></button>
                <button className='' onClick={() => {}}></button>
            </div>
        </div>
    </div>
  )
}

export default Cart