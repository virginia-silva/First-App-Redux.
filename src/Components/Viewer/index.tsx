import React from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCart } from '../../types/ShoppingCart';

const Viewer = () => {

  const viewer = useSelector((state: ShoppingCart) => state.amount)

  return (
    <h1>{viewer}</h1>
  );
}

export default Viewer;