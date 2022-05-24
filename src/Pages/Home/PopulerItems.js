import React from 'react';
import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.jpg';
const PopulerItems = () => {
    return (
        <div>
            <h1 className='mt-5  text-2xl uppercase font-bold drop-shadow mb-5'>Popular Products</h1>
            <div className='row grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-3 px-12 mb-5'>

                <div class="carousel w-full">
                    <div id="item1" class="carousel-item w-full">
                        <img src={slider1} class="w-full" />
                    </div>
                    <div id="item2" class="carousel-item w-full">
                        <img src={slider2} class="w-full" />
                    </div>

                </div>

                <div class="carousel w-full">

                    <div id="item3" class="carousel-item w-full">
                        <img src={slider2} class="w-full" />
                    </div>
                    <div id="item4" class="carousel-item w-full">
                        <img src={slider1} class="w-full" />
                    </div>
                </div>

            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-primary btn-xs">1</a>
                <a href="#item2" class="btn btn-primary btn-xs">2</a>
                <a href="#item3" class="btn btn-primary btn-xs">3</a>
                <a href="#item4" class="btn btn-primary btn-xs">4</a>
            </div>

        </div>
    );
};

export default PopulerItems;