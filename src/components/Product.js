import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {

  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {};

    getProduct();
  }, []);

  return (
    <div>Product</div>
  )
}

export default Product;