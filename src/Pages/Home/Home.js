import React from 'react';
import Footer from '../Shared/Footer';
import AllProduct from '../Product/AllProduct';
import Banner from './Banner';
import PopulerItems from './PopulerItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllProduct></AllProduct>
            <PopulerItems></PopulerItems>
            <Footer></Footer>
        </div>
    );
};

export default Home;