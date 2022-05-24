import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../CustomHook/useProduct';
import SingleProduct from './SingleProduct';

const AllProduct = () => {
    const [products] = useProduct();
    const itemProducts = products.slice(0, 6);
    return (
        <div>
            <h1 className='mt-5 mb-3 text-2xl uppercase font-bold drop-shadow'>All Products</h1>
            <div className="row grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3 px-12 mb-5">
                {
                    itemProducts.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)

                }



            </div>
        </div>
    );
};

export default AllProduct;