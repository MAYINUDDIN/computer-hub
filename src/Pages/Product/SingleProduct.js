import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { id, name, price, img, min_quantity, available_quantity, supplier, description } = product;
    return (

        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-0 pt-4 bordered">
                <img src={img} alt="Shoes" class="rounded-md bordered" style={{ height: '220px' }} />
            </figure>
            <div class="card-body items-center text-left">
                <h3 class="card-title">{name}</h3>
                <p class='m-0 text-left'>Price: ${price}</p>
                <p class='m-0'>Minimum Quantity: {min_quantity}</p>
                <p class='m-0'>Available Quantity: {available_quantity}</p>
                <p className='text-justify'>{description}</p>
                <div class="card-actions">
                    <button class="btn btn-primary btn-md rounded px-12">Buy Now</button>
                </div>
            </div>
        </div>


    );
};

export default SingleProduct;