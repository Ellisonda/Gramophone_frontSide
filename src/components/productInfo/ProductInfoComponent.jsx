import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { loadProduct } from '../products/ProductActions';
import { getProductById } from '../../core/services/productsService';

const productInfoComponent = () => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const {idProduct} = state;
    const [productInfo, setProductInfo] = useState(undefined);
    const [productInit, setProductInit] = useState(undefined);
    const [newProductModification, setNewProductModification]= useState();
    const [isEditing, setIsEditing] = useState(undefined);

    const product = useSelector((state) => state.productReducer.product);
    const dispatch = useDispatch();

    console.log("product", product);

    const load = async () => {
        const productAux = await getProductById(idProduct);
    
        dispatch(
          loadProduct({
            product: productAux,
          })
        );
      };
useEffect(() => {
    load()
}, []);

  return (
    <div>productInfoComponent</div>
  )
}

export default productInfoComponent