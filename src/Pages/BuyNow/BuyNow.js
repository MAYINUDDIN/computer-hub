import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useProduct from '../../CustomHook/useProduct';
import auth from '../../firebase.init';

import { useParams } from 'react-router-dom';
const BuyNow = () => {

    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [products] = useProduct();
    const [product, setProduct] = useState({});
    const [relode, setRelode] = useState(false);
    const { _id, name, img, price, min_quantity, available_quantity, description } = product;

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(Response => Response.json())
            .then(data => {
                setProduct(data);
                console.log(product)
                setRelode(!relode)
            })
    }, [id, relode, product]);

    return (

        <div className='flex justify-center mt-5'>
            <div class="card  w-1/3 bg-base-100 shadow-lg">
                <figure class="px-0 pt-4 bordered rounded">
                    <img src={img} alt="Shoes" class="rounded-md bordered" style={{ height: '220px' }} />
                </figure>
                <div class="card-body items-center text-left">
                    <h2 class="card-title text-2xl">{name}</h2>
                    <p class='m-0 text-left'>Price: ${price}</p>
                    <p class='m-0'>Minimum Quantity: {min_quantity}</p>
                    <p class='m-0'>Available Quantity: {available_quantity}</p>
                    {/* <p className='text-justify'>{description}</p> */}
                    {/* <div class="card-actions">
                    <Link to={`/buynow/${_id}`}> <button class="btn btn-primary btn-md rounded px-12">Buy Now </button></Link>

                </div> */}
                </div>
            </div>
        </div>

    );
};

export default BuyNow;