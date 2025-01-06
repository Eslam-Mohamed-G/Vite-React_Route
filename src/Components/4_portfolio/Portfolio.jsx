import React from 'react';
import "./style.css";
import poert1 from '../../assets/poert1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';

function Portfolio() {
    return (
        <div className='portfolio'>
            <div className="container py-md-5">
                <div className="d-flex flex-column gap-3 align-items-center bg-transparent text-white text-center">
                    <h1 className='text-uppercase text-center'>portfolio component</h1>
                    <span className='icon position-relative m-auto' style={{ width: '4rem' }}><i className="bi bi-star-fill" /></span>
                </div>
                
                <div className="row g-5 my-0">
                    <div className='col-lg-4 col-md-6'>
                        <div className='content rounded overflow-hidden position-relative'>
                            <img className='w-100' src={poert1} alt="" />
                            <div className='bg-black position-absolute top-0 bottom-0 start-0 end-0 align-content-center text-center'>
                                <span><i className="bi bi-plus text-white" /></span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <div className='content rounded overflow-hidden position-relative'>
                            <img className='w-100' src={port2} alt="" />
                            <div className='bg-black position-absolute top-0 bottom-0 start-0 end-0 align-content-center text-center'>
                                <span><i className="bi bi-plus text-white" /></span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <div className='content rounded overflow-hidden position-relative'>
                            <img className='w-100' src={port3} alt="" />
                            <div className='bg-black position-absolute top-0 bottom-0 start-0 end-0 align-content-center text-center'>
                                <span><i className="bi bi-plus text-white" /></span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <div className='content rounded overflow-hidden position-relative'>
                            <img className='w-100' src={poert1} alt="" />
                            <div className='bg-black position-absolute top-0 bottom-0 start-0 end-0 align-content-center text-center'>
                                <span><i className="bi bi-plus text-white" /></span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <div className='content rounded overflow-hidden position-relative'>
                            <img className='w-100' src={port2} alt="" />
                            <div className='bg-black position-absolute top-0 bottom-0 start-0 end-0 align-content-center text-center'>
                                <span><i className="bi bi-plus text-white" /></span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <div className='content rounded overflow-hidden position-relative'>
                            <img className='w-100' src={port3} alt="" />
                            <div className='bg-black position-absolute top-0 bottom-0 start-0 end-0 align-content-center text-center'>
                                <span><i className="bi bi-plus text-white" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
