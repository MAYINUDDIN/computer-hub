import React from 'react';
import { FaHandshake, FaMoneyBillAlt, FaLaptop, FaStar } from 'react-icons/fa';

const Summary = () => {
    return (
        <div className='py-8 border-b-2'>
            <div className='w-3/4 mx-auto text-center'>
                <h2 className='drop-shadow uppercase text-2xl font-bold mb-3'>Customer Relationship</h2>
                <p className='text-lg font-bold'>We are a Leader in the Manufacturing Business For all Compyters Lovers.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center py-8'>
                <div>
                    <p className='text-6xl text-success flex justify-center'><FaHandshake /></p>
                    <p className='text-5xl font-bold my-4'>50+</p>
                    <p className='text-xl text-success font-bold'>Served</p>
                </div>
                <div className='py-12 lg:py-0'>
                    <p className='text-6xl text-success flex justify-center'><FaMoneyBillAlt /></p>
                    <p className='text-5xl font-bold my-4'>35M+</p>
                    <p className='text-xl text-success font-bold'>Annual Revenue</p>
                </div>
                <div className='pb-12 lg:pb-0'>
                    <p className='text-6xl text-success flex justify-center'><FaLaptop /></p>
                    <p className='text-5xl font-bold my-4'>15+</p>
                    <p className='text-xl text-success font-bold'>Computer Parts</p>
                </div>
                <div>
                    <p className='text-6xl text-success flex justify-center'><FaStar /></p>
                    <p className='text-5xl font-bold my-4'>92+</p>
                    <p className='text-xl text-success font-bold'>Feedbacks</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;