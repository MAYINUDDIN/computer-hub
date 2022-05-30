import React from 'react';
import myself from '../../images/myself.png';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='px-12 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className='rounded-full' src={myself} alt="Shoes" /></figure>
                    <div className="text-center p-4">
                        <p><span className='text-2xl font-bold drop-shadow'>Name:</span> <span className='text-xl font-bold'>Md Myin Uddin</span></p>
                        <p><span className=''>Email:</span> <span className=''>mainu768971@gmail.com</span></p>
                        <p><span className=''>Mob:</span> <span className=''>01999070234</span></p>

                    </div>
                </div>
                <div className='text-center shadow-lg p-4'>
                    <h2 className='text-2xl drop-shadow font-bold text-lime-700 mb-6'> Educational Background</h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Name Exam</th>
                                    <th>Institute</th>
                                    <th>Year / Borad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SSC</td>
                                    <td>Ibn Taimiya School $ College</td>
                                    <td>2013 (Cumilla)</td>
                                </tr>
                                <tr>
                                    <td>HSC</td>
                                    <td>Cumilla Victoria gov. college</td>
                                    <td>2015 (Cumilla)</td>
                                </tr>
                                <tr>
                                    <td>Diploma in CSE</td>
                                    <td>Cumilla Polytechnic Institute</td>
                                    <td>2017 (BTEB)</td>
                                </tr>
                                <tr>
                                    <td>Bsc in CSE</td>
                                    <td>Dhaka International University</td>
                                    <td>2022(Dhaka)</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='text-center shadow-lg bordered py-4 mt-4'>
                <h2 className='text-2xl font-bold text-lime-700 mb-6 drop-shadow py-2 w-40 mx-auto'>My Skills </h2>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <h1 className='text-xl font-bold mb-5 text-orange-500'>Web Design</h1>
                        <div className='grid grid-cols-1 gap-5 justify-items-center'>
                            <p>HTML</p>
                            <progress className="progress progress-success w-56" value="95" max="100"></progress>
                            <p>CSS</p>
                            <progress className="progress progress-success w-56" value="80" max="100"></progress>
                            <p>Tailwind</p>
                            <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                            <p>Bootstrap</p>
                            <progress className="progress progress-primary w-56" value="90" max="100"></progress>
                        </div>
                    </div>
                    <div className='mt-8 md:mt-0'>
                        <h1 className='text-xl font-bold mb-5 text-orange-500'>Web Development</h1>
                        <div className='grid grid-cols-1 gap-5 justify-items-center'>
                            <p>Javascript</p>
                            <progress className="progress progress-primary w-56" value="60" max="100"></progress>
                            <p>React.js</p>
                            <progress className="progress progress-primary w-56" value="80" max="100"></progress>
                            <p>node.js</p>
                            <progress className="progress progress-primary w-56" value="50" max="100"></progress>
                            <p>mongodb</p>
                            <progress className="progress progress-primary w-56" value="50" max="100"></progress>
                            <p>PHP</p>
                            <progress className="progress progress-primary w-56" value="70" max="100"></progress>

                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-8 shadow-lg p-5'>
                <h4 className='text-2xl text-success drop-shadow font-bold mb-3'>My Completed Project</h4>
                <p><a target='_blank' className='underline' href="https://laptop-bazar-mayin.netlify.app/">https://laptop-bazar-mayin.netlify.app/</a></p>
                <p><a target='_blank' className='underline my-4' href="https://discovery-bangladesh.netlify.app/">https://discovery-bangladesh.netlify.app/</a></p>
                <p><a target='_blank' className='underline' href="https://boisterous-concha-6acbfe.netlify.app/">https://boisterous-concha-6acbfe.netlify.app/</a></p>

            </div>
        </div>
    );
};

export default Portfolio;