import React from 'react';
import Footer from '../Shared/Footer';
import AllProduct from '../Product/AllProduct';
import Banner from './Banner';
import PopulerItems from './PopulerItems';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllProduct></AllProduct>
            <PopulerItems></PopulerItems>
            <Summary></Summary>

            <Footer></Footer>
        </div>
    );
};

export default Home;